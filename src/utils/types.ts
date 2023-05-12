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
