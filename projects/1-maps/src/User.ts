import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string
  location: {
    latitude: number
    longitude: number
  }

  constructor () {
    this.name = faker.person.firstName()
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
    }
  }

  markerContent (): string {
    return `
    <h1 style="margin: 0">User</h1>
    <h3 style="margin: 0">${this.name}</h3>
    `
  }
}
