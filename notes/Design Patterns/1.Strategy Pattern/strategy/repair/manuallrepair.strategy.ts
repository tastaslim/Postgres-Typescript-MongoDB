import {IRepairableStrategy} from "./repairable.strategy";

export class ManualRepairStrategy implements IRepairableStrategy{
	repair(){
		console.log("Manual repair");
	}
}
