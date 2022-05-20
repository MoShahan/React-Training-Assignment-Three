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

export type HeaderProps = {
  column: string;
  displayName: string;
  onClick: any;
  sortInfo: {
    column: string;
    direction: string;
  };
};

export type HeadersProps = {
  headers: any;
  onClick: any;
  sortInfo: {
    column: string;
    direction: string;
  };
};

export type MyPaginationType = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export type NavbarProps = {
  searchText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant: number;
};
