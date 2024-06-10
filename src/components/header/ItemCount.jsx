import useItemsContext from "../hooks/useItemsContext";

export default function ItemCount() {
  const { numberOfItemsPacked, totalNumberOfItems } = useItemsContext();
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
