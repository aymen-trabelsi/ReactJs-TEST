import IRepositories from './interfaces/iRepositories'
import PartnerRepository from '@adapters/repositories/PartnerRepository'
import PartnerCategoryRepository from '@adapters/repositories/PartnerCategoryRepository'

export default (): IRepositories => {
  return {
    partner: new PartnerRepository(),
    partnerCategory: new PartnerCategoryRepository()
  }
}