export interface Set {
  id: string;
  title: string;
  author: Author;
  terms: Term[];
}

export interface Author {
  id: string;
  email: string;
  username: string;
}

export interface Term {
  id: string;
  english: string;
  spanish: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
}
