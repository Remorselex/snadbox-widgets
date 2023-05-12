import { TabContext, TabList } from '@mui/lab';

import { Box, Button, Tab } from '@mui/material';
import React, { useState } from 'react';

import { WIDGET_TYPE_MAP } from '../../utils/constants';
import { EventAction, EventId, Widgets } from '../../utils/types';
import EventInput from '../EventInput/EventInput';

interface ITabsMenuProps {
  setWidgetType: EventAction<Widgets>;
  setEventId: EventAction<EventId>;
  setIsEditorOpen: EventAction<boolean>;
}

const TabsMenu = ({
  setWidgetType,
  setEventId,
  setIsEditorOpen,
}: ITabsMenuProps) => {
  const [value, setValue] = useState('1');
  const [isToggled, setIsToggled] = useState(true);
  const handleChange = (event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);
  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsEditorOpen((current) => !current);
  };
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
        <Button
          variant='outlined'
          onClick={handleToggle}
          style={{ width: '11em' }}
        >
          {isToggled ? 'Close editor' : 'Open editor'}
        </Button>
        <EventInput setEventId={setEventId} />
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
    </TabContext>
  );
};

export default TabsMenu;
