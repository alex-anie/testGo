# Modern Landing Page with Automated Testing

This repository contains a responsive modern landing page with comprehensive automated testing using Cypress and GitHub Actions CI/CD.


## 📋 Features

- **Responsive Design**: Fully responsive landing page that works on all devices
- **Modern UI**: Clean and modern design with animations and transitions
- **Interactive Elements**: Mobile menu, testimonial slider, and hover effects
- **Testing Suite**: Comprehensive Cypress tests covering all aspects of the UI
- **CI/CD Pipeline**: Automated testing via GitHub Actions

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-landing-page.git
   cd modern-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://127.0.0.1:5500/
   ```

## 🧪 Running Tests

### Run Tests Locally

To open the Cypress Test Runner:
```bash
npm run cypress:open
```

To run tests in headless mode:
```bash
npm test
```

### Test Structure

The Cypress tests are organized into four key files:

1. **navigation.spec.js**: Tests for navigation menu, mobile responsiveness, and scroll effects
2. **hero.spec.js**: Tests for hero section content, CTA buttons, and responsive layout
3. **features.spec.js**: Tests for feature cards, hover effects, and responsive grid
4. **footer.spec.js**: Tests for footer content, links, and contact information

## 🔄 Continuous Integration

This project uses GitHub Actions for continuous integration. The workflow automatically:

- Sets up the testing environment
- Starts a local server
- Runs all Cypress tests
- Captures screenshots of failures
- Records videos of test runs

The CI pipeline runs:
- On every push to main/master branch
- On pull requests targeting main/master
- Daily at midnight UTC
- Manually from the GitHub Actions tab

## 📁 Project Structure

```
project-root/
├── index.html            # Main HTML structure
├── style.css             # CSS styles
├── app.js                # JavaScript functionality
├── package.json          # Project dependencies and scripts
├── cypress.config.js     # Cypress configuration
├── .gitignore            # Git ignore patterns
├── README.md             # This file
├── .github/
│   └── workflows/
│       └── cypress-tests.yml  # GitHub Actions workflow
└── cypress/
    ├── integration/          # Test files
    │   ├── navigation.spec.js
    │   ├── hero.spec.js
    │   ├── features.spec.js
    │   └── footer.spec.js
    ├── fixtures/             # Test data
    └── support/              # Utility functions and commands
        ├── e2e.js
        └── commands.js
```

## 🛠️ Customization

### Modifying the Landing Page

- **HTML Structure**: Edit `index.html` to change content and layout
- **Styling**: Modify `style.css` to update colors, spacing, and visual elements
- **Functionality**: Update `app.js` to change interactive behaviors

### Extending Tests

To add new tests:
1. Create a new spec file in the `cypress/integration/` directory
2. Update the GitHub Actions workflow if needed
3. Run the tests locally to verify

## 📋 Best Practices

1. **Keep node_modules out of git**: 
   - The project is configured to ignore `node_modules/`
   - If accidentally added, you can remove it:
     ```bash
     git reset node_modules/
     ```

2. **Before pushing**:
   - Run tests locally
   - Ensure all tests pass
   - Check for responsive issues

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request