import { useCallback, useReducer } from "react";

const pointsReducer = (state, action) => {
  switch (action.type) {
    case "TASKCOMPLETE":
      return {
        ...state,
        Tasks: state.Tasks + 1,
        Points: state.Points + action.amount,
        Regions:
          state.Tasks + 1 >= 60
            ? 3
            : state.Tasks + 1 >= 140
            ? 4
            : state.Tasks + 1 > 300
            ? 5
            : 2,
        Relics:
          state.Points + action.amount > 500
            ? 2
            : state.Points + action.amount > 2000
            ? 3
            : state.Points + action.amount > 4000
            ? 4
            : state.Points + action.amount > 7500
            ? 5
            : state.Points + action.amount > 15000
            ? 6
            : 1,
        nextRelic:
          state.Points + action.amount < 500
            ? 500 - (state.Points + action.amount)
            : state.Points + action.amount < 2000
            ? 2000 - (state.Points + action.amount)
            : state.Points + action.amount < 4000
            ? 4000 - (state.Points + action.amount)
            : state.Points + action.amount < 7500
            ? 7000 - (state.Points + action.amount)
            : state.Points + action.amount < 15000
            ? 15000 - (state.Points + action.amount)
            : 0,
        nextRegion:
          state.Tasks + 1 < 60
            ? 60 - (state.Tasks + 1)
            : state.Tasks + 1 < 140
            ? 140 - (state.Tasks + 1)
            : state.Tasks + 1 < 300
            ? 300 - (state.Tasks + 1)
            : 2,
      };
    case "TASKINCOMPLETE":
      return {
        ...state,
        Tasks: state.Tasks - 1,
        Points: state.Points - action.amount,
        Regions:
          state.Tasks - 1 >= 60
            ? 3
            : state.Tasks - 1 >= 140
            ? 4
            : state.Tasks - 1 > 300
            ? 5
            : 2,
        Relics:
          state.Points - action.amount > 500
            ? 2
            : state.Points - action.amount > 2000
            ? 3
            : state.Points - action.amount > 4000
            ? 4
            : state.Points - action.amount > 7500
            ? 5
            : state.Points - action.amount > 15000
            ? 6
            : 1,
        nextRelic:
          state.Points - action.amount < 500
            ? 500 - (state.Points - action.amount)
            : state.Points - action.amount < 2000
            ? 2000 - (state.Points - action.amount)
            : state.Points - action.amount < 4000
            ? 4000 - (state.Points - action.amount)
            : state.Points - action.amount < 7500
            ? 7000 - (state.Points - action.amount)
            : state.Points - action.amount < 15000
            ? 15000 - (state.Points - action.amount)
            : 0,
        nextRegion:
          state.Tasks - 1 < 60
            ? 60 - (state.Tasks - 1)
            : state.Tasks - 1 < 140
            ? 140 - (state.Tasks - 1)
            : state.Tasks - 1 < 300
            ? 300 - (state.Tasks - 1)
            : 2,
      };
    default:
      return state;
  }
};

const PointsHook = (initialPoints, initialTasks) => {
  const [points, dispatch] = useReducer(pointsReducer, {
    Points: initialPoints || 0,
    Tasks: initialTasks || 0,
    Regions: 2,
    Relics: 1,
    nextRelic: 500,
    nextRegion: 60,
  });

  const completeTask = useCallback((tier) => {
    dispatch({
      type: "TASKCOMPLETE",
      amount:
        tier === "Easy"
          ? 10
          : tier === "Medium"
          ? 50
          : tier === "Hard"
          ? 100
          : tier === "Elite"
          ? 250
          : tier === "Master"
          ? 500
          : 0,
    });
  }, []);

  const incompleteTask = useCallback((tier) => {
    dispatch({
      type: "TASKINCOMPLETE",
      amount:
        tier === "Easy"
          ? 10
          : tier === "Medium"
          ? 50
          : tier === "Hard"
          ? 100
          : tier === "Elite"
          ? 250
          : tier === "Master"
          ? 500
          : 0,
    });
  }, []);

  return [points, completeTask, incompleteTask];
};

export default PointsHook;
