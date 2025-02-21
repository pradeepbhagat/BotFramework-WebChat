
# Continuous Listening with Web Chat

This sample demonstrates how to customize Web Chat to enable continuous listening for speech input.

## Overview

Web Chat is a highly customizable web-based chat control for the Bot Framework. This sample shows how to extend Web Chat to continuously listen for speech input, allowing users to interact with the bot using voice commands without needing to click a button each time.

## Features

- Continuous speech recognition
- Customizable UI components
- Integration with Bot Framework

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Bot Framework Emulator (optional, for local testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```
3. 
Configure the Direct Line Speech channel in Microsoft Copilot Studio to obtain the token endpoint URL and cogCredentials. Update the `tokenEndpoint` and `cogCredentials` variables in the `src/App.js` file with the appropriate values.

```javascript
const tokenEndpoint = 'YOUR_DIRECT_LINE_SPEECH_TOKEN_ENDPOINT';
const cogCredentials = {
  region: 'YOUR_AZURE_REGION',
  subscription: 'YOUR_AZURE_SUBSCRIPTION_KEY'
};
```

4. Start the development server:

   ```bash
   npm start
   ```
   
5. Open the browser and navigate to `http://localhost:3000` to see the sample in action.

