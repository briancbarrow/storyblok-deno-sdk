import { Storyblok } from "./storyblok.ts";
export default function storyblok(token: string): Storyblok {
  try {
    const storyblok = new Storyblok(token);
    console.log("Storyblok SDK initialized");
    return storyblok;
  } catch (err) {
    throw new Error("Storyblok connection failed: " + err);
  }
}
