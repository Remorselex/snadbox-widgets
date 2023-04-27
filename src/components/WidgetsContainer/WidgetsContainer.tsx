import Slide from '@mui/material/Slide';

import { useRef, useState } from 'react';

import classes from './WidgetsContainer.module.css';

import { useWidgetsEffect } from '../../hooks/useWidgetsEffect';
import { useWidgetsStyles } from '../../hooks/useWidgetsStyles';
import { IWidgetContainerProps } from '../../utils/types';
import CircleButton from '../CircleButton/CircleButton';
import CodeModal from '../CodeModal/CodeModal';
import CssEditor from '../CssEditor/CssEditor';

function WidgetsContainer({ widgetType, eventId }: IWidgetContainerProps) {
  const widgetsRef = useRef(null);
  const [widgetsStyle, setWidgetsStyle] = useWidgetsStyles(widgetsRef);
  useWidgetsEffect(widgetsStyle, widgetType);
  const [isOpen, setIsOpen] = useState(true);

  const btnRange = isOpen ? '28.5%' : '0';
  const blockWidth = isOpen ? '70%' : '100%';
  const isEventIdValid = eventId && eventId.length === 36;

  return (
    <>
      {isEventIdValid ? (
        <div className={classes.wrapper} key={`${widgetType}_${eventId}`}>
          <div
            style={{
              width: blockWidth,
              transition: '300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
          >
            {/*@ts-ignore*/}
            <dealroomevent-widgets
              typeWidget={widgetType}
              eventId={eventId}
              ref={widgetsRef}
            />
          </div>
          <div>
            <Slide
              mountOnEnter
              in={isOpen}
              direction='right'
              timeout={300}
              appear={false}
            >
              <div className={classes.container}>
                <div className={classes.containerTitle}>
                  <p>
                    Here is a field to write your own css code for widgets ▼
                  </p>
                </div>
                <div style={{ flex: 9 }}>
                  <CssEditor setWidgetsStyle={setWidgetsStyle} />
                </div>
                <div className={classes.containerBtn}>
                  <CodeModal
                    btnStyle={{ color: '#e0dada', borderColor: '#e0dada' }}
                  />
                </div>
              </div>
            </Slide>
            <div
              style={{
                position: 'fixed',
                left: btnRange,
                zIndex: 100,
                transition: '300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              }}
            >
              <CircleButton setIsOpen={setIsOpen} isOpen={isOpen} />
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
