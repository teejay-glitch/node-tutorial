//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum) 
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

require('./7-mind-grenade')