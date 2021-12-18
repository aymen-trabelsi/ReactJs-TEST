import { IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory';

export interface IPartnerCategoryUseCase {
  getPartnersCategories(): Promise<Array<IPartnerCategoryEntity>>
}