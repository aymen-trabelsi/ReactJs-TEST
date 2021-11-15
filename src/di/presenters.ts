import IUseCases from './interfaces/iUseCases'
import PartnerPresenter from '@adapters/presenters/Partner'

export default (useCases: IUseCases) => {
  return {
    partner: new PartnerPresenter(useCases.partner),
  }
}