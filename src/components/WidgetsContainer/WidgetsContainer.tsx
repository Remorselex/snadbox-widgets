import { useEffect } from 'react';

import { Widgets } from '../../interfaces';

interface IWidgetContainer {
  widgetType: Widgets;
}

function WidgetsContainer({ widgetType }: IWidgetContainer) {
  useEffect(() => {
    (async () => {
      const script = document.createElement('script');
      script.src = 'https://console.dealroomevents.com/assets/dealRoomWidgets.js';
      await document.body.append(script);
    })();
  }, []);
  return (
    <div key={widgetType}>
      {/* @ts-ignore*/}
      <dealroomevent-widgets
        id='dealroomevent-widgets'
        typeWidget={widgetType}
        eventId='657f67ff-1fbf-40f9-b027-f2b03a4f0689'
      />
    </div>
  );
}

export default WidgetsContainer;
