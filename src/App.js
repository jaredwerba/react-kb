import React, { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutDisplay from './components/WorkoutDisplay';

function App() {
  const [workoutData, setWorkoutData] = useState({});

  const handleWorkoutSubmit = (data) => {
    setWorkoutData(data);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="py-12 text-center">
        <h1 className="text-6xl font-bold">JKWB</h1>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <WorkoutForm onSubmit={handleWorkoutSubmit} />
          <WorkoutDisplay workoutData={workoutData} />
        </div>
      </main>
    </div>
  );
}

export default App;
