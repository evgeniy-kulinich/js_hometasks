var machine = {

	manufacture: 'LG',
	model:'machine_01',
	_condition: true,
	setCondition: function(newCondition) {
		if(typeof newCondition === 'boolean') {
			this._condition = newCondition;
			return newCondition;
		} else {
			alert('Please, repeat the action again! Сondition must be "true" or "false"');
		}
	}
}


function CoffeeMashine(type) {
	this.type = type;
};

CoffeeMashine.prototype = machine;

CoffeeMashine.prototype.makeCoffee = function() {
	if(machine._condition) {
		console.log('I can make ' + this.type + '.');
	} else {
		console.log('The machine is turned off');
	}
};




var latte = new CoffeeMashine('latte');
var americano = new CoffeeMashine('americano');
var espresso = new CoffeeMashine('espresso');



latte.makeCoffee();
americano.makeCoffee();
espresso.makeCoffee();


function Microwave(dish, time) {
	this.dish = dish;
	this.time = time;
}

Microwave.prototype = machine;

Microwave.prototype.cook = function(dish, time) {
	console.log('We have a ' + this.dish + ' : ' + 'The cooking time = ' + this.time + ' sec.');
}

Microwave.prototype.start = function(dish, time) {
	if(machine._condition) {
		var that = this;
		console.log('Start cooking ' + that.dish);
			setTimeout(function() {
				console.log('Your ' + that.dish + ' is ready!');
			}, time);
	} else {
		console.log('The machine is turned off');
	}
};



var potato = new Microwave('potato', 5000);
var meat = new Microwave('meat', 8000)

potato.cook('potato', 5000);
potato.start('potato', 5000);

meat.cook('meat', 8000);
meat.start('meat', 8000);
