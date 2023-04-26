// import { Collapse, IconButton } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import { useRef } from 'react';

import classes from './WidgetsContainer.module.css';

import { useWidgetsEffect } from '../../hooks/useWidgetsEffect';
import { useWidgetsStyles } from '../../hooks/useWidgetsStyles';
import { IWidgetContainerProps } from '../../utils/types';
import CodeModal from '../CodeModal/CodeModal';
import CssEditor from '../CssEditor/CssEditor';

function WidgetsContainer({ widgetType, eventId }: IWidgetContainerProps) {
  const widgetsRef = useRef(null);
  const [widgetsStyle, setWidgetsStyle] = useWidgetsStyles(widgetsRef);
  useWidgetsEffect(widgetsStyle, widgetType);

  const isEventIdValid = eventId && eventId.length === 36;

  return (
    <>
      {isEventIdValid ? (
        <div className={classes.wrapper} key={`${widgetType}_${eventId}`}>
          <div style={{ width: '66%' }}>
            {/*@ts-ignore*/}
            <dealroomevent-widgets
              typeWidget={widgetType}
              eventId={eventId}
              ref={widgetsRef}
            />
          </div>
          <div className={classes.container}>
            <div className={classes.containerTitle}>
              <p>Here is a field to write your own css code for widgets ▼</p>
            </div>
            <CssEditor setWidgetsStyle={setWidgetsStyle} />
            <div className={classes.containerBtn}>
              <CodeModal
                btnStyle={{ color: '#e0dada', borderColor: '#e0dada' }}
              />
            </div>
          </div>
        </div>
      ) : (
        <h1 className={classes.containerEmpty}>Enter event ID</h1>
      )}
    </>
  );
}

export default WidgetsContainer;
