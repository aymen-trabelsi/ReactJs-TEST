import { IPartnerPresenter } from '@adapters/presenters/interfaces/iPartner'
import { IPartnerCategoryPresenter } from '@adapters/presenters/interfaces/iPartnerCategory';

export default interface IPresenters {
  partner: IPartnerPresenter
  partnerCategory: IPartnerCategoryPresenter
}