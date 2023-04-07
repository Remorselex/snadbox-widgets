// import { useState, useEffect } from 'react';

import classes from './TabsMenu.module.css';

import EventInput from '../EventInput/EventInput';

//TODO DONT USE ANY TYPE !!!!!!!!!!!!!!
function TabsMenu({ setWidgetType }: any) {
  return (
    <div className={classes.TabContainer}>
      <EventInput />
      <ul
        className={classes.TabsMenu}
        onClick={(event) => {
          const eventWidgetType = (event.target as HTMLElement).textContent?.toLowerCase();
          setWidgetType(eventWidgetType);
        }}
      >
        <li className={classes.TabsItems}>Agenda</li>
        <li className={classes.TabsItems}>Speaker</li>
        <li className={classes.TabsItems}>Preregistration</li>
        <li className={classes.TabsItems}>Exhibitor</li>
        <li className={classes.TabsItems}>Lobby</li>
      </ul>
    </div>
  );
}

export default TabsMenu;
