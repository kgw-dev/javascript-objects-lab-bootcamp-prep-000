var recipes = {
  eggs: '3',
  flour: '1 cup',
  sugar: '3 tablespoons'
}

function updateObjectWithKeyAndValue (object, key, value) {
 return object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
objects[key]=value;
 return object;
}

function deleteFromObjectByKey (object, key) {
delete object[key];
 return object;
}
