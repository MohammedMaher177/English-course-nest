/* eslint-disable prettier/prettier */
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSessionDTO {
  @IsDate()
  date: Date;
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  images: string[];
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  videos: string[];
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  songs: string[];
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  docs: string[];
}
export class UpdateSessionDTO {
  @IsDate()
  @IsOptional()
  date: Date;
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ArrayMinSize(0)
  images: string[];
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ArrayMinSize(0)
  videos: string[];
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ArrayMinSize(0)
  songs: string[];
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ArrayMinSize(0)
  docs: string[];
}
