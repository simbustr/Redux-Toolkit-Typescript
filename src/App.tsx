import TodoForm from "./pages/component/TodoForm";
import TodoList from "./pages/component/TodoList";
import Counter from "./pages/component/counter";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="p-5">
     
      <TodoForm />
      <TodoList />
      </div>

    </Provider>
  );
};

export default App;
