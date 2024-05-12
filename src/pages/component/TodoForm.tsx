import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/todosSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="font-bold text-lg">Todo List </div>   
        <div className="flex gap-5 mt-2">
        
        <input className="border p-2" type="text" value={text} onChange={handleChange} />
        <button className="border bg-black text-white" type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
