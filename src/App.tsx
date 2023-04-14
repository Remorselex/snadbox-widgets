import { useState } from 'react';

import TabsMenu from './components/TabsMenu/TabsMenu';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';

import { EventId, Widgets } from './utils/interfaces';

function App() {
  const [widgetType, setWidgetType] = useState<Widgets>(Widgets.Agenda);
  const [eventId, setEventId] = useState<EventId>('15471a89-c3bf-433a-8e8f-068c6d4763f2');
  return (
    <div className='App'>
      <TabsMenu setWidgetType={setWidgetType} setEventId={setEventId} />
      <WidgetsContainer widgetType={widgetType} eventId={eventId} />
    </div>
  );
}

export default App;
