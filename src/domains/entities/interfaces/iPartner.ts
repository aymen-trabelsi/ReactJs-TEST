import { IPartnerCategoryData, IPartnerCategoryEntity } from "./iPartnerCategory";

export interface IPartnerEntity {
  id: number;
  name: string;
  desc: string;
  logoUrl: string;
  imageUrl: string;
  mobileImageUrl: string;
  url: string;
  partnerCategories: IPartnerCategoryData;
}

export interface IPartnerData {
  partnerID: number;
  namePAR: string;
  desc: string;
  logoUrlPAR: string;
  mobileImageUrlPAR: string;
  imageUrlPAR: string;
  urlPAR: string;
  partnerCategories: IPartnerCategoryData;
}
