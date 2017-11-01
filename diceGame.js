"use strict"
function battleConditions(){
let winCondition = 100
let siegePoints = 0
let manpower = 75,000
let exhaustion = 150
let sniperFire = 350
let attrition = 200
function starvation(){
	let diceSize = 4;
	return diceSize;
}
function navalBombard(){
	let diceSize = 6;
	return diceSize;
}
function bombard(){
	let diceSize = 10;
	return diceSize;
}
function intrench(){
	let diceSize = 12;
	return diceSize;
}
function assault(){
	let diceSize = 20;
	return diceSize;
}
function strategyOutcome(diceSize){
	if(diceSize === 4){
		let roll = Math.floor(Math.random() * diceSize) + 1;
		let max = 0
		    do{
			    roll += max;
				manpower -= attrition;
				roll += siegePoints;
	            return siegePoints;
				return manpower;
			}
			while(max <= 100);
	}
	else if(diceSize === 6){
		let roll = Math.floor(Math.random() * diceSize) + 1;
		let max = 0;
		    do{
				manpower -= exhaustion;
				roll += max;
				roll += siegePoints;
				return siegePoints;
				return manpower;
			}
			while(max <= 10);
	}
	else if(diceSize === 10){
		let roll = Math.floor(Math.random() * diceSize) + 1;
		let max = 0;
		    do{
				manpower -= exhaustion;
				roll += max
				roll += siegePoints;
				return siegePoints;
				return manpower;
			}
			while(max <= 20)
	}	
	else if(diceSize === 12){
		let roll = Math.floor(Math.random() * diceSize) + 1;
		let max = 0;
		    do{
				manpower -= (exhaustion + sniperFire);
				roll += max;
				roll += siegePoints;
				return siegePoints;
				return manpower;
			}
			while(max <= 40);
	}
	else{
		let roll = Math.floor(Math.random() * 20) + 1;
		let enemyRoll = Math.floor(Math.random() * 8) + 1;
		let max = 0
		let attack = 0;
		    do{
				attack = roll - ((winCondition - siegePoints) / 4);
				max += attack;
				    if(attack > 0){
						manpower -= (exhaustion + sniperFire);
						siegePoints += (attack - enemyRoll);
						return manpower;
						return siegePoints;
					}
					else{
						manpower -= ((Math.abs.attack * enemyRoll) + (exhaustion + sniperFire));
						return manpower;
					}
			}
			while(max <= 100);
	}		
						
						
}						
}