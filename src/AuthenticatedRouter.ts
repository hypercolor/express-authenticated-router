import * as express from 'express'
import { IRoute, RequestHandler, Router } from 'express'

type IControllerType = new (req: express.Request, res: express.Response, next: express.NextFunction) => any

export interface IAuthenticatedRouterOptions {
  middlewares?: Array<RequestHandler>
  controllerGenerator?(controller: IControllerType): RequestHandler
}

export class AuthenticatedRoute {
  private route: IRoute
  private myMiddlewares: Array<RequestHandler> = []

  constructor(routePrefix: string, router: express.Router, private opts: IAuthenticatedRouterOptions) {
    this.route = router.route(routePrefix)
  }

  public use(middleware: RequestHandler) {
    this.myMiddlewares.push(middleware)
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
    if (this.opts.controllerGenerator) {
      // handler MUST be a Controller type
      handler = this.opts.controllerGenerator(handler as IControllerType)
    }
    // handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
    this.route[name](...this.buildMiddlewaresArray(), handler)
    return this
  }

  private buildMiddlewaresArray() {
    let handlers: Array<any> = []
    if (this.opts.middlewares) {
      handlers = handlers.concat(this.opts.middlewares)
    }
    return handlers.concat(this.myMiddlewares)
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
