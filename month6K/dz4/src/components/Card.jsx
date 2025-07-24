import { Avatar, CardContent, Card, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

const CardBlock = ({ onLogout }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ marginTop: 30 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            {user?.username?.[0]?.toUpperCase() || "U"}
          </Avatar>
          <span>Здравствуйте, {user?.username}!</span>
          <Button size="small" onClick={onLogout} style={{ marginLeft: 20 }}>
            Выйти
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardBlock;
