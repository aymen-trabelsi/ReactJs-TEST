import {
  IPartnerEntity,
  IPartnerData,
} from "@domains/entities/interfaces/iPartner";

class Partner implements IPartnerEntity {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _desc: string;
  private readonly _logoUrl: string;
  private readonly _imageUrl: string;
  private readonly _mobileImageUrl: string;
  private readonly _url: string;

  constructor(params: IPartnerData) {
    this._id = params.partnerID;
    this._name = params.namePAR;
    this._desc = params.desc;
    this._logoUrl = params.logoUrlPAR;
    this._mobileImageUrl = params.mobileImageUrlPAR;
    this._imageUrl = params.imageUrlPAR;
    this._url = params.urlPAR;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get desc() {
    return this._desc;
  }

  get logoUrl() {
    return this._logoUrl;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get mobileImageUrl() {
    return this._mobileImageUrl;
  }

  get url() {
    return this._url;
  }
}

export default Partner;
