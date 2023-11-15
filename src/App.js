import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const [tasksList,setTasklist] = useState([])
  const [task,setTask] = useState({})
  return ( 
    <div className="App">
      <Header></Header>
      <AddTask 
              tasks={tasksList} 
              setTasklist={setTasklist}
              task = {task}
              setTask = {setTask}
              >
              

        </AddTask>
      <ShowTask 
            tasks={tasksList} 
            setTasklist={setTasklist}
            task = {task}
            setTask = {setTask}
            ></ShowTask>

    </div>
  );
}

export default App;
