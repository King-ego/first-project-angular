export interface Person {
  id: string
  firstName: string
  lastName: string
  description: string
  nation: string
  isActive: boolean
}

export interface GetPerson {
  data: Person[]
  text: string
}

export interface GetOnlyPerson {
  data: Person
  text: string
}
