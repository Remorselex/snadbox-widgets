import { Widgets } from './types';

export const WIDGET_TYPE_MAP: { [key: string]: Widgets } = {
  agenda: Widgets.Agenda,
  speaker: Widgets.Speaker,
  preregistration: Widgets.Preregistration,
  exhibitor: Widgets.Exhibitor,
  lobby: Widgets.Lobby,
};

export const WIDGET_SOURCE_URL =
  'https://console.dealroomevents.com/assets/dealRoomWidgets.js';
