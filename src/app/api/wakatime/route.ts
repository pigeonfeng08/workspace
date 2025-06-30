import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'WakaTime API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/stats/last_7_days',
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`WakaTime API error: ${response.status} ${response.statusText}. Body: ${errorBody}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('WakaTime API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime data' },
      { status: 500 }
    );
  }
}