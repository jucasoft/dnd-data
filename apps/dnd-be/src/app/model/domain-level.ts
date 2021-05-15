import {Prop} from '@nestjs/mongoose';

export class DomainLevel {
  @Prop() public domain: string = undefined;
  @Prop() public level: number = undefined;
}
