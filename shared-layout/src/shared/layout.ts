
import { Route } from '@angular/router';

export interface LayoutRoute extends Route {
    data?: LayoutRouteData;
    children?: LayoutRoute[];
}

export interface LayoutRouteData {
    someProperty?: {
        someValue : number;
    };
}