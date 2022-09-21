function spy(func) {
    // your code
    let array = [];
    return function(...arguments) {
      let str = 'call:';
      arguments.reduce((item) => {
        str += item + ' ';
      }, str);
      array.push(str);
      func.calls = array;
      func(...arguments);
    }
  }

  function test(1,2) {
      
  }