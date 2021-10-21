function cachingDecoratorNew(func) {
  let cache = [];

  return function wrapper(...args) {
    const hash = args.join(',');
    let findIndexHash = cache.findIndex(item => item.hash === hash);

    if (findIndexHash !== -1 ) {
      return "Из кэша: " + cache[findIndexHash].value;
    }
    
    const result = func(...args);
    cache.push({hash, value:result});

    if (cache.length > 5) { 
      cache.shift();
    }
    return "Вычисляем: " + result;  
  }
}

function debounceDecoratorNew(func, ms) {
  let timeout = null;
  let flag = false;

  return function wrapper(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => flag = false, ms);

    if (!flag) {
      func.apply(this, ...args);
      flag = true;
    }
  }
}

function debounceDecorator2(func, ms) {
  let timeout = null;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;

    clearTimeout(timeout);
    timeout = setTimeout(() => flag = false, ms);

    if (!flag) {
      func.apply(this, ...args);
      flag = true;
    }
  }

  return wrapper;
}