import { lazy } from 'react';

const Todo = lazy(() => import('../TodoList/TodoList.page'));

const Home = lazy(() => import('../Home/Home.page'));

const Pages = {
  Todo,
  Home,
};

export default Pages;
