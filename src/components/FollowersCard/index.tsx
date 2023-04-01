import { dataProps } from "../../pages/Dashboard";

import { ReactComponent as DownSvg } from "../../assets/icon-down.svg";
import { ReactComponent as UpSvg } from "../../assets/icon-up.svg";

import { ReactComponent as FacebookSvg } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterSvg } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/icon-youtube.svg";

import "./styles.scss";

type Props = {
  borderTheme?: string;
  data: dataProps;
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

export function FollowersCard({ borderTheme, data }: Props) {
  return (
    <div id="followers-card-container">
      <hr className={borderTheme} />
      <div id="followers-card-content" className="center">
        <div id="header-card-followers" className="center">
          {iconSvg(data.account.type)}
          <span>{data.account.name}</span>
        </div>

        <div id="center-card-followers" className="center">
          <strong>
            {data.account.followers}
            {data.account.type === "instagram" && "K"}
          </strong>
          <span>
            {data.account.type === "youtube" ? "subscribers" : "followers"}
          </span>
        </div>

        <div
          id="footer-card-followers"
          className={data.account.status ? "green-status" : "red-status"}
        >
          {data.account.status ? <UpSvg /> : <DownSvg />}
          <span>{data.account.followersOverview}</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
