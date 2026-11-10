import { IsObject, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name!: string;

  @IsString()
  source!: string;

  @IsObject()
  payload!: Record<string, unknown>;
}
