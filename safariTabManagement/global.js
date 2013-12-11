var uuid = function () {
  var _uuid = ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }));
  return _uuid;
};

var Tab = function () {
  var _bar = new Bar();
  var _uuid = uuid();

  this.bar = _bar;
  this.id = _uuid;
}

var Bar = function () {
  var _dialog = new Dialog();
  this.dialog = _dialog;
}

var Dialog = function () {

};
