import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {

    return NextResponse.json({ message: 'Hello from the frame route' }, { status: 200 });
  }
  
  export async function POST(req: NextRequest): Promise<Response> {
    console.log('POST');
    return getResponse(req);
  }
  
  export async function GET(req: NextRequest): Promise<Response> {
    console.log('GET');
    return getResponse(req);
  }
  
  export const dynamic = 'force-dynamic';