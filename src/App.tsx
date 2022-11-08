import React, { useState } from "react";
import "antd/dist/antd.css";
import { Space, Button } from "antd";
import SearchForm from "./components/SearchForm";
import PlayerTable from "./components/PlayerTable";
import { AppContext, QueryState } from "./AppContext";
import DownloadButton from "./components/DownloadButton";

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
        <Button type="default">关注</Button>
        <Button type="default">刷新</Button>
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

function App() {
  const state = useState(initState);

  return (
    <AppContext.Provider value={state}>
      <AppContainer />
    </AppContext.Provider>
  );
}

export default App;
