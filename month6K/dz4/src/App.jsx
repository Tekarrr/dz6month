import { useEffect, useState } from "react";
import "./App.css";
import FormBlock from "./components/Form";
import SuccessAlert from "./components/SuccessAlert";
import "bootstrap/dist/css/bootstrap.min.css";
import CardBlock from "./components/Card";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsRegistered(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsRegistered(false);
  };

  return (
    <>
      {!isRegistered ? (
        <FormBlock onRegister={() => setIsRegistered(true)} />
      ) : (
        <>
          <SuccessAlert />
          <CardBlock onLogout={handleLogout} />
        </>
      )}
    </>
  );
}

export default App;
