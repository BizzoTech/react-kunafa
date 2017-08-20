import platform from 'platform';

const {description, layout, ua} = platform;

export default {
  description,
  layout,
  user_agent: ua,
  architecture: platform.os.architecture,
  osFamily: platform.os.family,
  device_unique_id: "browser_session"
}
