# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-11-09

### Changed
- Updated Astro to version ^4.16.10
- Updated @astrojs/tailwind to version ^5.1.2
- Updated other related dependencies to their latest compatible versions

## [1.1.0] - 2024-11-09

### Added
- Category property to `ISkill` interface
- Support for `config.categoryOrder` to customize skill list sorting
- URL support for skill badges
- Color variants for CvBadge component
- Optional dates in Education section
- New `inProgress` flag for education entries to mark ongoing education

### Changed
- Extracted common section wrapper into reusable component
- Standardized badge usage across components
- Improved link handling interface
- Enhanced CvBadge component with better link support

### Fixed
- Demo data structure and imports
- Badge component consistency issues

## [1.0.1] - 2024-01-05

Initial public release

### Added
- Basic CV component structure
- Section components for different CV parts
- Print-friendly styling
- TailwindCSS integration
- TypeScript definitions
- Demo application
