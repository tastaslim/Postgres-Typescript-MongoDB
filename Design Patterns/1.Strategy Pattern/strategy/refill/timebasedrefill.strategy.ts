import {IRefillableStrategy} from "./refillable.strategy";

export class TimeBasedRefillStrategy implements IRefillableStrategy{
	refill(){
		console.log("Refilling based on time");
	}
}
