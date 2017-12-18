var recipes = {
  ingedients: "anything"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign ({}, object);
  newObj.key = value;
}