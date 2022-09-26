import { withIronSession } from "next-iron-session";

const sessionOptions = {
  cookieName: "session", //name of cookie
  cookieOptions: {
    secure: process.env.NEXT_PUBLIC_MODE === "DEVELOPMENT" ? false : true,
  },
  ttl: 31536000, //ms of expiration
  password: process.env.IRON_SESSION_SEED,
};

export function ironSessionWrapper(handler) {
  return withIronSession(handler, sessionOptions);
}
