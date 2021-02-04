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

    return (
    <div className="container">
        <Header/>
        <Tasks tasks={tasks} onDelete={deleteTasks} />
    </div>    
    );   
}

export default App;