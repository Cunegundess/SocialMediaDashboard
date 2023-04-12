import { ReactComponent as DownSvg } from "../../assets/icon-down.svg";
import { ReactComponent as UpSvg } from "../../assets/icon-up.svg";
import { ReactComponent as FacebookSvg } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterSvg } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/icon-youtube.svg";
import { fakeOverviewData } from "../../api/api";
import { useState } from "react";

import "./styles.scss";

type Props = {
  data: fakeOverviewData;
};

function calculateNumbers(numbers: fakeOverviewData) {
  const total = Math.floor(Math.random() * 10000);
  const status = Math.random() < 0.5;
  const percent = Math.floor(Math.random() * 1000);
  return {
    total,
    status,
    percent
  };
}

export function OverviewCard({ data }: Props) {
  const [latestNumbers, setLatestNumbers] = useState<fakeOverviewData | null>(null);
  if (!data) {
    return null;
  }

  const overviewNumbers = calculateNumbers(latestNumbers || data);

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

  return (
    <div id="overview-card-container">
      <div id="left-content" className="align-content">
        <span>{data.title}</span>
        <strong>{overviewNumbers.total}</strong>
      </div>
      <div id="right-content" className="align-content">
        {iconSvg(data.type)}
        <div
          id="percent-overview"
          className={overviewNumbers.status ? "green-status" : "red-status"}
        >
          {overviewNumbers.status ? <UpSvg /> : <DownSvg />}
          <span id="margin-left">{overviewNumbers.percent}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}
