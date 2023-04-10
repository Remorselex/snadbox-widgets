import { useState } from 'react';

import TabsMenu from './components/TabsMenu/TabsMenu';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';

import { Widgets } from './utils/interfaces';

function App() {
  const [widgetType, setWidgetType] = useState<Widgets>(Widgets.Agenda);
  return (
    <div className='App'>
      <TabsMenu setWidgetType={setWidgetType} />
      <WidgetsContainer widgetType={widgetType} />
    </div>
  );
}

export default App;
