import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

interface Todo {
    title: string;
    completed: boolean;
}

export const App: React.FC = () => {
    const [formData, setFormData] = useState<Todo>({ title: '', completed: false });
    const todos = useTypedSelector(({ todos }) => {
        return todos;
    });

    const { fetchTodos, deleteTodo, addTodo } = useActions();
    const getTodoList = useMemo(() => {
        if (todos.length > 0) {
            return todos.map(todo => <div onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.title}</div>)
        }
        return <></>;
    }, [todos, deleteTodo]);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])

    const pushTodo = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const id = todos.length + 1;
        const data = { ...formData, id };
        addTodo(data);
    }, [formData, addTodo, todos]);

    const onChange = (e: any): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return <div>{getTodoList}
        <form>
            <input
                type="text"
                name="title"
                placeholder="enter the title"
                onChange={onChange}
                required
            />
            <select name="completed"
                onChange={onChange}
                required>
                <option>Please selecte</option>
                <option value="0"> No</option>
                <option value="1">Yes</option>
            </select>
            <button type="submit" onClick={(e) => pushTodo(e)}>Save</button>
        </form>
    </div>
}
