import classes from './TabsMenu.module.css';

import { Widgets, ISetWidgetType } from '../../interfaces';
import EventInput from '../EventInput/EventInput';

const widgetTypeMap: { [key: string]: Widgets } = {
  agenda: Widgets.Agenda,
  speaker: Widgets.Speaker,
  preregistration: Widgets.Preregistration,
  exhibitor: Widgets.Exhibitor,
  lobby: Widgets.Lobby,
};

function TabsMenu({ setWidgetType }: ISetWidgetType) {
  return (
    <div className={classes.TabContainer}>
      <EventInput />
      <ul
        className={classes.TabsMenu}
        onClick={(event) => {
          const eventWidgetType: string | undefined = (event.target as HTMLElement).textContent?.toLowerCase();
          if (eventWidgetType) {
            const widgetType = widgetTypeMap[eventWidgetType];
            setWidgetType(widgetType);
          }
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
