import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import blogPostsData from '../../../data/blog-posts.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Shwe Casino 99',
      description: 'Article not found',
    };
  }

  // 緬甸語 SEO 規範
  const title = `${post.titleMM} | ${post.title} | Shwe Casino 99 Blog`;
  const description = `${post.excerptMM} ${post.excerpt}`;

  const keywords = [
    // 緬甸語核心（60%）
    post.titleMM,
    post.categoryMM,
    ...post.tagsMM,
    'ဘလော့',
    'ကာစီနို သတင်းများ',
    // 混合關鍵字（20%）
    `${post.title} Myanmar`,
    'blog Myanmar',
    // 英文關鍵字（20%）
    ...post.tags,
    'Shwe Casino blog',
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${post.titleMM} | ${post.title}`,
      description: post.excerptMM,
      type: 'article',
      locale: 'my_MM',
      url: `${baseUrl}/blog/${post.slug}`,
      publishedTime: post.publishDate,
      authors: [post.authorMM],
      images: [
        {
          url: `${baseUrl}${post.featuredImage}`,
          alt: `${post.titleMM} - ${post.title}`,
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-red-900 text-white p-8">
        <h1>Article Not Found</h1>
        <Link href="/blog" className="text-yellow-400 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Article Schema.org
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.titleMM,
    alternativeHeadline: post.title,
    author: {
      '@type': 'Person',
      name: post.authorMM,
    },
    datePublished: post.publishDate,
    dateModified: post.lastModified,
    image: `${baseUrl}${post.featuredImage}`,
    description: post.excerptMM,
    articleBody: post.contentMM,
    inLanguage: 'my-MM',
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-red-900">
        <nav className="bg-red-950 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-white">
              <Link href="/" className="hover:text-yellow-400">
                လေ့လာရန်
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-yellow-400">
                ဘလော့
              </Link>
              <span>/</span>
              <span className="text-yellow-400">{post.titleMM}</span>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <article>
            <div className="mb-6">
              <div className="text-yellow-400 text-sm mb-2">{post.categoryMM}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {post.titleMM} | {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{post.authorMM}</span>
                <span>•</span>
                <span>{new Date(post.publishDate).toLocaleDateString('my-MM')}</span>
                <span>•</span>
                <span>{post.readTimeMM}</span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.featuredImage}
                alt={`${post.titleMM} - ${post.title}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <div 
                className="text-white text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: post.contentMM.replace(/\n/g, '<br />') }}
              />
              {post.content && (
                <div 
                  className="text-gray-300 text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                />
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-red-700">
              <div className="flex flex-wrap gap-2">
                {post.tagsMM.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-red-950 text-yellow-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-8">
            <Link
              href="/blog"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              ← ဘလော့ စာရင်းသို့ ပြန်သွားရန်
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}


