import {IRefillableStrategy} from "./strategy/refill/refillable.strategy";
import {IRepairableStrategy} from "./strategy/repair/repairable.strategy";

export abstract class Soldier{

	abstract fight();
	abstract move();
	refillBehaviour : IRefillableStrategy;
	repairBehaviour : IRepairableStrategy;
}
