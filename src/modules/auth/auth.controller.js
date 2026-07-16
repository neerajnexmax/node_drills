import { message } from "statuses"
import { success } from "zod"
import { sendOtpService } from "./auth.service.js";




export const sendOtpByUser = async (req, res) => {
    try {
        const sendOtpByUser = await sendOtpService()
        return res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            data: []
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            messgae: error.message
        })

    }
}

