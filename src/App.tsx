import { useState } from 'react';

import TabsMenu from './components/TabsMenu/TabsMenu';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';

function App() {
  const [widgetType, setWidgetType] = useState<string>('agenda');
  return (
    <div className='App'>
      <TabsMenu setWidgetType={setWidgetType} />
      <WidgetsContainer widgetType={widgetType} />
    </div>
  );
}

export default App;
