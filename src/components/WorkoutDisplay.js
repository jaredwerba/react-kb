import React from 'react';

function WorkoutDisplay({ workoutData }) {
  return (
    <div>
      <h3>Workout Details</h3>
      <p>Date: {workoutData.date}</p>
      <p>Workout Name: {workoutData.workoutName}</p>
      <p>Time: {workoutData.time}</p>
      <p>Movement Pattern: {workoutData.movementPattern}</p>
      <p>Weight: {workoutData.weight}</p>
      <p>Reps: {workoutData.reps}</p>
    </div>
    
  );
  <p className="text-white">
  Workout Name: {workoutData.workoutName}
</p>
  
}

export default WorkoutDisplay;
