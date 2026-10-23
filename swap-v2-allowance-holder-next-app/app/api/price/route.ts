import { proxyZeroExRequest } from "../zeroex";

export async function GET(request: Request) {
  return proxyZeroExRequest(request, "/swap/allowance-holder/price");
}
