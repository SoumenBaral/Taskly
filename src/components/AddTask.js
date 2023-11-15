import "../App.css"
const AddTask = () => {
    return (
       <section className="">
            <form>
                <input type="text" placeholder="Add Task" name="task" maxLength={25}   />
                <button type="Submit">Add</button>
            </form>
       </section>
    );
};

export default AddTask;