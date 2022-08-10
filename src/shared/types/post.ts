export interface PostType {
  title: string;
  slug: string;
  desc: string;
  content: string;
  coverImage: any;
  date: any;
  author: {
    name: string;
    picture: string;
  };
}
