// Get the clock element
const clock = document.getElementById('clock');

// Get the time element
const time = clock.querySelector('#time');

// Get the set alarm elements
const setAlarm = document.getElementById('set-alarm');
const hourInput = setAlarm.querySelector('#hour');
const minuteInput = setAlarm.querySelector('#minute');
const secondInput = setAlarm.querySelector('#second');
const amPmInput = setAlarm.querySelector('#am-pm');
const setBtn = setAlarm.querySelector('#set-btn');

// Get the alarms elements
const alarms = document.getElementById('alarms');
const alarmList = alarms.querySelector('#alarm-list');

// Update the clock every second
setInterval(() => {
  // Get the current time
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = 'AM';

  // Convert to 12-hour format
  if (hour > 12) {
    hour -= 12;
    amPm = 'PM';
  }

  // Add leading zeroes to single-digit values
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  // Update the time element
  time.textContent = `${hour}:${minute}:${second} ${amPm}`;

  // Check each alarm in the list
  for (let i = 0; i < alarmList.children.length; i++) {
    const alarm = alarmList.children[i];
    const alarmTime = alarm.querySelector('.alarm-time').textContent;
    const alarmAmPm = alarm.querySelector('.alarm-am-pm').textContent;

   
