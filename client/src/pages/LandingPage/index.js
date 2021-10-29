import React from "react";
import Card from "../../ui/card/index";
import "./styles.css";
import { useState, useEffect } from "react";
const LandingPage = (props) => {
  const URL = "http://localhost:5000/posts";
  const [loadedData, setLoadedData] = useState([]);
  console.log(`From landing page ${props.getAvail + " " + props.getCity}`);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allData = [];

        for (const key in data) {
          const Data = {
            id: key,
            ...data[key],
          };
          allData.push(Data);
        }
        setLoadedData(allData);
      });
  }, []);
  console.log(loadedData);
  return (
    <ul className="doctor-card-container">
      {loadedData.map((Data) => {
        if (Data.available === props.getAvail) {
          if (Data.area === props.getCity) {
            return (
              <Card
                id={Data.id}
                name={Data.name}
                area={Data.area}
                experience={Data.experience}
                degree={Data.degree}
                available={Data.available}
                picture={Data.picture}
                fee={Data.fee}
                specialist={Data.specialist}
              />
            );
          }
        }
      })}
    </ul>
  );
};
export default LandingPage;
