import { useAppSelector } from "../../store/hooks";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  console.log(todos, "kkkkkk");
  return <div>


    {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}


  </div>;
};

export default TodoList;
