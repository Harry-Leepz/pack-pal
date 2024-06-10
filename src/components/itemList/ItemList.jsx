import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState, useMemo } from "react";

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
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      }

      if (sortBy === "unpacked") {
        return a.packed - b.packed;
      }

      return;
    });
  }, [items, sortBy]);

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className='sorting'>
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      )}

      {sortedItems.map((item) => {
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
