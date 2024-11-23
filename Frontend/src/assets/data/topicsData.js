const topicsData = {
  frontend: {
    title: "Frontend",
    subtopics: [
      {
        name: "React",
        description:
          "React is a library for building reusable user interfaces, enabling efficient rendering and state management for dynamic web applications.",
        link: "https://reactjs.org/docs/getting-started.html",
      },
      {
        name: "Vue",
        description:
          "Vue.js is a progressive framework for creating interactive user interfaces and single-page applications using a flexible and approachable architecture.",
        link: "https://vuejs.org/guide/introduction.html",
      },
      {
        name: "Angular",
        description:
          "Angular is a platform for building scalable web and mobile applications with built-in tools for templates, routing, and more.",
        link: "https://angular.io/docs",
      },
      {
        name: "CSS",
        description:
          "CSS is a language used to style web pages, including layout, colors, fonts, and animations for a visually appealing design.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "HTML",
        description:
          "HTML is the foundational language for structuring content on the web, defining elements like headings, paragraphs, and links.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "JavaScript",
        description:
          "JavaScript enables dynamic, interactive behavior on websites, allowing developers to create engaging user experiences and robust web applications.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      },
      {
        name: "Bootstrap",
        description:
          "Bootstrap is a CSS framework offering responsive grids, pre-styled components, and utilities for building modern, mobile-first websites efficiently.",
        link: "https://getbootstrap.com/docs/",
      },
      {
        name: "Tailwind",
        description:
          "Tailwind CSS provides low-level utility classes to design custom user interfaces quickly and efficiently without writing custom CSS.",
        link: "https://tailwindcss.com/docs",
      },
      {
        name: "Icons",
        description:
          "Icons improve UI design by providing intuitive visual cues, enhancing usability and navigation within web and mobile applications.",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        name: "Fonts",
        description:
          "Fonts play a key role in enhancing readability and brand identity in web design, with numerous styles and customization options.",
        link: "https://fonts.google.com/",
      },
      {
        name: "Next.js",
        description:
          "Next.js is a React framework enabling server-side rendering, static site generation, and advanced performance optimizations for modern web applications.",
        link: "https://nextjs.org/docs",
      },
      {
        name: "TypeScript",
        description:
          "TypeScript is a superset of JavaScript that adds static typing, improving code quality and reducing runtime errors in web development.",
        link: "https://www.typescriptlang.org/docs/",
      },
    ],
  },
  backend: {
    title: "Backend",
    subtopics: [
      {
        name: "Node.js",
        description:
          "Node.js is a runtime for executing JavaScript server-side, enabling the creation of scalable and fast network applications.",
        link: "https://nodejs.org/en/docs/",
      },
      {
        name: "Express.js",
        description:
          "Express.js is a minimal and flexible web application framework for Node.js, providing robust tools for building web applications.",
        link: "https://expressjs.com/en/starter/installing.html",
      },
      {
        name: "Django",
        description:
          "Django is a high-level Python web framework that enables the rapid development of secure and scalable web applications.",
        link: "https://docs.djangoproject.com/en/stable/",
      },
      {
        name: "Flask",
        description:
          "Flask is a lightweight Python web framework that provides simplicity and flexibility for building web applications.",
        link: "https://flask.palletsprojects.com/en/stable/",
      },
      {
        name: "Caching",
        description:
          "Caching improves application performance by storing frequently accessed data in a temporary storage layer for quick retrieval.",
        link: "#", // Replace with the appropriate link.
      },
      {
        name: "Database",
        description:
          "Databases store, manage, and retrieve structured data efficiently, forming the backbone of most backend systems.",
        link: "#", // Replace with the appropriate link.
      },
      {
        name: "APIs",
        description:
          "APIs enable communication between software systems, allowing for data exchange and integration with third-party services.",
        link: "#", // Replace with the appropriate link.
      },
      {
        name: "Security",
        description:
          "Security practices safeguard backend systems from vulnerabilities, ensuring data integrity and protecting against malicious attacks.",
        link: "#", // Replace with the appropriate link.
      },
      {
        name: "Authentication",
        description:
          "Authentication verifies user identity, allowing secure access to systems by managing login credentials and tokens.",
        link: "#", // Replace with the appropriate link.
      },
      {
        name: "Testing",
        description:
          "Testing ensures the reliability and quality of backend systems by identifying bugs and validating functionality through automated or manual processes.",
        link: "#",
      },
      {
        name: "Validation",
        description:
          "Validation checks data correctness and completeness, ensuring backend systems process input accurately and reliably.",
        link: "#",
      },
    ],
  },
  dsa: {
    title: "DSA",
    subtopics: [
      {
        name: "Array",
        description:
          "An array stores items in contiguous memory locations, useful for simple data storage and manipulation, optimizing access and modification.",
        link: "https://www.geeksforgeeks.org/array-data-structure/",
      },
      {
        name: "String",
        description:
          "A string is a sequence of characters for representing textual data, essential for sorting, searching, and manipulating text efficiently.",
        link: "https://www.geeksforgeeks.org/string-data-structure/",
      },
      {
        name: "Sorting",
        description:
          "Sorting algorithms rearrange elements in a specific order, improving data processing speed with methods like QuickSort, MergeSort, and BubbleSort.",
        link: "https://www.geeksforgeeks.org/sorting-algorithms/",
      },
      {
        name: "Searching",
        description:
          "Searching algorithms help find specific elements in data structures, using methods like Binary Search, Linear Search, and Hashing for optimized searches.",
        link: "https://www.geeksforgeeks.org/searching-algorithms/",
      },
      {
        name: "Trees",
        description:
          "A tree is a hierarchical data structure used in applications like decision-making, searching, and optimizing data storage with nodes connected by edges.",
        link: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
      },
      {
        name: "Graphs",
        description:
          "A graph represents nodes connected by edges, modeling complex systems such as social networks, transportation, or communication networks.",
        link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
      },
      {
        name: "Stack",
        description:
          "A stack follows the Last In, First Out (LIFO) principle, essential for operations like function calls, expression evaluation, and backtracking.",
        link: "https://www.geeksforgeeks.org/stack-data-structure/",
      },
      {
        name: "Queue",
        description:
          "A queue follows the First In, First Out (FIFO) principle, ideal for scheduling tasks and handling requests or real-time data.",
        link: "https://www.geeksforgeeks.org/queue-data-structure/",
      },
      {
        name: "LinkedList",
        description:
          "A linked list is a linear collection of nodes, enabling efficient insertion and deletion compared to arrays, with each node pointing to the next.",
        link: "https://www.geeksforgeeks.org/data-structures/linked-list/",
      },
    ],
  },
  language: {
    title: "Language",
    subtopics: [
      {
        name: "C Programming",
        description:
          "C is a procedural language offering low-level memory manipulation, widely used in system programming, operating systems, and embedded systems development.",
        link: "https://www.geeksforgeeks.org/c-programming-language/",
      },
      {
        name: "C++",
        description:
          "C++ is an object-oriented language building on C, used for software development, game programming, and performance-critical applications.",
        link: "https://www.geeksforgeeks.org/c-plus-plus/",
      },
      {
        name: "Java",
        description:
          "Java is a high-level, object-oriented language used for building cross-platform apps, including mobile, enterprise, and web applications.",
        link: "https://www.geeksforgeeks.org/java/",
      },
      {
        name: "Javascript",
        description:
          "JavaScript is a dynamic, high-level language for building interactive web pages and applications, crucial for both frontend and backend development.",
        link: "https://www.geeksforgeeks.org/javascript/",
      },
      {
        name: "Dart",
        description:
          "Dart is a general-purpose language developed by Google for building mobile apps, particularly with the Flutter framework, known for performance and productivity.",
        link: "https://www.geeksforgeeks.org/dart-programming-language/",
      },
      {
        name: "Rust",
        description:
          "Rust is a system programming language focused on speed, memory safety, and concurrency, suitable for building efficient, reliable software systems.",
        link: "https://www.geeksforgeeks.org/rust-programming-language/",
      },
      {
        name: "Swift",
        description:
          "Swift is a modern language by Apple for iOS and macOS development, designed for performance, ease of use, and rapid app creation.",
        link: "https://www.geeksforgeeks.org/swift-programming-language/",
      },
      {
        name: "Ruby",
        description:
          "Ruby is an object-oriented, dynamic language known for simplicity and productivity, commonly used in web development with the Ruby on Rails framework.",
        link: "https://www.geeksforgeeks.org/ruby-programming-language/",
      },
    ],
  },
  mobile: {
    title: "Mobile",
    description:
      "Mobile development focuses on creating apps for smartphones and tablets using frameworks and languages designed to deliver high-performance, user-friendly experiences across devices.",
    subtopics: [
      {
        name: "React Native",
        description:
          "React Native is a framework for building mobile apps using JavaScript and React, enabling cross-platform iOS and Android apps with a single codebase.",
        link: "https://www.geeksforgeeks.org/react-native/",
      },
      {
        name: "Flutter",
        description:
          "Flutter is an open-source UI toolkit by Google for building natively compiled apps for mobile, web, and desktop with a single codebase.",
        link: "https://www.geeksforgeeks.org/flutter/",
      },
      {
        name: "Kotlin",
        description:
          "Kotlin is a modern, statically-typed language for Android development, offering concise and expressive syntax while running on the Java Virtual Machine (JVM).",
        link: "https://www.geeksforgeeks.org/kotlin-programming-language/",
      },
    ],
  },
  ai: {
    title: "AI",
    description:
      "AI focuses on building intelligent systems that simulate human reasoning, enabling machines to perform tasks such as learning, decision-making, and problem-solving.",
    subtopics: [
      {
        name: "Machine Learning",
        description:
          "Machine Learning is a subset of AI where algorithms learn from data to identify patterns and make predictions without explicit programming.",
        link: "https://www.geeksforgeeks.org/machine-learning/",
      },
      {
        name: "Deep Learning",
        description:
          "Deep Learning is a subset of Machine Learning that uses multi-layered neural networks to analyze large datasets and solve complex problems.",
        link: "https://www.geeksforgeeks.org/deep-learning/",
      },
      {
        name: "NLP",
        description:
          "Natural Language Processing (NLP) enables computers to understand and process human language, facilitating tasks like text analysis and speech recognition.",
        link: "https://www.geeksforgeeks.org/natural-language-processing/",
      },
    ],
  },
  devops: {
    title: "DevOps",
    subtopics: [
      {
        name: "Jenkins",
        description:
          "Jenkins is an open-source automation server for continuous integration and delivery, helping automate various stages of software development.",
        link: "https://www.geeksforgeeks.org/jenkins/",
      },
      {
        name: "Kubernetes",
        description:
          "Kubernetes is an open-source platform for automating deployment, scaling, and managing containerized applications across clusters of machines.",
        link: "https://www.geeksforgeeks.org/kubernetes/",
      },
      {
        name: "Ansible",
        description:
          "Ansible is an open-source tool for automating IT processes, such as configuration management, application deployment, and task automation.",
        link: "https://www.geeksforgeeks.org/ansible/",
      },
      {
        name: "Docker",
        description:
          "Docker is an open-source platform for building and running containerized applications, ensuring portability and scalability across different environments.",
        link: "https://www.geeksforgeeks.org/docker/",
      },
    ],
  },
  design: {
    title: "Design",
    description:
      "Design is the creation of visual elements for applications, focusing on user experience, usability, and aesthetics. Learn more about tools and techniques.",
    subtopics: [
      {
        name: "Figma",
        description:
          "Figma is a cloud-based design tool for UI/UX design and prototyping, supporting real-time collaboration.",
        link: "https://www.geeksforgeeks.org/figma/",
      },
      {
        name: "Adobe XD",
        description:
          "Adobe XD is a vector-based tool for UI/UX design, prototyping, and collaboration.",
        link: "https://www.geeksforgeeks.org/adobe-xd/",
      },
      {
        name: "Sketch",
        description:
          "Sketch is a digital design tool for vector editing and UI/UX design focused on web and mobile.",
        link: "https://www.geeksforgeeks.org/sketch/",
      },
    ],
  },
  cloud: {
    title: "Cloud Computing",
    description:
      "Cloud computing delivers computing services like storage, processing, and software over the internet, minimizing physical infrastructure needs.",
    subtopics: [
      {
        name: "Aws Cloud",
        description:
          "AWS offers cloud services like computing, storage, and databases for scalable business growth.",
        link: "https://www.geeksforgeeks.org/aws-cloud/",
      },
      {
        name: "Google Cloud",
        description:
          "Google Cloud provides infrastructure, storage, and analytics for businesses to scale and innovate.",
        link: "https://www.geeksforgeeks.org/google-cloud/",
      },
      {
        name: "Azure Cloud",
        description:
          "Azure Cloud offers virtual machines, storage, and AI tools for business solutions and development.",
        link: "https://www.geeksforgeeks.org/azure-cloud/",
      },
      {
        name: "IBM Cloud",
        description:
          "IBM Cloud provides IaaS, PaaS, and SaaS for enterprise-level solutions with AI, blockchain, and analytics.",
        link: "https://www.geeksforgeeks.org/ibm-cloud/",
      },
      {
        name: "Oracle Cloud",
        description:
          "Oracle Cloud offers cloud services like databases, AI, and blockchain for enterprise businesses.",
        link: "https://www.geeksforgeeks.org/oracle-cloud/",
      },
    ],
  },
  cybersecurity: {
    title: "Cyber Security",
    description:
      "Cybersecurity focuses on protecting systems from digital attacks and preventing unauthorized access and data theft.",
    subtopics: [
      {
        name: "Penetration Testing",
        description:
          "Penetration testing simulates attacks to identify vulnerabilities in systems.",
        link: "https://www.geeksforgeeks.org/penetration-testing/",
      },
      {
        name: "Network Security",
        description:
          "Network security protects computer networks from intruders, ensuring data confidentiality and integrity.",
        link: "https://www.geeksforgeeks.org/network-security/",
      },
      {
        name: "Cryptography",
        description:
          "Cryptography secures communication by encoding information so only authorized parties can decode it.",
        link: "https://www.geeksforgeeks.org/cryptography/",
      },
    ],
  },
  gamedev: {
    title: "Game Development",
    description:
      "Game development is the process of designing and programming interactive video games across platforms.",
    subtopics: [
      {
        name: "Unity",
        description:
          "Unity is a cross-platform game engine for creating 2D and 3D games, with extensive design and programming tools.",
        link: "https://www.geeksforgeeks.org/unity/",
      },
      {
        name: "Unreal Engine",
        description:
          "Unreal Engine is a high-performance game engine for creating AAA-quality games with advanced graphics tools.",
        link: "https://www.geeksforgeeks.org/unreal-engine/",
      },
      {
        name: "Godot",
        description:
          "Godot is an open-source game engine used to create both 2D and 3D games with flexibility and ease.",
        link: "https://www.geeksforgeeks.org/godot/",
      },
    ],
  },
  blockchain: {
    title: "Blockchain",
    description:
      "Blockchain is a decentralized technology that ensures transparency and security in transactions without intermediaries.",
    subtopics: [
      {
        name: "Ethereum",
        description:
          "Ethereum enables smart contract and decentralized application (DApp) development on a blockchain platform.",
        link: "https://www.geeksforgeeks.org/ethereum/",
      },
      {
        name: "Solidity",
        description:
          "Solidity is a language for writing smart contracts on Ethereum, enabling decentralized app development.",
        link: "https://www.geeksforgeeks.org/solidity/",
      },
      {
        name: "Hyperledger",
        description:
          "Hyperledger is a blockchain framework for building enterprise-level distributed applications and solutions.",
        link: "https://www.geeksforgeeks.org/hyperledger/",
      },
    ],
  },
  dataScience: {
    title: "Data Science",
    description:
      "Data Science extracts insights from data through statistical analysis, machine learning, and data visualization.",
    subtopics: [
      {
        name: "Data Analysis",
        description:
          "Data analysis involves cleaning and transforming data to uncover useful information for decision-making.",
        link: "https://www.geeksforgeeks.org/data-analysis/",
      },
      {
        name: "Machine Learning",
        description:
          "Machine learning uses algorithms to build models that predict outcomes based on patterns in data.",
        link: "https://www.geeksforgeeks.org/machine-learning/",
      },
      {
        name: "Deep Learning",
        description:
          "Deep learning applies neural networks to process complex data, enabling advanced AI applications.",
        link: "https://www.geeksforgeeks.org/deep-learning/",
      },
      {
        name: "Data Visualization",
        description:
          "Data visualization uses graphical elements like charts to represent data and reveal patterns and insights.",
        link: "https://www.geeksforgeeks.org/data-visualization/",
      },
      {
        name: "Statistics for Data Science",
        description:
          "Statistics in data science involves applying statistical methods to analyze data and derive insights.",
        link: "https://www.geeksforgeeks.org/statistics-for-data-science/",
      },
    ],
  },
};

export default topicsData;
