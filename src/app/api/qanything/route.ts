import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.QANYTHING_API_KEY;
    const apiUrl = process.env.QANYTHING_API_URL;
    
    if (!apiKey || !apiUrl) {
      return NextResponse.json(
        { error: 'QAnything API configuration missing' },
        { status: 500 }
      );
    }

    const response = await fetch(`${apiUrl}/chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: question,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`QAnything API error: ${response.status} ${response.statusText}. Body: ${errorBody}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('QAnything API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from QAnything' },
      { status: 500 }
    );
  }
}