import IRepositories from './interfaces/iRepositories'
import IUseCases from './interfaces/iUseCases'
import PartnerUseCase from '@domains/useCases/Partner'
import PartnerCategoryUseCase from '@domains/useCases/PartnerCategory'

export default (repositories: IRepositories): IUseCases => {
  return {
    partner: new PartnerUseCase(repositories.partner),
    partnerCategory: new PartnerCategoryUseCase(repositories.partnerCategory),
  }
}