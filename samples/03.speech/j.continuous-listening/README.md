# Sample-Real-Time Audio Interaction Features

## Description

A simple page with Web Chat offers Continuous Listening, Barge-In functionality, and Acoustic Echo Cancellation (AEC) to enable seamless, dynamic, and high-quality audio interactions.

# Test out the hosted sample

- [Try out MockBot](https://pradeepbhagat.github.io/webchatcdn/web/index.html)

# How to run

- Fork this repository
- Navigate to `/Your-Local-WebChat/samples/03.speech/j.continuous-listening` in command line
- Run `npx serve`
- Browse to [http://localhost:5000/](http://localhost:5000/)

# Update the directline endpoint and cogCredentials

1. Set the token endpoint variable to the URL obtained from the Direct Line Speech channel in Microsoft Copilot Studio.
2. Configure cogCredentials with a JSON object containing the region and subscriptionKey. Below is a sample format. The subscriptionKey refers to the Azure Subscription key:

```json
{
   "region": "",
   "subscriptionKey": ""
}
```

# Things to try out

## Test Case 1: Continuous listening animation

### Action:

Start speech recognition by clicking on the microphone.

Grant browser microphone and audio permissions.

Interact with the browser as per bot specifics.

### Test:

The microphone should pulsate while the user speaks.

The chat bubble should animate when the bot speaks.

## Test Case 2: Text mode

### Action:

Start speech recognition by clicking on the microphone.

Grant browser microphone and audio permissions.

Interact with the browser as per bot specifics.

Click on the keyboard icon next to the microphone.

### Test:

Text mode is visible.

Chat transcript is displayed.

Clicking on the microphone again switches back to speech mode.

## Test Case 3: Barge In

### Action:

Start speech recognition by clicking on the microphone.

Grant browser microphone and audio permissions.

Interact with the browser as per bot specifics.

Interrupt the bot while it speaks with another question.

### Test:

The bot should stop speaking.

The bot initiates processing again, and a new response is displayed.
