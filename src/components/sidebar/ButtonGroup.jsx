import Button from "./Button";

export default function ButtonGroup({ handleRemoveAllItems }) {
  return (
    <section className='button-group'>
      <Button buttonType='secondary' label='Mark all as complete' />
      <Button buttonType='secondary' label='Mark all as incomplete' />
      <Button buttonType='secondary' label='Reset to initial' />
      <Button
        onClick={handleRemoveAllItems}
        buttonType='secondary'
        label='Remove all items'
      />
    </section>
  );
}
