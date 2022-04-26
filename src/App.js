import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState, useEffect } from 'react'; 



const title = "Van Task Tracker";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])  

  useEffect(() => {
    const getTasks = async () => {
      let tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    } 
    getTasks()
  }, [])

  // rules for state change  
  const changeState = (state) => {
    return state === 3 ? 1 : state + 1;
  } 

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(task) 
    })
    const data = await res.json()
    setTasks([...tasks, data])
    
    // Pre-REST
    //const id = Math.floor(Math.random() * 10000 ) + 1
    //const newTask = { id, ...task} 
    //setTasks([...tasks, newTask])
  }
 
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })    
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleState = async (id, state) => {
    const newState = changeState(state);
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, state: newState}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json();
    // set state from passed in state (ahead of map function)
    //let newState = state === 3 ? 1 : state + 1;
    setTasks(tasks.map((task) => task.id === id ? {...task, state : data.state} : task )) 
  }

  return (
    <Router>
      <div className="container">
        {/* <Profiler id="Navigation" onRender={callback}></Profiler> */}
        <Header title={title}  
                onAdd={() => setShowAddTask(!showAddTask)} 
                showAdd={showAddTask} 
        />
        <Routes>
          <Route
             path="/"
             element={
              <>
                {/* && shorthand for ternary operator */}
                {showAddTask &&  <AddTask onAdd={addTask} />}
                {tasks.length > 0 ?
                <Tasks 
                  tasks={tasks}
                  onDelete={deleteTask} 
                  onToggleState={toggleState}
                /> : 'No tasks have been defined yet.'}
                </>
                }
              /> 
        <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>

      </Router>
   
  );
}

export default App;
