/* 
import { useState, useEffect } from "react";
import "./style/styles.css";
import Entete from "./components/Entete";
import BarreDeRecherche from "./components/BarreDeRecherche";
import ListeDeRobots from "./components/ListeDeRobots";
import DetailRobot from "./components/DetailRobot";

function Apps() {
  let [listeDeRobots, setListeDeRobots] = useState([]);
  let [listeDeRobotsTempo, setListeDeRobotsTempo] = useState();
  let [afficherDetailDuRobot, setAfficherDetailDuRobot] = useState(
    "detail-robot"
  );

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users").then(function (rep) {
      rep.json().then(function (donnees) {
        let tabRobots = donnees.map((robot) => {
          return {
            id: robot.id,
            name: robot.name,
            email: robot.email,
          };
        });
        setListeDeRobots(tabRobots);
        setListeDeRobotsTempo(tabRobots);
      });
    });
  }, []);

  const handleChange = (event) => {
    let elementRecherche = event.target.value.toLowerCase();
    const listeRobotsFiltre = listeDeRobotsTempo.filter((robot) => {
      return robot.name.toLowerCase().includes(elementRecherche);
    });
    setListeDeRobots(listeRobotsFiltre);
  };

  const handleClick = (event) => {
    setAfficherDetailDuRobot("cacher-detail-robot");
  };
  return (
    <div className="app">
      <Entete />
      <BarreDeRecherche onChange={handleChange} />
      <ListeDeRobots listeDeRobots={listeDeRobots} />
      <DetailRobot onClick={handleClick} className={afficherDetailDuRobot} />
    </div>
  );
}

export default Apps;
 */

import { useState, useEffect } from "react";
import "./style/styles.css";
import Entete from "./components/Entete";
import BarreDeRecherche from "./components/BarreDeRecherche";
import ListeDeRobots from "./components/ListeDeRobots";
import DetailRobot from "./components/DetailRobot";
import tableauDesRobots from "./robo_data.json";

function Apps() {
  let [listeDeRobots, setListeDeRobots] = useState([]);
  let [listeDeRobotsTempo, setListeDeRobotsTempo] = useState();
  let [afficherDetailDuRobot, setAfficherDetailDuRobot] = useState(
    "detail-robot"
  );

  useEffect(() => {
    setListeDeRobots(tableauDesRobots);
    setListeDeRobotsTempo(tableauDesRobots);
  });

  const handleClickRobot = (event) => {

    setAfficherDetailDuRobot("detail-robot");
  };
  const handleChange = (event) => {
    let elementRecherche = event.target.value.toLowerCase();
    const listeRobotsFiltre = listeDeRobotsTempo.filter((robot) => {
      return robot.name.toLowerCase().includes(elementRecherche);
    });
    setListeDeRobots(listeRobotsFiltre);
  };

  const handleClick = (event) => {
    setAfficherDetailDuRobot("cacher-detail-robot");
  };

  return (
    <div className="app">
      <Entete />
      <BarreDeRecherche onChange={handleChange} />
      <ListeDeRobots listeDeRobots={listeDeRobots} OnClick={handleClickRobot}/>
      <DetailRobot onClick={handleClick} className={afficherDetailDuRobot} />
    </div>
  );
}

export default Apps;
