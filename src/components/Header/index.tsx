import { ToggleButton } from "../ToggleButton";
import { useEffect, useState } from "react";
import { getDataFake } from "../../api/api";
import { dataFake } from "../../api/api";
import "./styles.scss";

export function Header() {
  const [data, setData] = useState<dataFake[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getDataFake();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  function calcFollowers(data: dataFake) {
    let totalFollowers = 0;

    try {
      if (Array.isArray(data.followers)) {
        for (let i = 0; i < data.followers.length; i++) {
          totalFollowers += data.followers[i];
        }
      }
    } catch (error) {
      console.log(error);
    }

    console.log(totalFollowers);
    return totalFollowers;
  }

  const totalFollowers = data.length > 0 ? calcFollowers(data[0]) : 0;

  return (
    <div id="container-header">
      <div id="title-container">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: {totalFollowers}</span>
      </div>

      <div id="toggle-container">
        <span id="theme-color">Dark Theme</span>
        <ToggleButton />
      </div>
    </div>
  );
}

// import { ToggleButton } from "../ToggleButton";
// import { useEffect, useState } from "react";
// import { getDataFake } from "../../api/api";
// import { dataFake } from "../../api/api";
// import "./styles.scss";

// function calcFollowers(data: dataFake) {
//   let totalFollowers = 0;

//   for (let i = 0; i < data.followers.length; i++) {
//     totalFollowers += data.followers[i];
//   }

//   console.log(totalFollowers);
//   return totalFollowers;
// }

// export function Header() {
//   const [data, setData] = useState<dataFake[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const fetchedData = await getDataFake();
//       setData(fetchedData);
//     }

//     fetchData();
//   }, []);

//   const sumFollowers: number = data ? calcFollowers(data.followers) : 0;

//   return (
//     <div id="container-header">
//       <div id="title-container">
//         <h1>Social Media Dashboard</h1>
//         <span>Total Followers: {sumFollowers}</span>
//       </div>

//       <div id="toggle-container">
//         <span id="theme-color">Dark Theme</span>
//         <ToggleButton />
//       </div>
//     </div>
//   );
// }
