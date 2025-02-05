import { useSelector } from './internal/WebChatReduxContext';

export default function useBotSpeaking(): boolean {
  return useSelector(({ botSpeaking }) => botSpeaking);
}
