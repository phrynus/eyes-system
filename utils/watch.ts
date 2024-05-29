const watch = (obj, prop, callback) => {
  if (prop in obj) {
    var old = obj[prop];
    Object.defineProperty(obj, prop, {
      enumerable: true,
      configurable: true,
      set: function (val) {
        var o = old;
        old = val;
        callback(val, o, obj);
      },
      get: function () {
        return old;
      }
    });
  } else {
    throw new Error("no such property: " + prop);
  }
};
export default watch;
