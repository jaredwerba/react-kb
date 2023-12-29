import React, { useState } from 'react';

function WorkoutForm({ onSubmit }) {
  const [date, setDate] = useState('');
  const [workoutName, setWorkoutName] = useState('');
  const [time, setTime] = useState('');
  const [movementPattern, setMovementPattern] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        date, 
        workout_name: workoutName, 
        time, 
        movement_pattern: movementPattern, 
        weight, 
        reps 
      })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };
  

  return (

    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow rounded bg-white">
  <div className="mb-4">
    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
      Date
    </label>
    <input
      type="date"
      id="date"
      value={date}
      onChange={e => setDate(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
  
    />
  </div>
  {/* Repeat for other fields */}
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Submit Workout
  </button>
</form>


  );
}



export default WorkoutForm;

