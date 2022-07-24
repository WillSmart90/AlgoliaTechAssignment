
var italianCount = 0;

let restaurantList = require('./resources/dataset/restaurants_list.json');

for (let i = 0; i < restaurantList.length; i++) {
    if (restaurantList[i].type_of_cuisine.includes('Italian')) {
        italianCount++;
    }
}

global.document = new JSDOM('./AlgoliaTechAssignment/index.html').window.document;
console.log(italianCount);
const placeholder = JSON.stringify(italianCount);
console.log(placeholder);
//document.getElementById('italian').innerHTML = placeholder