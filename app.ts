// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { registerRoutes, registerMiddleware } from './src/routes/indexRoutes';
// import express, { NextFunction, Response, Request } from 'express';
// import { logger } from './config/logger.config';
// import { ApiResponse } from './config/response.config';
// import { ValidationModel } from './middleware/joi/validationModel';
// const app = express();
// registerMiddleware(app);
// registerRoutes(app);
// app.use((err: Error | ValidationModel, req: Request, res: Response, next: NextFunction) => {
// 	if (err instanceof ValidationModel) {
// 		logger.error(`Error: ${JSON.stringify(err.messages)}`);
// 		return ApiResponse.unprocessableEntity(res, err.messages);
// 	} else {
// 		return ApiResponse.serverError(res, `Error: ${err}`);
// 	}
// });
//
// app.use((req: Request, res: Response, next: NextFunction) => ApiResponse.notFound(res, 'ROUTE_NOT_FOUND'));
//
// app.listen(3000, () => {
// 	logger.info('Server started on port 3000');
// });

// import {Paladin} from "./Design Patterns/1.Strategy Pattern/paladin";
// import {Superhero} from "./Design Patterns/1.Strategy Pattern/superhero";
// import {TimeBasedRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/timebasedrefill.strategy";
// import {CountBasedRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/countbasedrefill.strategy";
import {Paladin} from "./Design Patterns/1.Strategy Pattern/paladin";
// import {NoRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/norefill.strategy";
import {NoRepairStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/repair/norepair.strategy";
import {ExposedToClient} from "./Design Patterns/1.Strategy Pattern/main";
import {TimeBasedRefillStrategy} from "./Design Patterns/1.Strategy Pattern/strategy/refill/timebasedrefill.strategy";

const test= new ExposedToClient(new Paladin({refillBehaviour: new TimeBasedRefillStrategy(), repairBehaviour: new NoRepairStrategy()}));
test.refill();
