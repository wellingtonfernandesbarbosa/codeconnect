import './App.css'

import BarraDePesquisa from './components/BarraDePesquisa'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='container'>
      <Sidebar />
      <BarraDePesquisa />
    </div>
  )
}

export default App
