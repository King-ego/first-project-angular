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
  animals: Animal[] = [
    { name: 'Dorca', type: 'dog', age: 1 },
    { name: 'Tom', type: 'cat', age: 2 },
    { name: 'Frida', type: 'dog', age: 3 },
    { name: 'Hog', type: 'horse', age: 4 },
  ]

  animalDetails: string = ''

  persons: Person[] = []

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
      .subscribe((persons) => (this.persons = persons.data))
  }

  removePerson(id: string): void {
    console.log('... removido', id)
    this.listservice.removeperson(id).subscribe((text) => console.log(text))
    this.getPerson()
  }

  removeAnimal(animals: Animal[], animal: Animal): void {
    console.log('remove animal')
    this.animals = this.listservice.remove(animals, animal)
  }
}
