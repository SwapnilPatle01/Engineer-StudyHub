const menuData = [
  {
    key: "frontend",
    title: "Frontend",
    items: [
      {
        name: "React",
        key: "react",
        description: "React is a library for building reusable user interfaces, enabling efficient rendering and state management for dynamic web applications.",
        link: "https://reactjs.org/docs/getting-started.html"
      },
      {
        name: "Vue",
        key: "vue",
        description: "Vue.js is a progressive framework for creating interactive user interfaces and single-page applications using a flexible and approachable architecture.",
        link: "https://vuejs.org/guide/introduction.html"
      },
      {
        name: "Angular",
        key: "angular",
        description: "Angular is a platform for building scalable web and mobile applications with built-in tools for templates, routing, and more.",
        link: "https://angular.io/docs"
      },
      {
        name: "HTML",
        key: "html",
        description: "HTML is the foundational language for structuring content on the web, defining elements like headings, paragraphs, and links.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        key: "css",
        description: "CSS is a language used to style web pages, including layout, colors, fonts, and animations for a visually appealing design.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        name: "Javascript",
        key: "javascript",
        description: "JavaScript enables dynamic, interactive behavior on websites, allowing developers to create engaging user experiences and robust web applications.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      },
      {
        name: "Bootstrap",
        key: "bootstrap",
        description: "Bootstrap is a CSS framework offering responsive grids, pre-styled components, and utilities for building modern, mobile-first websites efficiently.",
        link: "https://getbootstrap.com/docs/"
      },
      {
        name: "TailwindCSS",
        key: "tailwindcss",
        description: "Tailwind CSS provides low-level utility classes to design custom user interfaces quickly and efficiently without writing custom CSS.",
        link: "https://tailwindcss.com/docs"
      },
      {
        name: "Icons",
        key: "icons",
        description: "Icons improve UI design by providing intuitive visual cues, enhancing usability and navigation within web and mobile applications.",
        link: "https://react-icons.github.io/react-icons/"
      },
      {
        name: "Fonts",
        key: "fonts",
        description: "Fonts play a key role in enhancing readability and brand identity in web design, with numerous styles and customization options.",
        link: "https://fonts.google.com/"
      },
      {
        name: "Nextjs",
        key: "nextjs",
        description: "Next.js is a React framework enabling server-side rendering, static site generation, and advanced performance optimizations for modern web applications.",
        link: "https://nextjs.org/docs"
      },
      {
        name: "Typescript",
        key: "typescript",
        description: "TypeScript is a superset of JavaScript that adds static typing, improving code quality and reducing runtime errors in web development.",
        link: "https://www.typescriptlang.org/docs/"
      }
    ]
  },
  {
    key: "backend",
    title: "Backend",
    items: [
      {
        name: "Node.js",
        key: "nodejs",
        description: "Node.js is a runtime for executing JavaScript server-side, enabling the creation of scalable and fast network applications.",
        link: "https://nodejs.org/en/docs/"
      },
      {
        name: "Express.js",
        key: "expressjs",
        description: "Express.js is a minimal and flexible web application framework for Node.js, providing robust tools for building web applications.",
        link: "https://expressjs.com/en/starter/installing.html"
      },
      {
        name: "Django",
        key: "django",
        description: "Django is a high-level Python web framework that enables the rapid development of secure and scalable web applications.",
        link: "https://docs.djangoproject.com/en/stable/"
      },
      {
        name: "Flask",
        key: "flask",
        description: "Flask is a lightweight Python web framework that provides simplicity and flexibility for building web applications.",
        link: "https://flask.palletsprojects.com/en/stable/"
      },
      {
        name: "Caching",
        key: "caching",
        description: "Caching improves application performance by storing frequently accessed data in a temporary storage layer for quick retrieval.",
        link: "https://builtin.com/articles/caching"
      },
      {
        name: "Database",
        key: "database",
        description: "Databases store, manage, and retrieve structured data efficiently, forming the backbone of most backend systems.",
        link: "https://www.mongodb.com/resources/basics/database-management-system"
      },
      {
        name: "APIs",
        key: "apis",
        description: "APIs enable communication between software systems, allowing for data exchange and integration with third-party services.",
        link: "https://www.geeksforgeeks.org/introduction-to-apis/"
      },
      {
        name: "Security",
        key: "security",
        description: "Security practices safeguard backend systems from vulnerabilities, ensuring data integrity and protecting against malicious attacks.",
        link: "https://www.geeksforgeeks.org/web-application-security/"
      },
      {
        name: "Authentication",
        key: "authentication",
        description: "Authentication verifies user identity, allowing secure access to systems by managing login credentials and tokens.",
        link: "https://www.geeksforgeeks.org/authentication-and-authorization/"
      },
      {
        name: "Testing",
        key: "testing",
        description: "Testing ensures the reliability and quality of backend systems by identifying bugs and validating functionality through automated or manual processes.",
        link: "https://www.geeksforgeeks.org/software-testing-basics/"
      },
      {
        name: "Validation",
        key: "validation",
        description: "Validation checks data correctness and completeness, ensuring backend systems process input accurately and reliably.",
        link: "https://www.geeksforgeeks.org/data-validation/"
      }
    ],
  },
  {
    key: "dsa",
    title: "DSA",
    items: [
      {
        name: "Array",
        key: "array",
        description: "An array stores items in contiguous memory locations, useful for simple data storage and manipulation, optimizing access and modification.",
        link: "https://www.geeksforgeeks.org/array-data-structure/"
      },
      {
        name: "String",
        key: "string",
        description: "A string is a sequence of characters for representing textual data, essential for sorting, searching, and manipulating text efficiently.",
        link: "https://www.geeksforgeeks.org/string-data-structure/"
      },
      {
        name: "Sorting",
        key: "sorting",
        description: "Sorting algorithms rearrange elements in a specific order, improving data processing speed with methods like QuickSort, MergeSort, and BubbleSort.",
        link: "https://www.geeksforgeeks.org/sorting-algorithms/"
      },
      {
        name: "Searching",
        key: "searching",
        description: "Searching algorithms help find specific elements in data structures, using methods like Binary Search, Linear Search, and Hashing for optimized searches.",
        link: "https://www.geeksforgeeks.org/searching-algorithms/"
      },
      {
        name: "Trees",
        key: "trees",
        description: "A tree is a hierarchical data structure used in applications like decision-making, searching, and optimizing data storage with nodes connected by edges.",
        link: "https://www.geeksforgeeks.org/binary-tree-data-structure/"
      },
      {
        name: "Graphs",
        key: "graphs",
        description: "A graph represents nodes connected by edges, modeling complex systems such as social networks, transportation, or communication networks.",
        link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
      },
      {
        name: "Stack",
        key: "stack",
        description: "A stack follows the Last In, First Out (LIFO) principle, essential for operations like function calls, expression evaluation, and backtracking.",
        link: "https://www.geeksforgeeks.org/stack-data-structure/"
      },
      {
        name: "Queue",
        key: "queue",
        description: "A queue follows the First In, First Out (FIFO) principle, ideal for scheduling tasks and handling requests or real-time data.",
        link: "https://www.geeksforgeeks.org/queue-data-structure/"
      },
      {
        name: "LinkedList",
        key: "linkedlist",
        description: "A linked list is a linear collection of nodes, enabling efficient insertion and deletion compared to arrays, with each node pointing to the next.",
        link: "https://www.geeksforgeeks.org/data-structures/linked-list/"
      }
    ],
  },
  {
    key: "language",
    title: "Language",
    items: [
      {
        name: "C Programming",
        key: "c-programming",
        description: "C is a procedural language offering low-level memory manipulation, widely used in system programming, operating systems, and embedded systems development.",
        link: "https://www.geeksforgeeks.org/c-programming-language/"
      },
      {
        name: "C++",
        key: "c++",
        description: "C++ is an object-oriented language building on C, used for software development, game programming, and performance-critical applications.",
        link: "https://www.geeksforgeeks.org/c-plus-plus/"
      },
      {
        name: "Java",
        key: "java",
        description: "Java is a high-level, object-oriented language used for building cross-platform apps, including mobile, enterprise, and web applications.",
        link: "https://www.geeksforgeeks.org/java/"
      },
      {
        name: "Javascript",
        key: "javascript",
        description: "JavaScript is a versatile language for both frontend and backend development, enabling interactive web applications and server-side programming.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        name: "Dart",
        key: "dart",
        description: "Dart is a client-optimized language for fast apps on multiple platforms, primarily used with the Flutter framework for mobile development.",
        link: "https://dart.dev/guides"
      },
      {
        name: "Rust",
        key: "rust",
        description: "Rust is a systems programming language focused on safety, concurrency, and performance, ideal for low-level system development.",
        link: "https://www.rust-lang.org/learn"
      },
      {
        name: "Swift",
        key: "swift",
        description: "Swift is Apple's programming language for iOS, macOS, and other Apple platforms, designed for safety, performance, and modern development.",
        link: "https://swift.org/documentation/"
      },
      {
        name: "Ruby",
        key: "ruby",
        description: "Ruby is a dynamic, object-oriented language known for its simplicity and productivity, popular in web development with Ruby on Rails.",
        link: "https://www.ruby-lang.org/en/documentation/"
      }
    ],
  },
  {
    key: "mobile",
    title: "Mobile",
    items: [
      {
        name: "React Native",
        key: "react-native",
        description: "React Native enables building native mobile applications using React, allowing developers to create cross-platform apps with a single codebase.",
        link: "https://reactnative.dev/docs/getting-started"
      },
      {
        name: "Flutter",
        key: "flutter",
        description: "Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        link: "https://flutter.dev/docs"
      },
      {
        name: "Kotlin",
        key: "kotlin",
        description: "Kotlin is a modern programming language for Android development, offering improved safety, conciseness, and full interoperability with Java.",
        link: "https://kotlinlang.org/docs/"
      }
    ],
  },
  {
    key: "ai",
    title: "AI",
    items: [
      {
        name: "Machine Learning",
        key: "machine-learning",
        description: "Machine Learning enables systems to learn and improve from experience without explicit programming, using algorithms and statistical models.",
        link: "https://machinelearningmastery.com/"
      },
      {
        name: "Deep Learning",
        key: "deep-learning",
        description: "Deep Learning uses neural networks with multiple layers to learn hierarchical representations of data for complex pattern recognition tasks.",
        link: "https://www.deeplearning.ai/"
      },
      {
        name: "NLP",
        key: "nlp",
        description: "Natural Language Processing combines AI and linguistics to enable computers to understand, interpret, and generate human language.",
        link: "https://www.geeksforgeeks.org/natural-language-processing-nlp/"
      }
    ],
  },
  {
    key: "devops",
    title: "DevOps",
    items: [
      {
        name: "Jenkins",
        key: "jenkins",
        description: "Jenkins is an open-source automation server that enables continuous integration and continuous delivery (CI/CD) for software development.",
        link: "https://www.jenkins.io/doc/"
      },
      {
        name: "Kubernetes",
        key: "kubernetes",
        description: "Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications.",
        link: "https://kubernetes.io/docs/home/"
      },
      {
        name: "Ansible",
        key: "ansible",
        description: "Ansible is an automation tool for configuration management, application deployment, and task automation in IT infrastructure.",
        link: "https://docs.ansible.com/"
      },
      {
        name: "Docker",
        key: "docker",
        description: "Docker enables developers to package applications into containers for consistent deployment across different environments.",
        link: "https://docs.docker.com/"
      }
    ],
  },
  {
    key: "design",
    title: "Design",
    items: [
      {
        name: "Figma",
        key: "figma",
        description: "Figma is a collaborative interface design tool that enables teams to create, test, and ship better designs from start to finish.",
        link: "https://help.figma.com/hc/en-us"
      },
      {
        name: "Adobe XD",
        key: "adobe-xd",
        description: "Adobe XD is a vector-based design tool for creating interactive prototypes and user interfaces for web and mobile applications.",
        link: "https://helpx.adobe.com/xd/user-guide.html"
      },
      {
        name: "Sketch",
        key: "sketch",
        description: "Sketch is a digital design platform for creating, prototyping, and collaborating on interface designs for web and mobile applications.",
        link: "https://www.sketch.com/docs/"
      }
    ]
  },
  {
    key: "cloud",
    title: "Cloud Computing",
    items: [
      {
        name: "AWS Cloud",
        key: "aws-cloud",
        description: "Amazon Web Services provides scalable cloud computing solutions, offering a wide range of services for computing, storage, and application deployment.",
        link: "https://docs.aws.amazon.com/"
      },
      {
        name: "Google Cloud",
        key: "google-cloud",
        description: "Google Cloud Platform offers cloud computing services for building, deploying, and scaling applications with Google's infrastructure.",
        link: "https://cloud.google.com/docs"
      },
      {
        name: "Azure Cloud",
        key: "azure-cloud",
        description: "Microsoft Azure is a cloud platform for building, testing, and managing applications through Microsoft's global network of datacenters.",
        link: "https://learn.microsoft.com/en-us/azure/"
      },
      {
        name: "IBM Cloud",
        key: "ibm-cloud",
        description: "IBM Cloud provides enterprise-ready cloud solutions combining platform as a service with infrastructure as a service.",
        link: "https://cloud.ibm.com/docs"
      },
      {
        name: "Oracle Cloud",
        key: "oracle-cloud",
        description: "Oracle Cloud Infrastructure offers integrated cloud services for enterprises, including computing, storage, and database management.",
        link: "https://docs.oracle.com/en-us/iaas/Content/home.htm"
      }
    ]
  },
  {
    key: "cybersecurity",
    title: "Cyber Security",
    items: [
      {
        name: "Penetration Testing",
        key: "penetration-testing",
        description: "Penetration Testing evaluates system security by simulating cyber attacks to identify vulnerabilities before malicious hackers can exploit them.",
        link: "https://www.geeksforgeeks.org/penetration-testing/"
      },
      {
        name: "Network Security",
        key: "network-security",
        description: "Network Security involves strategies and tools to protect network infrastructure from unauthorized access, misuse, and cyber threats.",
        link: "https://www.geeksforgeeks.org/network-security/"
      },
      {
        name: "Cryptography",
        key: "cryptography",
        description: "Cryptography is the practice of securing communication through encryption techniques, ensuring data confidentiality and integrity.",
        link: "https://www.geeksforgeeks.org/cryptography-and-its-types/"
      }
    ],
  },
  {
    key: "gamedev",
    title: "Game Development",
    items: [
      {
        name: "Unity",
        key: "unity",
        description: "Unity is a powerful cross-platform game engine used to create 2D and 3D games with extensive tools and asset marketplace.",
        link: "https://docs.unity.com/"
      },
      {
        name: "Unreal Engine",
        key: "unreal-engine",
        description: "Unreal Engine is a high-performance game engine for creating photorealistic games and interactive experiences.",
        link: "https://docs.unrealengine.com/"
      },
      {
        name: "Godot",
        key: "godot",
        description: "Godot is a free, open-source game engine supporting 2D and 3D development with its own scripting language.",
        link: "https://docs.godotengine.org/"
      }
    ]
  },
  {
    key: "blockchain",
    title: "Blockchain",
    items: [
      {
        name: "Ethers Docs",
        key: "ethers-docs",
        description: "Ethers.js is a complete library for interacting with the Ethereum blockchain and its ecosystem, providing tools for wallet management and smart contract integration.",
        link: "https://docs.ethers.org/v5/"
      },
      {
        name: "Hardhat Docs",
        key: "hardhat-docs",
        description: "Hardhat is a development environment for Ethereum software, featuring built-in smart contract compilation, deployment, and testing.",
        link: "https://hardhat.org/"
      },
      {
        name: "Learn Solidity",
        key: "learn-solidity",
        description: "Interactive tutorial platform for learning Solidity programming language from basics to advanced concepts.",
        link: "https://docs.soliditylang.org/en/v0.8.21/"
      },
      {
        name: "Solidity Documentation",
        key: "solidity-documentation",
        description: "Official documentation for the Solidity programming language, covering language concepts, examples, and best practices.",
        link: "https://www.cyfrin.io/updraft"
      },
      {
        name: "Truffle Docs",
        key: "truffle-docs",
        description: "Development environment, testing framework and asset pipeline for Ethereum, providing a robust framework for dApp development.",
        link: "https://archive.trufflesuite.com/"
      },
      {
        name: "Alchemy",
        key: "alchemy",
        description: "Comprehensive platform for blockchain development with tutorials and tools for building Web3 applications.",
        link: "https://www.alchemy.com/learn"
      },
      {
        name: "Code Eater",
        key: "code-eater",
        description: "YouTube channel focused on blockchain development tutorials and smart contract programming.",
        link: "https://www.youtube.com/@CodeEater21"
      },
      {
        name: "Dapp University",
        key: "dapp-university",
        description: "Educational platform teaching blockchain development, smart contracts, and Web3 technologies.",
        link: "https://www.dappuniversity.com/"
      },
      {
        name: "Eat The Blocks",
        key: "eat-the-blocks",
        description: "Platform offering blockchain development courses and tutorials for Ethereum and Web3.",
        link: "https://www.youtube.com/@EatTheBlocks"
      },
      {
        name: "Francesco Ciulla",
        key: "francesco-ciulla",
        description: "Developer advocate sharing blockchain development insights and Web3 tutorials.",
        link: "https://www.youtube.com/@FrancescoCiulla"
      },
      {
        name: "freeCodeCamp.org",
        key: "freecodecamp-org",
        description: "Free blockchain development courses covering Ethereum, smart contracts, and Web3 development.",
        link: "https://www.freecodecamp.org/news/tag/blockchain/"
      },
      {
        name: "LearnWeb3 DAO",
        key: "learnweb3-dao",
        description: "Community-driven platform for learning Web3 development through structured tracks and hands-on projects.",
        link: "https://learnweb3.io/"
      },
      {
        name: "Nader Dabit",
        key: "nader-dabit",
        description: "Developer experience engineer sharing Web3 development tutorials and blockchain insights.",
        link: "https://www.youtube.com/@naderdabit"
      },
      {
        name: "Sarah Benson",
        key: "sarah-benson",
        description: "Blockchain developer and educator sharing Web3 development knowledge and tutorials.",
        link: "https://www.youtube.com/@SarahBenson"
      },
      {
        name: "Dapp Mentors",
        key: "dapp-mentors",
        description: "Educational platform focused on blockchain development mentorship and practical dApp building.",
        link: "https://www.youtube.com/@DappMentors"
      },
      {
        name: "Daulat Hussain",
        key: "daulat-hussain",
        description: "Blockchain educator providing comprehensive tutorials on Web3 development and smart contracts.",
        link: "https://www.youtube.com/@DaulatHussain"
      },
      {
        name: "JavaScript Mastery",
        key: "javascript-mastery",
        description: "Channel covering modern Web3 development with JavaScript and blockchain technologies.",
        link: "https://www.youtube.com/@javascriptmastery"
      },
      {
        name: "Patrick Collins",
        key: "patrick-collins",
        description: "Blockchain developer and educator providing in-depth smart contract and Web3 development tutorials.",
        link: "https://www.youtube.com/@PatrickAlphaC"
      },
      {
        name: "Telusko",
        key: "telusko",
        description: "Educational channel covering blockchain concepts and development tutorials.",
        link: "https://www.youtube.com/@Telusko"
      },
      {
        name: "Web3Mantra",
        key: "web3-mantra",
        description: "Platform dedicated to teaching Web3 development and blockchain technologies.",
        link: "https://www.youtube.com/@Web3Mantra"
      }
    ],
  },
  {
    key: "dataScience",
    title: "Data Science",
    items: [
      {
        name: "Data Analysis",
        key: "data-analysis",
        description: "Data Analysis involves examining, cleaning, transforming, and modeling data to discover useful information for business decision-making.",
        link: "https://www.geeksforgeeks.org/data-analysis-with-python/"
      },
      {
        name: "Machine Learning",
        key: "machine-learning",
        description: "Machine Learning in data science focuses on building models that can learn from and make predictions on data.",
        link: "https://www.geeksforgeeks.org/machine-learning-for-data-science/"
      },
      {
        name: "Deep Learning",
        key: "deep-learning",
        description: "Deep Learning in data science uses neural networks to analyze various types of data and solve complex pattern recognition problems.",
        link: "https://www.geeksforgeeks.org/deep-learning-for-data-science/"
      },
      {
        name: "Data Visualization",
        key: "data-visualization",
        description: "Data Visualization helps communicate complex data patterns and insights through graphical representations and interactive displays.",
        link: "https://www.geeksforgeeks.org/data-visualization-with-python/"
      },
      {
        name: "Statistics for Data Science",
        key: "statistics-for-data-science",
        description: "Statistics provides the mathematical foundation for data analysis, helping extract meaningful insights from data collections.",
        link: "https://www.geeksforgeeks.org/statistics-for-data-science/"
      }
    ],
  },
  {
    key: "cms",
    title: "CMS & Toolkits",
    items: [
      {
        name: "Sanity.io",
        key: "sanity",
        description: "Sanity is a headless CMS platform for structured content with real-time collaboration and customizable editing environment.",
        link: "https://www.sanity.io/docs"
      },
      {
        name: "Contentful",
        key: "contentful",
        description: "Contentful is a headless CMS that provides a content infrastructure for digital teams to power content in any digital product.",
        link: "https://www.contentful.com/developers/docs/"
      },
      {
        name: "Prismic",
        key: "prismic",
        description: "Prismic is a headless CMS that helps developers and content teams work together to create and deliver digital experiences.",
        link: "https://prismic.io/docs"
      },
      {
        name: "Cosmic",
        key: "cosmic",
        description: "Cosmic is a headless CMS platform offering content API and dashboard for managing content across digital platforms.",
        link: "https://www.cosmicjs.com/docs"
      },
      {
        name: "Crystallize",
        key: "crystallize",
        description: "Crystallize is an API-first headless PIM and CMS designed for building scalable ecommerce experiences.",
        link: "https://crystallize.com/learn"
      },
      {
        name: "DatoCMS",
        key: "datocms",
        description: "DatoCMS is a headless CMS that enables teams to structure and manage content for websites and apps.",
        link: "https://www.datocms.com/docs"
      },
      {
        name: "Directus",
        key: "directus",
        description: "Directus is an open-source headless CMS that wraps custom SQL databases with a dynamic API and intuitive admin app.",
        link: "https://docs.directus.io/"
      },
      {
        name: "FrontAid",
        key: "frontaid",
        description: "FrontAid CMS is a Git-based headless CMS for managing structured content in JSON files.",
        link: "https://frontaid.io/docs/"
      },
      {
        name: "Kontent.ai",
        key: "kontent-ai",
        description: "Kontent.ai is an AI-powered headless CMS platform for managing content in a structured and modular way.",
        link: "https://kontent.ai/learn/"
      },
      {
        name: "Hygraph",
        key: "hygraph",
        description: "Hygraph (formerly GraphCMS) is a federated content platform that enables teams to create and distribute content.",
        link: "https://hygraph.com/docs"
      },
      {
        name: "SenseNet",
        key: "sensenet",
        description: "SenseNet is an enterprise-grade headless CMS with .NET core backend and rich content management features.",
        link: "https://docs.sensenet.com/"
      },
      {
        name: "Squidex",
        key: "squidex",
        description: "Squidex is an open source headless CMS and content management hub built with ASP.NET Core.",
        link: "https://docs.squidex.io/"
      },
      {
        name: "Storyblok",
        key: "storyblok",
        description: "Storyblok is a headless CMS that provides visual editing capabilities and robust content management.",
        link: "https://www.storyblok.com/docs"
      },
      {
        name: "TinaCMS",
        key: "tinacms",
        description: "TinaCMS is a toolkit for building visual editing into React-based sites, with Git-based content management.",
        link: "https://tina.io/docs/"
      },
      {
        name: "Acquia.com",
        key: "acquia.com",
        description: "Acquia is an enterprise digital experience platform that provides tools and services for building, managing, and optimizing Drupal-based websites.",
        link: "https://docs.acquia.com/"
      },
      {
        name: "InstaWP",
        key: "instawp",
        description: "InstaWP enables instant WordPress site creation for development, testing, and demonstrations with automated setup.",
        link: "https://instawp.com/docs/"
      },
      {
        name: "WPJack",
        key: "wpjack",
        description: "WPJack provides WordPress development tools and resources for building and managing WordPress websites efficiently.",
        link: "https://wpjack.com/"
      }
    ]
  },
  {
    key: "openSource",
    title: "Open Source",
    items: [
      {
        name: "GitHub",
        key: "github",
        description: "GitHub is a platform for version control and collaboration, hosting millions of open source projects and communities.",
        link: "https://docs.github.com/"
      },
      {
        name: "GitLab",
        key: "gitlab",
        description: "GitLab provides a complete DevOps platform for managing open source projects with built-in CI/CD capabilities.",
        link: "https://docs.gitlab.com/"
      },
      {
        name: "Open Source Guides",
        key: "opensource-guides",
        description: "Resources and guides for understanding open source software development and community participation.",
        link: "https://opensource.guide/"
      }
    ]
  },
  {
    key: "aiTools",
    title: "AI Tools",
    items: [
      {
        name: "ChatGPT",
        key: "chatgpt",
        description: "ChatGPT is an AI language model for natural conversations, coding assistance, and content generation.",
        link: "https://platform.openai.com/docs/"
      },
      {
        name: "TensorFlow",
        key: "tensorflow",
        description: "TensorFlow is an open-source library for machine learning and artificial intelligence development.",
        link: "https://www.tensorflow.org/learn"
      },
      {
        name: "PyTorch",
        key: "pytorch",
        description: "PyTorch is a machine learning framework for building and training neural networks with dynamic computation graphs.",
        link: "https://pytorch.org/docs/"
      }
    ]
  },
  {
    key: "iot",
    title: "Internet of Things",
    items: [
      {
        name: "Arduino",
        key: "arduino",
        description: "Arduino is an open-source electronics platform for building IoT devices with easy-to-use hardware and software.",
        link: "https://docs.arduino.cc/"
      },
      {
        name: "Raspberry Pi",
        key: "raspberry-pi",
        description: "Raspberry Pi is a small computer for learning programming and building IoT projects with various sensors and modules.",
        link: "https://www.raspberrypi.org/documentation/"
      },
      {
        name: "ESP32",
        key: "esp32",
        description: "ESP32 is a microcontroller for IoT applications with built-in WiFi and Bluetooth capabilities.",
        link: "https://docs.espressif.com/projects/esp-idf/en/latest/"
      }
    ]
  },
  {
    key: "techArticles",
    title: "Tech Articles",
    items: [
      {
        name: "Best Practices",
        key: "best-practices",
        description: "Comprehensive guide covering React development best practices, patterns, and optimization techniques.",
        link: "https://dev.to/sathishskdev/series/22988"
      },
      {
        name: "Design Patterns",
        key: "design-patterns",
        description: "Essential design patterns and architectural approaches for building scalable React applications.",
        link: "https://baguilar6174.medium.com/react-design-patterns-6ab55c5ebafb"
      },
      {
        name: "Hooks Guide",
        key: "hooks-guide",
        description: "In-depth guide to React Hooks, covering usage patterns, custom hooks, and state management.",
        link: "https://usehooks.com/"
      },
      {
        name: "React Router ",
        key: "react-router",
        description: "Complete guide to implementing client-side routing in React applications using React Router.",
        link: "https://luqmanshaban.medium.com/react-router-a-step-by-step-guide-4c5ec964d2e9"
      },
      {
        name: "Testing Guide",
        key: "testing-guide",
        description: "Comprehensive guide to testing React applications using Jest, React Testing Library, and best practices.",
        link: "https://testing-library.com/docs/react-testing-library/intro/"
      }
    ]
  },
  {
    key: "newsletters",
    title: "Tech Newsletters",
    items: [
      {
        name: "JavaScript Weekly",
        key: "javascript-weekly",
        description: "Weekly newsletter covering JavaScript news, articles, and tools for web developers.",
        link: "https://javascriptweekly.com/"
      },
      {
        name: "Hacker Newsletter",
        key: "hacker-newsletter",
        description: "Curated articles and discussions from Hacker News for tech enthusiasts.",
        link: "https://hackernewsletter.com/"
      },
      {
        name: "TLDR Newsletter",
        key: "tldr",
        description: "Daily newsletter with tech news and developments for software developers.",
        link: "https://tldr.tech/"
      }
    ]
  },
  {
    key: "theoryOfComputation",
    title: "Theory of Computation",
    items: [
      {
        name: "Automata Theory",
        key: "automata",
        description: "Study of abstract machines and computation, including finite automata and regular expressions.",
        link: "https://www.geeksforgeeks.org/theory-of-computation-automata/"
      },
      {
        name: "Formal Languages",
        key: "formal-languages",
        description: "Understanding formal languages, grammars, and their role in computer science.",
        link: "https://www.geeksforgeeks.org/formal-languages-and-automata-theory/"
      },
      {
        name: "Computability Theory",
        key: "computability",
        description: "Exploration of what can and cannot be computed using different computational models.",
        link: "https://www.geeksforgeeks.org/theory-of-computation-computability/"
      }
    ]
  },
  {
    key: "qa",
    title: "Quality Assurance",
    items: [
      {
        name: "Selenium",
        key: "selenium",
        description: "Framework for automated web application testing across different browsers and platforms.",
        link: "https://www.selenium.dev/documentation/"
      },
      {
        name: "JUnit",
        key: "junit",
        description: "Testing framework for Java applications, supporting unit testing and test-driven development.",
        link: "https://junit.org/junit5/docs/current/user-guide/"
      },
      {
        name: "Jest",
        key: "jest",
        description: "JavaScript testing framework focused on simplicity and support for React applications.",
        link: "https://jestjs.io/docs/"
      }
    ]
  },
  {
    key: "competitiveProgramming",
    title: "Competitive Programming",
    items: [
      {
        name: "LeetCode",
        key: "leetcode",
        description: "Platform for practicing coding problems and preparing for technical interviews.",
        link: "https://leetcode.com/"
      },
      {
        name: "CodeForces",
        key: "codeforces",
        description: "Competitive programming platform hosting regular contests and problem sets.",
        link: "https://codeforces.com/"
      },
      {
        name: "HackerRank",
        key: "hackerrank",
        description: "Platform offering coding challenges and skill certification in various domains.",
        link: "https://www.hackerrank.com/"
      },
      {
        name: "Digitomize",
        key: "digitomize",
        description: "Platform that aggregates and tracks competitive programming contests from various online judges and coding platforms.",
        link: "https://www.digitomize.com/"
      },
      {
        name: "AtCoder",
        key: "atcoder",
        description: "Japanese competitive programming platform known for high-quality algorithm contests and problems.",
        link: "https://atcoder.jp/"
      },
      {
        name: "CodeChef",
        key: "codechef",
        description: "Competitive programming platform featuring contests, practice problems, and a vibrant coding community.",
        link: "https://www.codechef.com/"
      },
      {
        name: "Coding Ninjas",
        key: "coding-ninjas",
        description: "Platform offering coding courses, practice problems, and contests for programming skill development.",
        link: "https://www.codingninjas.com/"
      },
      {
        name: "Exercism",
        key: "exercism",
        description: "Platform for code practice and mentorship, offering exercises in multiple programming languages.",
        link: "https://exercism.org/"
      },
      {
        name: "GeeksforGeeks",
        key: "geeksforgeeks",
        description: "Comprehensive platform for computer science resources, coding problems, and interview preparation.",
        link: "https://geeksforgeeks.org/"
      },
      {
        name: "SPOJ",
        key: "spoj",
        description: "Classic competitive programming platform with a large collection of programming problems.",
        link: "https://www.spoj.com/"
      }
    ]
  },
  {
    key: "placementPrep",
    title: "Placement Preparation",
    items: [
      {
        name: "System Design",
        key: "system-design",
        description: "Resources for learning system design concepts and preparing for technical interviews.",
        link: "https://github.com/donnemartin/system-design-primer"
      },
      {
        name: "Interview Questions",
        key: "interview-questions",
        description: "Collection of technical interview questions and preparation materials.",
        link: "https://www.geeksforgeeks.org/technical-interview-questions/"
      },
      {
        name: "Mock Interviews",
        key: "mock-interviews",
        description: "Platforms and resources for practicing technical interviews with peers.",
        link: "https://www.pramp.com/"
      }
    ]
  },
  {
    key: "technicalWriting",
    title: "Technical Writing",
    items: [
      {
        name: "Grammarly",
        key: "grammarly",
        description: "AI-powered writing assistant that helps improve grammar, clarity, and writing style in technical documentation.",
        link: "https://www.grammarly.com/"
      },
      {
        name: "Hemingway Editor",
        key: "hemingway-editor",
        description: "Writing tool that helps make technical writing bold and clear by highlighting complex sentences and common errors.",
        link: "https://hemingwayapp.com/"
      },
      {
        name: "Hugo",
        key: "hugo",
        description: "Fast static site generator perfect for technical documentation, with built-in templates and themes.",
        link: "https://gohugo.io/"
      },
      {
        name: "Overleaf",
        key: "overleaf",
        description: "Online LaTeX editor for writing technical papers, documentation, and mathematical content with real-time collaboration.",
        link: "https://www.overleaf.com/"
      }
    ]
  },
  {
    key: "ethicalHacking",
    title: "Ethical Hacking",
    items: [
      {
        name: "Cryptography attack full Course",
        key: "cryptography-attack-full-course",
        description: "This video consist in detailed explanation of What is a cryptographic attack and how does it takes place, and how we can prevent it.",
        link: "https://www.youtube.com/watch?v=2my3FQzxKlE&ab_channel=SkillLearners"
      },
      {
        name: "Malware - Detection, Prevention",
        key: "malware-detection-prevention",
        description: "TechTarget's article on malware explores its types, impact, and strategies to detect, prevent, and mitigate cyber threats.",
        link: "https://www.techtarget.com/searchsecurity/definition/malware"
      },
      {
        name: "Social engineering - Complete article",
        key: "social-engineering-complete-article",
        description: "Proofpoint's article on social engineering explains how attackers exploit human behavior and offers strategies to recognize and prevent these tactics.",
        link: "hhttps://www.proofpoint.com/us/threat-reference/social-engineering"
      },
      {
        name: "Hacking Wireless Networks",
        key: "hacking-wireless-networks",
        description: "This YouTube video offers a comprehensive WiFi hacking course, covering wireless vulnerabilities, hacking techniques, and network security.",
        link: "https://www.youtube.com/watch?v=1wGvRmhO04s&ab_channel=HackerJoe"
      }
    ]
  }
];

export default menuData;
