import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { FirstComponentComponent } from './components/first-component/first-component.component'
import { ListRenderComponent } from './components/list-render/list-render.component'
import { ItemDetailComponent } from './components/item-detail/item-detail.component'
import { CreatePersonComponent } from './components/create-person/create-person.component'
import { ModalUpdateComponent } from './components/modal-update/modal-update.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ListRenderComponent,
    ItemDetailComponent,
    CreatePersonComponent,
    ModalUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
