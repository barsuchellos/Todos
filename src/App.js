import './styles/App.scss'
import MyInput from './components/MyInput/MyInput';
import MyButton from './components/MyButton/MyButton';
import Mylist from './components/MyList/Mylist';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }
  }

  handleInput = (event) => {
    this.setState({ inputValue: event })
  }

  addToDo = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }))
  }

  enterPress = (event) => {
    if (event.key === 'Enter') {
      this.addToDo()
    }
  }

  updateList = (newList) => {
    this.setState({list:newList})
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <div className='container'>
          <MyInput task='Task' setArr={this.handleInput} onKeyPress={this.enterPress} />
          <MyButton addToDo={this.addToDo} name='Add' />
        </div>
        <Mylist className='list' list={list} updateList={this.updateList} ></Mylist>
      </div>
    );
  }
}

export default App;
