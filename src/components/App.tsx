import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import './App.css';

interface Todo {
    id?:number;
    title: string;
    completed: boolean;
}

interface TodoItem extends Todo {
    id: number;
}
export const App = () => {
    const [formData, setFormData] = useState<Todo>({ title: '', completed: false });
    const [editMode, setEditMode] = useState<boolean>(false);
    const todos = useTypedSelector(({ todos }) => {
        return todos;
    });
    const { fetchTodos, deleteTodo, addTodo, editTodo } = useActions();

    const editTodoLocal = useCallback((todo: TodoItem) => {
        // Dispatch update here 
        setFormData(todo);
        setEditMode(state => !state)
    }, [])
 
    const getTodoList = useMemo(() => {
        if (todos.length > 0) {
            // @ts-ignore
            return todos.map((todo) => <div key={todo.id} className="wrapper"><div onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.title}</div><button onClick={() => editTodoLocal(todo)}>Edit</button>

            </div>)
        }
    }, [todos, deleteTodo, editTodoLocal]);
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])

    const onChange = (e: any): void => {
        let { name, value } = e.target;
        if (name === 'completed') {
            value = value === '1' ? true : false;
        }
        setFormData({ ...formData, [name]: value });
    }
    const pushTodo = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const id = todos.length + 1;
        const data = { id, ...formData, };
        addTodo(data);
    }, [formData, todos, addTodo]);

    const updatedTodo = useCallback((e) => {
        e.preventDefault();
        // @ts-ignore
        editTodo(formData);
    }, [formData])



    return <div>
        {getTodoList}
        <div>{formData.completed ? 'this is true' : 'not true'}</div>
        <form>
            <input
                value={formData.title || ''}
                type="text"
                name="title"
                placeholder="enter the title"
                onChange={onChange}
                required
            />
            <select name="completed"
                onChange={onChange}
                value={formData.completed ? '1' : '0'}
                required>
                <option>Please selecte</option>
                <option value="0"> No</option>
                <option value="1">Yes</option>
            </select>
            {editMode && <button type="submit" onClick = {(e) => updatedTodo(e) }>Update</button>}
            {!editMode && <button type="submit" onClick={(e) => pushTodo(e)}>Save</button>}
        </form>
    </div>
}