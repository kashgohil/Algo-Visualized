import React,{useState} from 'react'
import './playground.scss'

const TextEditor = ({addTask,task}) => {

    const [text,setText] = useState(task)

    const addTaskHandler = () => {
        addTask(text)
        setText("")
    }
    return (
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
            <button onClick={addTaskHandler}>Click me</button>
        </div>
    )
}

const Playground = () => {
    const [tasks,setTasks] = useState([])
    const [task,setTask] = useState("")

    const addTask = (text) => {
        setTasks([...tasks,text])
    }

    const taskHandler = (ind) => {
        setTask(tasks[ind])
        console.log(tasks[ind])
    }

    document.title = "Playground"

    return (
        <div>
            <TextEditor
                addTask={addTask}
                task={task}
            />
            {tasks && tasks.map((task,ind)=><div className="card flex-center" key={ind} onClick={()=>taskHandler(ind)}>{task}</div>)}
        </div>
    )
}

export default Playground