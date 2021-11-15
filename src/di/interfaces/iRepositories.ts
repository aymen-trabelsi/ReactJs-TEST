import { IPartnerCategoryRepository } from "@adapters/repositories/interfaces/iPartnerCategoryRepository";
import { IPartnerRepository } from "@adapters/repositories/interfaces/iPartnerRepository";

export default interface IRepositories {
  partner: IPartnerRepository;
  partnerCategory: IPartnerCategoryRepository;
}
