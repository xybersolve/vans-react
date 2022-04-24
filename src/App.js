import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';

import { useState } from 'react'; 

const title = "Van Task Tracker";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 0,
        text: 'Sound Proofing',
        state: 3

    }, {
        id: 1,
        text: 'Insulation',
        state: 2
    }, {
        id: 2,
        text: 'Furring',
        state: 1
    }
  ]);

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleState = (id, state) => {
    console.log('toggle', id, state);
    setTasks(tasks.map((task) => task.id === id ? 
        state == 3 ? {...task, state = 0} : {...task, state = state + 1}))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask} 
        onToggleState={toggleState}
      /> : 'No tasks have been defined yet.'}
    </div>
  );
}

export default App;
