export type Gallery = {
  id: string;
  imagePath: string;
  imageUrl: string;
  alt: string | null;
  caption: string | null;
  order: number;
  collectionId: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Collection = {
  id: string;
  title: string;
  description: string | null;
  heroImagePath: string;
  heroImageUrl: string;
  featured: boolean;
  gallery: Gallery[];
  createdAt: Date;
  updatedAt: Date;
};
