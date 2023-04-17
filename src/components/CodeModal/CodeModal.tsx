import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function CodeModal() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleModalAction = () => {
    setOpen(!open);
    setChecked(!checked);
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleModalAction}
        title='Show modal window'
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Modal
        open={open}
        onClose={handleModalAction}
        aria-labelledby='generated-code-modal-window'
        aria-describedby='generated-code-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Thereis a generated code for your page ▼
          </Typography>
          <hr />
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {`let widget = 
                Array.from(document.getElementsByTagName('dealroomevent-widgets'));
                const style = document.createElement( 'style' );
                style.innerHTML = \` ${localStorage.getItem('widgetsStyle')} \`;
                let widgetShadow = widget[0].attachShadow({ mode: "open" });
                widgetShadow.appendChild(style);
                `}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CodeModal;
