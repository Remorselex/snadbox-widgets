import { useState, useEffect, useRef } from 'react';

import { WIDGET_SOURCE_URL } from '../../utils/constants';
import { IWidgetContainerProps, Widgets } from '../../utils/interfaces';

function WidgetsContainer({ widgetType, eventId }: IWidgetContainerProps) {
  const widgetsRef = useRef(null);
  const [bgColor, setBgColor] = useState('#000000');

  useEffect(() => {
    (async () => {
      const script = document.createElement('script');
      script.src = WIDGET_SOURCE_URL;
      await document.body.append(script);
    })();
  }, []);

  useEffect(() => {
    if (widgetsRef.current) {
      const widget = document.querySelector('[typeWidget]')?.shadowRoot;

      if (widget) {
        const element = widget.querySelector('.agenda-section') as HTMLElement;

        if (element) {
          element.style.backgroundColor = bgColor;
        }
      }
    }
  }, [bgColor]);

  //@ts-ignore
  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };

  return eventId && eventId.length === 36 ? (
    <div key={(widgetType as Widgets) + eventId}>
      <input type='color' value={bgColor} onChange={(event) => handleColorChange(event)} />
      {/*@ts-ignore*/}
      <dealroomevent-widgets typeWidget={widgetType} eventId={eventId} ref={widgetsRef} />
    </div>
  ) : (
    <h1 style={{ display: 'flex', justifyContent: 'center', padding: '10% 0' }}>Enter event ID</h1>
  );
}

export default WidgetsContainer;
