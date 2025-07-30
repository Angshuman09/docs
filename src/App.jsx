import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
function App() {
  return (
    <div className='w-full h-screen bg-[#121212] relative z-2'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App
