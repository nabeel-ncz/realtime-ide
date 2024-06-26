import { Request, Response } from "express";
import { generateAccessToken } from "../utils/jwt/generateAccessToken";
import { AuthenticatedRequest } from "../utils/types";

export const signInWithGoogleSuccess = async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    if (authReq.user && authReq.user._id) {
        const id = authReq.user._id as string;
        const token = generateAccessToken({ userId: id });
        res.cookie("access_token", token, { maxAge: 1000 * 60 * 60 * 24 * 2, httpOnly: true });
        res.redirect(`${process.env.CLIENT_URL}`);
    } else {
        res.redirect(`${process.env.CLIENT_URL}oauth2?error=${encodeURIComponent("Authentication Failed")}`);
    }
}