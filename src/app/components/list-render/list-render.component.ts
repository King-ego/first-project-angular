import { Component, OnInit } from '@angular/core'
import { Animal } from 'src/app/interface/Animal'
import { Person } from 'src/app/interface/Person'
import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animalDetails: string = ''

  persons: Person[] = []
  personUpdate!: Person

  isShow: boolean = false

  constructor(private readonly listservice: ListService) {
    this.getPerson()
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`
  }

  getPerson(): void {
    this.listservice
      .getpersons()
      .subscribe((persons) => (this.persons = persons.data.items))
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
