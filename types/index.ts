export interface StorySlide {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}
// types/api-response.ts

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export type LoginUser = {
  id: string;
  email: string;
  name: string;
};

export type ActionResult<T> =
  | {
      success: true;
      data: T;
      message: string;
    }
  | {
      success: false;
      message: string;
      errors?: Record<string, string[]>;
    };
