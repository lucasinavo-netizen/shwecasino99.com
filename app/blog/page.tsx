import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import blogPostsData from '../../data/blog-posts.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ဘလော့ | Blog | Shwe Casino 99',
  description: 'Shwe Casino 99 ဘလော့ - ဂိမ်း သုံးသပ်ချက်များ၊ လမ်းညွှန်များ၊ ဗျူဟာ သင်ကြားမှုများ။ မြန်မာဘာသာဖြင့် သတင်းများ။'.substring(0, 150),
  keywords: [
    'ဘလော့',
    'ကာစီနို သတင်းများ',
    'ဂိမ်း သုံးသပ်ချက်',
    'လမ်းညွှန်',
    'blog Myanmar',
    'casino news Myanmar',
  ],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-red-900">
      <nav className="bg-red-950 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-white">
            <Link href="/" className="hover:text-yellow-400">
              လေ့လာရန်
            </Link>
            <span>/</span>
            <span className="text-yellow-400">ဘလော့</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ဘလော့ | Blog
        </h1>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed">
            Shwe Casino 99 ဘလော့တွင် ဂိမ်း သုံးသပ်ချက်များ၊ လမ်းညွှန်များ၊ ဗျူဟာ သင်ကြားမှုများ၊ လုပ်ငန်း သတင်းများ ဖတ်ရှုနိုင်ပါသည်။ မြန်မာဘာသာဖြင့် အပြည့်အစုံ သတင်းများ ရရှိနိုင်ပါသည်။
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsData.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-red-950 rounded-lg overflow-hidden hover:bg-red-900 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={post.featuredImage}
                  alt={`${post.titleMM} - ${post.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-yellow-400 text-sm mb-2">
                  {post.categoryMM}
                </div>
                <h2 className="text-white font-bold text-lg mb-2 line-clamp-2">
                  {post.titleMM}
                </h2>
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                  {post.excerptMM}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.readTimeMM}</span>
                  <span>{new Date(post.publishDate).toLocaleDateString('my-MM')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}


