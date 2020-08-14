import * as express from 'express'
import { IRoute, RequestHandler, Router } from 'express'

type IControllerType = new (req: express.Request, res: express.Response, next: express.NextFunction) => any

export interface IAuthenticatedRouterOptions {
  middleware?: Array<RequestHandler>
  controllerBuilder?(controller: IControllerType): RequestHandler
}

export class AuthenticatedRoute {
  private route: IRoute
  private myMiddleware: Array<RequestHandler> = []

  constructor(routePrefix: string, router: express.Router, private opts: IAuthenticatedRouterOptions) {
    this.route = router.route(routePrefix)
  }

  public use(middleware: RequestHandler) {
    this.myMiddleware.push(middleware)
    return this
  }

  public get(controller: IControllerType | RequestHandler) {
    return this.handleMethod('get', controller)
  }

  public post(controller: IControllerType | RequestHandler) {
    return this.handleMethod('post', controller)
  }

  public put(controller: IControllerType | RequestHandler) {
    return this.handleMethod('put', controller)
  }

  public patch(controller: IControllerType | RequestHandler) {
    return this.handleMethod('patch', controller)
  }

  public delete(controller: IControllerType | RequestHandler) {
    return this.handleMethod('delete', controller)
  }

  public all(controller: IControllerType | RequestHandler) {
    return this.handleMethod('all', controller)
  }

  public options(controller: IControllerType | RequestHandler) {
    return this.handleMethod('options', controller)
  }

  public head(controller: IControllerType | RequestHandler) {
    return this.handleMethod('head', controller)
  }

  private handleMethod(name: string, handler: IControllerType | RequestHandler) {
    if (this.opts.controllerBuilder) {
      // handler MUST be a Controller type
      handler = this.opts.controllerBuilder(handler as IControllerType)
    }
    // handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    this.route[name](...this.buildMiddlewareArray(), handler)
    return this
  }

  private buildMiddlewareArray() {
    let handlers: Array<any> = []
    if (this.opts.middleware) {
      handlers = handlers.concat(this.opts.middleware)
    }
    return handlers.concat(this.myMiddleware)
  }
}

export class AuthenticatedRouter {
  public router: Router = express.Router()

  constructor(private readonly options?: IAuthenticatedRouterOptions) {
    this.options = options || {}
  }

  public static build(options: IAuthenticatedRouterOptions, builder: (router: AuthenticatedRouter) => void) {
    const router = new AuthenticatedRouter(options)
    builder(router)
    return router.router
  }

  public route(route: string) {
    return new AuthenticatedRoute(route, this.router, this.options!)
  }
}
