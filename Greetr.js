(function (global, $) {
  const Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };
  Greeter.prototype = {};
  Greeter.init = function (firstName, lastName, language) {
    const self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };
  Greeter.init.prototype = Greeter.prototype;
  global.Greetr = global.G$ = Greeter;
})(window, (JQuery = window.JQuery));
