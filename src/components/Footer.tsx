'use client';
import { useState, useEffect } from 'react';

interface WakaTimeData {
  data?: {
    human_readable_total?: string;
    total_seconds?: number;
  };
}

export default function Footer() {
  const [wakaTimeData, setWakaTimeData] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        const response = await fetch('/api/wakatime');
        if (!response.ok) {
          throw new Error('Failed to fetch WakaTime data');
        }
        const data = await response.json();
        setWakaTimeData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTimeData();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © 2024 我的学习作品集. 使用 Next.js 构建
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              {loading ? (
                <span className="text-gray-400">加载编码数据中...</span>
              ) : error ? (
                <span className="text-red-400">编码数据加载失败</span>
              ) : wakaTimeData?.data?.human_readable_total ? (
                <span className="text-green-400">
                  📊 本周编码时长: {wakaTimeData.data.human_readable_total}
                </span>
              ) : (
                <span className="text-gray-400">暂无编码数据</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}