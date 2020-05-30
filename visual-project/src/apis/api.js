import { sectorApi } from "../staticContent";

export const getSectorData = () => {
  fetch(sectorApi + "Z1NN")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ localData: data });
    })
    .catch((e) => console.log("Error fetching data. ", e));
};
