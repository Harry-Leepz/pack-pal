export default function ItemCount({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
