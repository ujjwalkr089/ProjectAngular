import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  templateUrl: 'homepage.component.html',
})
export class HomepageComponent implements OnInit {

  form: FormGroup;
    showModal: boolean;
    loading = false;
    submitted = false;
    returnUrl: string;

    form1: FormGroup;
    showModal1: boolean;
    loading1 = false;
    submitted1 = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
        // private alertService1: AlertService
    ) { }

    // tslint:disable-next-line: typedef
     show()
     {
       this.showModal = true;
     }

      // tslint:disable-next-line: typedef
     hide()
      {
        this.showModal = false;
        window.location.reload();
      }

      // tslint:disable-next-line: typedef
     show1()
     {
       this.showModal1 = true;
     }

      // tslint:disable-next-line: typedef
     hide1()
      {
        this.showModal1 = false;
        window.location.reload();
      }


    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.form1 = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    // convenience getter for easy access to form fields
    // tslint:disable-next-line: typedef
    get f() { return this.form.controls; }
    // tslint:disable-next-line: typedef
    get f1() { return this.form1.controls; }

    // tslint:disable-next-line: typedef
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        if (this.submitted)
       {
         this.showModal = false;
        }

        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    // tslint:disable-next-line: typedef
    onSubmit1() {
      this.submitted1 = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form1.invalid) {
          return;
      }
      if (this.submitted1)
      {
        this.showModal1 = false;
      }

      this.loading1 = true;
      this.accountService.register(this.form1.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../home'], { relativeTo: this.route });
                  window.location.reload();
              },
              error => {
                  this.alertService.error(error);
                  this.loading1 = false;
                  window.location.reload();
              });
  }
}
