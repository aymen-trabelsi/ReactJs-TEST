import { IPartnerCategoryUseCase } from "./interfaces/iPartnerCategoryUseCase";
import { IPartnerCategoryEntity } from "@domains/entities/interfaces/iPartnerCategory";
import { IPartnerCategoryRepository } from "@adapters/repositories/interfaces/iPartnerCategoryRepository";

class PartnerCategoryUseCase implements IPartnerCategoryUseCase {
  constructor(private readonly partnerCategoryRepo: IPartnerCategoryRepository) {}

  async getPartnersCategories(): Promise<IPartnerCategoryEntity[]> {
    const partnersList = await this.partnerCategoryRepo.getPartnersCategories();

    return partnersList;
  }
}

export default PartnerCategoryUseCase;
