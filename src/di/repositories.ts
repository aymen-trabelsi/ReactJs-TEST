import IRepositories from './interfaces/iRepositories'
import PartnerRepository from '@adapters/repositories/PartnerRepository'

export default (): IRepositories => {
  return {
    partner: new PartnerRepository()
  }
}