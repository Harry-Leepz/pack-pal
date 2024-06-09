import ItemCount from "./ItemCount";
import Logo from "./Logo";

export default function Header({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <ItemCount
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
