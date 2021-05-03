class operations {
  diffOpe() {
    var func1 = function (x) {
      console.log(x ** x);
    };
    var func2 = function (x, y) {
      console.log(x + y);
    };
    var func3 = function (x, y, z) {
      console.log(x * y * z);
    };
    if (arguments.length === 3) {
      return func3(arguments[0], arguments[1], arguments[2]);
    } else if (arguments.length === 2) {
      return func2(arguments[0], arguments[1]);
    } else if (arguments.length === 1) {
      return func1(arguments[0]);
    }
  }
}

var obj = new operations();
obj.diffOpe(10);
obj.diffOpe(15, 20);
obj.diffOpe(25, 3, 10);

function fn() {
  switch (arguments.length) {
    case 0:
      console.log("there are 0 arguments");
      break;
    case 1:
      console.log("there are 1 arguments");
      break;
  }
}

fn(5);
