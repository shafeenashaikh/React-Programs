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
import Updating from './components/Updating';
import ShouldUpdate from './components/shouldUpdate';
import Hooks from './components/Hooks';
import Useeffect from './components/useeffect';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import Counter from './components/count';
import HoverCounter from './components/HoverCounter';
import componentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import Parent from './ContextAPI/Parent';
import UseEffect from './UseEffect vs useMemo/useEffect';



function App() {
  return (
    <div className="App">
     <UseEffect/>
      {/* <Parent/> */}
  {/* <UserProvider>
          <componentC  value="Bruce"/>
  </UserProvider> */}
     {/* <Counter/> */}
     {/* <HoverCounter/> */}
      {/* <FocusInput/> */}
      {/* <RefDemo/> */}
      {/* <Useeffect/> */}
      {/* <Hooks/> */}
      {/* <ShouldUpdate/> */}
      {/* <Updating/> */}
      {/* <Mounting/> */}
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
