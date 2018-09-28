import { OneMoreThingComponent } from './one-more-thing/one-more-thing.component';
import { PricingComponent } from './pricing/pricing.component';
import { FAQComponent } from './faq/faq.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WhyisudsComponent } from './whyisuds/whyisuds.component';
import { SuccessstoryComponent } from './successstory/successstory.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestdisplayComponent } from './testdisplay/testdisplay.component';
import { IsudsComponent } from './isuds/isuds.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'whyisuds', component: WhyisudsComponent },
  { path: 'isuds', component: IsudsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'one-more-thing', component: OneMoreThingComponent },
  { path: 'successstory', component: SuccessstoryComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'test', component: TestdisplayComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
