import { IHttp } from "@adapters/infrastructures/interfaces/iHttp";
import {
  IPartnerData,
  IPartnerEntity,
} from "@domains/entities/interfaces/iPartner";
import Partner from "@domains/entities/Partner";
import { IPartnerRepository } from "./interfaces/iPartnerRepository";

class PartnerRepository implements IPartnerRepository {
  constructor(readonly http: IHttp) {}

  async getPartners(): Promise<Array<IPartnerEntity>> {
    const response = await this.http.request({
      method: "GET",
      url: "https://recette2.lepotcommuntest.fr/undefined/partners",
    });

    if (response?.partners) {
      return response.partners.map(
        (partner: IPartnerData) => new Partner(partner)
      );
    }
    return [];
  }
}

export default PartnerRepository;
