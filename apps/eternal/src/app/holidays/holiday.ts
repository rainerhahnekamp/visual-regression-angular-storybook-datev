export interface Holiday {
  id: number;
  title: string;
  teaser: string;
  description: string;
  imageUrl: string;
  onSale?: boolean;
  soldOut?: boolean;
}
