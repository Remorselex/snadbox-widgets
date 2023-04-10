import { Widgets } from './interfaces';

export const WIDGET_TYPE_MAP: { [key: string]: Widgets } = {
  agenda: Widgets.Agenda,
  speaker: Widgets.Speaker,
  preregistration: Widgets.Preregistration,
  exhibitor: Widgets.Exhibitor,
  lobby: Widgets.Lobby,
};
