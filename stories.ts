export class Stories {
  constructor(private _token: string) {}

  private apiPath = "https://api-us.storyblok.com/v2/cdn/stories";

  async listAllStories(): Promise<any> {
    const response = await fetch(`${this.apiPath}?token=${this._token}`);
    return await response.json();
  }

  async getStoryByPath(fullPath: string): Promise<any> {
    const response = await fetch(
      `${this.apiPath}/${fullPath}?token=${this._token}`
    );
    return await response.json();
  }

  async getStoryById(id: string): Promise<any> {
    const response = await fetch(`${this.apiPath}/${id}?token=${this._token}`);
    return await response.json();
  }

  async getStoryByUuid(uuid: string): Promise<any> {
    const response = await fetch(
      `${this.apiPath}/${uuid}?token=${this._token}&find_by=uuid`
    );
    return await response.json();
  }
}
