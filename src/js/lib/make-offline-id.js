const OFFLINE_ID_PREFIX = 'offline_';
const POSSIBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function makeOfflineId() {
  let text = '';

  for (let i = 0; i < 5; i += 1) {
    text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
  }
  return OFFLINE_ID_PREFIX + text;
}


export default makeOfflineId;
