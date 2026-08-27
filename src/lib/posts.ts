export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'start-writing-in-public',
    title: '从今天开始，认真写作',
    description: '把脑海里的想法留在这里：关于学习、创造，以及慢慢变得更好的过程。',
    date: '2026-08-27',
    tags: ['随笔', '写作'],
    readingTime: '3 分钟',
    content: [
      '这是博客的第一篇文章。它不需要完美，只需要诚实地记录下此刻的思考。',
      '公开写作是一种温和的推动力：当我们准备把一个观点讲给别人听时，才会认真梳理它的来处、边界与细节。',
      '希望这里以后既有完成时，也有进行时；既有结论，也保留那些尚未想清楚的问题。'
    ]
  },
  {
    slug: 'build-a-learning-system',
    title: '给学习留一点“可见的痕迹”',
    description: '笔记、项目和复盘，让输入不只停留在收藏夹里。',
    date: '2026-08-21',
    tags: ['学习', '方法'],
    readingTime: '4 分钟',
    content: [
      '学习最容易发生的错觉，是把“看过”当作“掌握”。为每一次输入留下一个小小的输出，可以有效打破这种错觉。',
      '它可以是一页笔记、一段代码、一个解释给朋友听的例子，或者一篇短短的复盘。重要的不是形式，而是让思考经过一次自己的加工。',
      '持续积累之后，零散的痕迹会连成路径。回头看时，你会发现自己已经走了很远。'
    ]
  },
  {
    slug: 'small-projects-big-feedback',
    title: '小项目，是最快的反馈回路',
    description: '与其等待一个宏大的开始，不如做一个能在周末完成的实验。',
    date: '2026-08-14',
    tags: ['创造', '项目'],
    readingTime: '3 分钟',
    content: [
      '一个范围很小的项目，往往比一份完美计划更有力量。它逼着我们面对真实的限制，并尽快得到反馈。',
      '把目标缩小到足够具体：做一个页面、解决一个痛点、验证一个假设。完成带来的信心，会自然推着下一步发生。'
    ]
  }
];

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
