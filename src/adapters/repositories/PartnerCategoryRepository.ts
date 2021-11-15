import { IHttp } from '@adapters/infrastructures/interfaces/iHttp'
import { IPartnerCategoryData, IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory'
import PartnerCategory from '@domains/entities/PartnerCategory'
import { IPartnerCategoryRepository } from './interfaces/iPartnerCategoryRepository'

class PartnerCategoryRepository implements IPartnerCategoryRepository {

  constructor(readonly http: IHttp) {}
  
  async getPartnersCategories(): Promise<Array<IPartnerCategoryEntity>> {

    const response = await this.http.request({
      method: "GET",
      url: "https://recette2.lepotcommuntest.fr/partnersCategories",
    });

    if(response) {
      return response.map((partnerCategory: IPartnerCategoryData) => new PartnerCategory(partnerCategory))
    }
    return [];
  }

}

export default PartnerCategoryRepository