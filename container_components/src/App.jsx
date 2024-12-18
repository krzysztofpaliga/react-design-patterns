import "./App.css";
import axios from "axios";
import CurrentUserLoader from "./CurrentUserLoader";
import UserLoader from "./UserLoader";
import ResourceLoader from "./ResourceLoader";
import DataSource from "./DataSource";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      <DataSource
        getDataFunc={getServerData("/api/users/234")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
