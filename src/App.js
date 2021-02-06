import React, { useState } from "react";

import Modal from "./Components/Modal";
import Tasks from "./Components/Tasks";
import TaskList from "./Components/TaskList";
import PointsHook from "./Hooks/PointsHook";
import "./App.css";

const App = () => {
  const [myAreas, setMyAreas] = useState(["General", "Misthalin", "Karamja"]);
  const [remainingAreas, setRemainingAreas] = useState([
    "Asgarnia",
    "Fremennik Provinces",
    "Kandarin",
    "Kharidian Desert",
    "Morytania",
    "Tirannwn",
    "Wilderness",
  ]);
  const [addNewRegion, setAddNewRegion] = useState(false);

  const [points, completeTask, incompleteTask] = PointsHook();

  const toggleNewRegion = () => {
    setAddNewRegion(!addNewRegion);
  };

  const toggleRegion = (RegionName) => {
    if (
      myAreas.filter((areaName) => {
        return areaName === RegionName;
      }).length === 0 &&
      myAreas.length <= 5
    ) {
      setMyAreas([...myAreas].concat(RegionName));
      setRemainingAreas(
        [...remainingAreas].filter((area) => {
          return area !== RegionName;
        })
      );
    } else {
      myAreas.forEach((areaName) => {
        if (areaName === RegionName) {
          setMyAreas(
            [...myAreas].filter((regionName) => {
              return regionName !== RegionName;
            })
          );
          setRemainingAreas([...remainingAreas].concat(RegionName));
        }
      });
    }
  };

  const Regions = myAreas.map((area) => {
    return { Name: area, ...Tasks[area] };
  });

  return (
    <div className="App">
      <h1 className="Title">Trailblazers League Tasks</h1>
      <div className="User-Info">
        <h4>Points: {points.Points}</h4>
        <h4>Tasks: {points.Tasks}</h4>
        <h4>Relics: {points.Relics}</h4>
        <h4>Regions: {points.Regions}</h4>
        <h4>Points till next Relic: {points.nextRelic}</h4>
        <h4>Tasks till next Region: {points.nextRegion}</h4>
      </div>
      <div className="Controls">
        <button
          disabled={addNewRegion}
          className="AddRegionToggle"
          onClick={toggleNewRegion}
        >
          Manage Regions
        </button>
      </div>
      <TaskList
        Regions={Regions}
        completeTaskHandler={completeTask}
        incompleteTaskHandler={incompleteTask}
      />
      {addNewRegion && (
        <Modal onClose={toggleNewRegion}>
          <ul className="RemainingRegions">
            <h2 className="RemainingRegions-Title">Regions</h2>
            <h3 className="Regions-Heading">My Regions</h3>
            <li className="Region">
              <h4 className="Misthalin">Misthalin</h4>
            </li>
            <li className="Region">
              <h4 className="Karamja">Karamja</h4>
            </li>
            {myAreas
              .slice(3)
              .sort()
              .map((area) => {
                return (
                  <li className="Region">
                    <h4 className={`Region-Name ${area}`}>{area}</h4>
                    <button
                      className="Region-Remove"
                      onClick={() => toggleRegion(area)}
                    >
                      -
                    </button>
                  </li>
                );
              })}
            <h3 className="Regions-Heading">Remaining Regions</h3>
            {remainingAreas.sort().map((Region) => {
              return (
                <li className="Region">
                  <h4 className={`Region-Name ${Region}`}>{Region}</h4>
                  <button
                    disabled={myAreas.length > 5}
                    className="Region-Add"
                    onClick={() => toggleRegion(Region)}
                  >
                    +
                  </button>
                </li>
              );
            })}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default App;
