import { Component, OnInit } from '@angular/core'
import { Animal } from 'src/app/interface/Animal'
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

  constructor(private readonly listservice: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animals: Animal[], animal: Animal) {
    console.log('remove animal')
    this.animals = this.listservice.remove(animals, animal)
  }
}
