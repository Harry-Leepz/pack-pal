import { useState } from "react";
import { initialItemsList } from "./initialItemsList";

export default function ItemList() {
  const [items, setItems] = useState(initialItemsList);
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' checked={item.packed} />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
