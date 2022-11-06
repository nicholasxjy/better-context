import React from "react";
import "antd/dist/antd.css";
import { Space, Card, Typography, Button } from "antd";
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

function App() {
  return (
    <AppContextProvider>
      <Card title={<Typography.Title level={4}>AppContainer</Typography.Title>}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <FormContainer />
          <TableContainer />
        </Space>
      </Card>
    </AppContextProvider>
  );
}

export default App;
