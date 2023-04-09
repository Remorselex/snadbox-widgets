export enum Widgets {
  Agenda = 'agenda',
  Speaker = 'speaker',
  Preregistration = 'preregistration',
  Exhibitor = 'exhibitor',
  Lobby = 'lobby',
}

export interface ISetWidgetType {
  setWidgetType: React.Dispatch<React.SetStateAction<Widgets>>;
}
