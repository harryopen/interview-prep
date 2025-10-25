export interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  itemCount: number;
}

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  author: string;
  readTime: string;
  views: number;
  tags: string[];
  publishedAt: string;
}

export interface TopicContent {
  id: string;
  title: string;
  description: string;
  items: ContentItem[];
}

export const topics: Topic[] = [
  {
    id: "Star Rating Component",
    title: "React Fundamentals",
    description: "Star Rating Component",
    category: "Development",
    itemCount: 8,
  },
  {
    id: "Accordian component",
    title: "Modern JavaScript",
    description: "Accordian component",
    category: "Development",
    itemCount: 12,
  },
  {
    id: "Load More Button",
    title: "CSS Grid Layout",
    description: "Load More Button",
    category: "Development",
    itemCount: 6,
  },
  {
    id: "Qr code generator",
    title: "Product Strategy",
    description: "Qr code Generator",
    category: "Business",
    itemCount: 10,
  },
  {
    id: "Dynamic Tabs",
    title: "Market Research",
    description: "Dynamic Tabs",
    category: "Business",
    itemCount: 7,
  },
  {
    id: "github Profile",
    title: "github Profile",
    description: "github-finder",
    category: "Design",
    itemCount: 9,
  },
  {
    id: "autocomplete-suggestion",
    title: "Auto-complete",
    description: "Search and get suggestion",
    category: "Design",
    itemCount: 5,
  },
  {
    id: "tic-tac-toe",
    title: "Auto-complete",
    description: "tic tac game",
    category: "Design",
    itemCount: 5,
  },
  {
    id: "show-Modal",
    title: "Auto-complete",
    description: "show-modal",
    category: "Design",
    itemCount: 5,
  },
];

export const topicContent: Record<string, TopicContent> = {
  "Star Rating Component": {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description:
      "Master the building blocks of React development with comprehensive guides and practical examples.",
    items: [
      {
        id: "1",
        title: "Understanding React Components",
        content:
          "React components are the building blocks of any React application. They let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be defined as functions or classes, with functional components being the modern preferred approach due to their simplicity and the introduction of React Hooks.",
        author: "Sarah Chen",
        readTime: "5 min read",
        views: 1240,
        tags: ["components", "jsx", "basics"],
        publishedAt: "2 days ago",
      },
      {
        id: "2",
        title: "Props and State Management",
        content:
          "Props (short for properties) are how components talk to each other. By passing data from a parent component to a child component, props help keep components pure and predictable. State, on the other hand, allows components to create and manage their own data. When state changes, React automatically re-renders the component to reflect those changes.",
        author: "Mike Johnson",
        readTime: "7 min read",
        views: 2180,
        tags: ["props", "state", "hooks"],
        publishedAt: "1 week ago",
      },
      {
        id: "3",
        title: "Event Handling in React",
        content:
          "React handles events differently than plain HTML. Instead of directly adding event listeners to DOM elements, React uses a synthetic event system that wraps native events. This provides consistent behavior across different browsers and allows React to optimize performance through event delegation.",
        author: "Emily Rodriguez",
        readTime: "6 min read",
        views: 890,
        tags: ["events", "handlers", "synthetic-events"],
        publishedAt: "3 days ago",
      },
    ],
  },
  "Accordian component": {
    id: "javascript-es6",
    title: "Modern JavaScript (ES6+)",
    description:
      "Discover the powerful features introduced in ES6 and beyond that make JavaScript development more efficient and enjoyable.",
    items: [
      {
        id: "1",
        title: "Arrow Functions and Lexical Scope",
        content:
          "Arrow functions provide a more concise syntax for writing functions and have a different behavior with the 'this' keyword. Unlike regular functions, arrow functions don't have their own 'this' context - they inherit it from the enclosing scope. This makes them particularly useful for callbacks and event handlers.",
        author: "David Kim",
        readTime: "4 min read",
        views: 3420,
        tags: ["arrow-functions", "scope", "this"],
        publishedAt: "5 days ago",
      },
      {
        id: "2",
        title: "Destructuring Assignment",
        content:
          "Destructuring assignment syntax allows you to extract values from arrays or properties from objects into distinct variables. This feature makes code more readable and concise, especially when working with complex data structures. It's commonly used in React for props destructuring and in modern JavaScript for API responses.",
        author: "Lisa Wang",
        readTime: "6 min read",
        views: 2890,
        tags: ["destructuring", "objects", "arrays"],
        publishedAt: "1 week ago",
      },
    ],
  },
  "Qr code generator": {
    id: "css-grid",
    title: "CSS Grid Layout",
    description:
      "Learn to create sophisticated layouts with CSS Grid, the most powerful layout system available in CSS.",
    items: [
      {
        id: "1",
        title: "Grid Container and Grid Items",
        content:
          "CSS Grid Layout introduces a two-dimensional layout method for the web. Unlike Flexbox which is primarily one-dimensional, Grid can handle both columns and rows simultaneously. To create a grid, you define a container element as a grid with display: grid, and its direct children automatically become grid items.",
        author: "Alex Thompson",
        readTime: "8 min read",
        views: 1560,
        tags: ["grid-container", "grid-items", "layout"],
        publishedAt: "4 days ago",
      },
    ],
  },
  "Dynamic Tabs": {
    id: "product-strategy",
    title: "Product Strategy",
    description:
      "Develop winning product strategies that align with business goals and customer needs.",
    items: [
      {
        id: "1",
        title: "Defining Your Product Vision",
        content:
          "A clear product vision serves as the north star for your entire product team. It should articulate what you're building, for whom, and why it matters. A good product vision is inspirational, memorable, and provides clear direction for decision-making. It bridges the gap between high-level company strategy and day-to-day product decisions.",
        author: "Rachel Green",
        readTime: "10 min read",
        views: 4230,
        tags: ["vision", "strategy", "planning"],
        publishedAt: "2 days ago",
      },
      {
        id: "2",
        title: "Customer Discovery and Validation",
        content:
          "Before building any product, it's crucial to validate your assumptions about customer needs and problems. Customer discovery involves talking to potential users, observing their behavior, and understanding their pain points. This process helps ensure you're building something people actually want and need.",
        author: "Tom Wilson",
        readTime: "12 min read",
        views: 3180,
        tags: ["customer-discovery", "validation", "research"],
        publishedAt: "1 week ago",
      },
    ],
  },
  "github Profile": {
    id: "market-research",
    title: "Market Research",
    description:
      "Master the art and science of understanding your market, competitors, and customers.",
    items: [
      {
        id: "1",
        title: "Competitive Analysis Framework",
        content:
          "A thorough competitive analysis helps you understand the competitive landscape and identify opportunities for differentiation. Start by identifying direct and indirect competitors, then analyze their strengths, weaknesses, pricing strategies, and market positioning. Look for gaps in the market that your product could fill.",
        author: "Jennifer Lee",
        readTime: "9 min read",
        views: 2750,
        tags: ["competitive-analysis", "market-research", "positioning"],
        publishedAt: "3 days ago",
      },
    ],
  },
  "autocomplete-suggestion": {
    id: "ui-principles",
    title: "UI Design Principles",
    description:
      "Learn the fundamental principles that make user interfaces both beautiful and functional.",
    items: [
      {
        id: "1",
        title: "Visual Hierarchy and Layout",
        content:
          "Visual hierarchy guides users through your interface by establishing a clear order of importance. Use size, color, contrast, and spacing to direct attention to the most important elements first. A well-designed hierarchy makes interfaces easier to scan and understand, reducing cognitive load for users.",
        author: "Maria Santos",
        readTime: "7 min read",
        views: 1890,
        tags: ["visual-hierarchy", "layout", "design"],
        publishedAt: "5 days ago",
      },
      {
        id: "2",
        title: "Consistency and Design Systems",
        content:
          "Consistency in UI design creates predictable experiences that users can quickly learn and navigate. Design systems help maintain consistency by providing reusable components, patterns, and guidelines. They ensure that similar elements behave in similar ways across different parts of your application.",
        author: "Chris Park",
        readTime: "8 min read",
        views: 2340,
        tags: ["consistency", "design-systems", "patterns"],
        publishedAt: "1 week ago",
      },
    ],
  },
  "tic-tac-toe": {
    id: "color-theory",
    title: "Color Theory",
    description: "tic tac toe game",
    items: [
      {
        id: "1",
        title: "Understanding Color Harmony",
        content:
          "Color harmony refers to the arrangement of colors that are pleasing to the eye and create a sense of order and balance. Different color harmonies like complementary, analogous, and triadic create different moods and effects. Understanding these relationships helps designers create cohesive and visually appealing palettes.",
        author: "Anna Martinez",
        readTime: "6 min read",
        views: 1670,
        tags: ["color-harmony", "palettes", "theory"],
        publishedAt: "6 days ago",
      },
    ],
  },
  "show-Modal": {
    id: "color-theory",
    title: "Color Theory",
    description: "tic tac toe game",
    items: [
      {
        id: "1",
        title: "Understanding Color Harmony",
        content:
          "Color harmony refers to the arrangement of colors that are pleasing to the eye and create a sense of order and balance. Different color harmonies like complementary, analogous, and triadic create different moods and effects. Understanding these relationships helps designers create cohesive and visually appealing palettes.",
        author: "Anna Martinez",
        readTime: "6 min read",
        views: 1670,
        tags: ["color-harmony", "palettes", "theory"],
        publishedAt: "6 days ago",
      },
    ],
  },
};
