import React from 'react';

export enum Widgets {
  Agenda = 'agenda',
  Speaker = 'speaker',
  Preregistration = 'preregistration',
  Exhibitor = 'exhibitor',
  Lobby = 'lobby',
}

export type EventId = string | null;
export type WidgetsStyle = string | null;

export type EventAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IWidgetContainerProps {
  widgetType: Widgets;
  eventId: EventId;
  isEditorOpen: boolean;
  widgetsStyle?: WidgetsStyle;
}

export interface IsetEventId {
  setEventId: EventAction<EventId>;
}

export interface IsetWidgetsStyle {
  setWidgetsStyle: EventAction<WidgetsStyle>;
}

export interface ISetWIdgets {
  setWidgetType: EventAction<Widgets>;
  setEventId: EventAction<EventId>;
  setIsEditorOpen: EventAction<boolean>;
}
