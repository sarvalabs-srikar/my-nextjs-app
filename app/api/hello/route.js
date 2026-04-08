export async function GET() {
    const apiKey = process.env.MY_SECRET_KEY;
  
    return Response.json({
      status: "success",
      message: "Welcome to my Cloudflare Edge API!",
      timestamp: new Date().toISOString(),
      timezone: "UTC",
      deployedOn: "Cloudflare Edge Network",
      secretConfigured: !!apiKey
    });
  }