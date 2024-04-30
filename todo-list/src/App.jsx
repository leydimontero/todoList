
import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
      <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <div className='counter-todos'>
          <h3>N° Tareas: 5</h3>
          <h3>Tareas Pendientes: 5</h3>
        </div>
        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd/>
        </div>
        <TodoList/>
      </div>
     
    </>
  )
}

export default App
