import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [item, setitem] = useState(["one", "two", "three", "four", "five"]);

  const deleteData = (index) => {
    let getitems = [...item];
    let deletedItem = getitems.splice(index, 1);
    setitem(getitems);
    console.log(deletedItem, " is deleted from the list");
  };
  return (
    <div className="App">
      {item.map((item, i) => {
        return (
          <p
            key={i}
            onClick={() => {
              deleteData(i);
            }}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}
