export interface Section {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  content: SectionContent[];
}

export type SectionContent =
  | TextContent
  | QuoteContent
  | CodeContent
  | ListContent
  | InteractionContent;

interface TextContent {
  type: 'text';
  value: string;
  highlight?: boolean;
}

interface QuoteContent {
  type: 'quote';
  value: string;
  author?: string;
}

interface CodeContent {
  type: 'code';
  language: string;
  value: string;
  label?: string;
}

interface ListContent {
  type: 'list';
  items: string[];
}

interface InteractionContent {
  type: 'interaction';
  prompt: string;
}
