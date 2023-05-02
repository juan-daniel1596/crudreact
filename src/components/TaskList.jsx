import TaskCard from './TaskCard';
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export function TaskList() {

const {tasks} = useContext(TaskContext)


 if (tasks.length ===0){
  return <h1 className="text-white text-4x1 font-bold text-center">No hay Tareas</h1>
 } 

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
      <TaskCard key={task.id} task= {task}  />  
      ))}
      </div>
  );
}

export default TaskList;
