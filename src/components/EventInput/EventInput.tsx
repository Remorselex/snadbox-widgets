import { TextField } from '@mui/material';

import { EventAction, EventId } from '../../utils/types';

export interface IEventInputProps {
  setEventId: EventAction<EventId>;
}

const EventInput = ({ setEventId }: IEventInputProps) => {
  return (
    <TextField
      onChange={(event) => setEventId(event.target.value)}
      sx={{ width: '28%' }}
      label='Enter event ID'
      variant='outlined'
      size='small'
      margin='dense'
    />
  );
};

export default EventInput;
