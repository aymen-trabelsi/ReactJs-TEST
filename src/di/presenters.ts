import IUseCases from './interfaces/iUseCases'
import PartnerPresenter from '@adapters/presenters/Partner'
import PartnerCategoryPresenter from '@adapters/presenters/PartnerCategory'

export default (useCases: IUseCases) => {
  return {
    partner: new PartnerPresenter(useCases.partner),
    partnerCategory: new PartnerCategoryPresenter(useCases.partnerCategory),
  }
}