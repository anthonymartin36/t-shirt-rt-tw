
import { Outlet } from 'react-router-dom'
import { DarkModeProvider } from '../context/DarkModeProvider'

function App() {
  return (
    <>
      <main>
        <DarkModeProvider>
        <Outlet />
        </DarkModeProvider>
      </main>
    </>
  )
}

export default App
