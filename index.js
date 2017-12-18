var recipes = {
  ingedients: "anything"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = {
    key: value
  };
  return Object.assign(newObj, object);
}