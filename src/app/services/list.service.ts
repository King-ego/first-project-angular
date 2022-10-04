import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

import { GetOnlyPerson, GetPerson, PostPerson } from '../interface/Person'

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly urlApi = environment.apiUrl

  constructor(private readonly http: HttpClient) {}

  public getpersons(): Observable<GetPerson> {
    return this.http.get<GetPerson>(this.urlApi)
  }

  public getonlyperson(id: string): Observable<GetOnlyPerson> {
    return this.http.get<GetOnlyPerson>(`${this.urlApi}/${id}`)
  }

  public postperson(person: PostPerson): Observable<PostPerson> {
    return this.http.post<PostPerson>(this.urlApi, person)
  }

  public patchperson(id: string, person: PostPerson): Observable<PostPerson> {
    return this.http.patch<PostPerson>(`${this.urlApi}/${id}`, person)
  }

  public removeperson(id: string): Observable<{ text: string }> {
    return this.http.delete<{ text: string }>(`${this.urlApi}/${id}`)
  }
}
