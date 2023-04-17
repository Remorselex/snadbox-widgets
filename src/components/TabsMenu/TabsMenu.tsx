import { TabContext, TabList, TabPanel } from '@mui/lab';

import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';

import { WIDGET_TYPE_MAP } from '../../utils/constants';
import { ISetWIdgets } from '../../utils/types';
import CodeModal from '../CodeModal/CodeModal';
import EventInput from '../EventInput/EventInput';

function TabsMenu({ setWidgetType, setEventId }: ISetWIdgets) {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);
  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          zIndex: '100',
          width: '100%',
          background: 'white',
          padding: '0 calc(1em - 2px)',
        }}
      >
        <EventInput setEventId={setEventId} />
        <CodeModal />
        <TabList
          sx={{ paddingRight: '1em' }}
          onChange={(event, newValue) => {
            handleChange(event, newValue);
            const eventWidgetType: string | undefined = (
              event.target as HTMLElement
            ).textContent?.toLowerCase();
            if (eventWidgetType) {
              const widgetType = WIDGET_TYPE_MAP[eventWidgetType];
              setWidgetType(widgetType);
            }
          }}
          aria-label='TabMenu'
        >
          <Tab label='Agenda' value='1' />
          <Tab label='Speaker' value='2' />
          <Tab label='Exhibitor' value='4' />
          <Tab label='Preregistration' value='3' />
        </TabList>
      </Box>
      <TabPanel value='1'></TabPanel>
      <TabPanel value='2'></TabPanel>
      <TabPanel value='3'></TabPanel>
      <TabPanel value='4'></TabPanel>
    </TabContext>
  );
}

export default TabsMenu;
