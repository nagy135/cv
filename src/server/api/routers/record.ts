import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const recordRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.record.findMany({ where: { userId: input.userId } });
    }),
  getById: publicProcedure
    .input(z.object({ userId: z.string(), id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.db.record.findFirst({
        where: { userId: input.userId, id: input.id },
        include: { profile: true, educations: true, experiences: true },
      });
    }),
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        firstName: z.string(),
        lastName: z.string(),
      }),
    )
    .query(({ input: { firstName, lastName, userId }, ctx }) => {
      return ctx.db.record.create({
        data: {
          userId,
          profile: {
            create: {
              firstName,
              lastName,
            },
          },
        },
      });
    }),
});

export type RecordRouterInput = inferRouterInputs<typeof recordRouter>;
export type RecordRouterOutput = inferRouterOutputs<typeof recordRouter>;
