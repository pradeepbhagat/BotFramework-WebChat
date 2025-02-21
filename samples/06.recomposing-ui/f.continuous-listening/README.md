# Customize Web Chat as a Breakaway Component

## Description

A simple React web site that creates and uses 3 pieces of custom UI:

-  [Microphone button](src/CustomMicrophoneButton.js): a `<button>` to start/stop microphone input
-  [Dictation interims](src/CustomDictationInterims.js): a `<p>` to show dictation interims
-  [Last bot activity](src/LastBotActivity.js): a new component which shows the last message activity from the bot

This app is built with `create-react-app`.

### Incompatible with Safari

Currently, this sample does not work on Safari. Safari requires explicit user interaction to start recording on the microphone or playing audio clips. This is being investigated in [issue #995](https://github.com/microsoft/BotFramework-WebChat/issues/995).

-  Speech-to-text: after the user clicks the microphone, Web Chat fetches an authorization token and then starts recording on the microphone
   -  The network call to fetch the token "disconnects" or separates the user interaction and recording. Thus, Safari considers the recording to not have explicit permission from the user and denies access
-  Text-to-speech: the synthesized text is played when the bot sends the message, without any user interaction
   -  Since the synthesized text is an audio clip and starts playing without user interaction, Safari denies access to speaker

