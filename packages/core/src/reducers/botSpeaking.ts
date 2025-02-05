import { SET_BOT_SPEAKING } from '../actions/setBotSpeaking';

const DEFAULT_STATE = false;

export default function botSpeaking(state = DEFAULT_STATE, { payload, type }) {
  switch (type) {
    case SET_BOT_SPEAKING:
      state = payload.botSpeaking;
      break;

    default:
      break;
  }

  return state;
}
