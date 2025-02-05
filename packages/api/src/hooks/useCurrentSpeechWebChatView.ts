import { useSelector } from './internal/WebChatReduxContext';

export default function useCurrentSpeechWebChatView(): string {
  return useSelector(({ currentSpeechWebChatView }) => currentSpeechWebChatView);
}
