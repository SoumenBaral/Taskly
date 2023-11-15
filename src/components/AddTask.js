
const AddTask = ({tasks,setTasklist,task,setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.Id){

        }
        else{
        const date = new Date();
        // console.log(e.target.task.value ,date.getTime());
        const newTask = {
            Id:date.getTime(),
            name : e.target.task.value, 
            Time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        const text = e.target.task.value;
        const length = text.length
        if(length>0){
            setTasklist([...tasks,newTask])
             e.target.task.value = ""
        }
        }
        


    }
    
    return (
       <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Task" autoComplete="off" name="task" maxLength={25} uncontrolled="true" value={task.name}  />
                <button type="Submit">Add</button>
            </form>
       </section>
    );
};

export default AddTask;