export interface PostType {
  title: string;
  slug: string;
  desc: string;
  content: string;
  date: any;
  coverImage: any;
  label?: string;
  tags?: string;
  author: {
    name: string;
    picture: string;
  };
}
