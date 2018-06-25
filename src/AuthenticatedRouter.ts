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

  public patch(handler: any) {
    if (this.authHandler){
      this.route.patch(this.authHandler, handler);
    } else {
      this.route.patch(handler);
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

  public all(handler: any) {
    if (this.authHandler){
      this.route.all(this.authHandler, handler);
    } else {
      this.route.all(handler);
    }
    return this;
  }

  public options(handler: any) {
    if (this.authHandler){
      this.route.options(this.authHandler, handler);
    } else {
      this.route.options(handler);
    }
    return this;
  }

  public head(handler: any) {
    if (this.authHandler){
      this.route.head(this.authHandler, handler);
    } else {
      this.route.head(handler);
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
