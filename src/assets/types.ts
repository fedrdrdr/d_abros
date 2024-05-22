export interface Post {
  id?: string; // Поле id может быть опциональным, так как его может не быть до создания поста
  title: string;
  description: string;
  photoURL: string;
  createdAt: Date;
}
