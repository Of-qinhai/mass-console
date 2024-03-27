import {Pagination} from '@/types/pagenation';
export type Playground = {
  id: number;
  name: string;
  description: string;
  type: string;
  coverUrl: string;
  inputUrl: string;
  paramTemplate?: string;
  paramMapping?: string;
  formData?: string;
  formUiData?:string;
  extraData?: string;
  codeUrl: string;
  pricingPath: string;
  ruleEngine: string;
  roles: string[];
  fast: boolean;
  cloud: boolean;
  typeDefaultForm: boolean;
  sort: number;
};


export interface PlaygroundPage{
  records:Playground[];
  pagination:Pagination;
}
