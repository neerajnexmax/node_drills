import { z } from "zod";

export const otpSendValidation = z.object({
    mobilenumber: z
        .string({
            required_error: "Mobile no is required"
        })
        .trim()
        .length(10, "Mobile no must be 10 digits")
        .regex(/^[6-9]\d{9}$/, "Invalid mobile number")
});