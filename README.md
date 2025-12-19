# explainable-errors

Errors are meant for humans, not just machines.  
Turn cryptic errors into clear, actionable messages your team can understand instantly.

Most error messages tell you **what broke**, not **why** or **what to do next**.
`explainable-errors` turns raw technical errors into **clear, teachable explanations**.

Designed for developers who care about **clarity, learning, and good DX**.

---

## The Problem

This is a common error:

```
TypeError: Cannot read property 'name' of undefined
```

But what you really want to know is:

- What happened?
- Why did it happen?
- What should I do now?

That context usually lives:

- in someone’s head
- in Slack messages
- or in code reviews

This library makes that context **part of the error itself**.

---

## The Idea

Every error should answer **three human questions**:

1. **What happened**
2. **Why it happened**
3. **What you can do**

That’s it. No dashboards. No services. No magic.

---

## Installation

```bash
npm install explainable-errors
```

or

```bash
pnpm add explainable-errors
```

---

## Basic Usage

```ts
import { explain } from 'explainable-errors';

try {
  await fetchUser();
} catch (err) {
  throw explain(err, {
    what: 'Failed to load user profile',
    why: 'The API request returned an error',
    fix: 'Check if the backend is running or the endpoint is correct',
  });
}
```

### Dev Output

```
❌ Failed to load user profile

Why it happened:
→ The API request returned an error

What you can do:
→ Check if the backend is running or the endpoint is correct
```

Readable. Actionable. Teachable.

---

## Why This Exists

Most error-handling tools focus on:

- logging
- monitoring
- machines

`explainable-errors` focuses on:

- developers
- learning
- understanding

It’s especially useful for:

- frontend applications
- shared APIs
- onboarding junior developers
- internal tools
- teaching environments

---

## Design Principles

- ✅ **Teaching-first**
- ✅ **Framework-agnostic**
- ✅ **Zero configuration**
- ✅ **Preserves original stack traces**
- ✅ **No automatic logging**
- ✅ **Works in frontend and backend**

If you remove this package later, your code still works.

---

## API

### `explain(error, explanation)`

#### `error`

- Any `Error`, string, or unknown value

#### `explanation`

```ts
{
  what: string; // required
  why?: string;
  fix?: string;
}
```

Returns a standard `Error` with explanation metadata attached.

You decide whether to `throw`, log, or handle it.

---

## Production vs Development

- **Development**: full, readable explanation
- **Production**: compact error message, same stack trace

No sensitive information is exposed by default.

---

## What This Is NOT

- ❌ Not a logging framework
- ❌ Not an error tracking service
- ❌ Not a replacement for Sentry
- ❌ Not AI-powered (by design)

It does one thing well.

---

## Philosophy

Good error messages are a form of documentation.
Great error messages are a form of teaching.

---

## Roadmap (Intentionally Small)

- Error explanation presets (e.g. network, null access)
- Optional colour formatting
- Framework adapters (React / Express)

No plans for dashboards or SaaS.

---

## Contributing

Ideas, feedback, and discussions are welcome.
This project values **clarity over cleverness**.

---

## License

MIT
