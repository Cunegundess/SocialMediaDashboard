import { FollowersCard } from "../../components/FollowersCard";
import { Header } from "../../components/Header";
import { OverviewCard } from "../../components/OverviewCard";
import { useEffect, useState } from "react";
import { getDataFake, getFakeOverviewData } from "../../api/api";
import { dataFake, fakeOverviewData } from "../../api/api";

import "./styles.scss";

export function Dashboard() {
  const [data, setData] = useState<dataFake[]>([]);
  const [dataOverview, setDataOverview] = useState<fakeOverviewData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getDataFake();
      const fetchedDataOverview = await getFakeOverviewData();
      setData(fetchedData);
      setDataOverview(fetchedDataOverview);
    }

    fetchData();
  }, []);

  return (
    <div id="dashboard-container">
      <Header />

      <div id="followers-container">
        {data.map((item) => (
          <FollowersCard data={item} borderTheme={item.type} key={item.id} />
        ))}
      </div>

      <h2 id="overview">Overview - Today</h2>

      <div id="overview-container">
        {dataOverview.map((item) => (
          <OverviewCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
