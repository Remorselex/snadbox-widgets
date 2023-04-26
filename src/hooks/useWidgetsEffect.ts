import { useEffect } from 'react';

import { WIDGET_SOURCE_URL } from '../utils/constants';
import { WidgetsStyle } from '../utils/types';

export const useWidgetsEffect = (
  widgetsStyle: WidgetsStyle,
  widgetType: string
) => {
  useEffect(
    () => localStorage.setItem('widgetsStyle', widgetsStyle || ''),
    [widgetsStyle]
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.src = WIDGET_SOURCE_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const widget = document.querySelector('[typeWidget]')?.shadowRoot;
    const styleInWidget = document.createElement('style');
    styleInWidget.id = 'styleInWidget';
    if (widget && !widget.getElementById('styleInWidget')) {
      widget.append(styleInWidget);
    }
  }, [widgetsStyle]);
};
