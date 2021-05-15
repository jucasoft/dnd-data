import {Prop} from '@nestjs/mongoose';

export class Source {
  @Prop() public rulebook: string = undefined;
  @Prop() public page: number = undefined;
}
