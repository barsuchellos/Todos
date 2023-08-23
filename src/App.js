import './styles/App.scss'
import MyInput from './components/MyInput/MyInput';
import MyButton from './components/MyButton/MyButton';
import Mylist from './components/MyList/Mylist';
import Modal from './components/Modal/Modal';

import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
      minLength: false,
      modal: false,
      listWarning: false,
    }
  }


  handleInput = (event) => {
    this.setState({ inputValue: event })
  }

  deleteList = () => {
    this.setState({ list: [], modal: false })
  }

  showModal = () => {
    if (!this.state.list.length) {
      this.showWarning()
    } else {
      this.setState({ modal: true })
    }

  }

  showWarning = () => {
    this.setState({ listWarning: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  addToDo = () => {
    if (this.state.inputValue.length > 5) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: '',
        minLength: false,
        listWarning: false
      }))
    } else {
      this.setState({ minLength: true })
    }

  }

  enterPress = (event) => {
    if (event.key === 'Enter') {
      this.addToDo()
    }
  }

  updateList = (newList) => {
    this.setState({ list: newList })
  }

  render() {

    const { list, inputValue, minLength, modal, listWarning } = this.state;

    return (
      <>
        {
          modal && <Modal deleteList={this.deleteList} closeModal={this.closeModal} />
        }
        <div className="App">
          <div className='container'>
            <MyInput
              task='Task'
              setArr={this.handleInput}
              onKeyPress={this.enterPress}
              inputValue={inputValue}
            />
            <MyButton addToDo={this.addToDo} name='Add' />
            <MyButton addToDo={this.showModal} name='Delete All' />
          </div>
          {listWarning && <p className='warning-input-length'>List is Empty</p>}
          {minLength && <p className='warning-input-length'>Write at least 5 words</p>}
          <Mylist className='list' list={list} updateList={this.updateList}></Mylist>
        </div>
      </>

    );
  }
}

export default App;
