import { useState, useEffect } from 'react';

import { WidgetsStyle } from '../utils/types';

export const useWidgetsStyles = (
  widgetsRef: React.RefObject<HTMLDivElement>
) => {
  const [widgetsStyle, setWidgetsStyle] = useState<WidgetsStyle>(null);

  useEffect(() => {
    if (widgetsRef.current) {
      const widget = document.querySelector('[typeWidget]')?.shadowRoot;
      if (widget) {
        const styleElement = widget.getElementById('styleInWidget');
        if (styleElement) {
          styleElement.textContent = widgetsStyle;
        }
      }
    }
  }, [widgetsStyle, widgetsRef]);
  return [widgetsStyle, setWidgetsStyle] as const;
};
