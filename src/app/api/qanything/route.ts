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

    // 这里根据QAnything的实际API格式调整
    const response = await fetch(`${apiUrl}/chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: question,
        // 根据QAnything API文档添加其他必要参数
      }),
    });

    if (!response.ok) {
      throw new Error(`QAnything API error: ${response.status}`);
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