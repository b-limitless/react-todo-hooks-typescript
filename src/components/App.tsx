import React, { useEffect, useMemo } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

export const App: React.FC = () => {
    const todos = useTypedSelector(({ todos }) => {
        // Get the data 
        return todos;
    });
    const { fetchTodos } = useActions();

    const getTodoList = useMemo(() => {
        if (todos.length > 0) {
            return todos.map(todo => <div key={todo.id}>{todo.title}</div>)
        }
        return <></>;
    }, [todos]);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])

    return <div>{getTodoList}</div>
}
