function rand(min, max) {
  if (max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (min + 1));
  }
}

export const getUID = function () {
  var alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var id = '';
  for (var i = 0; i < 7; i++) id += alpha.charAt(rand(0, 35));
  return id;
}
