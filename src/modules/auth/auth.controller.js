import { sendOtpService } from "./auth.service.js";
import { otpSendValidation } from "./auth.validation.js";


export const sendOtpByUser = async (req, res) => {
    try {
        //validate request body.
        const validateOtpRequest = otpSendValidation.parse(req.body);
        //call otp validate service.
        const result = await sendOtpService(validateOtpRequest.mobilenumber);

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

