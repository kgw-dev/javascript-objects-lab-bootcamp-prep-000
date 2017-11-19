var receipes = {
  eggs: '3',
  flour: '3 cups'
  };

function updateObjectWithKeyAndValue (object, key, value) {
 return Object.assign({}, object, {[key]: value})
}
