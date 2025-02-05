import PropTypes from 'prop-types';
import React, { FC, useCallback } from 'react';

import Composer from '../Composer';
import { useMicrophoneButtonClick } from '../SendBox/MicrophoneButton';
import BotResponse from './BotResponse';
import BasicWebChat from '../BasicWebChat';
import { ComposerProps, hooks } from 'botframework-webchat-api';
import { useStyleToEmotionObject } from '../hooks/internal/styleToEmotionObject';
import { Constants } from 'botframework-webchat-core';
import classNames from 'classnames';
import Mic from './Mic';
import IconButton from '../SendBox/IconButton';
import Keyboard from './Keyboard';
import { useSetDictateState } from 'botframework-webchat-api/internal';

const ARIA_LANDMARK_ROLES = ['complementary', 'contentinfo', 'form', 'main', 'region'];

const { DictateState } = Constants;

type ReactSpeechWebChatProps = Readonly<
  Omit<ComposerProps, 'children'> & {
    className?: string;
    role?: 'complementary' | 'contentinfo' | 'form' | 'main' | 'region';
  }
>;

type ReactSpeechWebChatCoreProps = {
  className?: string;
  role?: 'complementary' | 'contentinfo' | 'form' | 'main' | 'region';
};

const PILL_STYLE = {
  width: '165px',
  height: '60px',
  display: 'flex',
  borderRadius: '26px',
  outlineColor: 'rgba(255, 255, 255, 0.3)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  outlineStyle: 'solid',
  outlineWidth: '0px',
  padding: '0 10px',
  boxSizing: 'border-box',
  gap: '15px',
  justifyContent: 'center',
  alignItems: 'center'
};

const SPEAKING_STYLE = {
  animation: 'glow 1s infinite alternate',
  '@keyframes glow': {
    '0%': {
      outlineWidth: '3px'
    },
    '20%': {
      outlineWidth: '4px'
    },
    '40%': {
      outlineWidth: '5px'
    },
    '60%': {
      outlineWidth: '6px'
    },
    '80%': {
      outlineWidth: '7px'
    },
    '100%': {
      outlineWidth: '8px'
    }
  }
};

const BUTTON_STYLE = {
  '&.webchat__icon-button': {
    width: '54px',
    height: '54px',
    borderRadius: '100%',
    cursor: 'pointer',
    '&:not(:disabled):not([aria-disabled="true"])': {
      '&:not(:active)': {
        '&:hover': {
          '& .webchat__icon-button__shade': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&:active': {
        '& .webchat__icon-button__shade': {
          backgroundColor: 'transparent'
        }
      }
    }
  }
};

const MIC_ANIMATION_STYLE = {
  '&.webchat__icon-button': {
    animation: 'innerShadow 1s infinite alternate',
    backgroundColor: '#95B8C3',
    border: '1px solid white',
    '& svg': {
      fill: '#01678C'
    },
    '@keyframes innerShadow': {
      '0%': {
        boxShadow: '0 0 20px 0 white inset'
      },
      '20%': {
        boxShadow: '0 0 18px 0 white inset'
      },
      '40%': {
        boxShadow: '0 0 16px 0 white inset'
      },
      '60%': {
        boxShadow: '0 0 14px 0 white inset'
      },
      '80%': {
        boxShadow: '0 0 12px 0 white inset'
      },
      '100%': {
        boxShadow: '0 0 10px 0 white inset'
      }
    }
  }
};

const KEYBOARD_STYLE = {
  fill: '#242424'
};

const {
  useCurrentSpeechWebChatView,
  useSetCurrentSpeechWebChatView,
  useShouldSpeakIncomingActivity,
  useDictateState,
  useBotSpeaking,
  useSetBotSpeaking
} = hooks;

const ReactSpeechWebChatCore: FC<ReactSpeechWebChatCoreProps> = ({ className, role }) => {
  const [dictateState] = useDictateState();
  const pillClassName = useStyleToEmotionObject()(PILL_STYLE) + '';
  const speakingClassName = useStyleToEmotionObject()(SPEAKING_STYLE) + '';
  const buttonClassName = useStyleToEmotionObject()(BUTTON_STYLE) + '';
  const micAnimationClassName = useStyleToEmotionObject()(MIC_ANIMATION_STYLE) + '';
  const keyboardClassName = useStyleToEmotionObject()(KEYBOARD_STYLE) + '';
  const currentView = useCurrentSpeechWebChatView();
  const setCurrentSpeechWebChatView = useSetCurrentSpeechWebChatView();
  const [, setShouldSpeakIncomingActivity] = useShouldSpeakIncomingActivity();
  const microphoneClick = useMicrophoneButtonClick();
  const botSpeaking = useBotSpeaking();
  const setBotSpeaking = useSetBotSpeaking();
  const setDictateState = useSetDictateState();

  const toggleChatView = useCallback(() => {
    setCurrentSpeechWebChatView('text');
    setBotSpeaking(false);
    setShouldSpeakIncomingActivity(false);
    setDictateState(DictateState.IDLE);
  }, [setBotSpeaking, setCurrentSpeechWebChatView, setDictateState, setShouldSpeakIncomingActivity]);

  return (
    <React.Fragment>
      {currentView === 'speech' ? (
        <div className={classNames(pillClassName, { [speakingClassName]: botSpeaking }, 'pillContainer')}>
          <BotResponse lastReadActivityID={'dummy'} />
          <IconButton
            // alt={localize('TEXT_INPUT_SPEAK_BUTTON_ALT')}
            className={classNames(buttonClassName, 'keyboardButton')}
            // disabled={disabled}
            onClick={toggleChatView}
          >
            <Keyboard className={classNames(keyboardClassName, 'keyboardIcon')} />
          </IconButton>
          <IconButton
            // alt={localize('TEXT_INPUT_SPEAK_BUTTON_ALT')}
            className={classNames(
              buttonClassName,
              {
                [micAnimationClassName]: dictateState === DictateState.DICTATING && !botSpeaking
              },
              'micButton'
            )}
            // disabled={disabled}
            onClick={microphoneClick}
          >
            <Mic />
          </IconButton>
        </div>
      ) : (
        <BasicWebChat className={className} role={role} />
      )}
    </React.Fragment>
  );
};

const ReactSpeechWebChat = ({ className, role, ...composerProps }: ReactSpeechWebChatProps) => (
  <Composer {...composerProps}>
    <ReactSpeechWebChatCore className={className} role={role} />
  </Composer>
);

ReactSpeechWebChat.defaultProps = {
  className: undefined,
  role: undefined,
  ...Composer.defaultProps
};

const {
  // Excluding "children" from ComposerProps.
  children: _,
  ...composerPropTypesWithoutChildren
} = Composer.propTypes;

ReactSpeechWebChat.propTypes = {
  className: PropTypes.string,
  // Ignoring deficiencies with TypeScript/PropTypes inference.
  // @ts-ignore
  role: PropTypes.oneOf(ARIA_LANDMARK_ROLES),
  ...composerPropTypesWithoutChildren
};

ReactSpeechWebChatCore.defaultProps = {
  className: '',
  role: 'complementary'
};

ReactSpeechWebChatCore.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  role: PropTypes.oneOf(ARIA_LANDMARK_ROLES)
};

export default ReactSpeechWebChat;

export type { ReactSpeechWebChatProps };
