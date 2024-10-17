import React from "react";
import "./../assets/style.css";
import styles from "./../assets/home.module.css";

let itemsTech = ["Apple", "Google", "Facebook", "Twitter", "Meta"];

export default function Home() {
  const [items, setItems] = React.useState(itemsTech);
  //1000
  function addItems(item) {
    // items.push(item);
    setItems([...items, item]);
  }

  function updateItems(item) {
    let newItems = items.map((element) => {
      if (element == item) {
        element = "new Brand";
      }
      return element;
    });
    setItems(newItems);
  }

  function deleteItems(item) {
    let newItems = items.filter((element) => element != item);
    setItems(newItems);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {items.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => updateItems(item)}
                >
                  + Items
                </button>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => deleteItems(item)}
                >
                  - Items
                </button>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-success mt-3"
            onClick={() => addItems("Amazon")}
          >
            Add Items
          </button>
        </div>
      </div>
    </div>
  );
}
