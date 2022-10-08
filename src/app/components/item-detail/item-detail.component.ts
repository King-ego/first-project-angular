import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Person } from 'src/app/interface/Person'

import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  protected person!: Person[]
  protected isShow: boolean = false

  constructor(
    private readonly listservice: ListService,
    private readonly router: ActivatedRoute
  ) {
    this.getOnlyPerson()
  }

  ngOnInit(): void {}

  getOnlyPerson(): void {
    const id = String(this.router.snapshot.paramMap.get('id'))
    this.listservice
      .getonlyperson(id)
      .subscribe((person) => (this.person = person.data))
  }

  setShow() {
    this.isShow = !this.isShow
  }
}
