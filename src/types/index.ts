export type StoryType = {
  title: string;
  url: string;
  created_at: string;
  author: string;
  points: number;
  num_comments: number;
  objectID: number;
};

export type TableListProps = {
  stories: Array<StoryType>;
};

export type TableItemProps = {
  story: StoryType;
  currIndex: number;
};

export type HeaderType = {};

export type HeadersType = {};

export type MyPaginationType = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export type NavbarType = {};
