import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class PaginationParams {
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  skip?: number;

  offset?: number;

  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;
}
