import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
      });
    }),
});
