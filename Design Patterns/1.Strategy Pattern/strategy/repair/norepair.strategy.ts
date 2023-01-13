import {IRepairableStrategy} from "./repairable.strategy";

export class NoRepairStrategy implements IRepairableStrategy{
	repair(){
		console.log("No need to repair");
	}
}
