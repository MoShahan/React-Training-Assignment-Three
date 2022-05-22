import { HeaderProps } from "../types";

export const EachHeader = ({ column, displayName, onClick, sortInfo }: HeaderProps) => {
  return (
    <td className="table-headings">
      {displayName}
      <span className="arrow-icon" onClick={() => onClick(column)}>
        {sortInfo.column === column &&
          (sortInfo.direction === "down" ? "⇃" : "↾")}
        {sortInfo.column !== column ? "⥯" : ""}
      </span>
    </td>
  );
};
