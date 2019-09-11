// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../express

import * as express from 'express';
import { Router } from 'express';

export interface IAuthenticatedRouterOptions {
    authHandlers?: any;
    controllerGenerator?: any;
}
export class AuthenticatedRoute {
    constructor(routePrefix: string, router: express.Router, opts: IAuthenticatedRouterOptions);
    get(handler: any): this;
    post(handler: any): this;
    put(handler: any): this;
    patch(handler: any): this;
    delete(handler: any): this;
    all(handler: any): this;
    options(handler: any): this;
    head(handler: any): this;
}
export class AuthenticatedRouter {
    router: Router;
    constructor(options?: IAuthenticatedRouterOptions | undefined);
    route(route: string): AuthenticatedRoute;
}

