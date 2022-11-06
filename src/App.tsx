import React from "react";
import "antd/dist/antd.css";
import { Space, Button } from "antd";
import SearchForm from "./components/SearchForm";
import PlayerTable from "./components/PlayerTable";
import { AppContextProvider } from "./AppContext";
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

function App() {
  return (
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  );
}

export default App;
