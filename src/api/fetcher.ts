class Fetcher {
  static get<T>(url: string, options?: any): Promise<T> {
    return fetch(url, options).then((response) => response.json());
  }
}

export { Fetcher };
