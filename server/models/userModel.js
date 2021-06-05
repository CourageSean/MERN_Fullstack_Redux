const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default:
        'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
    },
    role: {
      type: String,
      default: 'user',
    },
    gender: {
      type: String,
      default: 'male',
    },
    mobile: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    story: {
      type: String,
      default: '',
      maxlength: 200,
    },
    website: {
      type: String,
      default: '',
    },
    followers: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'user',
        },
      ],
    },
    following: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'user',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', userSchema);
