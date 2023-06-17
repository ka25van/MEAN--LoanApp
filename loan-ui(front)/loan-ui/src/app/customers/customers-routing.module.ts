import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

//After creating the basic components for the customer, next we neeed to provide the path; i.e when add is clicked it goes to AddCustomerComponent
const routes: Routes = [{ path: '', component: ListCustomersComponent },

{ path: 'add', component: AddCustomerComponent },
{ path: 'delete/:id', component: DeleteCustomerComponent },
{ path: 'edit/:id', component: EditCustomerComponent },
{ path: 'search', component: SearchCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
