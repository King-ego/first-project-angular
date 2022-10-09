import { Component, OnInit } from '@angular/core'

import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
})
export class CreatePersonComponent implements OnInit {
  protected firstName: string = ''
  protected lastName: string = ''
  protected description: string = ''
  protected nation: string = ''

  constructor(private readonly service: ListService) {}

  ngOnInit(): void {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault()
    const person = {
      firstName: this.firstName,
      lastName: this.lastName,
      description: this.description,
      nation: this.nation,
      isActive: false,
    }

    this.service.postperson(person).subscribe((person) => console.log(person))
  }
}
