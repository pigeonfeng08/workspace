import Layout from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const exerciseData: Record<string, any> = {
  'html-basics': {
    title: 'HTML基础练习',
    description: 'HTML标签、语义化标记和页面结构练习',
    content: `
      <h2>练习内容</h2>
      <p>这是一个HTML基础练习的示例。在实际项目中，这里会展示具体的练习内容。</p>
      <ul>
        <li>HTML5语义化标签使用</li>
        <li>表单元素和验证</li>
        <li>多媒体元素嵌入</li>
        <li>页面结构设计</li>
      </ul>
    `,
    demo: 'https://pigeonfeng08.github.io/test123/',
    code: 'https://github.com/pigeonfeng08/work1'
  },
  'react-components': {
    title: 'React组件练习',
    description: '构建可复用的React组件，包括状态管理和事件处理。',
    content: `
      <h2>练习内容</h2>
      <p>这是一个React组件练习的示例。</p>
      <ul>
        <li>函数组件和类组件</li>
        <li>Props和State</li>
        <li>生命周期方法和Hooks</li>
        <li>组件组合和复用</li>
      </ul>
    `,
    demo: 'https://pigeonfeng08.github.io/test123/',
    code: 'https://github.com/pigeonfeng08/work1'
  },
  'js-fundamentals': {
    title: 'JavaScript基础',
    description: 'JavaScript语法、DOM操作和事件处理练习',
    content: `
      <h2>练习内容</h2>
      <p>这是一个JavaScript基础练习的示例。</p>
      <ul>
        <li>变量、数据类型和操作符</li>
        <li>控制流（if/else, for, while）</li>
        <li>函数和作用域</li>
        <li>DOM操作和事件处理</li>
      </ul>
    `,
    demo: 'https://pigeonfeng08.github.io/test123/',
    code: 'https://github.com/pigeonfeng08/work1'
  },
  'nextjs-project': {
    title: 'Next.js项目实战',
    description: 'Next.js全栈应用开发和部署练习',
    content: `
      <h2>练习内容</h2>
      <p>这是一个Next.js项目实战的示例。</p>
      <ul>
        <li>App Router和页面路由</li>
        <li>数据获取 (Server Components, API Routes)</li>
        <li>部署到Vercel</li>
      </ul>
    `,
    demo: '/',
    code: 'https://github.com/pigeonfeng08/workspace'
  },
  'css-styling': {
    title: 'CSS样式练习',
    description: 'CSS选择器、布局、动画和响应式设计练习',
    content: `
      <h2>练习内容</h2>
      <p>这是一个CSS样式练习的示例。</p>
      <ul>
        <li>Flexbox和Grid布局</li>
        <li>CSS动画和过渡效果</li>
        <li>响应式设计实现</li>
        <li>CSS预处理器使用</li>
      </ul>
    `,
    demo: 'https://pigeonfeng08.github.io/test123/',
    code: 'https://github.com/pigeonfeng08/work1'
  },
};

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  const exercise = exerciseData[params.id];
  
  if (!exercise) {
    notFound();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/exercises" className="text-blue-500 hover:underline">
              ← 返回练习列表
            </Link>
          </nav>
          
          {/* Exercise Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {exercise.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              {exercise.description}
            </p>
            
            <div className="flex space-x-4">
              {exercise.demo && (
                <a 
                  href={exercise.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  查看演示
                </a>
              )}
              {exercise.code && (
                <a 
                  href={exercise.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  查看代码
                </a>
              )}
            </div>
          </div>
          
          {/* Exercise Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: exercise.content }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}