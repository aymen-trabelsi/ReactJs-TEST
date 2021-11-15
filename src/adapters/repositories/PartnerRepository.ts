import { IPartnerData, IPartnerEntity } from '@domains/entities/interfaces/iPartner'
import Partner from '@domains/entities/Partner'
import { axiosClient } from '@services/Http'
import { IPartnerRepository } from './interfaces/iPartnerRepository'

class PartnerRepository implements IPartnerRepository {

  async getPartners(): Promise<Array<IPartnerEntity>> {
    const response = await axiosClient.get("https://preprod.lepotcommuntest.fr/undefined/partners")

    if(response?.data) {
      return response.data.partners.map((partner: IPartnerData) => new Partner(partner))
    }
    return [];
  }

}

export default PartnerRepository