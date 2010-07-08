var special = /([\^\$\/\.\*\-\+\?\|\(\)\[\]\{\}\\])/;
function regexp_escape(expr) {
  return expr.replace(special, 'foo');
}

var sys = require('sys');

sys.puts(sys.inspect(regexp_escape('a-=')));