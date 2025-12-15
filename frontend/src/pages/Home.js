import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";

// Components
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {!workouts && <h1>Loading...</h1>}

        {workouts && workouts.length === 0 && (
          <h1>No Workouts at the Moment</h1>
        )}
        
        {workouts &&
          workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
