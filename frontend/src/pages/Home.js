import React, { useState, useEffect } from "react";

// Components
import WorkoutCard from "../components/WorkoutCard";

const Home = () => {
  const [Workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="Home">
      <div className="workouts">
        {Workouts &&
          Workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
