export default function ItemList({ items, handleDeleteItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item onDeleteItem={handleDeleteItem} key={item.id} item={item} />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' checked={item.packed} />
        {item.name}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
