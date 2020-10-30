export interface IDescription {
  marketingName: string;
  technicalName: string;
  description: string;
}

export interface IConditions {
  portal: Portal;
  type: PromotionType;
  benefitAmount: number;
  startDate: string;
  finishDate: string;
  businessConditions?: boolean;
  connectWithOther?: boolean;
  basePriceAll?: boolean;
  backPromotion?: boolean;
}

export interface IPromotionForm {
  description: IDescription;
  conditions: IConditions;
}

export enum Portal {
  Porlat1,
  Portal2,
  Portal3
}

export const portalMap = new Map()
  .set(Portal.Porlat1, 'Portal 1')
  .set(Portal.Portal2, 'Portal 2')
  .set(Portal.Portal3, 'Portal 3');

export enum PromotionType {
  selling,
  advertising,
  'sales-promotion',
  'direct marketing publicity'
}

export const promotionMap = new Map()
  .set(PromotionType.selling, 'Selling')
  .set(PromotionType.advertising, 'Advertising')
  .set(PromotionType['sales-promotion'], 'Sales promotion')
  .set(PromotionType['direct marketing publicity'], 'Direct marketing publicity');
