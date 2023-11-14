/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Food Delivery Ionic 7 And Laravel
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class LeaveGuard implements CanDeactivate<ComponentCanDeactivate> {
  constructor(public util: UtilService) { }
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    console.log('ok closed this stufff');
    this.util.ejectMsg();
    return true;
  }
};
