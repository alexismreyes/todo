import { useState } from "react"

const Todo =  () =>{

    const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");

    const addTask = () =>{      
        if(task){
            setTasks([...tasks,task]);
            setTask("");
        } 
        else
        alert('Must add a value!!');
        
    }

    const deleteTask = (index:number) => {           
        const updatedTasks = tasks.filter((_,i)=>i !== index); //para el indice recibido eliminarlo del array 
        setTasks(updatedTasks);
    }

    return(
        <>
        <div className="div-center">
            <div>
                <input type="text" placeholder="Enter task" name="task" value={task} onChange={
                    (e)=> setTask(e.target.value)} />

                <button onClick={addTask} className="button-blue">add</button>
            </div>     
            
            {              
                tasks.length === 0 &&                 
                    <h1>No task to do yet!!!</h1>          
            }

            {
                tasks.length>0 && (
                  
                    tasks.map((task,index)=>(
                        <>
                        <div key={index} className="added-field" onClick={() => deleteTask(index)}>
                        {task}
                        </div>                        
                        </>
                    ))                     
                    
                )
                                  
            }            
        </div>

        {
            tasks.length>0 &&
            <div className="div-center"><span className="red-alert">Click task to delete!!!</span></div>
        }
        
        </>
    )
}

export default Todo