import { useEffect, useState } from 'react';

function WidgetsContainer({ widgetType }) {
  const [isMounted, setIsMounted] = useState(false);
  async function setScript() {
    if (!isMounted) {
      const script = document.createElement('script');
      script.src = 'https://console.dealroomevents.com/assets/dealRoomWidgets.js';
      await document.body.append(script);
    }
    setIsMounted(true);
  }
  useEffect(() => {
    setScript();
  }, []);
  return widgetType === 'agenda' ? (
    <div>
      <dealroomevent-widgets
        id='dealroomevent-widgets'
        typeWidget='agenda'
        eventId='657f67ff-1fbf-40f9-b027-f2b03a4f0689'
      />
    </div>
  ) : (
    <div>
      <dealroomevent-widgets
        id='dealroomevent-widgets'
        typeWidget='speaker'
        eventId='657f67ff-1fbf-40f9-b027-f2b03a4f0689'
      />
    </div>
  );
}

export default WidgetsContainer;
