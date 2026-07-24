import { sendOtpService } from "./auth.service.js";

export const sendOtpByUser = async (req, res) => {
    try {

        //call otp validate service.
        const result = await sendOtpService(req.body.mobilenumber);

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

