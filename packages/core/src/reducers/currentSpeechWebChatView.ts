import { SET_CURRENT_SPEECH_WEB_CHAT_VIEW } from '../actions/setCurrentSpeechWebChatView';

const DEFAULT_STATE = 'speech';

export default function currentSpeechWebChatView(state = DEFAULT_STATE, { payload, type }) {
  switch (type) {
    case SET_CURRENT_SPEECH_WEB_CHAT_VIEW:
      state = payload.currentSpeechWebChatView;
      break;

    default:
      break;
  }

  return state;
}
