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
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { DailyEventReferenceWhereUniqueInput } from "../../dailyEventReference/base/DailyEventReferenceWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumBookingStatus } from "./EnumBookingStatus";
import { BooleanFilter } from "../../util/BooleanFilter";
import { AttendeeListRelationFilter } from "../../attendee/base/AttendeeListRelationFilter";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { BookingReferenceListRelationFilter } from "../../bookingReference/base/BookingReferenceListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PaymentListRelationFilter } from "../../payment/base/PaymentListRelationFilter";
import { WorkflowReminderListRelationFilter } from "../../workflowReminder/base/WorkflowReminderListRelationFilter";

@InputType()
class BookingWhereInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DailyEventReferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailyEventReferenceWhereUniqueInput)
  @IsOptional()
  @Field(() => DailyEventReferenceWhereUniqueInput, {
    nullable: true,
  })
  dailyRef?: DailyEventReferenceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  uid?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => EventTypeWhereUniqueInput, {
    nullable: true,
  })
  eventType?: EventTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  customInputs?: JsonFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  startTime?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  endTime?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @IsOptional()
  @Field(() => EnumBookingStatus, {
    nullable: true,
  })
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  paid?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  cancellationReason?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AttendeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttendeeListRelationFilter)
  @IsOptional()
  @Field(() => AttendeeListRelationFilter, {
    nullable: true,
  })
  attendees?: AttendeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DestinationCalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => DestinationCalendarWhereUniqueInput, {
    nullable: true,
  })
  destinationCalendar?: DestinationCalendarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BookingReferenceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BookingReferenceListRelationFilter)
  @IsOptional()
  @Field(() => BookingReferenceListRelationFilter, {
    nullable: true,
  })
  references?: BookingReferenceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  rejectionReason?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  dynamicEventSlugRef?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  dynamicGroupSlugRef?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  rescheduled?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fromReschedule?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  recurringEventId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  smsReminderNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentListRelationFilter)
  @IsOptional()
  @Field(() => PaymentListRelationFilter, {
    nullable: true,
  })
  payment?: PaymentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WorkflowReminderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkflowReminderListRelationFilter)
  @IsOptional()
  @Field(() => WorkflowReminderListRelationFilter, {
    nullable: true,
  })
  workflowReminders?: WorkflowReminderListRelationFilter;
}

export { BookingWhereInput as BookingWhereInput };
