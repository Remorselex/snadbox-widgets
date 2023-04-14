import { useState, useEffect, useRef } from 'react';

import { WIDGET_SOURCE_URL } from '../../utils/constants';
import { IWidgetContainerProps } from '../../utils/interfaces';

function WidgetsContainer({ widgetType, eventId }: IWidgetContainerProps) {
  const widgetsRef = useRef(null);
  const [bgColor, setBgColor] = useState('#default-color');

  useEffect(() => {
    (async () => {
      const script = document.createElement('script');
      script.src = WIDGET_SOURCE_URL;
      await document.body.append(script);
    })();
  }, []);

  useEffect(() => {
    if (widgetsRef.current) {
      const observer = new MutationObserver(() => {
        //@ts-ignore
        const myElement = widgetsRef.current.shadowRoot.querySelector('.agenda-section');
        console.log(myElement);
        if (myElement) {
          myElement.style.setProperty('--agenda-section-bg', bgColor);
        }
      });

      observer.observe(widgetsRef.current, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  //@ts-ignore
  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };

  return eventId.length === 36 ? (
    <div key={Date.now()}>
      <input type='color' value={bgColor} onChange={handleColorChange} />
      {/*@ts-ignore*/}
      <dealroomevent-widgets typeWidget={widgetType} eventId={eventId} ref={widgetsRef} />
    </div>
  ) : (
    <h1 style={{ display: 'flex', justifyContent: 'center', padding: '10% 0' }}>Enter event ID</h1>
  );
}

export default WidgetsContainer;
