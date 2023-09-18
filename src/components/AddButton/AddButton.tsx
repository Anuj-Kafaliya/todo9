import React from 'react'
import { Button } from '@mui/material'
import { useTodos } from '../Store/Store';

interface PropType {
    task: string
}
const AddButton:React.FunctionComponent<PropType> = (props) => {
    const {task} = props;
    const {handleAddTodo}= useTodos()||{};
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(handleAddTodo) {
            handleAddTodo(task);
        }
    }
  return (
    <div>
        <Button onClick={handleClick}>
            Add 
        </Button>
    </div>
  )
}

export default AddButton