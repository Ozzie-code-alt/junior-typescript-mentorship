# TypeScript Juniors Crash Course

A tiny TypeScript sandbox with a couple of starter files for exploring basic syntax and primitive types.

## What you need
- Node.js 18+ and npm
- TypeScript toolchain

## Quick start
1) Install dev dependencies:
   ```bash
   npm install -D typescript ts-node
   ```
2) Run a file with ts-node (no build step needed):
   ```bash
   npx ts-node src/01-basics.ts
   npx ts-node src/02-primitive-types.ts
   npx ts-node src/03-type-inference.ts
   npx ts-node src/04-functions.ts
   npx ts-node src/05-objetcs-interfaces.ts
   npx ts-node src/06-type-alias.ts
   npx ts-node src/07-union-intersection.ts
   ```

## Project layout
- `src/01-basics.ts` — hello world + console log
- `src/02-primitive-types.ts` — primitives, arrays, tuples, enums, any/unknown, and a simple `greet()`
- `src/03-type-inference.ts` — shows how TypeScript infers types from initial values
- `src/04-functions.ts` — function annotations, optional/default/rest params, and callable types
- `src/05-objetcs-interfaces.ts` — optional/readonly props, interface methods, and implementing simple contracts
- `src/06-type-alias.ts` — type aliases for objects and primitives, union-style IDs, plus interfaces vs type notes
- `src/07-union-intersection.ts` — union literals for state and intersections to combine shapes
- `tsconfig.json` — strict CommonJS config targeting ES2020

## Tips
- Keep using `unknown` instead of `any` when you need flexibility plus type safety.
- `enum` members default to zero-based numbers; `Color.Green` is `1` here.
- Prefer `const` over `let` when values do not change.
- Type inference locks the variable type to the initial value’s shape; later mismatched assignments raise errors.
- Optional params are `undefined` when omitted; default params kick in only when the argument is `undefined`.
- Rest params give you an array; annotate the element type so reducers keep type safety.
