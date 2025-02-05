import React, { memo } from 'react';
import useUnSpokenActivities from './useLastBotActivity';
import SpeakActivity from '../Activity/Speak';

// const { useSendBoxSpeechInterimsVisible } = hooks;

function BotResponse({ lastReadActivityID }) {
  const unSpokenActivities = useUnSpokenActivities();
  console.log('SPEAK', unSpokenActivities);

  return (
    <React.Fragment>
      {unSpokenActivities.map(activity => (
        <SpeakActivity activity={activity} key={activity.id} />
      ))}
    </React.Fragment>
  );

  //   return (
  //     !interimsVisible &&
  //     !!lastBotActivity &&
  //     lastBotActivity.id !== lastReadActivityID && (
  //       <div className="App-BotResponse">
  //         {lastBotActivity.channelData?.speak && <SpeakActivity activity={lastBotActivity} />}
  //       </div>
  //     )
  //   );
}

export default memo(BotResponse);
