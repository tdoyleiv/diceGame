"use strict"
	let campaign = {
		win:100,
		days:30,
		siegePoints:0,
	}
	let battle = {
		exhaustion:300,
		sniperFire:350,
		sickness:250,
		engineering:200,
	}
	let army = {
		manpower:75000,
	}
	let enemyArmy = {
		manpower:60000,
	}
	let counter = {
		starve:0,
		naval:0,
		arty:0,
		trench:0,
	}
	

function selectStarve(){
	let diceSize = 4;
    strategyOutcome(diceSize);
}
function selectNaval(){
	let diceSize = 6;
	strategyOutcome(diceSize);
}
function selectBombard(){
	let diceSize = 10;
	strategyOutcome(diceSize);
}
function selectIntrench(){
	let diceSize = 12;
	strategyOutcome(diceSize);
}
function selectAssault(){
	let diceSize = 20;
	strategyOutcome(diceSize);
}
function dayCounter(){
	campaign.days--;
}
function strategyOutcome(diceSize){
	dayCounter();
	let roll = Math.floor(Math.random() * diceSize) + 1;
		switch(diceSize){	
			case 4:
				counter.starve++;
				if (counter.starve <= 8){
				campaign.siegePoints += roll;
				army.manpower -= battle.sickness;
				alert("We've gained " + roll + " siege points and lost " + battle.sickness + " men from malaria, sir.");
				break;
				}
				else{
					alert("General, the men don't have enough whiskey to just sit around and wait for the enemy to starve!")
				}
				break;
			case 6:
				counter.naval++;
				if (counter.naval <= 4){
				army.manpower -= battle.sickness;
				campaign.siegePoints += roll;
				alert("We've gained " + roll + " siege points and lost "  + battle.sickness + " men from malaria, sir.");
				break;
				}
				else{
					alert("Admiral Porter reports the gunboats are out of ammunition, sir.")
				}
				break;
			case 10:
				counter.arty++;
				if (counter.arty <= 4){
				army.manpower -= battle.exhaustion;
				campaign.siegePoints += roll;
				alert("We've gained " + roll + " siege points and lost "  + battle.exhaustion + " men from exhaustion, sir.");
				break;
				}
				else{
					alert("The batteries report all caissons as empty, sir");
				}
				break;
			case 12:
				counter.trench++;
				if (counter.trench <= 5){
				army.manpower -= (battle.engineering + battle.sniperFire);
				campaign.siegePoints += roll;
				alert("We've gained " + roll + " siege points and lost "  + battle.engineering + " men from exhaustion and " + battle.sniperFire + " men from enemy snipers, sir.");
				break;
				}
				else{
					alert("Major Tweeddale reports that our intrenchments are practically touching their breastworks. Our boys can play cards with the rebels, sir.");
				}
				break;
			case 20:
				let enemyRoll = Math.floor(Math.random() * 8) + 1;
				let attack =  roll - ((campaign.win - campaign.siegePoints) / 4);
				if(attack > 0){
					army.manpower -= (battle.exhaustion + battle.sniperFire) + (enemyRoll * 20);
					campaign.siegePoints += (attack - enemyRoll);
				alert("We've gained " + (attack - enemyRoll) + " siege points and lost "  + battle.exhaustion + " men from exhaustion, " + battle.sniperFire + " men from enemy snipers and took " + (enemyRoll * 20) + " casualties in the assault, sir.")
				}
				else{
					let repulse = Math.abs(attack);
					army.manpower -= ((repulse * enemyRoll) + (battle.exhaustion + battle.sniperFire));
					alert("Sir, we've been repulsed! We've lost " + ((repulse * enemyRoll) + (battle.exhaustion + battle.sniperFire)) + " men! Raise our siege points before we try that again, general.")
				}
				break;
		}
    document.getElementById("siegeStatus").innerHTML = army.manpower;
	document.getElementById("siegeStatus2").innerHTML = campaign.siegePoints;
	document.getElementById("siegeStatus3").innerHTML = campaign.days;		
}