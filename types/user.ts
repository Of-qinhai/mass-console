import {UserStatus,UserRole} from '@/enums/user';
import {Pagination} from '@/types/pagenation';

export type User={
  id:string;
  name:string;
  email:string;
  balance:number;
  status:UserStatus;
  paymentMethodBindStatus?:boolean;
  role:UserRole;
}

export interface UserPage{
  records:User[];
  pagination:Pagination;
}