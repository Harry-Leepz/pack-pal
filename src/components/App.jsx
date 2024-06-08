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
      completed: false,
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
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
