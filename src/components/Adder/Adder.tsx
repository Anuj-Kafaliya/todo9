import React,{useState} from 'react'
import { TextField } from '@mui/material'
import AddButton from '../AddButton/AddButton';


const Adder: React.FunctionComponent = () => {
    const [task, setTask] = useState<string>("");

  return (
    <div>
        <TextField 
        label="Task"
        placeholder= "enter a new task"
        onChange = {(e) => {setTask(e.target.value)}}
        />
        <AddButton task={task}/>

    </div>
  )
}

export default Adder