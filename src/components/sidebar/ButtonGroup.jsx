import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleResetToInitial,
}) {
  return (
    <section className='button-group'>
      <Button
        onClick={handleMarkAllAsComplete}
        buttonType='secondary'
        label='Mark all as complete'
      />
      <Button
        onClick={handleMarkAllAsIncomplete}
        buttonType='secondary'
        label='Mark all as incomplete'
      />
      <Button
        onClick={handleResetToInitial}
        buttonType='secondary'
        label='Reset to initial'
      />
      <Button
        onClick={handleRemoveAllItems}
        buttonType='secondary'
        label='Remove all items'
      />
    </section>
  );
}
