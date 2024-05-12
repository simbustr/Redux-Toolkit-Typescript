
import Counter from './pages/component/counter';
import {store} from './store/store'
import { Provider } from 'react-redux';

const App = () => {
  return <Provider store={store}>
    <Counter/>
    </Provider>;
};

export default App;
