import useWebChatAPIContext from './internal/useWebChatAPIContext';

export default function useSetCurrentSpeechWebChatView(): (currentSpeechWebChatView: string) => void {
  return useWebChatAPIContext().setCurrentSpeechWebChatView;
}
