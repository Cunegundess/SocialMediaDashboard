import { FollowersCard } from "../../components/FollowersCard";
import { Header } from "../../components/Header";
import { OverviewCard } from "../../components/OverviewCard";
// import { useState } from "react";
import "./styles.scss";
import socialData from "../../data/socialData.json";

export type dataProps = {
  id: number;
  account: {
    name: string;
    titlePage: string;
    titleLikes: string;
    totalPage: string;
    totalLikes: string;
    percentPage: string;
    percentLikes: string;
    followers: string;
    likes: string;
    followersOverview: string;
    type: string;
    status: boolean;
  };
};

export function Dashboard() {
  // const data: ItemProps[] = db;
  // const dataOverview: OverviewProps[] = db_overview;
  const data: dataProps[] = socialData;
  // const [data] = useState<dataProps[]>([]);

  return (
    <div id="dashboard-container">
      <Header />

      <div id="followers-container">
        {data.map((item) => (
          <FollowersCard
            data={item}
            borderTheme={item.account.type}
            key={item.id}
          />
        ))}
      </div>

      <h2 id="overview">Overview - Today</h2>

      <div id="overview-container">
        {data.map((item) => (
          <OverviewCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
