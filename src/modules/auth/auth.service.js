import { eq } from "drizzle-orm";
import { db } from "../../db/db.js";
import { otpVerificationsTable } from "../../db/schema.js"

//generate 6 digit random otp.
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


//insert otp into database with validate mobile no.
export const sendOtpService = async (mobilenumber) => {
    const otpCode = generateOtp();
    const isUserExists = (await db.select({
        id: otpVerificationsTable.id
    }).from(otpVerificationsTable).where(eq(otpVerificationsTable.mobilenumber, mobilenumber)))[0];

    if (isUserExists) {
        await db.update(otpVerificationsTable).set({
            otpHash: otpCode,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        }).where(eq(otpVerificationsTable.id, isUserExists.id));
    } else {
        const otp = await db.insert(otpVerificationsTable).values({
            mobilenumber: mobilenumber,
            otpHash: otpCode,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        }).returning({
            id: otpVerificationsTable.id,
            mobilenumber: otpVerificationsTable.mobilenumber,
            otpHash: otpVerificationsTable.otpHash,
            expiresAt: otpVerificationsTable.expiresAt,
            verifiedAt: otpVerificationsTable.verifiedAt,
        });

        return otp;
    }
}