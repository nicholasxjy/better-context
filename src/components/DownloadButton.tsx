import { Button } from "antd";
import { useContext } from "react";
import { useRequest } from "ahooks";
import { useAppContext } from "../AppContext";
import { downloadPlayers } from "../apis/api";

const DownloadButton = () => {
  const [query] = useAppContext()!;

  const { run, loading } = useRequest(
    () => {
      return downloadPlayers({
        name: query.name,
        team: query.team,
        age: query.age,
        score: query.score,
      });
    },
    {
      refreshDeps: [],
      manual: true,
    }
  );

  return (
    <Button type="primary" loading={loading} onClick={run}>
      下载
    </Button>
  );
};

export default DownloadButton;
