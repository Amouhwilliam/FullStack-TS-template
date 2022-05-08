import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationWithSearchParams {
  @ApiProperty({ default: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset?: number;

  @ApiProperty({ default: 15 })
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  @IsString()
  search?: string;
}
