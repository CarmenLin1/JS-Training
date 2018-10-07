console.log('My first js file ever written on this laptop!');
//Section 5 15-20 Object exercise
/*
    note to myself:
    Ojbect literal vs. Factory function vs. Constructor function to instantiate a new object
*/

//Exercise: Address, enumerate street, city and zipcode via a showAddress function
function showAddress(address){
    for (key in address){
        console.log(key, address[key]);
    }
}
const address = {
    street: 'Highmeadow Rd',
    city: 'Manhasset',
    zipcode: 11030
};
showAddress (address);

//Exercise: use Factory and Constructor functions to initiate the Address object instead of Object literal
function createAddress(street, city, zipCode){
    return {
        street,  //!! if key and value are the same, we could drop the key: as a simpler form
        city,
        zipCode
    };
}
console.log(createAddress('a','b',123));

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipcode=zipCode;
}
//console.log(new Address('g','h',333));


//Exercise: compare two addresses; function1 compare properties; function2 compare object reference
function areEqual(address1, address2){
    let isEqual = true;
    for (key in address1){
        console.log(key, address1[key]);
        if (address1[key]!=address2[key]){
            isEqual=false;
            break;
        }
    }
    return isEqual;

    // return address1.street===address2.street && address1.city===address2.city && address1.zipCode===address2.zipCode
}

function areSame(address1, address2){
    return address1===address2;
}

let address1=new Address('a','b',123);
let address2=new Address('a','b',123);

console.log(1,2, 'equal?' ,areEqual(address1,address2));
console.log(1,2,'same?', areSame(address1,address2));

let address3= address1;
address3.street='wwww';
console.log(1,3, 'equal?', areEqual(address1,address3));
console.log(1,3,'same?', areEqual(address1,address3));
console.log(2,3, 'equal?', areEqual(address2,address3));
console.log(2,3,'same?', areEqual(address2,address3));

//Constructor aim to have least param, some inferred ones are initialized within constructor instead of being passed in
function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.view =0,
    this.comments = [];
    this.isLive = false;
}

//Exercise: PriceRange button object
function priceRangeItem(label, tooltip, min, max){
    this.label = label;
    this.tooltip = tooltip;
    this.min = min;
    this.max = max;
}
let priceRange = [new priceRangeItem('$','inexpensive',0,10), new priceRangeItem('$$','moderate',11,25), new priceRangeItem('$$$','pricey',26,50)];
console.log(priceRange);

let resturants =[ {average:5}, {average:30}];

//find out restarant ranking