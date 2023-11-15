
const AddTask = () => {
    return (
       <section className="addTask">
            <form>
                <input type="text" placeholder="Add Task" autoComplete="off" name="task" maxLength={25}   />
                <button type="Submit">Add</button>
            </form>
       </section>
    );
};

export default AddTask;