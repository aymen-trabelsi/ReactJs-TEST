import { IPartnerEntity } from '@domains/entities/interfaces/iPartner';

export interface IPartnerPresenter {
  getPartners(): Promise<Array<IPartnerEntity>>
}
