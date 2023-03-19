export interface IPost {
  id: number;
  title: null;
  description: string;
  upvote: number;
  downvote: number;
  userId: number;
  views: number;
  created: Date;
  user: IUser;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  intractedPosts: string;
}
