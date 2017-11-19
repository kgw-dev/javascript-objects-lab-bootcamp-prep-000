var recipes = {
  eggs: '3',
  flour: '1 cup',
  sugar: '3 tablespoons'
}

function updateObjectWithKeyAndValue (object, key, value) {
 return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key]=value;
 return object;
}

function deleteFromObjectByKey (object, key) {
  var object = new newobject();
  delete newobject[key];
  return newobject;
}
