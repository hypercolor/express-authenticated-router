import * as express from 'express'
import { IRoute, Router } from 'express'

export interface IAuthenticatedRouterOptions {
  authHandler?: any
  controllerGenerator?: any
}

export class AuthenticatedRoute {
  private route: IRoute

  constructor(routePrefix: string, router: express.Router, private opts: IAuthenticatedRouterOptions) {
    this.route = router.route(routePrefix)
  }

  public get(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.get(this.opts.authHandler, handler)
    } else {
      this.route.get(handler)
    }
    return this
  }

  public post(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.post(this.opts.authHandler, handler)
    } else {
      this.route.post(handler)
    }
    return this
  }

  public put(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.put(this.opts.authHandler, handler)
    } else {
      this.route.put(handler)
    }
    return this
  }

  public patch(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.patch(this.opts.authHandler, handler)
    } else {
      this.route.patch(handler)
    }
    return this
  }

  public delete(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.delete(this.opts.authHandler, handler)
    } else {
      this.route.delete(handler)
    }
    return this
  }

  public all(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.all(this.opts.authHandler, handler)
    } else {
      this.route.all(handler)
    }
    return this
  }

  public options(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.options(this.opts.authHandler, handler)
    } else {
      this.route.options(handler)
    }
    return this
  }

  public head(handler: any) {
    handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    if (this.opts.authHandler) {
      this.route.head(this.opts.authHandler, handler)
    } else {
      this.route.head(handler)
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
