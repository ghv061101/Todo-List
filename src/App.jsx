import React from 'react'
import Todo from './components/Todo'
import hphouse from './assets/hphouse.jpg'

const App = () => {
  return (
    <div className='relative min-h-screen'>
      <img 
        src={hphouse} 
        alt="House from Harry Potter" 
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className='relative z-10'>
        <Todo />
      </div>
    </div>
  )
}

export default App
