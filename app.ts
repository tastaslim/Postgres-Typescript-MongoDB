/* eslint-disable @typescript-eslint/no-unused-vars */
import { registerRoutes, registerMiddleware } from './src/routes/indexRoutes';
import express, { NextFunction, Response, Request } from 'express';
import { logger } from './config/logger.config';
import { ApiResponse } from './config/response.config';
import { ValidationModel } from './middleware/joi/validationModel';
const app = express();
registerMiddleware(app);
registerRoutes(app);
app.use((err: Error | ValidationModel, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ValidationModel) {
		logger.error(`Error: ${JSON.stringify(err.messages)}`);
		return ApiResponse.unprocessableEntity(res, err.messages);
	} else {
		return ApiResponse.serverError(res, `Error: ${err}`);
	}
});

app.use((req: Request, res: Response, next: NextFunction) => ApiResponse.notFound(res, 'ROUTE_NOT_FOUND'));

app.listen(3000, () => {
	logger.info('Server started on port 3000');
});

// import {Paladin} from "./Design Patterns/1.Strategy Pattern/paladin";
// import {Superhero} from "./Design Patterns/1.Strategy Pattern/superhero";
// import {TimeBasedRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/timebasedrefill.strategy";
// import {CountBasedRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/countbasedrefill.strategy";
// import { Paladin } from './Design Patterns/1.Strategy Pattern/paladin';
// // import {NoRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/norefill.strategy";
// import { NoRepairStrategy } from './Design Patterns/1.Strategy Pattern/strategy/repair/norepair.strategy';
// import { ExposedToClient } from './Design Patterns/1.Strategy Pattern/main';
// import { TimeBasedRefillStrategy } from './Design Patterns/1.Strategy Pattern/strategy/refill/timebasedrefill.strategy';
//
// const test = new ExposedToClient(
// 	new Paladin({ refillBehaviour: new TimeBasedRefillStrategy(), repairBehaviour: new NoRepairStrategy() })
// );
// test.refill();

// import {IphoneObservable} from "./Design Patterns/2.Observer Pattern/observable/iphone.observable";
// import {SMSObserver} from "./Design Patterns/2.Observer Pattern/observer/sms.observer";
// import {EmailObserver} from "./Design Patterns/2.Observer Pattern/observer/email.observer";
// import {MacbookObservable} from "./Design Patterns/2.Observer Pattern/observable/macbook.observable";

// const IphoneObs = new IphoneObservable();
// const macObs = new MacbookObservable();
// const observer1 = new SMSObserver(1234567890);
// const observer2 = new EmailObserver('1234567890@gamil.com');

// IphoneObs.addSubscriber(observer1);
// IphoneObs.addSubscriber(observer2);
// macObs.addSubscriber(observer2);
// IphoneObs.setStockCount(12);

// IphoneObs.removeSubscriber(observer1);

// IphoneObs.setStockCount(0);
// IphoneObs.setStockCount(1);
// console.log(`\n MACBOOK \n`)
// macObs.setStockCount(1);

// const regex = new RegExp(/\[,/);
// console.log(
// 	regex.test(
// 		'{"records":[,{"Id":1, "name":"Taslim", "rec_name": "DRDO[,"}, {"Id":2, "name":"Arif[,", "rec_name":"DSA"}]}'
// 	)
// // );
