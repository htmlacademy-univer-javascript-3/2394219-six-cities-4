export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  date: Date;
  user: User;
  comment: string;
  rating: number;
};
