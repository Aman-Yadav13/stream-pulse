import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

//Nextjs -> hotreload -> creates bunch of prismaclients
//globalThis is not affected by hotreload , in production we do not use hot reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
