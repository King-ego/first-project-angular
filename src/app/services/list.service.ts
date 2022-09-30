import { Animal } from 'src/app/interface/Animal'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animals: Animal[], animal: Animal): Animal[] {
    console.log('animal in animals')

    return animals.filter((a) => animal.name !== a.name)
  }
}
