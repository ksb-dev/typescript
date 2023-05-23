import { User } from './User'
import { Company } from './Company'
// type "parcel index.html" to run this app

import { CustomMap } from './CustomMap'

const user = new User()
const company = new Company()

const customMap = new CustomMap()
customMap.addMarker(user)
customMap.addMarker(company)
