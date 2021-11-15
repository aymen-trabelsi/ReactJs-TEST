import { IPartnerEntity } from '@domains/entities/interfaces/iPartner';

export interface IPartnerUseCase {
  getPartners(): Promise<Array<IPartnerEntity>>
}
