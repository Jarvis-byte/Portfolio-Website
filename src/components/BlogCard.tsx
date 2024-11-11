import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl">
      <a 
        href={post.mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Calendar size={16} />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
            Read on Medium 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;