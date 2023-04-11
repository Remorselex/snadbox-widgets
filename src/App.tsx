import { useState } from 'react';

import TabsMenu from './components/TabsMenu/TabsMenu';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';

import { EventId, Widgets } from './utils/interfaces';

function App() {
  const [widgetType, setWidgetType] = useState<Widgets>(Widgets.Agenda);
  const [EventId, setEventId] = useState<EventId>('');
  return (
    <div className='App'>
      <TabsMenu setWidgetType={setWidgetType} setEventId={setEventId} />
      <WidgetsContainer widgetType={widgetType} eventId={EventId} />
    </div>
  );
}

export default App;
