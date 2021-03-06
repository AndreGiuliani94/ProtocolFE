import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailListComponent } from './component/mail-list/mail-list.component';
import { FormComponent } from './component/form/form.component';
import { MobileListComponent } from './component/mobile-list/mobile-list.component';
import { MailDetailsComponent } from './component/mail-details/mail-details.component';


const routes: Routes = [
  { path: '', component: MobileListComponent },
  { path: 'list', component: MailListComponent },
  { path: 'form', component: FormComponent },
  { path: 'mobile', component: MobileListComponent },
  { path: 'details/:id', component: MailDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
