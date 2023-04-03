import axios from "axios";

const urlServer = "https://my-json-server.typicode.com/Cunegundess/serverTeste";

export type dataFake = {
  readonly id: string;
  nickname: string;
  followers: number;
  followersOverview: number;
  readonly type: string;
  status: boolean;
};

export type fakeOverviewData = {
  readonly id: string;
  title: string;
  total: number;
  percent: number;
  readonly type: string;
  status: boolean;
};

export async function fetchData<T>(url: string): Promise<T[]> {
  try {
    const response = await axios.get<T[]>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getDataFake(): Promise<dataFake[]> {
  const dataUrl = `${urlServer}/dataFake`;
  return await fetchData<dataFake>(dataUrl);
}

export async function getFakeOverviewData(): Promise<fakeOverviewData[]> {
  const overviewUrl = `${urlServer}/fakeOverview`;
  return await fetchData<fakeOverviewData>(overviewUrl);
}
