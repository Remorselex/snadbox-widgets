import { useState, useEffect, useRef } from 'react';

import { WIDGET_SOURCE_URL } from '../../utils/constants';
import { IWidgetContainerProps, Widgets } from '../../utils/types';
import { WidgetsStyle } from '../../utils/types';
import CssEditor from '../CssEditor/CssEditor';

function WidgetsContainer({ widgetType, eventId }: IWidgetContainerProps) {
  const widgetsRef = useRef(null);
  const [widgetsStyle, setWidgetsStyle] = useState<WidgetsStyle>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = WIDGET_SOURCE_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  (() => {
    const widget = document.querySelector('[typeWidget]')?.shadowRoot;
    const styleInWidget = document.createElement('style');
    styleInWidget.id = 'styleInWidget';
    if (widget && !widget.getElementById('styleInWidget')) {
      widget.append(styleInWidget);
    }
  })();

  useEffect(() => {
    if (widgetsRef.current) {
      const widget = document.querySelector('[typeWidget]')?.shadowRoot;
      if (widget) {
        //@ts-ignore
        widget.getElementById('styleInWidget').textContent = widgetsStyle;
      }
    }
  }, [widgetsStyle]);

  return eventId && eventId.length === 36 ? (
    <div
      key={(widgetType as Widgets) + eventId}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        paddingTop: '0.3%',
      }}
    >
      <CssEditor
        //@ts-ignore
        setWidgetsStyle={setWidgetsStyle}
      />
      {/*@ts-ignore*/}
      <dealroomevent-widgets
        typeWidget={widgetType}
        eventId={eventId}
        ref={widgetsRef}
      />
    </div>
  ) : (
    <h1 style={{ display: 'flex', justifyContent: 'center', padding: '10% 0' }}>
      Enter event ID
    </h1>
  );
}

export default WidgetsContainer;
