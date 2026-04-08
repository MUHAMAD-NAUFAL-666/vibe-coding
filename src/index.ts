import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => "Hello Elysia with Bun!")
  .get("/users", async () => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error) {
      return { error: "Database connection failed. Make sure MySQL is running." };
    }
  })
  .post("/users", async ({ body }: { body: { name: string, email: string } }) => {
    try {
      const result = await db.insert(users).values({
        name: body.name,
        email: body.email,
      });
      return { success: true, result };
    } catch (error) {
      return { error: "Insert failed." };
    }
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
