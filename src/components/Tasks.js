import { useState } from 'react'; 
import Task from './Task'

// const tasks = [
//     {
//         id: 0,
//         text: 'Sound Proofing',
//         state: 3

//     }, {
//         id: 1,
//         text: 'Insulation',
//         state: 2
//     }, {
//         id: 2,
//         text: 'Furring',
//         state: 1
//     }
// ]

const Tasks = ({ tasks, onDelete, onToggleState }) => {
    return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task}
            onDelete={onDelete} 
            onToggleState={onToggleState} />

        ))}
    </>
  )
}

export default Tasks