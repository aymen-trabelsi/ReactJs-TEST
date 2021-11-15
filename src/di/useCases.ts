import IRepositories from './interfaces/iRepositories'
import IUseCases from './interfaces/iUseCases'
import PartnerUseCase from '@domains/useCases/Partner'

export default (repositories: IRepositories): IUseCases => {
  return {
    partner: new PartnerUseCase(repositories.partner),
  }
}