/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DestinationCalendar } from "./DestinationCalendar";
import { DestinationCalendarCountArgs } from "./DestinationCalendarCountArgs";
import { DestinationCalendarFindManyArgs } from "./DestinationCalendarFindManyArgs";
import { DestinationCalendarFindUniqueArgs } from "./DestinationCalendarFindUniqueArgs";
import { CreateDestinationCalendarArgs } from "./CreateDestinationCalendarArgs";
import { UpdateDestinationCalendarArgs } from "./UpdateDestinationCalendarArgs";
import { DeleteDestinationCalendarArgs } from "./DeleteDestinationCalendarArgs";
import { Credential } from "../../credential/base/Credential";
import { User } from "../../user/base/User";
import { Booking } from "../../booking/base/Booking";
import { EventType } from "../../eventType/base/EventType";
import { DestinationCalendarService } from "../destinationCalendar.service";
@graphql.Resolver(() => DestinationCalendar)
export class DestinationCalendarResolverBase {
  constructor(protected readonly service: DestinationCalendarService) {}

  async _destinationCalendarsMeta(
    @graphql.Args() args: DestinationCalendarCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DestinationCalendar])
  async destinationCalendars(
    @graphql.Args() args: DestinationCalendarFindManyArgs
  ): Promise<DestinationCalendar[]> {
    return this.service.destinationCalendars(args);
  }

  @graphql.Query(() => DestinationCalendar, { nullable: true })
  async destinationCalendar(
    @graphql.Args() args: DestinationCalendarFindUniqueArgs
  ): Promise<DestinationCalendar | null> {
    const result = await this.service.destinationCalendar(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DestinationCalendar)
  async createDestinationCalendar(
    @graphql.Args() args: CreateDestinationCalendarArgs
  ): Promise<DestinationCalendar> {
    return await this.service.createDestinationCalendar({
      ...args,
      data: {
        ...args.data,

        credential: args.data.credential
          ? {
              connect: args.data.credential,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        booking: args.data.booking
          ? {
              connect: args.data.booking,
            }
          : undefined,

        eventType: args.data.eventType
          ? {
              connect: args.data.eventType,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DestinationCalendar)
  async updateDestinationCalendar(
    @graphql.Args() args: UpdateDestinationCalendarArgs
  ): Promise<DestinationCalendar | null> {
    try {
      return await this.service.updateDestinationCalendar({
        ...args,
        data: {
          ...args.data,

          credential: args.data.credential
            ? {
                connect: args.data.credential,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          booking: args.data.booking
            ? {
                connect: args.data.booking,
              }
            : undefined,

          eventType: args.data.eventType
            ? {
                connect: args.data.eventType,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DestinationCalendar)
  async deleteDestinationCalendar(
    @graphql.Args() args: DeleteDestinationCalendarArgs
  ): Promise<DestinationCalendar | null> {
    try {
      return await this.service.deleteDestinationCalendar(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Credential, {
    nullable: true,
    name: "credential",
  })
  async getCredential(
    @graphql.Parent() parent: DestinationCalendar
  ): Promise<Credential | null> {
    const result = await this.service.getCredential(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(
    @graphql.Parent() parent: DestinationCalendar
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Booking, {
    nullable: true,
    name: "booking",
  })
  async getBooking(
    @graphql.Parent() parent: DestinationCalendar
  ): Promise<Booking | null> {
    const result = await this.service.getBooking(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => EventType, {
    nullable: true,
    name: "eventType",
  })
  async getEventType(
    @graphql.Parent() parent: DestinationCalendar
  ): Promise<EventType | null> {
    const result = await this.service.getEventType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
