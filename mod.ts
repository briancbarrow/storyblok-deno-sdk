import { Storyblok } from "./storyblok.ts";
export default function storyblok(token: string): Storyblok {
  try {
    return new Storyblok(token);
  } catch (err) {
    throw new Error("Storyblok connection failed: " + err);
  }
}
