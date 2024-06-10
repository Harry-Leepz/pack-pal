import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./header/Header";
import ItemList from "./itemList/ItemList";
import Sidebar from "./sidebar/Sidebar";

import ItemsContextProvider from "../contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
