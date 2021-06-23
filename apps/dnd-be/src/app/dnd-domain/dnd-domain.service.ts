import {Injectable} from '@nestjs/common';
import {CreateDndDomainInput} from './dto/create-dnd-domain.input';
import {UpdateDndDomainInput} from './dto/update-dnd-domain.input';
import {Observable, of} from 'rxjs';
import {DndDomain} from './entities/dnd-domain.entity';

@Injectable()
export class DndDomainService {
  create(createDndDomainInput: CreateDndDomainInput) {
    return 'This action adds a new dndDomain';
  }

  findAll(id: number): Observable<DndDomain[]> {
    return of([new DndDomain()]);
  }

  findOne(id: number) {
    return `This action returns a #${id} dndDomain`;
  }

  update(id: number, updateDndDomainInput: UpdateDndDomainInput) {
    return `This action updates a #${id} dndDomain`;
  }

  remove(id: number) {
    return `This action removes a #${id} dndDomain`;
  }
}
