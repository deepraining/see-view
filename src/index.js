import { error } from './util/logger';
import bind from './bind';

export default obj => {
  if (!obj) return;

  const { events } = obj;

  if (!events) {
    error('missing "events" field in imported object.', obj);
    return;
  }

  Object.keys(events).forEach(key => {
    const methodName = events[key];

    if (!methodName) return;
    if (typeof obj[methodName] !== 'function') {
      error(`not found "${methodName}" method in imported object.`, obj);
      return;
    }

    bind(obj, key, methodName);
  });
};
