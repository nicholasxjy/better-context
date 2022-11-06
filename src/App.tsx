import React from "react";
import "antd/dist/antd.css";
import { Space, Card, Typography, Button } from "antd";
import SearchForm from "./components/SearchForm";
import PlayerTable from "./components/PlayerTable";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <Card title={<Typography.Title level={4}>AppContainer</Typography.Title>}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <SearchForm />
          <PlayerTable />
        </Space>
      </Card>
    </AppContextProvider>
  );
}

export default App;
