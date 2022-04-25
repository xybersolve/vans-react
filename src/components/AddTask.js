import { useState } from 'react';


const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [state, setState] = useState(1);
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (! text) {
            alert( "Text is required" );
            return;
        }
        
        onAdd({text, state, reminder});
        setText(''); 
        setState(0); 
        setReminder(false);
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
         <div className="form-control">
        <label >Task</label>
        <input type="text" 
               name="text" 
               placeholder="Add Task" 
               value={text} 
               onChange= {(e) => setText(e.target.value)}
        />
    </div>
    <div className="form-control">
        <label >Start State</label>
        <input type="number" 
               name="state" 
               id="state" 
               min="1" 
               max="3" 
               placeholder="Add Start State" 
               value={state} 
               onChange= {(e) => setState(e.target.value)} 
        />
    </div>
    <div className="form-control form-control-check">
        <label >Set Reminder</label>
        <input type="checkbox" 
               name="reminder" 
               id="reminder"
               checked={reminder} 
               value={reminder}
               onChange= {(e) => setReminder(e.currentTarget.checked)} 
        />
    </div>
    <input className='btn btn-block' type="submit" value="Add Task" />

    </form>
  )
}

export default AddTask
