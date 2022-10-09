import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FirstComponentComponent } from './view/first-component/first-component.component'
import { ListRenderComponent } from './view/list-render/list-render.component'
import { ItemDetailComponent } from './view/item-detail/item-detail.component'
import { CreatePersonComponent } from './view/create-person/create-person.component'

const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
  },
  {
    path: 'list',
    component: ListRenderComponent,
  },
  {
    path: 'list/:id',
    component: ItemDetailComponent,
  },
  {
    path: 'createperson',
    component: CreatePersonComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
