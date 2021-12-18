import IRepositories from './interfaces/iRepositories'
import PartnerRepository from '@adapters/repositories/PartnerRepository'
import PartnerCategoryRepository from '@adapters/repositories/PartnerCategoryRepository'
import IInfrastructures from './interfaces/iInfrastructures'

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    partner: new PartnerRepository(infrastructure.http),
    partnerCategory: new PartnerCategoryRepository(infrastructure.http)
  }
}