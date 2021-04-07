import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { OtzComponent } from './components/otz/otz.component';
import { UslComponent } from './components/usl/usl.component';
import { TrainingComponent } from './components/training/training.component';
import { SeminarComponent } from './components/seminar/seminar.component';
import { BlogComponent } from './components/blog/blog.component';

import { FreeComponent } from './components/free/free.component';
import { ThirdComponent } from './components/third/third.component';
import { OrderComponent } from './components/order/order.component';
import { SecondComponent } from './components/second/second.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRouts:Routes = [
  {path:"",component:BodyComponent},
  {path:"Free",component:FreeComponent},
  {path:"Blog",component:BlogComponent},
  {path:"Seminar",component:SeminarComponent},
  {path:"Training",component:TrainingComponent},
  {path:"Usl",component:UslComponent},
  {path:"Otz",component:OtzComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Order",component:OrderComponent},
  {path:"Info",component:InfoComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    SecondComponent,
    OrderComponent,
    ThirdComponent,
    FreeComponent,
    BlogComponent,
    SeminarComponent,
    TrainingComponent,
    UslComponent,
    OtzComponent,
    ContactComponent,
    InfoComponent
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
