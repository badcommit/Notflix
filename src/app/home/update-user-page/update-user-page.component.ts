import {Component, OnDestroy} from '@angular/core';
import {ROLE} from "../../core/service/auth";
import {AuthService} from "../../core/service/auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: ['./update-user-page.component.scss']
})
export class UpdateUserPageComponent implements OnDestroy{
  sub!: Subscription
  constructor(private authService: AuthService, private router: Router) {
  }
  updateUser(role: ROLE){
    if(!!this.sub){
      this.sub.unsubscribe()
    }
    this.sub = this.authService.updateRole(role).subscribe(v => {
      if(v){
        this.router.navigate(['/movies'])
      }
    })

  }

  ngOnDestroy() {
    if(!!this.sub){
      this.sub.unsubscribe()
    }
  }

}
