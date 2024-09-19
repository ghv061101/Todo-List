import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {

  const handleToggleComplete = () => {
    toggleComplete(id); // Use the passed function to toggle completion
  }

  const handleDelete = () => {
    deleteTodo(id); // Use the passed function to delete the item
  }

  return (
    <div className='flex items-center my-3 gap-2 p-3 bg-white bg-opacity-25 rounded-md shadow-md'>
      <div className='flex flex-1 items-center cursor-pointer' onClick={handleToggleComplete}>
        <img className='w-7' src={isComplete ? tick : not_tick} alt="Check Icon" />
        <p className={`font-semibold ml-2 ${isComplete ? 'line-through text-green-100 font-extrabold' : 'text-green-100 font-bold'}`}>
          {text}
        </p>
      </div>
      <img 
        src={delete_icon} 
        alt="Delete Icon" 
        className='w-3.5 cursor-pointer bg-red-500' 
        onClick={handleDelete} 
      />
    </div>
  )
}

export default TodoItems
