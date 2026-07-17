import { db } from "../../db/db.js";
import { otpVerificationsTable } from "../../db/schema.js"

//generate 6 digit random otp.
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


//insert otp into database with validate mobile no.
export const sendOtpService = async (mobilenumber) => {

    const otp = await db.insert(otpVerificationsTable).values({
        mobilenumber: mobilenumber,
        otpHash: generateOtp(),
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    }).returning({ id: true, mobilenumber: true, otpHash: true, expiresAt: true });

    return otp;
}