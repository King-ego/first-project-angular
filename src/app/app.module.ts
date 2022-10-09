import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { FirstComponentComponent } from './view/first-component/first-component.component'
import { ListRenderComponent } from './view/list-render/list-render.component'
import { ItemDetailComponent } from './view/item-detail/item-detail.component'
import { CreatePersonComponent } from './view/create-person/create-person.component'
import { ModalUpdateComponent } from './components/modal-update/modal-update.component'
import { MenuComponent } from './components/menu/menu.component'
import { PopoutComponent } from './components/popout/popout.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ListRenderComponent,
    ItemDetailComponent,
    CreatePersonComponent,
    ModalUpdateComponent,
    MenuComponent,
    PopoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
