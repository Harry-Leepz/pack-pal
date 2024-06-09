import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./header/Header";
import ItemList from "./itemList/ItemList";
import Sidebar from "./sidebar/Sidebar";

import { initialItemsList } from "./itemList/initialItemsList";

function App() {
  const [items, setItems] = useState(initialItemsList);

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          numberOfItemsPacked={numberOfItemsPacked}
          totalNumberOfItems={totalNumberOfItems}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
