import { useState } from 'react';

import TabsMenu from './components/TabsMenu/TabsMenu';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';

import { EventId, Widgets } from './utils/types';

function App() {
  const [widgetType, setWidgetType] = useState<Widgets>(Widgets.Agenda);
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [eventId, setEventId] = useState<EventId>(
    'e9991c34-320a-400f-8a95-ce31673604f0'
  );
  return (
    <div className='App'>
      <TabsMenu
        setWidgetType={setWidgetType}
        setEventId={setEventId}
        setIsEditorOpen={setIsEditorOpen}
      />
      <WidgetsContainer
        widgetType={widgetType}
        eventId={eventId}
        isEditorOpen={isEditorOpen}
      />
    </div>
  );
}

export default App;
