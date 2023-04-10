import { TabContext, TabList, TabPanel } from '@mui/lab';

import { Box, Tab } from '@mui/material';
import { useState } from 'react';

import { WIDGET_TYPE_MAP } from '../../utils/constants';
import { ISetWidgetType } from '../../utils/interfaces';

function TabsMenu({ setWidgetType }: ISetWidgetType) {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue);
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
          onChange={(event, newValue) => {
            handleChange(event, newValue);
            const eventWidgetType: string | undefined = (event.target as HTMLElement).textContent?.toLowerCase();
            if (eventWidgetType) {
              const widgetType = WIDGET_TYPE_MAP[eventWidgetType];
              setWidgetType(widgetType);
            }
          }}
          aria-label='TabMenu'
        >
          <Tab label='Agenda' value='1' />
          <Tab label='Speaker' value='2' />
          <Tab label='Preregistration' value='3' />
          <Tab label='Exhibitor' value='4' />
          <Tab label='Lobby' value='5' />
        </TabList>
      </Box>
      <TabPanel value='1'></TabPanel>
      <TabPanel value='2'></TabPanel>
      <TabPanel value='3'></TabPanel>
      <TabPanel value='4'></TabPanel>
      <TabPanel value='5'></TabPanel>
    </TabContext>
  );
}

export default TabsMenu;
