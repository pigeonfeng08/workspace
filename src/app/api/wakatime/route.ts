import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 临时返回模拟数据用于测试
  return NextResponse.json({
    data: {
      human_readable_total: "12 hrs 34 mins",
      total_seconds: 45240
    }
  });
}
try {
  const apiKey = process.env.WAKATIME_API_KEY;
  
  if (!apiKey) {
    console.error('WakaTime API key not found in environment variables');
    throw NextResponse.json(
      { error: 'WakaTime API key not configured' },
      { status: 500 }
    );
  }

  console.log('Attempting to fetch WakaTime data with API key:', apiKey.substring(0, 10) + '...');

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

  console.log('WakaTime API response status:', response.status);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('WakaTime API error response:', errorText);
    
    // 返回更详细的错误信息
    throw NextResponse.json(
      { 
        error: `WakaTime API error: ${response.status}`,
        details: errorText,
        status: response.status
      },
      { status: 500 }
    );
  }

  const data = await response.json();
  console.log('WakaTime API success, data keys:', Object.keys(data));
throw NextResponse.json(data);
} catch (error) {
  console.error('WakaTime API error:', error);
  throw NextResponse.json(
    { 
      error: 'Failed to fetch WakaTime data',
      details: error instanceof Error ? error.message : 'Unknown error'
    },
    { status: 500 }
  );
}

// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//   try {
//     const apiKey = process.env.WAKATIME_API_KEY;
    
//     if (!apiKey) {
//       console.error('WakaTime API key not found in environment variables');
//       return NextResponse.json(
//         { error: 'WakaTime API key not configured' },
//         { status: 500 }
//       );
//     }

//     console.log('Attempting to fetch WakaTime data with API key:', apiKey.substring(0, 10) + '...');

//     const response = await fetch(
//       'https://wakatime.com/api/v1/users/current/stats/last_7_days',
//       {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json',
//         },
//         cache: 'no-store',
//       }
//     );

//     console.log('WakaTime API response status:', response.status);
    
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('WakaTime API error response:', errorText);
      
//       // 返回更详细的错误信息
//       return NextResponse.json(
//         { 
//           error: `WakaTime API error: ${response.status}`,
//           details: errorText,
//           status: response.status
//         },
//         { status: 500 }
//       );
//     }

//     const data = await response.json();
//     console.log('WakaTime API success, data keys:', Object.keys(data));
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('WakaTime API error:', error);
//     return NextResponse.json(
//       { 
//         error: 'Failed to fetch WakaTime data',
//         details: error instanceof Error ? error.message : 'Unknown error'
//       },
//       { status: 500 }
//     );
//   }
// }