// Complete Course Data with Full Content
const COURSES_DATA = {
    'dsa': {
        id: 'dsa',
        title: 'Data Structures & Algorithms',
        description: 'Master DSA for competitive programming and technical interviews',
        icon: 'fas fa-code-branch',
        color: '#e74c3c',
        modules: [
            {
                title: 'Introduction to Arrays',
                lessons: [
                    {
                        id: 'dsa-l1',
                        title: 'Array Basics and Operations',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/AT14lCXuMKI',
                        content: '<h3>What are Arrays?</h3><p>Arrays are fundamental data structures that store elements in contiguous memory locations. They provide fast O(1) access time for elements using indices.</p><ul><li>Fixed size in most languages</li><li>Random access capability</li><li>Cache-friendly due to locality</li></ul>'
                    },
                    {
                        id: 'dsa-l2',
                        title: 'Array Searching Techniques',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/P3YID7liBug',
                        content: '<h3>Search Algorithms</h3><p>Learn linear search and binary search algorithms with their time complexities.</p>'
                    },
                    {
                        id: 'dsa-q1',
                        title: 'Arrays Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is the time complexity of accessing an array element by index?',
                                options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
                                correct: 0,
                                explanation: 'Array access by index is O(1) constant time because elements are stored in contiguous memory.'
                            },
                            {
                                question: 'Which search algorithm works only on sorted arrays?',
                                options: ['Linear Search', 'Binary Search', 'Jump Search', 'Interpolation Search'],
                                correct: 1,
                                explanation: 'Binary Search requires the array to be sorted to work correctly.'
                            },
                            {
                                question: 'What is the worst-case time complexity of insertion at the beginning of an array?',
                                options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
                                correct: 2,
                                explanation: 'Inserting at the beginning requires shifting all elements, making it O(n).'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Linked Lists',
                lessons: [
                    {
                        id: 'dsa-l3',
                        title: 'Introduction to Linked Lists',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/R9PTBwOzceo',
                        content: '<h3>Linked Lists</h3><p>Dynamic data structures where elements are connected via pointers.</p><ul><li>Singly Linked List</li><li>Doubly Linked List</li><li>Circular Linked List</li></ul>'
                    },
                    {
                        id: 'dsa-q2',
                        title: 'Linked Lists Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is the advantage of linked lists over arrays?',
                                options: ['Faster access', 'Dynamic size', 'Less memory', 'Sorted by default'],
                                correct: 1,
                                explanation: 'Linked lists can grow and shrink dynamically, unlike fixed-size arrays.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'webdev-mern': {
        id: 'webdev-mern',
        title: 'Web Development [MERN]',
        description: 'Full stack web development with MongoDB, Express, React, Node.js',
        icon: 'fab fa-react',
        color: '#61dafb',
        modules: [
            {
                title: 'MERN Stack Overview',
                lessons: [
                    {
                        id: 'mern-l1',
                        title: 'What is MERN Stack?',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/7CqJlxBYj-M',
                        content: '<h3>MERN Stack Components</h3><p>MERN is a popular full-stack JavaScript framework.</p><ul><li><strong>M</strong>ongoDB - NoSQL Database</li><li><strong>E</strong>xpress - Backend Framework</li><li><strong>R</strong>eact - Frontend Library</li><li><strong>N</strong>ode.js - JavaScript Runtime</li></ul>'
                    },
                    {
                        id: 'mern-l2',
                        title: 'Setting Up MongoDB',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/oSIv-E60NiU',
                        content: '<h3>MongoDB Setup</h3><p>Learn to install and configure MongoDB for development.</p>'
                    },
                    {
                        id: 'mern-q1',
                        title: 'MERN Basics Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What does the R in MERN stand for?',
                                options: ['Ruby', 'React', 'Redis', 'Redux'],
                                correct: 1,
                                explanation: 'MERN = MongoDB, Express, React, Node.js'
                            },
                            {
                                question: 'Which is the frontend library in MERN stack?',
                                options: ['MongoDB', 'Express', 'React', 'Node.js'],
                                correct: 2,
                                explanation: 'React is used for building user interfaces (frontend).'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'React Fundamentals',
                lessons: [
                    {
                        id: 'mern-l3',
                        title: 'React Components and Props',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/Ke90Tje7VS0',
                        content: '<h3>React Components</h3><p>Building blocks of React applications.</p><ul><li>Functional Components</li><li>Class Components</li><li>Props and State</li></ul>'
                    }
                ]
            }
        ]
    },
    'ml-datascience': {
        id: 'ml-datascience',
        title: 'ML & Data Science',
        description: 'Machine Learning and Data Science from scratch to advanced',
        icon: 'fas fa-robot',
        color: '#3498db',
        modules: [
            {
                title: 'Introduction to Machine Learning',
                lessons: [
                    {
                        id: 'ml-l1',
                        title: 'What is Machine Learning?',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/ukzFI9rgwfU',
                        content: '<h3>Machine Learning Basics</h3><p>ML enables computers to learn from data without explicit programming.</p><h4>Types of ML:</h4><ul><li>Supervised Learning</li><li>Unsupervised Learning</li><li>Reinforcement Learning</li></ul>'
                    },
                    {
                        id: 'ml-l2',
                        title: 'Linear Regression Explained',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/7ArmBVF2dCs',
                        content: '<h3>Linear Regression</h3><p>Fundamental supervised learning algorithm for prediction.</p>'
                    },
                    {
                        id: 'ml-q1',
                        title: 'ML Fundamentals Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'Which type of learning uses labeled data?',
                                options: ['Unsupervised', 'Supervised', 'Reinforcement', 'Transfer'],
                                correct: 1,
                                explanation: 'Supervised learning uses labeled training data with input-output pairs.'
                            },
                            {
                                question: 'What is the goal of linear regression?',
                                options: ['Classification', 'Prediction of continuous values', 'Clustering', 'Dimensionality reduction'],
                                correct: 1,
                                explanation: 'Linear regression predicts continuous numerical values based on input features.'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Neural Networks',
                lessons: [
                    {
                        id: 'ml-l3',
                        title: 'Introduction to Neural Networks',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
                        content: '<h3>Neural Networks</h3><p>Inspired by biological neurons, these are the foundation of deep learning.</p>'
                    }
                ]
            }
        ]
    },
    'python-dev': {
        id: 'python-dev',
        title: 'Python Development',
        description: 'Master Python programming from basics to advanced',
        icon: 'fab fa-python',
        color: '#3776ab',
        modules: [
            {
                title: 'Python Basics',
                lessons: [
                    {
                        id: 'py-l1',
                        title: 'Python Introduction and Setup',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
                        content: '<h3>Why Python?</h3><p>Python is versatile, beginner-friendly, and powerful.</p><ul><li>Easy syntax</li><li>Vast libraries</li><li>Community support</li><li>Used in AI, Web, Data Science</li></ul>'
                    },
                    {
                        id: 'py-l2',
                        title: 'Variables and Data Types',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/khKv-8q7YmY',
                        content: '<h3>Python Data Types</h3><p>Integers, floats, strings, lists, dictionaries, tuples, sets.</p>'
                    },
                    {
                        id: 'py-q1',
                        title: 'Python Basics Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'Which keyword is used to define a function in Python?',
                                options: ['function', 'def', 'func', 'define'],
                                correct: 1,
                                explanation: 'The "def" keyword is used to define functions in Python.'
                            },
                            {
                                question: 'What is the output of: print(type([1, 2, 3]))?',
                                options: ['<class "tuple">', '<class "list">', '<class "array">', '<class "dict">'],
                                correct: 1,
                                explanation: '[1, 2, 3] is a list, so type() returns <class "list">.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'java-dev': {
        id: 'java-dev',
        title: 'Java Development',
        description: 'Enterprise Java development with Spring Boot',
        icon: 'fab fa-java',
        color: '#f89820',
        modules: [
            {
                title: 'Java Fundamentals',
                lessons: [
                    {
                        id: 'java-l1',
                        title: 'Introduction to Java',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
                        content: '<h3>Java Programming</h3><p>Object-oriented, platform-independent language.</p><ul><li>Write Once, Run Anywhere</li><li>Strong typing</li><li>Rich API</li></ul>'
                    },
                    {
                        id: 'java-q1',
                        title: 'Java Basics Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is JVM?',
                                options: ['Java Virtual Machine', 'Java Version Manager', 'Java Variable Method', 'Java Visual Mode'],
                                correct: 0,
                                explanation: 'JVM (Java Virtual Machine) executes Java bytecode, enabling platform independence.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'fullstack': {
        id: 'fullstack',
        title: 'Full Stack Development',
        description: 'Complete full stack development from frontend to backend',
        icon: 'fas fa-laptop-code',
        color: '#1abc9c',
        modules: [
            {
                title: 'Full Stack Fundamentals',
                lessons: [
                    {
                        id: 'fs-l1',
                        title: 'What is Full Stack Development?',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/UBUNrFtufWo',
                        content: '<h3>Full Stack Development</h3><p>Working on both client-side and server-side of applications.</p><ul><li>Frontend: HTML, CSS, JavaScript</li><li>Backend: Node.js, Python, Java</li><li>Database: SQL, NoSQL</li></ul>'
                    },
                    {
                        id: 'fs-q1',
                        title: 'Full Stack Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What does a full stack developer work on?',
                                options: ['Only frontend', 'Only backend', 'Both frontend and backend', 'Only databases'],
                                correct: 2,
                                explanation: 'Full stack developers handle both client-side (frontend) and server-side (backend) development.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'data-analysis': {
        id: 'data-analysis',
        title: 'Data Analysis',
        description: 'Analyze data with Python, Pandas, NumPy and Visualization',
        icon: 'fas fa-chart-line',
        color: '#2ecc71',
        modules: [
            {
                title: 'Data Analysis with Pandas',
                lessons: [
                    {
                        id: 'da-l1',
                        title: 'Introduction to Pandas',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/vmEHCJofslg',
                        content: '<h3>Pandas Library</h3><p>Powerful data manipulation tool for Python.</p><ul><li>DataFrames and Series</li><li>Data cleaning</li><li>Data transformation</li></ul>'
                    },
                    {
                        id: 'da-q1',
                        title: 'Pandas Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is the primary data structure in Pandas?',
                                options: ['Array', 'DataFrame', 'List', 'Dictionary'],
                                correct: 1,
                                explanation: 'DataFrame is the main 2D data structure in Pandas for tabular data.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'ai-tools': {
        id: 'ai-tools',
        title: 'AI Tools Mastery',
        description: 'Master modern AI tools like ChatGPT, MidJourney, and more',
        icon: 'fas fa-brain',
        color: '#f39c12',
        modules: [
            {
                title: 'AI Tools Overview',
                lessons: [
                    {
                        id: 'ai-l1',
                        title: 'Introduction to Modern AI Tools',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/JTxsNm9IdYU',
                        content: '<h3>AI Tools Revolution</h3><p>Explore cutting-edge AI tools transforming industries.</p><ul><li>ChatGPT for text generation</li><li>MidJourney for art</li><li>GitHub Copilot for coding</li></ul>'
                    },
                    {
                        id: 'ai-q1',
                        title: 'AI Tools Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is ChatGPT primarily used for?',
                                options: ['Image generation', 'Conversational AI', 'Video editing', 'Music production'],
                                correct: 1,
                                explanation: 'ChatGPT is a conversational AI that generates human-like text responses.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'dotnet-dev': {
        id: 'dotnet-dev',
        title: '.NET Development',
        description: 'Build applications with C# and .NET framework',
        icon: 'fas fa-code',
        color: '#512bd4',
        modules: [
            {
                title: '.NET Fundamentals',
                lessons: [
                    {
                        id: 'dotnet-l1',
                        title: 'Introduction to .NET',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/bEfBfBQq7EE',
                        content: '<h3>.NET Platform</h3><p>Microsoft\'s framework for building various applications.</p><ul><li>C# Programming</li><li>ASP.NET for web</li><li>Cross-platform with .NET Core</li></ul>'
                    },
                    {
                        id: 'dotnet-q1',
                        title: '.NET Basics Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is the primary language used in .NET?',
                                options: ['Java', 'Python', 'C#', 'Ruby'],
                                correct: 2,
                                explanation: 'C# (C Sharp) is the primary programming language for .NET development.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'maths-cs': {
        id: 'maths-cs',
        title: 'Mathematics for CS',
        description: 'Discrete Math, Linear Algebra, Probability & Statistics',
        icon: 'fas fa-calculator',
        color: '#34495e',
        modules: [
            {
                title: 'Discrete Mathematics',
                lessons: [
                    {
                        id: 'math-l1',
                        title: 'Introduction to Discrete Math',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/tyDKR4FG3Yw',
                        content: '<h3>Discrete Mathematics</h3><p>Foundation of computer science.</p><ul><li>Set Theory</li><li>Logic and Proofs</li><li>Graph Theory</li><li>Combinatorics</li></ul>'
                    },
                    {
                        id: 'math-q1',
                        title: 'Discrete Math Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What is a set?',
                                options: ['A sequence', 'A collection of distinct objects', 'A function', 'A matrix'],
                                correct: 1,
                                explanation: 'A set is an unordered collection of distinct objects or elements.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'interview-puzzles': {
        id: 'interview-puzzles',
        title: 'Interview Puzzles',
        description: 'Crack coding interviews with puzzles and problem-solving',
        icon: 'fas fa-puzzle-piece',
        color: '#9b59b6',
        modules: [
            {
                title: 'Logic Puzzles',
                lessons: [
                    {
                        id: 'puzzle-l1',
                        title: 'Classic Interview Puzzles',
                        type: 'video',
                        videoUrl: 'https://www.youtube.com/embed/kfULB8gHG1I',
                        content: '<h3>Interview Puzzles</h3><p>Sharpen your problem-solving skills.</p><ul><li>Logic puzzles</li><li>Math problems</li><li>Lateral thinking</li></ul>'
                    },
                    {
                        id: 'puzzle-q1',
                        title: 'Puzzles Quiz',
                        type: 'quiz',
                        questions: [
                            {
                                question: 'What approach works best for solving puzzles?',
                                options: ['Random guessing', 'Systematic analysis', 'Memorization only', 'Speed over accuracy'],
                                correct: 1,
                                explanation: 'Systematic analysis and breaking down problems into smaller parts leads to better solutions.'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COURSES_DATA };
}
