import React, { useContext } from "react";
import { Table, Card, Space, Typography, Button } from "antd";
import { usePagination, useMount } from "ahooks";
import { ColumnType } from "antd/es/table";
import { Player } from "../apis/data";
import { useAppContext } from "../AppContext";
import { fetchPlayers } from "../apis/api";
import DownloadButton from "./DownloadButton";

function PlayerTable() {
  const columns: ColumnType<Player>[] = [
    { title: "Name", key: "name", dataIndex: "name" },
    { title: "Team", key: "team", dataIndex: "team" },
    { title: "Age", key: "age", dataIndex: "age" },
    { title: "Score", key: "score", dataIndex: "score" },
  ];

  const [query] = useAppContext();

  const { run, data, loading, pagination } = usePagination(
    ({ current, pageSize }) => {
      return fetchPlayers({ ...query, pageNo: current, pageSize });
    },
    {
      refreshDeps: [query],
      defaultPageSize: 20,
      manual: true,
    }
  );

  useMount(() => {
    run({
      current: 1,
      pageSize: 20,
    });
  });

  return (
    <Card
      type="inner"
      title={<Typography.Title level={4}>TableContainer</Typography.Title>}
      extra={
        <Space>
          <Button type="default">关注</Button>
          <Button type="default">更新</Button>
          <DownloadButton />
        </Space>
      }
    >
      <Table
        bordered
        rowKey="name"
        loading={loading}
        dataSource={data?.list}
        columns={columns}
        pagination={pagination}
      />
    </Card>
  );
}

export default PlayerTable;
