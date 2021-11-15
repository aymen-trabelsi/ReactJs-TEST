import { IPartnerUseCase } from "@domains/useCases/interfaces/iPartnerUseCase";
import { IPartnerCategoryUseCase } from "@domains/useCases/interfaces/iPartnerCategoryUseCase";

export default interface IUseCases {
  partner: IPartnerUseCase
  partnerCategory: IPartnerCategoryUseCase
}