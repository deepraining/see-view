import jQuery from 'jquery';
import { error } from './util/logger';

export default (obj, key, methodName) => {
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
