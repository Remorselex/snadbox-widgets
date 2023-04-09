import classes from './EventInput.module.css';
function EventInput() {
  return (
    <input
      onChange={(event) => console.log(event.target.value)}
      className={classes.EventInput}
      type='text'
      placeholder='Enter event ID'
    />
  );
}

export default EventInput;
