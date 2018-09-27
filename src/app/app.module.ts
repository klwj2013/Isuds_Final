import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { HttpClientModule } from '@angular/common/http';

import { AddressCardComponent } from './address-card/address-card.component';
import { IsudsComponent } from './isuds/isuds.component';
import { PricingComponent } from './pricing/pricing.component';
import { FAQComponent } from './faq/faq.component';
import { OneMoreThingComponent } from './one-more-thing/one-more-thing.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';



import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


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
    AddressCardComponent,
    IsudsComponent,
    PricingComponent,
    FAQComponent,
    OneMoreThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    MatSelectModule,
    MatExpansionModule,
    HttpClientModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

