import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: { name: string; type: string }[] = [
    { name: 'Dorca', type: 'dog' },
    { name: 'Tom', type: 'cat' },
    { name: 'Frida', type: 'dog' },
    { name: 'Hog', type: 'horse' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
