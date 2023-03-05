import {IRefillableStrategy} from "./refillable.strategy";

export class CountBasedRefillStrategy implements IRefillableStrategy{
	refill(){
		console.log("Refilling based on count");
	}
}
