import { Player, players } from "./data";

export type Response = {
  list: Player[];
  total: number;
};

export type FetchParams = {
  name?: string;
  team?: string;
  age?: string;
  score?: string;
};

export type PageParams = {
  pageNo: number;
  pageSize: number;
};

type Params = FetchParams & PageParams;

const filterPlayers = (data: Player[], params?: Params): Player[] => {
  let list: Player[] = data;
  if (!params) return list;
  if (params.name) {
    list = list.filter((v) => v.name === params.name);
  }
  if (params.team) {
    list = list.filter((v) => v.team === params.team);
  }
  if (params.age) {
    list = list.filter((v) => v.age < Number(params.age));
  }
  if (params.score) {
    list = list.filter((v) => v.score < Number(params.score));
  }
  return list;
};

export const fetchPlayers = (data?: Params): Promise<Response> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = filterPlayers(players, data);
      resolve({ list, total: list.length });
    }, 2000);
  });

export const downloadPlayers = (data?: FetchParams): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
};
