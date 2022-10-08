export interface Person {
  id: string
  firstName: string
  lastName: string
  description: string
  nation: string
  isActive: boolean
}

export interface PostPerson {
  firstName: string
  lastName: string
  description: string
  nation: string
  isActive: boolean
}

export interface GetPerson {
  data: { items: Person[] }
  text: string
}

export interface GetOnlyPerson {
  data: Person[]
  text: string
}
