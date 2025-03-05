import type { NextPage } from 'next';
import Head from 'next/head';
import EmojiGenerator from '../components/emoji-generator';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Emoji 生成器</title>
        <meta name="description" content="创建个性化emoji图片" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl font-bold mb-8 text-center">Emoji 生成器</h1>
          <p className="mb-8 text-center text-gray-600 max-w-2xl">
            输入您想要转换成Emoji的文字，我们将为您生成个性化的Emoji图片。
            您可以下载并在社交媒体或消息应用中使用它们。
          </p>
          <EmojiGenerator />
        </div>
      </main>
    </div>
  );
};

export default Home; 