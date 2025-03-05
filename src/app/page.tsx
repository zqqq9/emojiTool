import EmojiGenerator from '@/components/emoji-generator';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-8 text-center">Emoji 生成器</h1>
      <p className="mb-8 text-center text-gray-600 max-w-2xl">
        输入您想要转换成Emoji的文字，我们将为您生成个性化的Emoji图片。
        您可以下载并在社交媒体或消息应用中使用它们。
      </p>
      <EmojiGenerator />
    </div>
  );
} 