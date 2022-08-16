function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
  }
  return Object.keys(obj).length;
}
