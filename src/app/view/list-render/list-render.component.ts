import { Component, OnInit } from '@angular/core'
import { Person } from 'src/app/interface/Person'
import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animalDetails: string = ''

  persons!: Person[]
  personUpdate!: Person
  person_id_popOut!: string

  isShow: boolean = false
  isPopOut: boolean = false

  constructor(private readonly listservice: ListService) {
    this.getPerson()
  }

  ngOnInit(): void {}

  getPerson(): void {
    this.listservice
      .getpersons()
      .subscribe((persons) => (this.persons = persons.data.items))
  }

  public confirmRemove(id: string) {
    this.removePerson(id)
    this.isPopOut = false
  }

  public cancelRemove() {
    this.person_id_popOut = ''
    this.isPopOut = false
  }

  public openPopOut(id: string) {
    this.person_id_popOut = id
    this.isPopOut = true
  }

  removePerson(id: string): void {
    console.log('... removido', id)
    this.listservice.removeperson(id).subscribe((text) => console.log(text))
    this.getPerson()
  }

  updatePersonData(person: Person) {
    this.personUpdate = person
    this.setShow()
  }

  setShow() {
    this.isShow = !this.isShow
  }
}
