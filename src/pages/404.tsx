import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">页面未找到</h2>
        <p className="mb-8 text-gray-600">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <Link href="/">
          <span className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer inline-block">
            返回首页
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage; 