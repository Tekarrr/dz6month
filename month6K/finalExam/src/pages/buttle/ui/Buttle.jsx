import { useState } from "react";
import { useBattleStore } from "../model/useBattleStore";
import { Dropdown, Button, Space, Card } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useCollectionStore } from "../../collection/model/useCollection";
import Meta from "antd/es/card/Meta";

const Buttle = () => {
  const { collection } = useCollectionStore();
  const { setOpponent1, setOpponent2, opponent1, opponent2 } = useBattleStore();

  const [winner, setWinner] = useState(null);

  const options = collection.map((pokemon, id) => ({
    label: pokemon.title,
    key: id.toString(),
  }));

  const handleSelect = (key, forOpponent) => {
    const pokemon = collection[+key];
    if (forOpponent === "opponent1") {
      setOpponent1(pokemon);
    } else if (forOpponent === "opponent2") {
      setOpponent2(pokemon);
    }
    setWinner(null);
  };

  const getTotalStat = (pokemon) => {
    if (!pokemon || !pokemon.stats) return 0;
    return pokemon.stats.reduce((sum, statObj) => sum + statObj.base_stat, 0);
  };

  const handleBattle = () => {
    if (!opponent1.title || !opponent2.title) return;

    const stat1 = getTotalStat(opponent1);
    const stat2 = getTotalStat(opponent2);

    if (stat1 > stat2) {
      setWinner(opponent1.title);
    } else if (stat2 > stat1) {
      setWinner(opponent2.title);
    } else {
      setWinner("Draw");
    }
  };

  return (
    <div>
      <h2>Battle Field</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "20px" }}>Opponent 1</h3>
          <Dropdown
            menu={{
              items: options,
              onClick: ({ key }) => handleSelect(key, "opponent1"),
            }}
          >
            <Button>
              <Space>
                {opponent1.title || "Choose Pokémon"}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          {opponent1.title && (
            <Card
              style={{
                width: 300,
                backgroundColor: "#cdd6e4ff",
                marginTop: "20px",
              }}
              cover={<img alt="example" src={opponent1.img} />}
            >
              <Meta
                style={{ textAlign: "center", color: "white" }}
                title={opponent1.title}
              />
            </Card>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          <Button onClick={handleBattle}>Battle!</Button>
          <h2 style={{ marginTop: "20px" }}>
            {winner
              ? winner === "Draw"
                ? "It's a draw!"
                : `🏆 ${winner} wins!`
              : "No battle yet"}
          </h2>
        </div>

        <div>
          <h3 style={{ marginBottom: 20 }}>Opponent 2</h3>
          <Dropdown
            menu={{
              items: options,
              onClick: ({ key }) => handleSelect(key, "opponent2"),
            }}
          >
            <Button>
              <Space>
                {opponent2.title || "Choose Pokémon"}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          {opponent2.title && (
            <Card
              style={{
                width: 300,
                backgroundColor: "#cdd6e4ff",
                marginTop: "20px",
              }}
              cover={<img alt="example" src={opponent2.img} />}
            >
              <Meta
                style={{ textAlign: "center", color: "white" }}
                title={opponent2.title}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buttle;
