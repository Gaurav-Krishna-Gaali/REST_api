import { getUserBySessionToken } from "db/users";
import express from "express";
import { get, merge } from "lodash";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["GAURAV-REST-API"];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existinguser = await getUserBySessionToken(sessionToken);

    if (!existinguser) {
      return res.sendStatus(403);
    }

    merge(req, { user: existinguser });
    return next();
  } catch (error) {
    console.log("error", error);
    return res.sendStatus(400);
  }
};
