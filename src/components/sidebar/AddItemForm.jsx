import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // validation
    if (!itemName.trim()) {
      inputRef.current.focus();
      return;
    }

    onAddItem(itemName);

    // clear input and set focus
    setItemName("");
    inputRef.current.focus();
  };

  const changeHandler = (event) => {
    setItemName(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus={true}
        placeholder='Item name...'
        value={itemName}
        onChange={changeHandler}
      />
      <Button label='Add item to list' />
    </form>
  );
}
