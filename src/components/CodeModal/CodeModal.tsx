import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { CSSProperties } from 'react';

type CodeModalProps = { btnStyle: CSSProperties };

export const STYLED_WIDGET_SCRIPT = (widgetStyle: string): string => `
<script>  
  let widget = 
  Array.from(document.getElementsByTagName('dealroomevent-widgets'));
  const style = document.createElement( 'style' );
  style.innerHTML = \` ${widgetStyle} \`;
  let widgetShadow = widget[0].attachShadow({ mode: "open" });
  widgetShadow.appendChild(style);
</script>`;

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
const CodeModal = ({ btnStyle }: CodeModalProps) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleModalAction = () => {
    setOpen(!open);
    setChecked(!checked);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(
      STYLED_WIDGET_SCRIPT(localStorage.getItem('widgetsStyle') || '')
    );
  };

  return (
    <div>
      <Button
        style={btnStyle}
        variant='outlined'
        onClick={handleModalAction}
        title='Show modal window with generated code for your page'
      >
        Show embeddable code
      </Button>
      <Modal
        open={open}
        disableScrollLock={true}
        onClose={handleModalAction}
        aria-labelledby='generated-code-modal-window'
        aria-describedby='generated-code-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Here is a generated code for your page. Paste this at the end of
            your body tag ▼
          </Typography>
          <hr />
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {STYLED_WIDGET_SCRIPT(localStorage.getItem('widgetsStyle') || '')}
          </Typography>
          <Button
            onClick={copyToClipboard}
            variant='outlined'
            style={{ justifyContent: 'center', marginTop: '1em' }}
          >
            copy to clipboard
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CodeModal;
