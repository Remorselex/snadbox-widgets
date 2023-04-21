import { TextField } from '@mui/material';

import { IsetEventId } from '../../utils/types';

function EventInput({ setEventId }: IsetEventId) {
  return (
    <TextField
      onChange={(event) => setEventId(event.target.value)}
      sx={{ width: '25%' }}
      label='Enter event ID'
      variant='outlined'
      size='small'
      margin='dense'
    />
  );
}

export default EventInput;
