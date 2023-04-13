import { ToggleButton } from "../ToggleButton";
import { useEffect, useState } from "react";
import { dataFake, getDataFake } from "../../api/api";
import "./styles.scss";

type Props = {
  data: dataFake;
};

function calculateNumbers(numbers: dataFake) {
  const followers = Math.floor(Math.random() * 1000000);
  return {
    followers
  };
}

export function Header({data}: Props) {
  const [latestNumbers, setLatestNumbers] = useState<dataFake | null>(null);

  if (!data) {
    return null;
  }

  const dashboardNumbers = calculateNumbers(latestNumbers || data);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await getDataFake();
  //       let total = 0;
  //       data.forEach((item) => {
  //         total += item.followers;
  //       });
  //       setTotalFollowers(total);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div id="container-header">
      <div id="title-container">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: {dashboardNumbers.followers}</span>
      </div>

      <div id="toggle-container">
        <span id="theme-color">Dark Theme</span>
        <ToggleButton />
      </div>
    </div>
  );
}