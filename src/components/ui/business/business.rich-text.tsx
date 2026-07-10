import { Fragment } from "react";
import type { RichText } from "@/data/types/type.business-rich-text";

export default function BusinessRichText({ runs }: { runs: RichText }) {
  return (
    <>
      {runs.map((run, i) => (
        <Fragment key={run.text + i}>
          {run.bold ? <b>{run.text}</b> : run.text}
        </Fragment>
      ))}
    </>
  );
}
