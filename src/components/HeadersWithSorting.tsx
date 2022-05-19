import { EachHeader } from "./EachHeader";

export const HeadersWithSorting = ({ headers, onClick, sortInfo }: any) => {
  return headers.map(([column, displayName]: any) => (
    <EachHeader
      key={column}
      column={column}
      displayName={displayName}
      onClick={onClick}
      sortInfo={sortInfo}
    />
  ));
};
