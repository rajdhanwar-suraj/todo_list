import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
import './App.css';

function App() {
  const [Item, setItem] = useState()
  const [ArrayItem, setArrItem] = useState([])

  const addEvents = (event) => {
    setItem(event.target.value)
  }
  const addItemList = () => {
    setArrItem((oldItem) => {
      return [...oldItem, Item]
    })
    setItem('')
  }
  const DeleteItem = (id) => {
    console.log("Item Deleted");

    setArrItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id
      })
    })
  }
  return (
    <div className="main_div">
      <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type='text' value={Item} placeholder='Add a Items' onChange={addEvents} />
        <button onClick={addItemList}>+</button>

        <ol>
          {ArrayItem.map((Itemval, index) => {
            return <ToDoLists key={index} id={index} text={Itemval} onSelect={DeleteItem} />
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;