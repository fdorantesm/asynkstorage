class AsyncLocalStorage {

  getItem(key, defaultValue = null) {
    return new Promise((resolve, reject) => {
      if (key in localStorage) {
        let val
        try {
          val = JSON.parse(localStorage.getItem(key))
        }
        catch (e) {
          val = localStorage.getItem(key)
        } 

        resolve(val)
        
      }
      else {
        resolve(defaultValue)
      }
    })
  }

  setItem(key, val) {
    return new Promise((resolve) => {
      val = Object.isExtensible(val) ? JSON.stringify(val) : val
      localStorage.setItem(key, val)
      resolve()
    });
  }

  removeItem(key) {
    return new Promise((resolve, reject) => {
      if (key in localStorage) {
        localStorage.removeItem(key)
        resolve()
      }
      else {
        reject()
      }
    });
  }

  has(key) {
    return new Promise((resolve, reject) => {
      if (key in localStorage) {
        const obj = JSON.parse(localStorage.getItem(key))
        resolve(true)
      } 
      else {
        reject(false)
      }
    })
  }

  clear() {
    return new Promise((resolve) => {
      localStorage.clear()
      resolve()
    })
   }

  keys() {
    return new Promise((resolve) => {
      resolve(Object.keys(localStorage))
    })
  }

}

module.exports = new AsyncLocalStorage
