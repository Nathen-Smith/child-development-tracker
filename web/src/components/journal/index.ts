export interface JournalArrProps extends Array<JournalProps> {}

export interface JournalProps {
  title: string;
  body: string;
  email?: string;
  createdAt: string;
  key: number;
}
