export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    readTime: string;
    category: string;
    mediumUrl: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Scalable Android Apps with MVVM Architecture',
      excerpt: 'Learn how to implement MVVM architecture pattern in Android development for better scalability and maintainability.',
      date: 'March 15, 2024',
      imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80',
      readTime: '5 min read',
      category: 'Architecture',
      mediumUrl: 'https://medium.com/@arkamazumder0/mvvm-architecture-pattern-introduction-light-dark-mode-53ab7ada3bad',
    },
    {
      id: '2',
      title: 'Mastering Kotlin Coroutines for Android',
      excerpt: 'Deep dive into Kotlin Coroutines and how they can improve your Android app\'s performance.',
      date: 'March 10, 2024',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      readTime: '8 min read',
      category: 'Kotlin',
      mediumUrl: 'https://medium.com/@arkamazumder0/mvvm-architecture-pattern-introduction-light-dark-mode-53ab7ada3bad',
    },
    {
      id: '3',
      title: 'Implementing Material You Design in Android Apps',
      excerpt: 'A comprehensive guide to implementing Material You design principles in your Android applications.',
      date: 'March 5, 2024',
      imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80',
      readTime: '6 min read',
      category: 'UI/UX',
      mediumUrl: 'https://medium.com/@arkamazumder0/mvvm-architecture-pattern-introduction-light-dark-mode-53ab7ada3bad',
    }
  ];