import { useState, FormEvent } from 'react';
import Image from 'next/image';

interface EmojiResult {
  imageUrl: string;
  text: string;
}

export default function EmojiGenerator() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emoji, setEmoji] = useState<EmojiResult | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) {
      setError('请输入文字');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // 使用DiceBear API来生成emoji
      // 这里我们使用了他们的emoji风格
      const seed = encodeURIComponent(inputText);
      const style = 'thumbs';
      const emojiUrl = `https://api.dicebear.com/7.x/${style}/png?seed=${seed}&size=200`;
      
      setEmoji({
        imageUrl: emojiUrl,
        text: inputText
      });
    } catch (err) {
      setError('生成Emoji时出错，请重试');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!emoji) return;
    
    // 创建一个链接并模拟点击来下载图片
    const link = document.createElement('a');
    link.href = emoji.imageUrl;
    link.download = `emoji-${emoji.text.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="mb-4">
          <label htmlFor="text-input" className="block text-gray-700 text-sm font-bold mb-2">
            输入文字
          </label>
          <input
            id="text-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="输入要转换为Emoji的文字"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50"
          >
            {isLoading ? '生成中...' : '生成Emoji'}
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-xs italic mt-2">{error}</p>
        )}
      </form>

      {emoji && (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-4">您的Emoji</h2>
          <div className="mb-4 flex justify-center">
            <div className="relative w-40 h-40">
              <Image
                src={emoji.imageUrl}
                alt={`Emoji for ${emoji.text}`}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <p className="mb-4 text-gray-600">{emoji.text}</p>
          <button
            onClick={handleDownload}
            className="bg-secondary hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
          >
            下载Emoji
          </button>
        </div>
      )}
    </div>
  );
} 