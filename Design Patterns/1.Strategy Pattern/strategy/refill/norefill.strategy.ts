import {IRefillableStrategy} from "./refillable.strategy";

export class NoRefillStrategy implements IRefillableStrategy {
	refill() {
		console.log("No need to Refill");
	}
}
