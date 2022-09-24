import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  person = { name: 'diego', age: '25' }
  andress = 'Rua'
  title = 'first-project-angular'
}
