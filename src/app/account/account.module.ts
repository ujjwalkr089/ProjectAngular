import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HomepageComponent } from './homepage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        CarouselModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        HomepageComponent
    ]
})
export class AccountModule { }
