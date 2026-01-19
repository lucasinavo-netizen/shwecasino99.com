import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  titleMM: string;
  excerpt: string;
  excerptMM: string;
  category: string;
  categoryMM: string;
  featuredImage: string;
  readTime: string;
  readTimeMM: string;
  publishDate: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-red-950 rounded-lg overflow-hidden hover:bg-red-900 transition-colors block"
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
        <div className="text-yellow-400 text-sm mb-2">{post.categoryMM}</div>
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
          {post.titleMM}
        </h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">
          {post.excerptMM}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{post.readTimeMM}</span>
          <span>{new Date(post.publishDate).toLocaleDateString('my-MM')}</span>
        </div>
      </div>
    </Link>
  );
}


