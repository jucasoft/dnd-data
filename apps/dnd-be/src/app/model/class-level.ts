import {Prop} from '@nestjs/mongoose';

export class ClassLevel {
  @Prop() public class: string = undefined;
  @Prop() public level: number = undefined;
}
