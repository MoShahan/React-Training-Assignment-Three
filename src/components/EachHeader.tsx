export const EachHeader = ({ column, displayName, onClick, sortInfo }: any) => {
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
