import { createContext, useEffect, useState } from "react";
import { initialItemsList } from "../itemList/initialItemsList";

const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItemsList
  );

  const handleAddItem = (newItemName) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemName,
      packed: false,
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const handleToggleItem = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return { ...item, packed: true };
      });
    });
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return { ...item, packed: false };
      });
    });
  };

  const handleResetToInitial = () => {
    setItems(initialItemsList);
  };

  const calculateNumberofItemsPacked = () => {
    return items.filter((item) => item.packed).length;
  };

  const numberOfItemsPacked = calculateNumberofItemsPacked();
  const totalNumberOfItems = items.length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleResetToInitial,
        numberOfItemsPacked,
        totalNumberOfItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
