export interface Explanation {
  what: string;
  why?: string;
  fix?: string;
}

export interface ExplainableError extends Error {
  explanation?: Explanation;
  originalError?: Error;
}
