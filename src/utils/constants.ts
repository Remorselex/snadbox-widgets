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

export const STYLED_WIDGET_SCRIPT = (widgetStyle: string): string => `
<script>  
  let widget = 
  Array.from(document.getElementsByTagName('dealroomevent-widgets'));
  const style = document.createElement( 'style' );
  style.innerHTML = \` ${widgetStyle} \`;
  let widgetShadow = widget[0].attachShadow({ mode: "open" });
  widgetShadow.appendChild(style);
</script>`;
