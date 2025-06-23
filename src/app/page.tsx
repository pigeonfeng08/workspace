import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            欢迎来到我的学习作品集
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            展示本学期HTML, CSS, JavaScript, React和Next.js的学习成果，
            集成WakaTime编码统计和QAnything AI问答服务
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">课程练习</h2>
            <p className="text-gray-600 mb-6">
              查看我在本学期完成的各种编程练习和项目，包括HTML、CSS、JavaScript和React的实践作品
            </p>
            <Link 
              href="/exercises" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              浏览练习 →
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">AI问答</h2>
            <p className="text-gray-600 mb-6">
              使用QAnything大语言模型进行智能问答，体验先进的AI技术在学习中的应用
            </p>
            <Link 
              href="/qanything" 
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              开始问答 →
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">编码统计</h2>
            <p className="text-gray-600 mb-6">
              通过WakaTime API实时展示编码时长统计，追踪学习进度和编程习惯
            </p>
            <div className="text-blue-500 font-medium">
              查看页脚实时数据 ↓
            </div>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">技术栈</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <span 
                key={tech}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
