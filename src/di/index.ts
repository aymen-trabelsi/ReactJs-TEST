import IPresenters from './interfaces/iPresenters'
import repositories from './repositories'
import customUseCases from './useCases'
import presenters from './presenters'

const cRepositorires = repositories()
const cUseCases = customUseCases(cRepositorires)
const cPresenters = presenters(cUseCases)

export default {
  partner: cPresenters.partner,
} as IPresenters