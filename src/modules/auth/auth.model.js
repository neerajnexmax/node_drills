// const mongoose = require('mongoose');
const { z } = require('zod');

const userSchema = new mongoose.Schema(
    {
        firstname: {
            required: true,
            type: String
        },
        lastname: {
            required: true,
            type: String
        },
        email: {
            required: true,
            unique: true,
            type: String
        },
        mobileno: {
            required: true,
            type: Number,
            unique: true
        }
    },
    {
        timestamps: true
    }
)