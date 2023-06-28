import { login, register } from "controllers/autentication";
import express from "express";

export default (router: express.Router) => {
  router.post("/register", register);
  router.post("/auth/login", login);
};
