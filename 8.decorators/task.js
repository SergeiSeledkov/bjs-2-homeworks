function cachingDecoratorNew(func) {
  let cache = [];

  return function wrapper(...args) {
    const hash = args.join(',');
    let findIndexHash = cache.findIndex(item => item.hash === hash);

    if (findIndexHash !== -1 ) {
        return "Из кэша: " + cache[findIndexHash].value;
    } else {
        const result = func(...args);
        cache.push({hash, value:result});

        if (cache.length > 5) { 
          cache.shift();
        }

        return "Вычисляем: " + result;  
    }
  }
}

function debounceDecoratorNew(func, ms) {
  let timeout = null;
  let flag = false;

  return function wrapper() {
    if (timeout === null) {
      func();
      flag = true;
      timeout = setTimeout(() => flag = false, ms);
    } else {
      if (!flag) {
        func();
        flag = true;
        timeout = setTimeout(() => flag = false, ms);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => flag = false, ms);
      }
    }
  }
}

function debounceDecorator2(func, ms) {
  let timeout = null;
  let flag = false;
  let workCount = 0;

  function wrapper() {
    wrapper.count = ++workCount;

    if (timeout === null) {
      func();
      flag = true;
      timeout = setTimeout(() => flag = false, ms);
    } else {
      if (!flag) {
        func();
        flag = true;
        timeout = setTimeout(() => flag = false, ms);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => flag = false, ms);
      }
    }
  }

  return wrapper;
}