import * as express from 'express'
import { IRoute, Router } from 'express'

export interface IAuthenticatedRouterOptions {
  authHandlers?: any
  controllerGenerator?: any
}

export class AuthenticatedRoute {
  private route: IRoute

  constructor(routePrefix: string, router: express.Router, private opts: IAuthenticatedRouterOptions) {
    this.route = router.route(routePrefix)
  }

  public get(handler: any) {
    return this.handleMethod('get', handler)
  }

  public post(handler: any) {
    return this.handleMethod('post', handler)
  }

  public put(handler: any) {
    return this.handleMethod('put', handler)
  }

  public patch(handler: any) {
    return this.handleMethod('patch', handler)
  }

  public delete(handler: any) {
    return this.handleMethod('delete', handler)
  }

  public all(handler: any) {
    return this.handleMethod('all', handler)
  }

  public options(handler: any) {
    return this.handleMethod('options', handler)
  }

  public head(handler: any) {
    return this.handleMethod('head', handler)
  }

  private handleMethod(name: string, handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandlers && this.opts.authHandlers.constructor === Array) {
      this.route[name](...this.opts.authHandlers.concat([handler]))
    } else if (this.opts.authHandlers) {
      this.route[name](this.opts.authHandlers, handler)
    } else {
      this.route[name](handler)
    }
    return this
  }
}

export class AuthenticatedRouter {
  public router: Router = express.Router()

  constructor(private readonly options?: IAuthenticatedRouterOptions) {
    this.options = options || {}
  }

  public route(route: string) {
    return new AuthenticatedRoute(route, this.router, this.options!)
  }
}
