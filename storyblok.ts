import { Stories } from "./stories.ts";

export class Storyblok {
  private _token: string;

  stories: Stories;
  constructor(token: string) {
    this._token = token;
    this.stories = new Stories(this._token);
  }
}
