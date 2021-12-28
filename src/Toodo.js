import React, { useEffect, useState } from "react"
import Loader from "./Loader";
import { Scrollbars } from 'react-custom-scrollbars';



const Toodo = () => {

    const [str, setStr] = useState("");
    const [ListItem, setListItem] = useState([])


    const handleClick = (e) => {
        setStr(e.target.value);
    }

    const AddingItem = () => {
       if(str.length >= 3){
        ListItem.push(str);
        setListItem([...ListItem]);
        setStr("");
       }
       else{
           alert("Enter a valid Item")
       }
    }

    const del = (index) => {
            let list = ListItem;
            list.splice(index, 1);
            setListItem([...list]);
    }



    return (
        <>
            <div className="App-header">
                <h2>Todo List</h2>
                <div>
                    <p>Enter Items</p>
                    <input type="text" placeholder="items" id="todo_input" value={str} autoComplete="off" onChange={handleClick} />
                    <button onClick={AddingItem} className="add-btn">+ Add</button>
                    <Scrollbars style={{}}>
                    <div className="list-collections">
                        <ul >
                            {
                                ListItem.map((interVal, index) => <li key={index} className="li">
                                      <button className="li-btn "  onClick={()=>del(index)}> x</button>
                                    {interVal}
                                  
                                </li>)
                            }
                        </ul>
                    </div>
      </Scrollbars>
                    
                </div>
            </div>
            <div className="App-header-right">
                        <Loader />
            </div>
        </>
    )
}

export default Toodo;
