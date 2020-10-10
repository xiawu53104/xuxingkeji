const Util = {
  clone: function(obj, parent) {
    function isObj(obj) {
      return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
    }
    function isFunction(obj) {
      return typeof obj === 'function'
    }
    if(!isObj(obj)) {
      return obj
    }
  
    if(isFunction(obj)) {
      return obj.bind(parent)
    }
  
    const newObj = Array.isArray(obj) ? [...obj] : {...obj}
    
    Reflect.ownKeys(obj).forEach(key => {
      newObj[key] = isObj(newObj[key]) ? Util.clone(newObj[key], newObj) : newObj[key]
    })
    
    return newObj
  }
}

export default Util