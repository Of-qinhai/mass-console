import {UserStatus,UserRole} from '@/enums/user';
import {Pagination} from '@/types/pagenation';

export interface User{
  id:string;
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