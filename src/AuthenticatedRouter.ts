import * as express from 'express';
import {IRoute, Router} from 'express';



export class AuthenticatedRoute {

  private route: IRoute;

  constructor(routePrefix: string, router: express.Router, private authHandler?: any){
    this.route = router.route(routePrefix);
  }

  public get(handler: any) {
    if (this.authHandler){
      this.route.get(this.authHandler, handler);
    } else {
      this.route.get(handler);
    }
    return this;
  }

  public post(handler: any) {
    if (this.authHandler){
      this.route.post(this.authHandler, handler);
    } else {
      this.route.post(handler);
    }
    return this;
  }

  public put(handler: any) {
    if (this.authHandler){
      this.route.put(this.authHandler, handler);
    } else {
      this.route.put(handler);
    }
    return this;
  }

  public delete(handler: any) {
    if (this.authHandler){
      this.route.delete(this.authHandler, handler);
    } else {
      this.route.delete(handler);
    }
    return this;
  }

}


export class AuthenticatedRouter {


  public router: Router = express.Router();

  constructor(private authHandler?: any){

  }

  public route(route: string){

    return new AuthenticatedRoute(route, this.router, this.authHandler);
  }

}
