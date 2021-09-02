import './App.css';
import Greeting from './components/class';
import Welcom from './components/function';
import Message from './components/message';
import Count from './components/counter';
// import Click from './components/functionClick';
import Event from './components/classClick';
import Click from './components/EventBind';
import ParentComponent from './components/parentComponent';
import NameList from './components/NameList';
import Form from './components/Form';
import Mounting from './components/Mounting';

function App() {
  return (
    <div className="App">
      <Mounting/>
      {/* <Form/> */}
      {/* <NameList/> */}
      {/* <ParentComponent/> */}
      {/* <Click/> */}
      {/* <Click/>
      <Event/> */}
      {/* <Count/> */}
      {/* <Message/> */}
      {/* <Welcom name="shafi" email="shafi@gmail.com"/>
      <Greeting name="shafi" email="shafi@gmail.com"/> */}
    </div>
  );
}

export default App;
