import React from "react";
import "./../assets/style.css";
import styles from "./../assets/home.module.css";

let itemsTech = [{
  id: 1,
  name: "Apple",
},

{
  id: 2,
  name: "Google",
}];

export default function Home() {
  const [items, setItems] = React.useState(itemsTech);
  const [name,setName]=React.useState('');
  
  function setItemState(){
    setItems([...items,{id:items.length+1,name:name}]);
    setName('');  // reset input field after adding item
  }

  function setNameState(event){
    setName(event.target.value);
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {items.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name}
              </li>
            ))}
          </ul>
         
        </div>
        <div className="col-md-6 p-3">
          <input type="text" placeholder="Enter Name" className="form-control" value={name} onChange={setNameState} />
          <button className="btn btn-success mt-3" onClick={setItemState}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}
