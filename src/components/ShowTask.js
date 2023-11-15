

const ShowTask = ({tasks,setTasklist,task,setTask}) => {

    const UpdateMe = id =>{
        const selectedTask = tasks.find(ts => ts.Id === id)
        setTask(selectedTask); 
    }

    const deleteMe =(id)=>{

        const updateTaskList  = tasks.filter(task => task.Id !== id)
        setTasklist(updateTaskList)
        
        console.log(id);
    }
    
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo </span>
                    <span className="count">{tasks.length}</span>
                </div>
                <button onClick={()=>setTasklist([])} className="clearAll">Clear All</button>
            </div>
            <ul>
               {
                tasks.map(task=>(
                <li key={task.Id}>
                    <p>
                        <span>{task.name}</span>
                        <span>{task.Time}</span>
                    </p>
                    <i onClick={()=>UpdateMe(task.Id)} className="bi bi-pencil-square"></i>
                    <i onClick={()=>deleteMe(task.Id)}  className="bi bi-trash"></i>
                </li>
                )) 
               }
            </ul>
            

        </section>
    );
};

export default ShowTask;