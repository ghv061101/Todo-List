import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return; // Prevent adding empty tasks

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList(prev => [...prev, newTodo]);
    inputRef.current.value = '';
  }

  const deleteTodo = (id) => {
    setTodoList(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodoList(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='relative w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl border border-gray-300'>
        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
          <img className='w-8' src={todo_icon} alt="Todo Icon" />
          <h1 className='text-3xl font-semibold text-white'>Todo-list</h1>
        </div>
        {/* Input */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
          <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
          <button onClick={add} className='border-none rounded-full bg-d w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add+</button>
        </div>
        {/* Todo List */}
        <div>
          {todoList.map(item => (
            <TodoItems 
              key={item.id} 
              id={item.id} 
              text={item.text} 
              isComplete={item.isComplete} 
              deleteTodo={deleteTodo} 
              toggleComplete={toggleComplete} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo
