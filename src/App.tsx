import { useState } from 'react';

import TabsMenu from './components/TabsMenu/TabsMenu';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';

import { EventId, Widgets } from './utils/types';

function App() {
  const [widgetType, setWidgetType] = useState<Widgets>(Widgets.Agenda);
  const [eventId, setEventId] = useState<EventId>(
    '366f7b3e-5bb0-4b37-8ab4-b32efb845d01'
  );
  return (
    <div className='App'>
      <TabsMenu setWidgetType={setWidgetType} setEventId={setEventId} />
      <WidgetsContainer widgetType={widgetType} eventId={eventId} />
    </div>
  );
}

export default App;
