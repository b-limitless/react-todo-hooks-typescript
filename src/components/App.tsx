import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import './App.css';

interface Todo {
    title: string;
    completed: boolean | string;
}

interface TodoItem extends Todo {
    id: number;
}
export const App = () => {
    const [formData, setFormData] = useState<Todo>({ title: '', completed: '' });
    const [editMode, setEditMode] = useState<boolean>(false);
    const todos = useTypedSelector(({ todos }) => {
        return todos;
    });
    const { fetchTodos, deleteTodo, addTodo } = useActions();

    const editTodo = useCallback((todo: TodoItem) => {
        // Dispatch update here 
        setFormData(todo);
        setEditMode(state => !state)
    }, [])
    console.log(editMode)
    const getTodoList = useMemo(() => {
        if (todos.length > 0) {
            // @ts-ignore
            return todos.map((todo) => <div key={todo.id} className="wrapper"><div onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.title}</div><button onClick={() => editTodo(todo)}>Edit</button>

            </div>)
        }
    }, [todos, deleteTodo, editTodo]);
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])

    const onChange = (e: any): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const pushTodo = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const id = todos.length + 1;
        const data = { id, ...formData, };
        console.log(data);
        addTodo(data);
    }, [formData, todos, addTodo]);

    return <div>
        {getTodoList}
        <form>
            <input
              value = {formData.title || ''}
                type="text"
                name="title"
                placeholder="enter the title"
                onChange={onChange}
                required
            />
            <select name="completed"
                onChange={onChange}
                value = {formData.completed === '0' ? '0' : '1'}
                required>
                <option>Please selecte</option>
                <option value="0"> No</option>
                <option value="1">Yes</option>
            </select>
            <button type="submit" onClick={(e) => pushTodo(e)}>Save</button>
        </form>
    </div>
}