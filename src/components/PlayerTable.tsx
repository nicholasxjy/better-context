import { Table } from "antd";
import { usePagination, useMount } from "ahooks";
import { ColumnType } from "antd/es/table";
import { Player } from "../apis/data";
import { fetchPlayers } from "../apis/api";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function PlayerTable() {
  const columns: ColumnType<Player>[] = [
    { title: "Name", key: "name", dataIndex: "name" },
    { title: "Team", key: "team", dataIndex: "team" },
    { title: "Age", key: "age", dataIndex: "age" },
    { title: "Score", key: "score", dataIndex: "score" },
  ];

  const [query] = useContext(AppContext)!;

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
    <Table
      bordered
      rowKey="name"
      loading={loading}
      dataSource={data?.list}
      columns={columns}
      pagination={pagination}
    />
  );
}

export default PlayerTable;
