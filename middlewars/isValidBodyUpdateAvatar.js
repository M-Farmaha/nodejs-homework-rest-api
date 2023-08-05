import HttpError from "../helpers/HttpError.js";

export const isValidBodyUpdateAvatar = (req, res, next) => {
  if (!req.file) {
    next(HttpError(400, "avatarURL is required"));
  }

  if (Object.keys(req.body).length > 0) {
    next(HttpError(400, "no fields allowed except avatarURL"));
  }
  next();
};
