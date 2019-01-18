class AsyncLocalStorage {

  getItem(key, defaultValue = null) {
    return new Promise((resolve, reject) => {
      if (key in localStorage) {
        const obj = JSON.parse(localStorage.getItem(key));
        resolve(obj);
      }
      else {
        reject(defaultValue)
      }
    });
  }

  setItem(key, val) {
    return new Promise((resolve) => {
      const item = val;
      localStorage.setItem(key, JSON.stringify(item));
      resolve();
    });
  }

  removeKey(key) {
    return new Promise((resolve, reject) => {
      if (key in localStorage) {
        localStorage.removeItem(key);
        resolve()
      }
      else {
        reject();
      }
    });
  }

  has(key) {
    return new Promise((resolve, reject) => {
      if (key in localStorage) {
        const obj = JSON.parse(localStorage.getItem(key));
        resolve(true);
      } 
      else {
        reject(false);
      }
    });
  }

  clear() {
    return new Promise((resolve) => {
      localStorage.clear();
      resolve();
    });
   }

  keys() {
    return new Promise((resolve) => {
      resolve(Object.keys(localStorage));  
    });
  }

}

module.exports = BaseApi;