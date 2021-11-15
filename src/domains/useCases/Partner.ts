import { IPartnerUseCase } from "./interfaces/IPartnerUseCase";
import { IPartnerRepository } from "adapters/repositories/interfaces/IPartnerRepository";
import { IPartnerEntity } from "@domains/entities/interfaces/iPartner";

class PartnerUseCase implements IPartnerUseCase {
  constructor(private readonly boardRepo: IPartnerRepository) {}

  async getPartners(): Promise<Array<IPartnerEntity>> {
    const partnersList = await this.boardRepo.getPartners();

    return partnersList;
  }
}

export default PartnerUseCase;
