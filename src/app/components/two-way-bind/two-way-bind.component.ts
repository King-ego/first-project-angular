import { ThisReceiver } from '@angular/compiler'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.scss'],
})
export class TwoWayBindComponent implements OnInit {
  name: string = ''
  cel: string = ''
  age: string = ''
  andress: string = ''

  persons: { name: string; cel: string; andress: string; age: number }[] | [] =
    []

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: SubmitEvent): void {
    event.preventDefault()

    this.persons = [
      ...this.persons,
      {
        name: this.name,
        age: Number(this.age),
        andress: this.andress,
        cel: this.cel,
      },
    ]

    this.name = ''
    this.cel = ''
    this.age = ''
    this.andress = ''

    console.log(this.persons)
  }
}
