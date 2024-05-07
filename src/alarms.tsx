/// <reference types="chrome"/>

// const STORAGE_KEY = "user-preference-alarm-enabled";

// export async function checkAlarmState() {
//   const { alarmEnabled } = await chrome.storage.get(STORAGE_KEY);

//   if (alarmEnabled) {
//     const alarm = await chrome.alarms.get("my-alarm");

//     if (!alarm) {
//       await chrome.alarms.create({ periodInMinutes: 1 });
//     }
//   }
// }

export async function createAlarm() {
    // Create an alarm so we have something to look at in the demo
    await chrome.alarms.create('break-ended-alarm', {
      delayInMinutes: 0.1,
      // periodInMinutes: 0.1
    });
}

export async function addListener() {
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(`ALARM TRIGGERED: ${alarm.name}`)
    chrome.alarms.clear(alarm.name)
  });
}