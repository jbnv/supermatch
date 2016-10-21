function _supermatch(subject,object) {

  if (!subject && (subject !== 0) && (subject !== "")) {
    return false;
  }

  if (!object && (object !== 0) && (object !== "")) {
    return false;
  }

  if (subject === true) {
    return true;
  }

  if (object === true) {
    return true
  }

  if (typeof subject === "function") {
    return subject(object);
  }

  if (typeof object === "function") {
    return object(subject);
  }

  if (/number|string/.test(typeof subject)) {

    if (/number|string/.test(typeof object)) {
      return subject === object;
    }

    if (object instanceof RegExp) {
      return object.test(subject);
    }

    if (Array.isArray(object)) {
      return object.reduce(function (prev,cur) {
        return prev || _supermatch(subject,cur);
      },false);
    }

    return Object.keys(object).reduce(function (prev,cur) {
      return prev || (object[cur] && _supermatch(subject,cur));
    },false);

  }

  if (Array.isArray(subject)) {
    return subject.reduce(function (prev,cur) {
      return prev || _supermatch(cur,object);
    },false);
  }

  return Object.keys(subject).reduce(function (prev,cur) {
    return prev || _supermatch(cur,object);
  },false);

}

module.exports = _supermatch;
