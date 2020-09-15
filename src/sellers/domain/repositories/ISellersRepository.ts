import { IRead } from '../../../shared/domain/repositories/IRead';
import { IWrite } from '../../../shared/domain/repositories/IWrite';

export interface ISellersRepository<ISeller>
  extends IRead<ISeller>,
    IWrite<ISeller> {}
