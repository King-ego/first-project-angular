import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() chageNumber: EventEmitter<boolean | undefined> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    console.log('first')
    this.chageNumber.emit()
  }
}
