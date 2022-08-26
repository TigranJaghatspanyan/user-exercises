import "./App.css";
import CreateExercise from "./Components/createExercise";
import CreateUser from "./Components/createUser";
import ExercisesList from "./Components/exerciseList";

function App() {
  return (
    <div className="App">
      <div className="iphoneScreen">
        <div className="wrapper">
          <CreateUser />
          <CreateExercise />
          <ExercisesList />
        </div>
      </div>
    </div>
  );
}

export default App;
