import './App.css'
import AllRoute from './routes/AllRoute'

function App() {

  return (
    <>
      <AllRoute />
    </>
  )
}

export default App

export const Add = ({ a = 6, b = 10 }) => {

  return a + b
}
export const Sub = ({ a = 6, b = 10 }) => {
  return a - b
}
