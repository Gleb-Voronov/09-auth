export type Tag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping' | 'All'

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  tag: Tag;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: Tag;
}
