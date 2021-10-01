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
import UseMemo from './UseEffect vs useMemo/useMemo';
import Employee from './React LifeCycle Methods/Mounting/Employee';
import GetData from './React LifeCycle Methods/Mounting/GetData';
import MountingLifeCycle from './React LifeCycle Methods/Mounting/Mounting';
import DidUpdate from './React LifeCycle Methods/Updating/DidUpdate';
import DidUpdate1 from './React LifeCycle Methods/Updating/DidUpdate1';
import ComponentShouldUpdate from './React LifeCycle Methods/Updating/ShouldUpdate';
import UnMount from './React LifeCycle Methods/UnMounting/UnMount';
import CounterDemo from './React LifeCycle Methods/ErrorBoundries/Counter';
import ErrorBoundries from './React LifeCycle Methods/ErrorBoundries/ErrorBoundries';
import Hero from './React LifeCycle Methods/ErrorBoundries/Hero';
import ErrorBoundries1 from './React LifeCycle Methods/ErrorBoundries/ErrorBoundries1';
import Message1 from './State/Message';
import Name from './State/Name';
import Counter1 from './State/CountFunction';
import CountClass from './State/CountClass';
import PropsName from './Props/PropsName';
import Student from './Props/Student';
import { useState } from 'react';


function App() {
  const[name,setName]=useState('Bruce')
  return (
    <div className="App">
     
      <Student name={name} Email="John@1.com" contact="12345"/>
      <button onClick={()=>setName('Diana')}>Update Name</button>
      
      {/* <PropsName name='Sam'/> */}
      {/* <CountClass/> */}
     {/* <Counter1/> */}
      {/* <Name/> */}
     {/* <Message1/> */}
      {/* < ErrorBoundries>
              <CounterDemo/>
          </ErrorBoundries>  */}
      {/* <ErrorBoundries1>
        <Hero heroName="Batman"/>
      </ErrorBoundries1>
      <ErrorBoundries1>
      <Hero heroName="joker"/>
      </ErrorBoundries1> */}
     
      {/* <UnMount/> */}
      {/* <ComponentShouldUpdate/> */}
      {/* <DidUpdate1/> */}
      {/* <DidUpdate/> */}
      {/* <MountingLifeCycle/> */}
      {/* <Employee/> */}
      {/* <GetData name="Diana"/> */}
      {/* <UseMemo/> */}
     {/* <UseEffect/> */}
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
