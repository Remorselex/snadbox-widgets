import React from 'react';

export enum Widgets {
  Agenda = 'agenda',
  Speaker = 'speaker',
  Preregistration = 'preregistration',
  Exhibitor = 'exhibitor',
  Lobby = 'lobby',
}

export type EventId = string | null;

export interface IWidgetContainerProps {
  widgetType: Widgets;
  eventId: EventId;
}

type EventAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IsetEventId {
  setEventId: EventAction<EventId>;
}

export interface ISetWIdgets {
  setWidgetType: EventAction<Widgets>;
  setEventId: EventAction<EventId>;
}
