import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'register', component:NewUserComponent},
 // {path : 'forgot-password', component:ForgotComponent},
  //{path : 'logout', component:LogoutComponent},
  {path : 'dashboard', component:DashboardComponent},

  
  
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
{ path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
 { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }, 
 { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },

  
  {path : '**', component:PageNotFoundComponent},//if it doesn't match any path then it must go to PageNotFound
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
