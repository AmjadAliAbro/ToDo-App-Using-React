import React, {useState} from "react";
import './App.css';
import ToDoList from "./Component/ToDoList.js";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
};

  return(
    <>
    <div className="main-div">
      <div className="center-div">
        <h1> ToDo List </h1>
        <br/>
        <input type="text" placeholder="Add ToDo" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>

        <ol>
          {Items.map((itemval, index) => {
            return <ToDoList
             key={index} 
             id={index} 
             text={itemval}
             onSelect = {deleteItems} />
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;