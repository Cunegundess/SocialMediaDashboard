import { dataFake } from "../../api/api";
import { ReactComponent as DownSvg } from "../../assets/icon-down.svg";
import { ReactComponent as UpSvg } from "../../assets/icon-up.svg";
import { ReactComponent as FacebookSvg } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterSvg } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/icon-youtube.svg";
import { useState } from 'react'

import "./styles.scss";

type Props = {
  borderTheme?: string;
  data: dataFake;
};

function iconSvg(type: string) {
  switch (type) {
    case "instagram":
      return <InstagramSvg />;
    case "facebook":
      return <FacebookSvg />;
    case "youtube":
      return <YoutubeSvg />;
    default:
      return <TwitterSvg />;
  }
}

function calculateNumbers(numbers: dataFake) {
  const followers = Math.floor(Math.random() * 100000);
  const followersOverview = Math.floor(Math.random() * 1000)
  const status = Math.random() < 0.5;

  return {
    followers,
    followersOverview,
    status
  };
}

export function FollowersCard({ borderTheme, data }: Props) {
  const [latestNumbers, setLatestNumbers] = useState<dataFake | null>(null);

  if (!data) {
    return null;
  }

  const dashboardNumbers = calculateNumbers(latestNumbers || data);

  return (
    <div id="followers-card-container">
      <hr className={borderTheme} />
      <div id="followers-card-content" className="center">
        <div id="header-card-followers" className="center">
          {iconSvg(data.type)}
          <span>{data.nickname}</span>
        </div>

        <div id="center-card-followers" className="center">
          <strong>
            {dashboardNumbers.followers}
          </strong>
          <span>{data.type === "youtube" ? "subscribers" : "followers"}</span>
        </div>

        <div
          id="footer-card-followers"
          className={dashboardNumbers.status ? "green-status" : "red-status"}
        >
          {dashboardNumbers.status ? <UpSvg /> : <DownSvg />}
          <span>{dashboardNumbers.followersOverview}</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
