
export interface ResourceLink {
  title: string;
  url: string;
  type: 'PDF' | 'Playlist' | 'Link' | 'Drive';
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  books: ResourceLink[];
  playlists: ResourceLink[];
  notes: ResourceLink[];
}
