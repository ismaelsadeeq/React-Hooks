import './App.css';
import React,{useReducer} from 'react'
import {CountProvider} from './components/Context/userContext'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import UseEffect from './components/UseEffect';
import Mouse from './components/Mouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';
import DataFetchGetpost from './components/DataFetchGetpost';
import ComponentD from './components/Context/ComponentD';
import Reducer from './components/Reducer';
import Reducer2 from './components/Reducer2';
import Reducer3 from './components/Reducer3';
import ComponentA from './components/Context/ComponentA';
import ComponentB from './components/Context/ComponentB';
import ComponentC from './components/Context/ComponentC';
import One from './components/DataFetch/One'
import Two from './components/DataFetch/Two';
import ParentComp from './components/useHook.js/ParentComp';
import Memo from './components/UseMemo/Memo';
import Ref from './components/Ref';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/CustomHooks/DocTitleOne';
import DocTitleTwo from './components/CustomHooks/DocTitleTwo';
import C1 from './components/CustomHooks/C1';
import C2 from './components/CustomHooks/C2';
import Input from './components/CustomHooks/Input';
import Input2 from './components/CustomHooks/Input2';

const initialState =
0;

const reducer = (state,action) =>{
 
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


function App() {
  const [count, dispatch] =  useReducer(reducer,initialState)
  return (
    <div className="App">
      <Input2 />
      {/* <Input /> */}
      {/* <C1 />
      <C2 /> */}
      {/* <DocTitleTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <Ref /> */}
      {/* <Memo /> */}
      {/* <ParentComp /> */}
      {/* <Two /> */}
      {/* <One /> */}
      {/* <CountProvider value={{countState:count,CountDispatch:dispatch}}>
        Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
      </CountProvider> */}
      {/* <Reducer3 /> */}
      {/* <Reducer2 /> */}
      {/* <Reducer /> */}
      {/* <ComponentD /> */}
      {/* <DataFetchGetpost /> */}
      {/* <DataFetching /> */}
      {/* <MouseContainer /> */}
      {/* <Mouse /> */}
      {/* <UseEffect /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter /> */}
      {/* <Counter /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
    </div>
  );
}

export default App;
