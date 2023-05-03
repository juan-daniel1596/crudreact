import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'


function App () {


  return (
    <main className="bg-zinc-200 text-zinc-700 h-screen">
    <div className="container mx-auto">
    <TaskForm/>
    <TaskList/>

      <h2>Hola Dani</h2>
      
    </div>
 
  
    </main>
  )
}

export default App