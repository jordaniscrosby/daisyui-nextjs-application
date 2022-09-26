import { ironSessionWrapper } from "@/utils/iron-session/ironSessionWrapper";

export default ironSessionWrapper(route);

async function route(req, res) {
  res.status(200).json({ name: "John Doe" });
}
