export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className='item'>
      <label>
        <input
          type='checkbox'
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
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
