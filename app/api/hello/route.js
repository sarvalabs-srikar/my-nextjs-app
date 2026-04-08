export async function GET() {
    const secret = process.env.MY_SECRET_KEY;
  
    return Response.json({
      message: "Hello from Cloudflare Edge!",
      secretExists: !!secret
    });
  }