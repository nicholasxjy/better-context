import React from "react";
import "antd/dist/antd.css";
import { Space, Button } from "antd";
import SearchForm from "./components/SearchForm";
import PlayerTable from "./components/PlayerTable";
import { AppContext, QueryState } from "./AppContext";
import DownloadButton from "./components/DownloadButton";
import { createStore } from "./contexts/createStore";

const FormContainer = () => {
  return (
    <div className="container">
      <h1>FormContainer</h1>
      <SearchForm />
    </div>
  );
};

const TableContainer = () => {
  return (
    <div className="container">
      <h1>TableContainer</h1>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary">关注</Button>
        <Button type="primary">刷新</Button>
        <DownloadButton />
      </Space>
      <PlayerTable />
    </div>
  );
};

const AppContainer = () => {
  return (
    <div className="container">
      <h1>AppContainer</h1>
      <FormContainer />
      <TableContainer />
    </div>
  );
};
const initState: QueryState = {
  name: "",
  team: "",
  age: undefined,
  score: undefined,
};

const store = createStore(initState);

function App() {
  return (
    <AppContext.Provider value={store}>
      <AppContainer />
    </AppContext.Provider>
  );
}

export default App;
