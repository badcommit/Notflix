import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../core/service/auth/auth.service";
import {Auth, emptyAuth} from "../../../core/service/auth";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  auth: Auth = emptyAuth

  authSubscription!: Subscription
  constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef, private router: Router){

  }
  ngOnInit() {
    this.authSubscription = this.authService.auth$.subscribe((auth) => {
      console.log('what is auth')
      console.log(auth)
      this.auth = auth
      this.changeDetectorRef.markForCheck()
    })
  }

  signOut(){
    this.authService.logout()
    this.router.navigate(['/home'])
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe()
    }
  }

}
