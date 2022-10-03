import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { ListService } from 'src/app/services/list.service'

import { Person } from 'src/app/interface/Person'

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnInit {
  @Input() person!: Person
  @Input() show!: boolean
  @Output() onShow: EventEmitter<boolean | undefined> = new EventEmitter()

  protected firstName: string = ''
  protected lastName: string = ''
  protected description: string = ''
  protected nation: string = ''

  constructor(private readonly service: ListService) {}

  ngOnInit(): void {}

  closeModal(ev: MouseEvent): void {
    const target = ev.target
    const current = ev.currentTarget

    if (current !== target) return

    this.onShow.emit()
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault()
    const person = {
      firstName: this.firstName || this.person.firstName,
      lastName: this.lastName || this.person.lastName,
      description: this.description || this.person.description,
      nation: this.nation || this.person.nation,
      isActive: true,
    }

    this.service
      .patchperson(this.person.id, person)
      .subscribe((person) => console.log(person))

    document.location.reload()
  }
}
