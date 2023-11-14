/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Food Delivery Ionic 7 And Laravel
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLanguagesComponent } from './manage-languages.component';

describe('ManageLanguagesComponent', () => {
  let component: ManageLanguagesComponent;
  let fixture: ComponentFixture<ManageLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageLanguagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ManageLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
