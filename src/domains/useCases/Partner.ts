import { IPartnerUseCase } from "./interfaces/iPartnerUseCase";
import { IPartnerRepository } from "@adapters/repositories/interfaces/iPartnerRepository";
import { IPartnerEntity } from "@domains/entities/interfaces/iPartner";

class PartnerUseCase implements IPartnerUseCase {
  constructor(private readonly partnerRepo: IPartnerRepository) {}

  async getPartners(): Promise<Array<IPartnerEntity>> {
    const partnersList = await this.partnerRepo.getPartners();

    return partnersList;
  }
}

export default PartnerUseCase;
