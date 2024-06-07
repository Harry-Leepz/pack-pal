import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className='button-group'>
      <Button type='secondary' label='Mark all as complete' />
      <Button type='secondary' label='Mark all as incomplete' />
      <Button type='secondary' label='Reset to initial' />
      <Button type='secondary' label='Remove all items' />
    </section>
  );
}