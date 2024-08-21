import { useState } from 'react';
import TaskList from './TaskList';
import TaskFilter from '../hoc/TaskFilter';

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    } else alert('Must add a value!!');
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); //para el indice recibido eliminarlo del array
    setTasks(updatedTasks);
  };

  const FilteredTasks = TaskFilter(TaskList); //invoking the HOC to filter the child component

  return (
    <>
      <div className="div-center">
        <div>
          <input
            type="text"
            placeholder="Enter task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask} className="button-blue">
            add
          </button>
        </div>
        <div className="div-center-child">
          {/* <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
          <FilteredTasks tasks={tasks} deleteTask={deleteTask} />{' '}
          {/* USING THE HOC TO RENDER THE CHILD */}
        </div>
      </div>
    </>
  );
};

export default Todo;
