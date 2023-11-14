/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Food Delivery Ionic 7 And Laravel
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SetupAuthGuard implements CanActivate {

  constructor(
    public api: ApiService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    return this.api.get_public('v1/users/get_admin').then((user: any) => {
      console.log('user', user);
      if (user && user.status == 200) {
        return true;
      } else {
        this.router.navigate(['/setup']);
      }
    }).catch(error => {
      console.log(error);
      this.router.navigate(['/setup']);
    });
  }
}
