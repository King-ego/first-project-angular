import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { FirstComponentComponent } from './components/first-component/first-component.component'
import { ParentDataComponent } from './components/parent-data/parent-data.component'
import { DirectivesComponent } from './components/directives/directives.component'
import { IfRenderComponent } from './components/if-render/if-render.component'
import { EventsComponent } from './components/events/events.component'
import { EmitterComponent } from './components/emitter/emitter.component'
import { ChangeNumberComponent } from './components/change-number/change-number.component'
import { ListRenderComponent } from './components/list-render/list-render.component'
import { PipeComponent } from './components/pipe/pipe.component'
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipeComponent,
    TwoWayBindComponent,
    ItemDetailComponent,
    CreatePersonComponent,
    ModalUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
