import {
  Components,
  createCognitiveServicesSpeechServicesPonyfillFactory,
  createDirectLine,
  createStore,
  ReactWebChat
} from 'botframework-webchat';
import React, { memo, useEffect, useMemo, useState } from 'react';
import './App.css';

const { Composer } = Components;

function App() {
  const [directLine, setDirectLine] = useState<ReturnType<typeof createDirectLine>>();
  const webSpeechPonyfillFactory = useMemo(
    () =>
      createCognitiveServicesSpeechServicesPonyfillFactory({
        credentials: {
          region: '<SpeechServiceRegion>',
          subscriptionKey: '<SpeechServiceSubscriptionKey>'
        }
      }),
    []
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    (async function () {
      const res = await fetch('<BotTokenEndpoint>', { method: 'GET', signal });

      const { token } = await res.json();

      signal.aborted || setDirectLine(createDirectLine({ token }));
    })();

    return () => abortController.abort();
  }, [setDirectLine]);

  const composerProps = {
    directLine: directLine,
    webSpeechPonyfillFactory,
    className: 'chatBot',
    styleOptions: {
      speechRecognitionContinuous: true
    }
  };

  return (
    !!directLine && (
      <>
        <div className="container">
          <h1>Welcome to the Voice Chatbot</h1>
        </div>
        <div id="webchat">
          <ReactWebChat {...composerProps} />
        </div>
      </>
    )
  );
}

export default memo(App);
