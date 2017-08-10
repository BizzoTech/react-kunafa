const platform = require('platform');

export default {
  ...platform,
  device_unique_id: "browser_session"
}
