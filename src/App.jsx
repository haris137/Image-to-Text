import { useState } from 'react'
import './App.css'
import OCR from './OCR.jsx'

function App() {
  const [count, setCount] = useState(0)

  return<div className=' h-screen w-full'>
      <div className=" text-center">
        <h1 className="text-6xl font-bold text-blue-500">Image to Text</h1>
        <OCR />
      </div>
  </div>
}

export default App;
