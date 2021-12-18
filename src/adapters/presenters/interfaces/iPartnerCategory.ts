import { IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory';

export interface IPartnerCategoryPresenter {
  getPartnersCategries(): Promise<Array<IPartnerCategoryEntity>>
}