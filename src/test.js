function spy(func) {
    // your code
    let array = [];
    return function(args) {
      let str = 'call:';
      debugger;
      args.reduce((total,item) => {
        return total + item;
      }, str);
      array.push(str);
      func.calls = array;
      func(args);
    }
  }

  function test(a,b) {
    return a+b;
  }

  let newTest = spy(test);
  newTest([1, 2, 3, 4, 5]);

  console.log(newTest.calls);