import { IPartnerEntity } from '@domains/entities/interfaces/iPartner'
import { IPartnerUseCase } from '@domains/useCases/interfaces/iPartnerUseCase'
import { IPartnerPresenter } from './interfaces/iPartner'

class PartnerPresenter implements IPartnerPresenter {

  constructor(
    private readonly useCases: IPartnerUseCase
  ) {}

  async getPartners(): Promise<Array<IPartnerEntity>> {
    return await this.useCases.getPartners()
  }

}


export default PartnerPresenter