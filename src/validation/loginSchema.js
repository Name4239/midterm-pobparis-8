import { z } from "zod";
export const loginSchema = z.object({
  username: z.string().min(4, "ขั้นต่ำ 4 ตัว"),
  password: z.string().min(6, "ขั้นต่ำ 6 ตัว"),
});