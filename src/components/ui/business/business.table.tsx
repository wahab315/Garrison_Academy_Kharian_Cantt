import Box from "@/common/box";
import Typography from "@/common/typography";
import { ToastButton } from "@/components/features/toast";
import type { BusinessCell, BusinessTableProps } from "@/data/types/type.business-table";

function Cell({ cell }: { cell: BusinessCell }) {
  switch (cell.kind) {
    case "pill":
      return (
        <Typography as="span" className={`pill ${cell.tone}`}>
          {cell.value}
        </Typography>
      );
    case "action":
      return (
        <ToastButton msg={cell.toast} classStyle="download">
          {cell.value}
        </ToastButton>
      );
    default:
      return <>{cell.value}</>;
  }
}

/** Scrollable data table. Downloads, hr, alumni, activities, admissions. */
export default function BusinessTable({ columns, rows }: BusinessTableProps) {
  return (
    <Box className="tbl-wrap">
      <Box as="table" className="tbl">
        <Box as="thead">
          <Box as="tr">
            {columns.map((column) => (
              <Box as="th" key={column} scope="col">
                {column}
              </Box>
            ))}
          </Box>
        </Box>
        <Box as="tbody">
          {rows.map((row, r) => (
            <Box as="tr" key={row.map((c) => c.value).join("|") + r}>
              {row.map((cell, c) => (
                <Box as="td" key={`${r}-${c}`}>
                  <Cell cell={cell} />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
