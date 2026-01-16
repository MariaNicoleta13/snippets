import { PrismaClient } from "../app/generated/prisma/client";

console.log("####Creating a new snippet in the database...");

// portal
export const db = new PrismaClient();
db.snippet.create({
  data: {
    title: "Title!",
    code: "const abc = () => {}",
  },
});
