import React, { createContext, useState, useContext } from "react";

type TodosProviderProps = {
    children: React.ReactNode
}

type TodoBox = {
    id: string;
    task: string;
    isCompleted: boolean;
    createdAt: Date;
}

type TodosContext = {
    todos: TodoBox[];
    handleAddTodo:(task:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children} : TodosProviderProps) => {

    const[todos, setTodos] = useState<TodoBox[]>([]);

    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos:TodoBox[] = [{
                id:Math.random().toString(),
                task: task,
                isCompleted: false,
                createdAt: new Date(),
            },
            ...prev
        ]
        return newTodos;
        })
    }
    return <todosContext.Provider value={{todos, handleAddTodo}}>
        {children}
    </todosContext.Provider>
}

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer
}