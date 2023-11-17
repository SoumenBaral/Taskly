import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const [tasksList,setTasklist] = useState(JSON.parse(localStorage.getItem("TaskList"))||[])
  const [task,setTask] = useState({})
  useEffect(()=>{
    localStorage.setItem("TaskList",JSON.stringify(tasksList))
  },[tasksList])
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
