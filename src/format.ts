import { Explanation } from './types';

export function formatExplanation(explanation: Explanation): string {
  const lines: string[] = [];

  lines.push(`❌ ${explanation.what}`);
  lines.push('');

  if (explanation.why) {
    lines.push('Why it happened:');
    lines.push(`→ ${explanation.why}`);
    lines.push('');
  }

  if (explanation.fix) {
    lines.push('What you can do:');
    lines.push(`→ ${explanation.fix}`);
    lines.push('');
  }

  return lines.join('\n');
}
