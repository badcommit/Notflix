import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../service/auth/auth.service";

@Injectable()
export class RoleGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return new Observable((observer) => {
      this.authService.auth$.subscribe((auth) => {
        if(route.data.requiredRole && route.data.requiredRole.includes(auth.authResponse?.role)) {
          observer.next(true)
        } else {
          this.router.navigate(['/updateuser']);
          observer.next(false)
        }
      })
    })
  }

}
