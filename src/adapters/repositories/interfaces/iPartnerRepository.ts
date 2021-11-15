import { IPartnerEntity } from "@domains/entities/interfaces/iPartner"

export interface IPartnerRepository {
  getPartners(): Promise<Array<IPartnerEntity>>
}
