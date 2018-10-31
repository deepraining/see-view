import jQuery from 'jquery';
import { error, warn } from './logger';

const bind = (obj, key, methodName) => {
  const noDelegating = key.slice(0, 1) === '!'; // no event delegating

  const realKey = noDelegating ? key.slice(1) : key;

  const keyArray = realKey.split(/\s+/g);

  if (keyArray.length < 2) {
    error(`invalid event key: ${key}`);
    return;
  }

  const eventName = keyArray.shift();

  const selectors = keyArray.join(' ');

  const method = obj[methodName];

  if (selectors === 'window') {
    jQuery(window).on(eventName, e => {
      method.call(obj, e);
    });
  } else if (selectors === 'document') {
    jQuery(document).on(eventName, e => {
      method.call(obj, e);
    });
  } else if (noDelegating) {
    jQuery(selectors).on(eventName, e => {
      method.call(obj, e);
    });
  } else {
    jQuery(document).on(eventName, selectors, e => {
      method.call(obj, e);
    });
  }
};

export default obj => {
  if (!obj) return;

  const { events } = obj;

  if (!events) {
    warn('missing events field in imported object', obj);
    return;
  }

  Object.keys(events).forEach(key => {
    const methodName = events[key];

    if (!methodName) return;
    if (typeof obj[methodName] !== 'function') {
      warn(`not found ${methodName} method in imported object`, obj);
      return;
    }

    bind(obj, key, methodName);
  });
};
