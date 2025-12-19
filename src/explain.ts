import { Explanation, ExplainableError } from './types';
import { formatExplanation } from './format';

export function explain(
  error: unknown,
  explanation: Explanation
): ExplainableError {
  const baseError = error instanceof Error ? error : new Error(String(error));

  const explainedError = new Error(explanation.what) as ExplainableError;

  explainedError.name = baseError.name;
  explainedError.stack = baseError.stack;
  explainedError.explanation = explanation;
  explainedError.originalError = baseError;

  if (process.env.NODE_ENV !== 'production') {
    explainedError.message = formatExplanation(explanation);
  }

  return explainedError;
}
