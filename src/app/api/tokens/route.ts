import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get the URL and extract search params
    const url = new URL(request.url);
    const searchParams = url.searchParams.toString();
    
    // Construct the target URL with the same query parameters
    const targetUrl = `https://api.auto.fun/api/tokens${searchParams ? `?${searchParams}` : ''}`;
    
    // Fetch data from the target API
    const response = await fetch(targetUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Get the response data
    const data = await response.json();
    
    // Return the response as-is
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying to api.auto.fun:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from api.auto.fun' },
      { status: 500 }
    );
  }
} 