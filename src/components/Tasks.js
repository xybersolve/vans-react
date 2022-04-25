import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggleState }) => {
    return (
    <>
        {tasks.map((task, index) => (
            <Task key={index} 
            task={task}
            onDelete={onDelete} 
            onToggleState={onToggleState} />

        ))}
    </>
  )
}

export default Tasks