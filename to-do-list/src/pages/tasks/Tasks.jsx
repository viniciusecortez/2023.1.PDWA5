import {useTasks} from "../../lib/hooks/useTasks";
import {Task} from "../../component/task";


const Tasks = () => {
    const {data: tasks, isLoading, isError} = useTasks();


    return isLoading ? <>Loading</> : isError ? <>Error</> : tasks.map((task) => <Task
        title={task.title}> {task.text}</Task>);


}

export default Tasks;
