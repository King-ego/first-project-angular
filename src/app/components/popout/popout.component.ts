import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-popout',
  templateUrl: './popout.component.html',
  styleUrls: ['./popout.component.scss'],
})
export class PopoutComponent implements OnInit {
  @Input() isShowPopOut!: boolean

  @Output() onRemove: EventEmitter<boolean | undefined> = new EventEmitter()
  @Output() onHide: EventEmitter<boolean | undefined> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  public confirm() {
    this.onRemove.emit()
  }

  public cancel() {
    this.onHide.emit()
  }
}
