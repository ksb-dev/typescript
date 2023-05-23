import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable {
  companyName: string
  catchPhrase: string
  location: {
    latitude: number
    longitude: number
  }

  constructor () {
    this.companyName = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
    }
  }

  markerContent (): string {
    return `
    <div>
      <h1 style="margin: 0"}>Company</h1>
      <h3 style="margin: 0 0 1rem 0">${this.companyName}</h3>
      <h1 style="margin: 0">About</h1>
      <h3 style="margin: 0">${this.catchPhrase}</h3>
    </div>
    `
  }
}
