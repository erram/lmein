export interface Book {
  id: string;
  volumeInfo?: {
    title: string;
    authors: string[];
    publisher: string;
    subtitle: string;
    publishedDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}
