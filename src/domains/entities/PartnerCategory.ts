import {
  IPartnerCategoryEntity,
  IPartnerCategoryData,
} from "@domains/entities/interfaces/iPartnerCategory";

class PartnerCategory implements IPartnerCategoryEntity {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _nameKey: string;

  constructor(params: IPartnerCategoryData) {
    this._id = params.partnerCategoryID;
    this._name = params.nameKeyPC;
    this._nameKey = params.namePC;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get nameKey() {
    return this._nameKey;
  }
}

export default PartnerCategory;
