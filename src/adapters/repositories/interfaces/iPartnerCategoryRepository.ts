import { IPartnerCategoryEntity } from "@domains/entities/interfaces/iPartnerCategory";

export interface IPartnerCategoryRepository {
  getPartnersCategories(): Promise<Array<IPartnerCategoryEntity>>
}