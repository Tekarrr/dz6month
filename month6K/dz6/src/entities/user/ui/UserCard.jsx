import { useEffect, useState } from "react";
import { getProfile, logout } from "../../../features/auth/api/authApi";
import { useUserStore } from "../model/useUserStore";
import { useAuthStore } from "../../../features/auth/model/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const { user, setUser } = useUserStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const accessToken = useAuthStore((state) => state.accessToken);

  const { logoutUser } = useAuthStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      logoutUser();
      navigate("/login");
    },
    onError: () => alert("Ошибка выхода"),
  });

  const onLogout = () => {
    mutation.mutate({ refreshToken: accessToken });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Ошибка загрузки профиля");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchProfile();
    } else {
      setError("Вы не авторизованы");
    }
  }, [accessToken, setUser]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card">
      <p>Name: {user.username}</p>
      <button onClick={onLogout}>logout</button>
    </div>
  );
};

export default UserCard;
