/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class HashedLinkCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  link!: string;

  @ApiProperty({
    required: true,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @Field(() => EventTypeWhereUniqueInput)
  eventType!: EventTypeWhereUniqueInput;
}

export { HashedLinkCreateInput as HashedLinkCreateInput };
