import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-red-950 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-white">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-yellow-400">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

