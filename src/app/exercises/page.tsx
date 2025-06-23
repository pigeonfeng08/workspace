import Layout from '@/components/Layout';
import Link from 'next/link';

const exercises = [
  {
    id: 'html-basics',
    title: 'HTML基础练习',
    description: 'HTML标签、语义化标记和页面结构练习',
    category: 'HTML',
    difficulty: '初级',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'css-styling',
    title: 'CSS样式练习',
    description: 'CSS选择器、布局、动画和响应式设计练习',
    category: 'CSS',
    difficulty: '中级',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'js-fundamentals',
    title: 'JavaScript基础',
    description: 'JavaScript语法、DOM操作和事件处理练习',
    category: 'JavaScript',
    difficulty: '中级',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'react-components',
    title: 'React组件练习',
    description: 'React组件开发、状态管理和生命周期练习',
    category: 'React',
    difficulty: '高级',
    color: 'bg-cyan-100 text-cyan-800'
  },
  {
    id: 'nextjs-project',
    title: 'Next.js项目实战',
    description: 'Next.js全栈应用开发和部署练习',
    category: 'Next.js',
    difficulty: '高级',
    color: 'bg-purple-100 text-purple-800'
  },
];

export default function ExercisesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">课程练习展示</h1>
          <p className="text-xl text-gray-600">
            本学期完成的各种编程练习和项目作品
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <div 
              key={exercise.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${exercise.color}`}>
                  {exercise.category}
                </span>
                <span className="text-sm text-gray-500">{exercise.difficulty}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {exercise.title}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {exercise.description}
              </p>
              
              <Link 
                href={`/exercises/${exercise.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                查看练习 →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}