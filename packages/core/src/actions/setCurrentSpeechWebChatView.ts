const SET_CURRENT_SPEECH_WEB_CHAT_VIEW = 'SET_CURRENT_SPEECH_WEB_CHAT_VIEW';

export default function setCurrentSpeechWebChatView(currentSpeechWebChatView) {
  return {
    type: SET_CURRENT_SPEECH_WEB_CHAT_VIEW,
    payload: { currentSpeechWebChatView }
  };
}

export { SET_CURRENT_SPEECH_WEB_CHAT_VIEW };
