import React from 'react';

interface Props {
  tasks: string[];
  deleteTask: (index: number) => void;
  filteredTaskIndices: number[]; // The original indices of the filtered tasks
}

const TaskList: React.FC<Props> = ({
  tasks,
  deleteTask,
  filteredTaskIndices,
}) => {
  return (
    <>
      {tasks.length === 0 && <h1>No task to do yet!!!</h1>}

      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <div
            key={filteredTaskIndices[index]} // Use the original index as the key
            className="added-field"
            onClick={() => deleteTask(filteredTaskIndices[index])} // Use the original index for deletion
          >
            {task}
          </div>
        ))}

      {tasks.length > 0 && (
        <div className="div-center">
          <span className="red-alert">Click task to delete!!!</span>
        </div>
      )}
    </>
  );
};

export default TaskList;
