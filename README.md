# Engineer StudyHub

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Contributors](https://img.shields.io/github/contributors/your-username/Engineer-StudyHub)](https://github.com/your-username/Engineer-StudyHub/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/your-username/Engineer-StudyHub)](https://github.com/your-username/Engineer-StudyHub/network/members)
[![Issues](https://img.shields.io/github/issues/your-username/Engineer-StudyHub)](https://github.com/your-username/Engineer-StudyHub/issues)

Engineer StudyHub is a dynamic platform that empowers engineering students with hands-on learning experiences. Through structured tutorials, real-world projects, and coding challenges, students can bridge the gap between academic theory and industry demands. Our platform offers collaborative resources and expert mentorship to help students acquire the skills needed for today’s competitive tech landscape.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Technologies Used](#technologies-used)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Contact](#contact)

## Features

- 🎓 **Comprehensive Tutorials**: Step-by-step guides on various engineering and technical topics.
- 🚀 **Project-Based Learning**: Hands-on projects that simulate real-world applications.
- 💻 **Coding Challenges**: Practical coding tasks that enhance problem-solving skills.
- 👨‍🏫 **Mentorship**: Expert guidance to support engineering students through their learning journey.
- 📈 **Industry-Focused Resources**: Preparing students for internships and job opportunities by offering relevant content.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (>=14.x) installed on your system.
- **npm** (>=6.x) or **Yarn** as a package manager.
- **Git** for version control.

### Installation

Follow these steps to get the project running locally:

1. **Fork** the repository to your GitHub account:
   ```bash
   git clone https://github.com/your-username/Engineer-StudyHub.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Engineer-StudyHub
   ```
3. Navigate into the frontend directory and install dependencies:
   ```bash
   cd frontend && npm install
   ```
4. Navigate into the backend directory and install dependencies:
   ```bash
   cd ../backend && npm install
   ```
5. Add a `.env` file in the main project directory (not inside frontend or backend) with the following content:
   ```
   MONGO_URI=mongodb://localhost:27017/Engineer-StudyHub
   PORT=5000
   JWT_SECRET= asjfhladskjafkjlfffdshflkjdshfjkds
   dotenv.config();

   CLOUD_NAME = dc18nvrik
   API_KEY = 494172899366566
   API_SECRET = Kj4q8uuCiMi8sg0wS2VgOpSca6us
   ```

### Running the Project

1. **Build the frontend**:
   ```bash
   cd frontend && npm run build
   ```
2. **Start the entire project** from the main directory:
   ```bash
   cd ..
   npm start
   ```

The project will be live on http://localhost:3000, and the backend will be running on the specified port (default: 5000).

## Contributing

We welcome contributions to Engineer StudyHub! Whether you’re helping to fix bugs, adding new features, or improving documentation, your contributions are valuable.

### How to Contribute

1. **Fork the repository**: Go to the project’s GitHub page and click the "Fork" button at the top-right corner.
2. **Clone your fork**:
    ```bash
    git clone https://github.com/your-username/Engineer-StudyHub.git
    ```
3. **Create a branch for your changes**:
    ```bash
    git checkout -b feature-name
    ```
4. **Make your changes**: Implement your new feature or bug fix in the codebase.
5. **Commit your changes**: Use a clear and concise commit message:
    ```bash
    git commit -m "Add feature-name"
    ```
6. **Push to GitHub**:
    ```bash
    git push origin feature-name
    ```
7. **Open a Pull Request**: Go to the original repository and open a new Pull Request describing your changes.

Please refer to our [CONTRIBUTING.md](./CONTRIBUTING.md) file for detailed guidelines on contributing, coding style, and more.

## Technologies Used

- **React**: Frontend framework for building UI components.
- **Node.js**: JavaScript runtime for backend functionality.
- **HTML5 & CSS3**: For structuring and styling the web pages.
- **Git**: Version control for managing changes.

## Code of Conduct

Engineer StudyHub adheres to a strong code of conduct to foster an inclusive, welcoming environment. Please review our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

## License

This project is licensed under the MIT License. You can freely use, modify, and distribute the software. See the [LICENSE](./LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

**Project Maintainers:** Swapnil Patle & Ghamesh Rahangdale  
**Email:** swapnilpatle01@gmail.com & ghameshrahangdale83@gmail.com  
**GitHub Issues:** Submit an issue
