//
let bellow = {name: "bellow"};
const weakMap = new WeakMap();
weakMap.set(bellow, 'noah');
bellow = null;