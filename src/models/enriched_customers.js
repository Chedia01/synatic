import mongoose, { Schema } from 'mongoose';

export const EnrichedCustomersSchema = new Schema(
  {
    _id: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    address: {
      type: stringLiteral,
      required: true
    },
    birthdate: {
      type: Date
    },
    email: {
      type: String,
      required: true
    },
    accounts: {
      type: Number,
      default: []
    },
    _dateUpdated: {
      type: Date
    },
    account_details: {
      default: []
    }
  }
)