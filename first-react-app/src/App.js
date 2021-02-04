import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';



function App () {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 1st at 12:30pm', 
            reminder: true,
        },
    
        {
            id: 2,
            text: 'Scrum meeting',
            day: 'Feb 2nd at 13:30pm', 
            reminder: true,
        },
    
        {
            id: 3,
            text: 'Demo meeting',
            day: 'Feb 3rd at 16:00pm', 
            reminder: false,
        }  
    ])

    //Delete Tasks 
    const deleteTasks = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        console.log(id)
    }

    return (
    <div className="container">
        <Header/>
        {tasks.length >0 ? 
            (<Tasks tasks={tasks} 
            onDelete={deleteTasks} 
            onToggle={toggleReminder}
            />) 
            : ('No Tasks To Show')
        }
    </div>    
    );   
}

export default App;