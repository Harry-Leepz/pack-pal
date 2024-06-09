import ReactSelect from "react-select";
import EmptyView from "./EmptyView";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className='sorting'>
          <ReactSelect
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      )}

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
