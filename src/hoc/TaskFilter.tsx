import React, { ChangeEvent, useState } from 'react';

//define Props received for functional component to create
interface TaskFilterProps {
  tasks: string[];
}

const TaskFilter = <G extends TaskFilterProps>(
  ChildComponent: React.ComponentType<G>
) => {
  const FilteredComponent: React.FC<G> = (props: G) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };

    // Step 1: Create an array of objects containing each task and its original index
    const tasksWithIndices = props.tasks.map((task, index) => ({
      task,
      index,
    }));

    // Step 2: Filter the tasks based on the search value
    const filteredTasksWithIndex = tasksWithIndices.filter(({ task }) =>
      task.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Step 3: Extract the filtered tasks and their original indices
    const filteredTasks = filteredTasksWithIndex.map(({ task }) => task);
    const filteredTaskIndices = filteredTasksWithIndex.map(
      ({ index }) => index
    );

    return (
      <>
        <label htmlFor="searchValue">Filter tasks:</label>
        <br />
        <input
          type="text"
          id="searchValue"
          value={searchValue}
          onChange={handleChange}
        />
        <br />
        <br />
        <ChildComponent
          {...props}
          tasks={filteredTasks} // The filtered tasks to be displayed
          filteredTaskIndices={filteredTaskIndices} // The original indices of the filtered tasks
        />
      </>
    );
  };

  return FilteredComponent;
};

export default TaskFilter;
