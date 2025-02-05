import useWebChatAPIContext from './internal/useWebChatAPIContext';

export default function useSetBotSpeaking(): (botSpeaking: boolean) => void {
  return useWebChatAPIContext().setBotSpeaking;
}
