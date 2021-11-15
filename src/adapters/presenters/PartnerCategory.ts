import { IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory'
import { IPartnerCategoryUseCase } from '@domains/useCases/interfaces/iPartnerCategoryUseCase'
import { IPartnerCategoryPresenter } from './interfaces/iPartnerCategory'

class PartnerCategoryPresenter implements IPartnerCategoryPresenter {

  constructor(
    private readonly useCases: IPartnerCategoryUseCase
  ) {}

  async getPartnersCategries(): Promise<Array<IPartnerCategoryEntity>> {
    return await this.useCases.getPartnersCategories()
  }

}


export default PartnerCategoryPresenter