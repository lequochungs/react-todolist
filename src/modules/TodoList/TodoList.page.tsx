import { compose } from 'recompose';
import TodoListView from './TodoList.view';

const enhancer = compose();

export default enhancer(TodoListView);
