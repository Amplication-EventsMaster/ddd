/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventType } from "../../eventType/base/EventType";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Membership } from "../../membership/base/Membership";

@ObjectType()
class Team {
  @ApiProperty({
    required: false,
    type: () => [EventType],
  })
  @ValidateNested()
  @Type(() => EventType)
  @IsOptional()
  eventTypes?: Array<EventType>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logo!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio!: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hideBranding!: boolean;

  @ApiProperty({
    required: false,
    type: () => [Membership],
  })
  @ValidateNested()
  @Type(() => Membership)
  @IsOptional()
  members?: Array<Membership>;
}

export { Team as Team };
