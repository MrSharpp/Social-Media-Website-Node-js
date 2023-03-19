export interface IPost {
  id: number;
  title: null;
  description: string;
  upvote: number;
  downvote: number;
  userId: number;
  views: number;
  created: Date;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  intractedPosts: string;
}
