const resources = {
  key: "resources",
  title: "Resources",
  items: [
    {
      name: "Dev.to",
      key: "devto",
      description: "A constructive and inclusive social network for software developers with thousands of articles and tutorials.",
      link: "https://dev.to/"
    },
    {
      name: "FreeCodeCamp",
      key: "freecodecamp",
      description: "A platform offering free coding tutorials and certification courses with comprehensive learning resources.",
      link: "https://www.freecodecamp.org/"
    },
    {
      name: "GeeksforGeeks",
      key: "geeksforgeeks",
      description: "A computer science portal providing well-written, well-thought-out computer science and programming articles.",
      link: "https://www.geeksforgeeks.org/"
    },
    {
      name: "Hashnode",
      key: "hashnode",
      description: "A free developer blogging platform that allows you to publish articles on your own domain.",
      link: "https://hashnode.com/"
    },
    {
      name: "Javatpoint",
      key: "javatpoint",
      description: "Provides tutorials and reference materials for various programming languages and technologies.",
      link: "https://www.javatpoint.com/"
    },
    {
      name: "LogRocket",
      key: "logrocket",
      description: "Frontend monitoring solution with technical articles and tutorials about modern web development.",
      link: "https://blog.logrocket.com/"
    },
    {
      name: "Medium",
      key: "medium",
      description: "A platform where developers share their knowledge through articles and blog posts about programming.",
      link: "https://medium.com/"
    },
    {
      name: "Tutorialspoint",
      key: "tutorialspoint",
      description: "Simple and comprehensive tutorials on various technical subjects and programming languages.",
      link: "https://www.tutorialspoint.com/"
    },
    {
      name: "W3Schools",
      key: "w3schools",
      description: "Web developers site with tutorials and references on web development languages and frameworks.",
      link: "https://www.w3schools.com/"
    },
    {
      name: "Andrew Ng's Blog",
      key: "andrew-ng",
      description: "Blog by AI pioneer Andrew Ng covering machine learning, deep learning, and AI topics.",
      link: "https://www.andrewng.org/blog/"
    },
    {
      name: "Code With Harry",
      key: "code-with-harry",
      description: "Programming tutorials and courses in Hindi and English for various programming languages.",
      link: "https://codewithharry.com/"
    },
    {
      name: "Girls Who Code",
      key: "girls-who-code",
      description: "Organization dedicated to closing the gender gap in technology with educational resources.",
      link: "https://girlswhocode.com/resources"
    },
    {
      name: "Hacker News",
      key: "hacker-news",
      description: "Social news website focusing on computer science and entrepreneurship.",
      link: "https://news.ycombinator.com/"
    },
    {
      name: "Hackernoon",
      key: "hackernoon",
      description: "Technology publication platform with stories and tutorials written by tech professionals.",
      link: "https://hackernoon.com/"
    },
    {
      name: "MDN Web Docs",
      key: "mdn-web-docs",
      description: "Comprehensive documentation and learning resources for web technologies.",
      link: "https://developer.mozilla.org/en-US/"
    },
    {
      name: "Omglinux",
      key: "omglinux",
      description: "Blog covering Linux news, app updates, and tutorials for Linux users.",
      link: "https://www.omglinux.com/"
    },
    {
      name: "OpenReplay Blogs",
      key: "openreplay-blogs",
      description: "Technical articles and tutorials on web development and debugging.",
      link: "https://blog.openreplay.com/"
    },
    {
      name: "Showwcase",
      key: "showwcase",
      description: "Developer-focused community for sharing projects and knowledge.",
      link: "https://www.showwcase.com/"
    },
    {
      name: "A List Apart",
      key: "a-list-apart",
      description: "Articles about web design, development, and best practices since 1998.",
      link: "https://alistapart.com/"
    },
    {
      name: "Chat.Zulip",
      key: "chat-zulip",
      description: "Open-source team chat with threaded conversations for technical communities.",
      link: "https://chat.zulip.org/"
    },
    {
      name: "Daily.dev",
      key: "daily-dev",
      description: "All-in-one platform to stay updated on developer news from various sources.",
      link: "https://daily.dev/"
    },
    {
      name: "Notion",
      key: "notion",
      description: "All-in-one workspace for notes, tasks, wikis, and databases with templates for developers.",
      link: "https://www.notion.so/"
    },
    {
      name: "ReactTraining",
      key: "react-training",
      description: "Educational resources and tutorials for learning React development.",
      link: "https://reacttraining.com/blog"
    },
    {
      name: "SitePoint",
      key: "sitepoint",
      description: "Hub for web developers and designers with tutorials and articles on various technologies.",
      link: "https://www.sitepoint.com/"
    },
    {
      name: "SpeckyBoy",
      key: "speckyboy",
      description: "Magazine for designers and developers featuring resources, tutorials and inspiration.",
      link: "https://speckyboy.com/"
    },
    {
      name: "Top 100+ Machine Learning Projects",
      key: "ml-projects",
      description: "Comprehensive collection of machine learning projects with source code for practical learning.",
      link: "https://thecleverprogrammer.com/2020/11/15/machine-learning-projects/"
    },
    {
      name: "DevDocs",
      key: "devdocs",
      description: "Fast, offline, and free documentation browser for developers that combines multiple API documentations.",
      link: "https://devdocs.io/"
    },
    {
      name: "Docsify",
      key: "docsify",
      description: "A magical documentation site generator that creates documentation websites on the fly without building static HTML files.",
      link: "https://docsify.js.org/"
    },
    {
      name: "Docusaurus",
      key: "docusaurus",
      description: "Easy to maintain open source documentation websites built with React that supports translations and versioning.",
      link: "https://docusaurus.io/"
    },
    {
      name: "GitBook",
      key: "gitbook",
      description: "Modern documentation format and toolchain using Git and Markdown for creating beautiful documentation.",
      link: "https://www.gitbook.com/"
    },
    {
      name: "jsDoc",
      key: "jsdoc",
      description: "API documentation generator for JavaScript that generates HTML documentation from JSDoc comments in source code.",
      link: "https://jsdoc.app/"
    },
    {
      name: "MkDocs",
      key: "mkdocs",
      description: "Fast, simple and beautiful static site generator that's geared towards building project documentation from Markdown files.",
      link: "https://www.mkdocs.org/"
    },
    {
      name: "Sphinx",
      key: "sphinx",
      description: "Documentation generator that converts reStructuredText files into HTML websites and other formats.",
      link: "https://www.sphinx-doc.org/"
    },
    {
      name: "TypeDoc",
      key: "typedoc",
      description: "Documentation generator for TypeScript projects that converts comments in TypeScript source code into rendered HTML documentation.",
      link: "https://typedoc.org/"
    },
    {
      name: "VuePress",
      key: "vuepress",
      description: "Vue-powered static site generator optimized for writing technical documentation with Markdown-centered project structure.",
      link: "https://vuepress.vuejs.org/"
    },
    {
      name: "Anna's Archive",
      key: "annas-archive",
      description: "The largest open-source library for books, papers, comics, magazines, and more with millions of items.",
      link: "https://annas-archive.org/"
    },
    {
      name: "Book Yard",
      key: "book-yard",
      description: "Free educational resources and e-books for students and professionals in various technical fields.",
      link: "https://www.bookyards.com/"
    },
    {
      name: "BookBoon",
      key: "bookboon",
      description: "Platform offering free textbooks and business e-books for students and professionals.",
      link: "https://bookboon.com/"
    },
    {
      name: "Computer Books",
      key: "computer-books",
      description: "Free computer, programming, mathematics, technical books, lecture notes and tutorials.",
      link: "https://www.computerbooks.us/"
    },
    {
      name: "Eloquent JavaScript",
      key: "eloquent-javascript",
      description: "Free book about JavaScript, programming, and the wonders of the digital world.",
      link: "https://eloquentjavascript.net/"
    },
    {
      name: "RIP Tutorial",
      key: "rip-tutorial",
      description: "Collection of tutorials and examples for various programming languages and technologies.",
      link: "https://riptutorial.com/"
    },
    {
      name: "The Deep Learning textbook",
      key: "deep-learning-textbook",
      description: "Comprehensive textbook on deep learning fundamentals by Ian Goodfellow, Yoshua Bengio, and Aaron Courville.",
      link: "https://www.deeplearningbook.org/"
    },
    {
      name: "000webhost",
      key: "000webhost",
      description: "Free web hosting service with PHP, MySQL, cPanel, and no ads for small projects and beginners.",
      link: "https://www.000webhost.com/"
    },
    {
      name: "Firebase Hosting",
      key: "firebase-hosting",
      description: "Fast and secure web hosting for static and dynamic content with global CDN from Google.",
      link: "https://firebase.google.com/products/hosting"
    },
    {
      name: "Fly",
      key: "fly",
      description: "Platform for running full-stack apps and databases close to your users with global edge computing.",
      link: "https://fly.io/"
    },
    {
      name: "GitHub Pages",
      key: "github-pages",
      description: "Free hosting service for static websites directly from GitHub repositories.",
      link: "https://pages.github.com/"
    },
    {
      name: "Heroku",
      key: "heroku",
      description: "Cloud platform that lets companies build, deliver, monitor and scale apps with integrated data services.",
      link: "https://www.heroku.com/"
    },
    {
      name: "Netlify",
      key: "netlify",
      description: "Platform for modern web projects with continuous deployment, serverless functions, and more.",
      link: "https://www.netlify.com/"
    },
    {
      name: "PythonAnywhere",
      key: "pythonanywhere",
      description: "Online IDE and web hosting service based on Python programming language.",
      link: "https://www.pythonanywhere.com/"
    },
    {
      name: "Render",
      key: "render",
      description: "Unified platform to build and run all your apps and websites with free SSL and global CDN.",
      link: "https://render.com/"
    },
    {
      name: "Vercel",
      key: "vercel",
      description: "Platform for frontend frameworks and static sites with serverless functions and global CDN.",
      link: "https://vercel.com/"
    },
    {
      name: "Brimble",
      key: "brimble",
      description: "Free hosting platform for static websites with custom domains and SSL certificates.",
      link: "https://brimble.io/"
    },
    {
      name: "Railway",
      key: "railway",
      description: "Infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and deploy to the cloud.",
      link: "https://railway.app/"
    },
    {
      name: "Surge",
      key: "surge",
      description: "Static web publishing for front-end developers with simple, single-command deployment.",
      link: "https://surge.sh/"
    },
    {
      name: "Angular",
      key: "angular",
      description: "Official documentation for the Angular framework, a platform for building mobile and desktop web applications.",
      link: "https://angular.io/docs"
    },
    {
      name: "Django",
      key: "django",
      description: "Official documentation for Django, a high-level Python web framework that encourages rapid development.",
      link: "https://docs.djangoproject.com/"
    },
    {
      name: "Flutter",
      key: "flutter",
      description: "Official documentation for Flutter, Google's UI toolkit for building natively compiled applications.",
      link: "https://docs.flutter.dev/"
    },
    {
      name: "Go",
      key: "go",
      description: "Official documentation for Go programming language, an open source programming language supported by Google.",
      link: "https://golang.org/doc/"
    },
    {
      name: "JavaScript",
      key: "javascript",
      description: "Official documentation for JavaScript, the programming language of the Web.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "Next.js",
      key: "nextjs",
      description: "Official documentation for Next.js, a React framework with hybrid static & server rendering, and route pre-fetching.",
      link: "https://nextjs.org/docs"
    },
    {
      name: "React",
      key: "react",
      description: "Official documentation for React, a JavaScript library for building user interfaces.",
      link: "https://reactjs.org/docs/getting-started.html"
    },
    {
      name: "Tailwind CSS",
      key: "tailwind",
      description: "Official documentation for Tailwind CSS, a utility-first CSS framework for rapidly building custom designs.",
      link: "https://tailwindcss.com/docs"
    },
    {
      name: "Vue.js",
      key: "vuejs",
      description: "Official documentation for Vue.js, a progressive JavaScript framework for building user interfaces.",
      link: "https://vuejs.org/guide/introduction.html"
    },
    {
      name: "Ember.js",
      key: "emberjs",
      description: "Official documentation for Ember.js, a framework for ambitious web developers.",
      link: "https://guides.emberjs.com/"
    },
    {
      name: "Flask",
      key: "flask",
      description: "Official documentation for Flask, a lightweight WSGI web application framework in Python.",
      link: "https://flask.palletsprojects.com/"
    },
    {
      name: "Laravel",
      key: "laravel",
      description: "Official documentation for Laravel, a PHP web application framework with expressive, elegant syntax.",
      link: "https://laravel.com/docs"
    },
    {
      name: "Node.js",
      key: "nodejs",
      description: "Official documentation for Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      link: "https://nodejs.org/en/docs/"
    },
    {
      name: "Nuxt.js",
      key: "nuxtjs",
      description: "Official documentation for Nuxt.js, an intuitive Vue framework for building server-side rendered applications.",
      link: "https://nuxtjs.org/docs/get-started/installation"
    },
    {
      name: "Express",
      key: "express",
      description: "Official documentation for Express, a minimal and flexible Node.js web application framework.",
      link: "https://expressjs.com/"
    },
    {
      name: "Python",
      key: "python",
      description: "Official documentation for Python, a programming language that lets you work quickly and integrate systems effectively.",
      link: "https://docs.python.org/"
    },
    {
      name: "Svelte",
      key: "svelte",
      description: "Official documentation for Svelte, a radical new approach to building user interfaces.",
      link: "https://svelte.dev/docs"
    },
    {
      name: "Artificial Intelligence Projects",
      key: "ai-projects",
      description: "Collection of project ideas and implementations in the field of artificial intelligence.",
      link: "https://github.com/topics/artificial-intelligence"
    },
    {
      name: "Cloud Computing Projects",
      key: "cloud-projects",
      description: "Project ideas and tutorials for cloud computing using various platforms and services.",
      link: "https://github.com/cloudcommunity/Cloud-Computing-Projects-Solutions"
    },
    {
      name: "Flutter Projects",
      key: "flutter-projects",
      description: "Collection of Flutter app projects with source code for mobile development learning.",
      link: "https://github.com/flutter/samples"
    },
    {
      name: "HTML & CSS Projects",
      key: "html-css-projects",
      description: "Beginner-friendly projects focusing on HTML and CSS for web development practice.",
      link: "https://github.com/topics/html-css-projects"
    },
    {
      name: "JavaScript Projects",
      key: "javascript-projects",
      description: "Collection of JavaScript projects for beginners and intermediate developers.",
      link: "https://github.com/topics/javascript-projects"
    },
    {
      name: "Machine Learning Projects",
      key: "ml-projects-ideas",
      description: "Practical machine learning project ideas with implementations and tutorials.",
      link: "https://github.com/topics/machine-learning-projects"
    },
    {
      name: "Projects Using HTML, CSS & JavaScript",
      key: "web-frontend-projects",
      description: "Frontend web development projects using the core technologies of HTML, CSS, and JavaScript.",
      link: "https://github.com/bradtraversy/50projects50days"
    },
    {
      name: "Python Projects",
      key: "python-projects",
      description: "Collection of Python projects for beginners and intermediate developers to practice skills.",
      link: "https://github.com/topics/python-projects"
    },
    {
      name: "React.Js Projects",
      key: "reactjs-projects",
      description: "Project ideas and implementations using React.js for frontend development practice.",
      link: "https://github.com/topics/react-projects"
    },
    {
      name: "Blockchain Projects",
      key: "blockchain-projects",
      description: "Projects and tutorials for blockchain technology and cryptocurrency development.",
      link: "https://github.com/topics/blockchain-projects"
    },
    {
      name: "C# Projects",
      key: "csharp-projects",
      description: "Collection of C# projects for .NET developers to enhance their skills.",
      link: "https://github.com/topics/csharp-projects"
    },
    {
      name: "Cyber Security Projects",
      key: "cybersecurity-projects",
      description: "Hands-on cybersecurity projects for learning security concepts and techniques.",
      link: "https://github.com/topics/cybersecurity-projects"
    },
    {
      name: "Django Projects",
      key: "django-projects",
      description: "Web application projects built with Django framework for Python developers.",
      link: "https://github.com/topics/django-projects"
    },
    {
      name: "Flask Projects",
      key: "flask-projects",
      description: "Web development projects using Flask, a lightweight Python web framework.",
      link: "https://github.com/topics/flask-projects"
    },
    {
      name: "Java Projects",
      key: "java-projects",
      description: "Collection of Java projects for beginners and intermediate developers to practice skills.",
      link: "https://github.com/topics/java-projects"
    },
    {
      name: "Made With React.js",
      key: "made-with-reactjs",
      description: "Showcase of applications and websites built using React.js for inspiration.",
      link: "https://github.com/enaqx/awesome-react#react-apps-and-websites"
    },
    {
      name: "Web Dev Projects",
      key: "web-dev-projects",
      description: "Comprehensive collection of web development projects across various technologies.",
      link: "https://github.com/topics/web-development-projects"
    },
    {
      name: "Astro",
      key: "astro",
      description: "Modern static site builder that delivers lightning-fast performance with a modern developer experience.",
      link: "https://astro.build/"
    },
    {
      name: "Eleventy",
      key: "eleventy",
      description: "Simpler static site generator that transforms a directory of templates into HTML.",
      link: "https://www.11ty.dev/"
    },
    {
      name: "Gatsby",
      key: "gatsby",
      description: "React-based open source framework for creating websites and apps with performance, scalability, and security built-in.",
      link: "https://www.gatsbyjs.com/"
    },
    {
      name: "Gridsome",
      key: "gridsome",
      description: "Vue-powered static site generator for building blazing fast websites with data-driven content.",
      link: "https://gridsome.org/"
    },
    {
      name: "Hexo",
      key: "hexo",
      description: "Fast, simple and powerful blog framework powered by Node.js.",
      link: "https://hexo.io/"
    },
    {
      name: "Jekyll",
      key: "jekyll",
      description: "Simple, blog-aware, static site generator perfect for personal, project, or organization sites.",
      link: "https://jekyllrb.com/"
    },
    {
      name: "Sapper",
      key: "sapper",
      description: "Framework for building web applications of all sizes with Svelte.",
      link: "https://sapper.svelte.dev/"
    },
    {
      name: "Scully",
      key: "scully",
      description: "Static site generator for Angular projects that pre-renders pages for better performance.",
      link: "https://scully.io/"
    },
    {
      name: "SvelteKit",
      key: "sveltekit",
      description: "Framework for building web applications with Svelte that handles routing, server-side rendering, and more.",
      link: "https://kit.svelte.dev/"
    },
    {
      name: "Pelican",
      key: "pelican",
      description: "Static site generator that supports Markdown and reST syntax and can be extended with plugins.",
      link: "https://getpelican.com/"
    },
    {
      name: "Zola",
      key: "zola",
      description: "Fast static site generator with everything built-in, written in Rust.",
      link: "https://www.getzola.org/"
    }
  ]
};

export default resources;