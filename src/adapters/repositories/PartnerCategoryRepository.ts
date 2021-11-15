import { IPartnerCategoryData, IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory'
import PartnerCategory from '@domains/entities/PartnerCategory'
import { axiosClient } from '@services/Http'
import { IPartnerCategoryRepository } from './interfaces/iPartnerCategoryRepository'

class PartnerCategoryRepository implements IPartnerCategoryRepository {

  async getPartnersCategories(): Promise<Array<IPartnerCategoryEntity>> {
    const response = await axiosClient.get("https://preprod.lepotcommuntest.fr/partnersCategories")

    if(response?.data) {
      return response.data.map((partnerCategory: IPartnerCategoryData) => new PartnerCategory(partnerCategory))
    }
    return [];
  }

}

export default PartnerCategoryRepository