
const AddTask = ({tasks,setTasklist,task,setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.Id){
            const newDate = new Date();
            const updateTaskList = tasks.map(newTask =>(
                newTask.Id === task.Id?{Id:task.Id,name:task.name ,Time:`${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`}: newTask
            ))
            
            setTasklist(updateTaskList);
            setTask({});
        }
        else{
            const date = new Date();
            
            const newTask = {
                Id:date.getTime(),
                name : e.target.task.value, 
                Time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }   
            const text = e.target.task.value;
            const length = text.length
            if(length>0){
                setTasklist([...tasks,newTask])
                setTask({})
                }
        }
        


    }
    
    return (
       <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Task" autoComplete="off" name="task" maxLength={25} uncontrolled="true" value={task.name||""} onChange={e=>setTask({...task,name:e.target.value})} />
                <button type="Submit">{task.Id?"Update":"Add"}</button>
            </form>
       </section>
    );
};

export default AddTask;