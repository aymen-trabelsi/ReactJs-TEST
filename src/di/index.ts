import IPresenters from './interfaces/iPresenters'
import repositories from './repositories'
import customUseCases from './useCases'
import presenters from './presenters'
import infrastructures from './infrastructures'

const cInfrastructures = infrastructures()
const cRepositorires = repositories(cInfrastructures)
const cUseCases = customUseCases(cRepositorires)
const cPresenters = presenters(cUseCases)

export default {
  partner: cPresenters.partner,
  partnerCategory: cPresenters.partnerCategory
} as IPresenters