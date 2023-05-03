
import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

 function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")   
    const {createTask} = useContext(TaskContext)

    

    const handleSumit = (e) => {
      e.preventDefault();
      createTask({
          title,
          description,
      });

      setTitle('')
      setDescription('')

      const user = {name: 'Juan', lastname: 'Perez', age: 22, married: true}
      //        setItem('key', 'dataEnString');
      sessionStorage.setItem('user2', JSON.stringify(user) );

    }
    
    
  return (
   <div className="max-w-md mx-auto">
     <form onSubmit= {handleSumit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2x1 font-bold text-white">Crea tu tarea by David</h1>
      <input placeholder="Escribe tu tarea"  
      onChange={(e) => setTitle(e.target.value) }
      value={title} className="bg-slate-300 p-3 w-full mb-2"
      autoFocus
      /> 
      <textarea placeholder="Escriba la descripcion de la tarea"
      onChange={(e) => setDescription(e.target.value)}
      className="bg-slate-300 p-3 w-full mb-2"
      value = {description}/>


      <button className="bg-indigo-500 px-3 py-1 text-white">guardar</button>
    </form>

    <pre> {JSON.stringify(JSON.parse(localStorage.getItem('user')), null, 5)} </pre>

   </div>
  );

  }
  export default TaskForm