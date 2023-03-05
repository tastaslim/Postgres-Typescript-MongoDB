import {NotificationObserver} from "../observer/notification.observer";

export interface StockObservable{
	addSubscriber(observer: NotificationObserver);
	removeSubscriber(observer: NotificationObserver);
	notifySubscriber();
	getStockCount():number;
	setStockCount(newStock:number):void;
}
