import { proxyZeroExRequest } from "../zeroex";

export async function GET(request: Request) {
  return proxyZeroExRequest(request, "/swap/permit2/quote");
}
