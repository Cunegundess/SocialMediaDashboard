import axios from "axios";
// import fs from "fs";
import { dataProps } from "../pages/Dashboard";

// Server Url
const url = "https://my-json-server.typicode.com/Cunegundess/serverTeste";

// export function serverData() {
//   axios
//     .get(url)
//     .then(function (response) {
//       // Handle Successful response
//       fs.writeFileSync("socialData.json", JSON.stringify(response.data));
//       return response.data;
//     })
//     .catch(function (error) {
//       // Handle errors
//       console.log(error);
//     });
// }

export function fetchData(): Promise<dataProps[]> {
  return axios.get<dataProps[]>(url).then((response) => response.data);
}
