import { FaTimes } from 'react-icons/fa';


const Task = ( { task, onDelete, onToggleState }) => {
  return (
    <div className={`task ${task.state === 1 ? 'unassigned' : task.state === 2 ? 'assigned' : 'complete' }`} onDoubleClick={() => onToggleState(task.id, task.state)} > 
        <h3>
            {task.text} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task.id)}
            />
        </h3>
    </div>
  )
}

export default Task