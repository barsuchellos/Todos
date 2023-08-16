import './styles/App.scss'
import MyInput from './components/MyInput/MyInput';
import MyButton from './components/MyButton/MyButton';
import Mylist from './components/MyList/Mylist';

import { useState } from 'react';


function App() {

  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([]);


  const handleInput = (event) => {
    setInputValue(() => event)
  }

  const addToDo = () => {
    setList(prev => [...prev, inputValue])
  }

  const enterPress = (event) => {
    if (event.key === 'Enter') {
      addToDo()
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <MyInput task='Task' setArr={handleInput} onKeyPress={enterPress}/>
        <MyButton addToDo={addToDo}/>
      </div>
      <Mylist className='list' list={list}></Mylist>
    </div>
  );
}

export default App;
