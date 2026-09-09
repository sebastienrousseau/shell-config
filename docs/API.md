# `@sebastienrousseau/shell-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/shell-config`.

---

## Description
Shareable Shell configuration standards providing strict ShellCheck static analysis and deterministic shfmt presets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/shell-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .shellcheckrc
- **Description**: Comprehensive ShellCheck configuration enforcing variable quoting, error exit checks, and portability.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. .shfmt
- **Description**: Deterministic shfmt code formatting enforcing 2 spaces, switch case indentation, and binary operator alignment.
- **Scope**: Production & Development
- **Status**: Stable & Active
