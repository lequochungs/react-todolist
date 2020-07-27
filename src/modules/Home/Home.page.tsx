import { compose } from 'recompose';
import HomeView from './Home.view';

const enhancer = compose();

export default enhancer(HomeView);
