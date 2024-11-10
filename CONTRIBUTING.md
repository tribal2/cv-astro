# Contributing to CV-Astro

Thank you for your interest in contributing to CV-Astro! This document provides guidelines and instructions for contributing to the project.

## Development Setup

This project uses [pnpm](https://pnpm.io/) as its package manager and is structured as a monorepo with workspaces.

1. **Prerequisites**
   - Node.js (v16 or higher)
   - pnpm (`npm install -g pnpm`)

2. **Clone the repository**
   ```bash
   git clone https://github.com/tribal2/cv-astro.git
   cd cv-astro
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start development environment**
   ```bash
   cd demo
   pnpm dev
   ```

   The demo application will be available at `http://localhost:4321`. This is where you can preview your changes to the CV-Astro component.

## Project Structure

```
cv-astro/
├── demo/                   # Demo application using the component
│   ├── src/
│   │   ├── pages/         # Demo pages using the CV component
│   │   └── dummy.ts       # Sample CV data for testing
│   └── tailwind.config.ts # TailwindCSS configuration
├── packages/
│   └── cv-astro/          # Main component package
│       ├── src/
│       │   ├── components/ # Reusable components
│       │   ├── sections/   # CV section components
│       │   ├── icons/      # Icon components
│       │   └── cv.d.ts     # TypeScript definitions
│       ├── index.ts        # Main export file
│       └── astro.config.mjs# Astro configuration
└── package.json           # Root package configuration
```

## Component Development

When developing new features or fixing bugs:

1. **Component Location**
   - All component code lives in `packages/cv-astro/src/`
   - Icons should be added to `packages/cv-astro/src/icons/`
   - Reusable components go in `packages/cv-astro/src/components/`
   - CV sections belong in `packages/cv-astro/src/sections/`

2. **TypeScript Types**
   - Add or update types in `cv.d.ts`
   - Export new types through `index.ts`
   - Ensure strict type checking, avoid `any`

3. **Styling**
   - Use TailwindCSS for styling
   - Follow the existing class naming patterns
   - Ensure styles work in both light and dark modes
   - Test print layout compatibility

4. **Testing Changes**
   - Update `demo/src/dummy.ts` with relevant test data
   - Test your changes in the demo app
   - Verify responsive behavior
   - Check print layout

## Development Workflow

1. **Start the Development Server**
   ```bash
   cd demo
   pnpm dev
   ```

2. **Make Changes**
   - Edit files in `packages/cv-astro/`
   - Changes will be reflected in the demo app
   - Test different screen sizes
   - Test print layout

3. **Update Documentation**
   - Add JSDoc comments to components
   - Update README.md for new features
   - Document breaking changes

4. **Commit Guidelines**
   Follow conventional commits:
   - `feat:` New features
   - `fix:` Bug fixes
   - `docs:` Documentation changes
   - `style:` Code style changes
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance tasks

## Pull Request Process

1. **Before Submitting**
   - Run `pnpm typecheck` in both demo and package
   - Test all features in the demo app
   - Update documentation
   - Add comments for complex logic

2. **PR Description**
   - Clearly describe the changes
   - Include screenshots for UI changes
   - List any breaking changes
   - Reference related issues

3. **Review Process**
   - Address review comments
   - Keep PR scope focused
   - Maintain clean commit history

## Need Help?

- Create an issue for bugs or feature requests
- Use discussions for questions
- Tag maintainers for urgent issues

## License

By contributing to CV-Astro, you agree that your contributions will be licensed under the MIT License.
