import { AdvencedComponent } from './components/account/account-body/advenced/advenced.component';
import { BillingComponent } from './components/account/account-body/billing/billing.component';
import { PaybackComponent } from './components/account/account-body/payback/payback.component';
import { NotificationComponent } from './components/account/account-body/notification/notification.component';
import { AccountComponent } from './components/account/account.component';
import { FollowingComponent } from './components/following/following.component';
import { TrandComponent } from './components/trand/trand.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AccountAccountComponent } from './components/account/account-body/accountAccount/accountAccount.component';
import { PrivacyComponent } from './components/account/account-body/privacy/privacy.component';
import { ConnactComponent } from './components/account/account-body/connact/connact.component';

const appRouts:Routes = [
  {path:"",component:MainComponent,
  children:[
    {path:"",component:BodyComponent},
    {path:"Trand",component:TrandComponent},
    {path:"Following",component:FollowingComponent},
    {path:"Account",component:AccountComponent,
    children:[
      {path:"account",component:AccountAccountComponent},
      {path:"notification",component:NotificationComponent},
      {path:"payback",component:PaybackComponent},
      {path:"privacy",component:PrivacyComponent},
      {path:"connact",component:ConnactComponent},
      {path:"billing",component:BillingComponent},
      {path:"advenced",component:AdvencedComponent}
    ]
  }
  ]
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BodyComponent,
    NavbarComponent,
    TrandComponent,
    FollowingComponent,
    AccountComponent,
    AccountAccountComponent,
    NotificationComponent,
    PaybackComponent,
    PrivacyComponent,
    ConnactComponent,
    BillingComponent,
    AdvencedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
