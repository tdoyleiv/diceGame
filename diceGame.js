"use strict"
let campaign = {
		win:100,
		days:50,
}
let battle = {
		exhaustion:250,
		sniperFire:350,
		sickness:100,
}
let army = {
		manpower:75000,
		siegePoints:0,
}

	document.getElementById("siegeStatus").innerHTML = army.manpower;
	document.getElementById("siegeStatus2").innerHTML = army.siegePoints;
	document.getElementById("siegeStatus3").innerHTML = campaign.days; 

function selectStarve(){
	let diceSize = 4;
	strategyOutcome(diceSize);
}
function selectNaval(){
	let diceSize = 6;
	strategyOutcome(diceSize)
}
function selectBombard(){
	let diceSize = 10;
	strategyOutcome(diceSize)
}
function selectIntrench(){
	let diceSize = 12;
	strategyOutcome(diceSize)
}
function selectAssault(){
	let diceSize = 20;
	strategyOutcome(diceSize)
}
function strategyOutcome(diceSize){
			function dayCounter(){
	            campaign.days--;
			}
					let roll = Math.floor(Math.random() * diceSize) + 1;
					switch(diceSize){	
						case 4:
							army.siegePoints += roll;
							army.manpower -= battle.attrition;
						case 6:
							army.manpower -= battle.exhaustion;
							army.siegePoints += roll;
						case 10:
							army.manpower -= battle.exhaustion;
							army.siegePoints += roll;
						case 12:
							army.manpower -= (battle.exhaustion + battle.sniperFire);
							army.siegePoints += roll;
						case 20:
							let enemyRoll = Math.floor(Math.random() * 8) + 1;
							let attack = 0;
									attack = roll - ((campaign.win - army.siegePoints) / 4);
										if(attack > 0){
											army.manpower -= (battle.exhaustion + battle.sniperFire);
											army.siegePoints += (attack - enemyRoll);
										}
										else{
											army.manpower -= ((Math.abs.attack * enemyRoll) + (battle.exhaustion + battle.sniperFire));
										}
					}					
}