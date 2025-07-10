export type Dog = {
  id: string;
  name: string;
  breed: string;
  created_at: Date;
  updated_at: Date;
};

export type CreateDogInput = {
  name: string;
  breed: string;
};
