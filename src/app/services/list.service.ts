import { Animal } from 'src/app/interface/Animal'
import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'
import {
  GetOnlyPerson,
  GetPerson,
  Person,
  PostPerson,
} from '../interface/Person'

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly urlApi = 'http://localhost:3333/api/persons'
  constructor(private readonly http: HttpClient) {}

  remove(animals: Animal[], animal: Animal): Animal[] {
    console.log('animal in animals')

    return animals.filter((a) => animal.name !== a.name)
  }

  getpersons(): Observable<GetPerson> {
    return this.http.get<GetPerson>(this.urlApi)
  }

  getonlyperson(id: string): Observable<GetOnlyPerson> {
    return this.http.get<GetOnlyPerson>(`${this.urlApi}/${id}`)
  }

  postperson(person: PostPerson): Observable<PostPerson> {
    return this.http.post<PostPerson>(this.urlApi, person)
  }

  patchperson(id: string, person: PostPerson): Observable<PostPerson> {
    return this.http.patch<PostPerson>(`${this.urlApi}/${id}`, person)
  }

  removeperson(id: string): Observable<{ text: string }> {
    return this.http.delete<{ text: string }>(`${this.urlApi}/${id}`)
  }
}
