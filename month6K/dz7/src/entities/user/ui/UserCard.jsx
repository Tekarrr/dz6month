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
    <div
      className="card"
      style={{
        padding: 20,
        textAlign: "center",
        width: 400,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        backgroundColor: "lavenderblush",
        borderRadius: 10,
        border: "1px solid #ccc",
      }}
    >
      <p>Name: {user.username}</p>
      <img style={{ width: 150, height: 150 }} src={user.avatar} />
      <button
        style={{
          backgroundColor: "lawngreen",
          width: 100,
          height: 60,
          cursor: "pointer",
        }}
        onClick={onLogout}
      >
        logout
      </button>
    </div>
  );
};

export default UserCard;
