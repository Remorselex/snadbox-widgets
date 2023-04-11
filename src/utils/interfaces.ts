import React from 'react';

export enum Widgets {
  Agenda = 'agenda',
  Speaker = 'speaker',
  Preregistration = 'preregistration',
  Exhibitor = 'exhibitor',
  Lobby = 'lobby',
}

export type EventId = string;

export interface IWidgetContainerProps {
  widgetType: Widgets;
  eventId: EventId;
}

export interface IsetEventId {
  setEventId: React.Dispatch<React.SetStateAction<EventId>>;
}

export interface ISetWIdgets {
  setWidgetType: React.Dispatch<React.SetStateAction<Widgets>>;
  setEventId: React.Dispatch<React.SetStateAction<EventId>>;
}
