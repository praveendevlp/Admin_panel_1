/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Food Delivery Ionic 7 And Laravel
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  @ViewChild('myModal2') public myModal2: ModalDirective;
  @ViewChild('myModal3') public myModal3: ModalDirective;
  dummy = Array(10);
  dummyUsers = [];
  users: any[] = [];
  page: number = 1;

  first_name: any = '';
  last_name: any = '';
  email: any = '';
  password: any = '';
  mobile: any = '';
  country_code: any = '';
  constructor(
    public api: ApiService,
    public util: UtilService
  ) {
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  getAllUsers() {
    this.api.get_private('v1/administrator/getAll').then((data: any) => {
      this.dummy = [];
      if (data && data.status && data.status == 200 && data.success) {
        console.log(">>>>>", data);
        if (data && data.data.length > 0) {
          this.users = data.data;
          this.dummyUsers = data.data;
          console.log("===", this.users);
        }
      }
    }, error => {
      this.dummy = [];
      console.log('Error', error);
      this.util.apiErrorHandler(error);
    }).catch(error => {
      this.dummy = [];
      console.log('Err', error);
      this.util.apiErrorHandler(error);
    });
  }

  search(str: any) {
    this.resetChanges();
    console.log('string', str);
    this.users = this.filterItems(str);
  }

  protected resetChanges = () => {
    this.users = this.dummyUsers;
  }

  filterItems(searchTerm: any) {
    return this.users.filter((item) => {
      var name = item.first_name + " " + item.last_name;
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    console.log('clear');
    this.users = [];
    this.users = this.dummyUsers;
  }

  statusUpdate(item: any) {
    console.log(item);
    const text = item.status == 1 ? 'Deactive' : 'Active';
    Swal.fire({
      title: this.util.translate('Are you sure?'),
      text: this.util.translate('To') + ' ' + this.util.translate(text) + ' ' + this.util.translate('this user!'),
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: this.util.translate('Yes'),
      showCancelButton: true,
      cancelButtonText: this.util.translate('Cancel'),
      backdrop: false,
      background: 'white'
    }).then((data) => {
      if (data && data.value) {
        console.log('update it');
        const query = item.status == 1 ? 0 : 1;
        item.status = query;
        this.util.show();
        this.api.post_private('v1/administrator/update', item).then((datas) => {
          this.util.hide();
          this.util.success(this.util.translate('Updated'));
        }, error => {
          this.util.hide();
          console.log('Error', error);
          this.util.apiErrorHandler(error);
        }).catch(error => {
          this.util.hide();
          console.log('Err', error);
          this.util.apiErrorHandler(error);
        });
      }
    });
  }

  deleteItem(item: any) {
    console.log(item);
    Swal.fire({
      title: this.util.translate('Are you sure?'),
      text: this.util.translate('To Delete this user!'),
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: this.util.translate('Yes'),
      showCancelButton: true,
      cancelButtonText: this.util.translate('Cancel'),
      backdrop: false,
      background: 'white'
    }).then((data) => {
      if (data && data.value) {
        console.log('update it');
        this.util.show();
        this.api.post_private('v1/administrator/deleteAdministrator', item).then((datas) => {
          this.util.hide();
          this.util.success(this.util.translate('Deleted'));
          this.getAllUsers();
        }, error => {
          this.util.hide();
          console.log('Error', error);
          this.util.apiErrorHandler(error);
        }).catch(error => {
          this.util.hide();
          console.log('Err', error);
          this.util.apiErrorHandler(error);
        });
      }
    });
  }

  addNew() {
    this.myModal2.show();
  }

  saveChanges() {
    if (this.first_name == '' || this.last_name == '' || this.first_name == null || this.last_name == null || this.email == '' || this.email == null ||
      this.password == '' || this.password == null || this.country_code == '' || this.country_code == null || this.mobile == '' || this.mobile == null) {
      this.util.error(this.util.translate('All Fields are required'));
      return false;
    }
    console.log(typeof this.country_code)
    const cc: string = (this.country_code).toString();
    if (!cc.includes('+')) {
      this.country_code = '+' + this.country_code
    };
    const param = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      country_code: this.country_code,
      mobile: this.mobile
    };
    this.util.show();
    this.api.post_private('v1/administrator/adminNewAdmin', param).then((data: any) => {
      this.util.hide();
      console.log(data);
      if (data.status == 500) {
        this.util.error(data.message);
      }
      if (data && data.status && data.status == 200 && data.user && data.user.id) {
        this.util.success(this.util.translate('Account created successfully'));
        console.log(data);
        this.myModal2.hide();
        this.getAllUsers();
      } else if (data && data.error && data.error.msg) {
        this.util.error(data.error.msg);
      } else if (data && data.error && data.error.message == 'Validation Error.') {
        for (let key in data.error[0]) {
          console.log(data.error[0][key][0]);
          this.util.error(data.error[0][key][0]);
        }
      } else {
        this.util.error(this.util.translate('Something went wrong'));
      }
    }, error => {
      console.log(error);
      this.util.hide();
      if (error && error.error && error.error.status == 500 && error.error.message) {
        this.util.error(error.error.message);
      } else if (error && error.error && error.error.error && error.error.status == 422) {
        for (let key in error.error.error) {
          console.log(error.error.error[key][0]);
          this.util.error(error.error.error[key][0]);
        }
      } else {
        this.util.error(this.util.translate('Something went wrong'));
      }
    }).catch(error => {
      console.log(error);
      this.util.hide();
      if (error && error.error && error.error.status == 500 && error.error.message) {
        this.util.error(error.error.message);
      } else if (error && error.error && error.error.error && error.error.status == 422) {
        for (let key in error.error.error) {
          console.log(error.error.error[key][0]);
          this.util.error(error.error.error[key][0]);
        }
      } else {
        this.util.error(this.util.translate('Something went wrong'));
      }
    });
  }
}
