import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import Pokemons from "../pages/pokemons/ui/Pokemons";
import Collection from "../pages/collection/ui/Collection";
import Buttle from "../pages/buttle/ui/Buttle";

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key={"1"}>
              <Link to="/pokemons">pokemons</Link>
            </Menu.Item>
            <Menu.Item key={"2"}>
              <Link to="/collection">collection</Link>
            </Menu.Item>
            <Menu.Item key={"3"}>
              <Link to="/battle">battle</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "24px" }}>
          <Routes>
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/battle" element={<Buttle />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
