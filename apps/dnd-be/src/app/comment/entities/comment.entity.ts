import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type CommentDocument = any & Comment & Document;

@Schema({collection: 'comment'})
export class Comment {
  public _id: any = undefined;
  @Prop() public spellsDictionaryId: string = undefined;
  @Prop() public user: string = undefined;
  @Prop() public note: string = undefined;
  @Prop() public stars: number = undefined;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
