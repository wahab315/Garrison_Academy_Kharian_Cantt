/**
 * A run of copy that needs inline emphasis. Content files stay pure data --
 * no JSX -- while still expressing "this phrase is bold".
 */
export type RichTextRun = { text: string; bold?: boolean };
export type RichText = readonly RichTextRun[];
