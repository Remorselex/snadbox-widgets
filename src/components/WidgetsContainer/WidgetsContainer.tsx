import { useEffect } from 'react';

import { WIDGET_SOURCE_URL } from '../../utils/constants';
import { IWidgetContainerProps } from '../../utils/interfaces';

function WidgetsContainer({ widgetType, eventId }: IWidgetContainerProps) {
  useEffect(() => {
    (async () => {
      const script = document.createElement('script');
      script.src = WIDGET_SOURCE_URL;
      await document.body.append(script);
    })();
  }, []);
  return eventId.length === 36 ? (
    <div key={Date.now()}>
      {/* @ts-ignore*/}
      <dealroomevent-widgets className='widgetComponent' typeWidget={widgetType} eventId={eventId} />
    </div>
  ) : (
    <h1 style={{ display: 'flex', justifyContent: 'center', padding: '10% 0' }}>Enter event ID</h1>
  );
}

export default WidgetsContainer;
