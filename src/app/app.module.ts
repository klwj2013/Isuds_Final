import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomComponent } from './bottom/bottom.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WhyisudsComponent } from './whyisuds/whyisuds.component';
import { SuccessstoryComponent } from './successstory/successstory.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestdisplayComponent } from './testdisplay/testdisplay.component';
//import { DateComponent } from './date/date.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { Date1Component } from './date1/date1.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { IsudsComponent } from './isuds/isuds.component';
import { PricingComponent } from './pricing/pricing.component';
import { FAQComponent } from './faq/faq.component';
import { OneMoreThingComponent } from './one-more-thing/one-more-thing.component';
@NgModule({
  declarations: [
    AppComponent,
    BottomComponent,
    ImgsliderComponent,
    TopComponent,
    HomeComponent,
    ProductComponent,
    WhyisudsComponent,
    SuccessstoryComponent,
    ContactusComponent,
    TestdisplayComponent,
    //DateComponent,
    //Date1Component,
    AddressCardComponent,
    IsudsComponent,
    PricingComponent,
    FAQComponent,
    OneMoreThingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

