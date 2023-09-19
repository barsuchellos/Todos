import React from 'react';
import { Component } from 'react';

import './styles/App.scss'

import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Mylist from './components/MyList/Mylist';
import Modal from './components/Modal/Modal';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
      minLength: false,
      modal: false,
      showEditInputIndex: null,
      setItem: '',
      error: '',
    }
  }

  refModal = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = (event) => {
    console.log(this.state.modal, '  eventTarget', event.target, '  ModalREf', this.refModal.current);

    if (this.state.modal && !this.refModal.current.contains(event.target)) {
      console.log("ONClose");
      this.onClose();
    }
  }

  // setModalRef = (element) => {
    // this.modalRef = element;
  // }

  handleInput = (event) => {
    this.setState({ inputValue: event })
  }

  onDelete = () => {
    this.setState({ list: [], modal: false })
  }

  showModal = (e) => {
    console.log(e);
    e.preventDefault()
    e.stopPropagation();
    if (!this.state.list.length) {
      this.showWarning()
    } else {
      this.setState({ modal: true })
    }

  }

  showWarning = () => {
    this.setState({ error: 'List is Empty' })
  }

  onClose = () => {
    this.setState({ modal: false })
  }

  setItem = (el) => {
    this.setState({ setItem: el })
  }

  addToDo = () => {
    if (this.state.inputValue.length > 5) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: '',
        error: '',
      }))
    } else {
      this.setState({ error: 'Write at least 5 words' })
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

  editItem = (el) => {
    this.setState({ showEditInputIndex: el })
  }

  changeList = (index, value) => {
    const newList = [...this.state.list]
    newList[index] = value
    this.setState({ list: newList })
  }

  saveItem = (index, newValue) => {
    const newList = [...this.state.list];
    newList[index] = newValue;
    this.setState({ list: newList, showEditInputIndex: null });
  }

  render() {
    //console.log(this.state.modal);
    const { list, inputValue, modal, listWarning, error } = this.state;

    return (
      <>
        {modal &&
          <Modal
            onDelete={this.onDelete}
            onClose={this.onClose}
            setRef={this.refModal}
          />
        }

        <div className="App">
          <div className='container'>
            <Input
              task='Task'
              setArr={this.handleInput}
              onKeyPress={this.enterPress}
              inputValue={inputValue}
              placeholder="Write your task"
            />
            <Button onClick={this.addToDo} text='Add' />
            <Button onClick={this.showModal} text='Delete All' />
          </div>
          {error && <p className='input-warning'>{error}</p>}
          <Mylist
            className='list'
            list={list}
            updateList={this.updateList}
            setItem={this.setItem}
            editItem={this.editItem}
            showEditInputIndex={this.state.showEditInputIndex}
          />
        </div>
      </>

    );
  }
}

export default App;
