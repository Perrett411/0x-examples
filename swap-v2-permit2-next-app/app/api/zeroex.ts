export async function proxyZeroExRequest(
  request: Request,
  endpoint: string
) {
  const apiKey = process.env.ZEROEX_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "ZEROEX_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.0x.org${endpoint}?${new URL(request.url).searchParams}`,
      {
        headers: {
          "0x-api-key": apiKey,
          "0x-version": "v2",
        },
      }
    );

    return Response.json(await response.json(), { status: response.status });
  } catch {
    return Response.json(
      { error: "Unable to reach the 0x API" },
      { status: 502 }
    );
  }
}
