export interface Dog {
  id: string;
  name: string;
  breed: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateDogInput {
  name: string;
  breed: string;
}
