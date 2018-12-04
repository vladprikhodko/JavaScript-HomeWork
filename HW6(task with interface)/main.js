
var compareObjects = function (o1, o2, key) {
    if (!key) key = 'name';
    return o1[key] === o2[key] ? true : false;
}


var SIZES = [{
        name: 'small',
        price: 50,
        kk: 20
    },
    {
        name: 'large',
        price: 100,
        kk: 40
    }
];
var STUFFING = [{
		name: 'cheese',
		price: 10,
		kk: 20
	},
	{
		name: 'potato',
		price: 15,
		kk: 10
	},
	{
		name: 'salad',
		price: 20,
		kk: 5
	}
];
var TOPPING = [{
		name: 'spice',
		price: 15,
		kk: 0
	},
	{
		name: 'mayo',
		price: 20,
		kk: 5
	}
];

var Hamburger = function () {
    this._size = null;
    this._stuffing = null;
    this._toppings = [];
}

Hamburger.prototype.changeSize = function (size) {
    return this._size = size;
}

Hamburger.prototype.getSize = function () {
    return this._size;
}

Hamburger.prototype.changeStuffing = function (stuffing) {
    return this._stuffing = stuffing;
}

Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
}


Hamburger.prototype.getToppings = function () {
    return this._toppings;
}

Hamburger.prototype.addTopping = function (newTopping) {
    for (var i = 0; i < this._toppings.length; i++) {
        if (compareObjects(newTopping, this._toppings[i])) {
            console.log('This topping is already there');
            return false;
        }
    }
    this._toppings.push(newTopping);
    return newTopping;
}

Hamburger.prototype.removeTopping = function (newTopping) {
    for (var i = 0; i < this._toppings.length; i++) {
        if (compareObjects(newTopping, this._toppings[i])) {
            this._toppings.splice(i, 1);
            return newTopping;
        }
    }
    console.log('There is no such topping');
    return false;
}

Hamburger.prototype.calculatePrice = function () {
    var price = this._size.price + this._stuffing.price;
    for (var i = 0; i < this._toppings.length; i++) {
        price += this._toppings[i].price;
    }
    return price;
}

Hamburger.prototype.calculateKk = function () {
    var kk = this._size.kk + this._stuffing.kk;
    for (var i = 0; i < this._toppings.length; i++) {
        kk += this._toppings[i].kk;
    }
    return kk;
}


var burger2 = new Hamburger();

 var sizes = document.querySelectorAll('input[name="size"]');
 for (var i = 0; i < sizes.length; i++) {
     sizes[i].addEventListener('change', function () {
         var name = this.value;
         var size = null;
         for (var i = 0; i < SIZES.length; i++) {
             if (SIZES[i].name === name) {
                 size = SIZES[i];
             }
       }
         burger2.changeSize(size);
         console.log(burger2.getSize());
     })
 }

 var stuffing = document.querySelectorAll('input[name="stuffing"]');
 for (var i = 0; i < stuffing.length; i++) {
     stuffing[i].addEventListener('change', function () {
         var name = this.value;
         var stuffing = null;
         for (var i = 0; i < STUFFING.length; i++) {
             if (STUFFING[i].name === name) {
                 stuffing = STUFFING[i];
             }
       }
         burger2.changeStuffing(stuffing);
         console.log(burger2.getStuffing());
     })
 }

  var topping = document.querySelectorAll('input[name="topping"]'); 
 for (var i = 0; i < topping.length; i++) {
     topping[i].addEventListener('change', function () {
         var name = this.value;
         var topping = null;
         for (var i = 0; i < TOPPING.length; i++) {
             if (TOPPING[i].name === name) {
                 topping = TOPPING[i];
             }
       }
		 burger2.addTopping(topping);
         console.log(burger2.getToppings());
     })
 }

 var result = document.addEventListener('submit', function(){
	console.log(burger2.calculatePrice());
	console.log(burger2.calculateKk());

})

