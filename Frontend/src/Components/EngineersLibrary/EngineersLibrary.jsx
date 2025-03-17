import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

// Static data
const MOCK_DATA = {
  universities: ["RTMNU", "MIT-WPU", "COEP", "VJTI Mumbai"],
  branches: {
    "RTMNU": ["Computer Science", "Mechanical", "Civil", "Electrical"],
    "MIT-WPU": ["Computer Engineering", "AI & ML", "Data Science"],
    "COEP": ["Information Technology", "Electronics", "Mechanical"],
    "VJTI Mumbai": ["Computer Science", "IT", "Electronics"]
  },
  semesters: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"],
  subjects: {
    "Computer Science": ["Data Structures", "Operating Systems", "Database Management", "Computer Networks"],
    "Mechanical": ["Thermodynamics", "Fluid Mechanics", "Machine Design"],
    "Civil": ["Structural Engineering", "Environmental Engineering", "Transportation Engineering"],
    "Electrical": ["Circuit Theory", "Power Systems", "Control Systems"]
  },
  resources: [
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      note: {
        title: "Complete DSA Notes 2024",
        pdfUrl: "path/to/dsa-notes.pdf"
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      note: {
        title: "DSA Practice Problems",
        pdfUrl: "path/to/dsa-problems.pdf"
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      pyq: {
        title: "DSA Previous Year Papers 2023",
        pdfUrl: "path/to/dsa-pyq.pdf"
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      video: {
        title: "Complete DSA Course",
        videoUrl: "https://youtube.com/watch?v=example1",
        description: "This is a description of the video"
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      video: {
        title: "DSA Problem Solving",
        videoUrl: "https://youtube.com/watch?v=example2",
        description: "This is a description of the video2"
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      syllabus: {
        title: "DSA Complete Syllabus 2024",
        pdfUrl: "path/to/dsa-syllabus.pdf",
        topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"]
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      questionbank: {
        title: "DSA Question Bank",
        pdfUrl: "path/to/dsa-qbank.pdf",
        totalQuestions: 250
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      questions: [
        {
          title: "Array Operations",
          difficulty: "Easy",
          pdfUrl: "path/to/array-questions.pdf"
        },
        {
          title: "Tree Traversal",
          difficulty: "Medium",
          pdfUrl: "path/to/tree-questions.pdf"
        }
      ]
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      testbook: {
        title: "DSA Test Series 2024",
        pdfUrl: "path/to/dsa-tests.pdf",
        totalTests: 10
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      practical: {
        title: "DSA Lab Manual",
        pdfUrl: "path/to/dsa-practical.pdf",
        experiments: 15
      }
    },
    {
      university: "RTMNU",
      branch: "Computer Science",
      semester: "Semester 5",
      subject: "Data Structures",
      viva: {
        title: "DSA Viva Questions",
        pdfUrl: "path/to/dsa-viva.pdf",
        totalQuestions: 100
      }
    }
  ]
};

// Add this constant at the top with other constants
const TAB_OPTIONS = [
  { id: 'pyqs', label: 'PYQs', icon: 'archive' },
  { id: 'notes', label: 'Notes', icon: 'document' },
  { id: 'videos', label: 'Video', icon: 'video' },
  { id: 'syllabus', label: 'Syllabus', icon: 'book' },
  { id: 'questionbank', label: 'Question Bank', icon: 'database' },
  { id: 'questions', label: 'Questions', icon: 'question' },
  { id: 'testbook', label: 'Test Book', icon: 'book-open' },
  { id: 'practical', label: 'Practical', icon: 'beaker' },
  { id: 'viva', label: 'Viva', icon: 'microphone' }
];

const VideoCard = ({ video }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="flex flex-col sm:flex-row">
      {/* Thumbnail Section */}
      <div className="relative w-full sm:w-48 h-48 sm:h-full">
        <img
          className="w-full h-full object-cover"
          src="https://i.ytimg.com/vi/I7RWAQgMRVI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPnfC0gGKXWqKMuH9-orfmCbLaMA"
          alt="Video thumbnail"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          {/* Title and Icon */}
          <div className="flex items-start space-x-3">
            <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{video.description}</p>
            </div>
          </div>

          {/* Tags/Metadata */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">Educational</span>
            <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">Engineering</span>
          </div>

          {/* Watch Button */}
          <button
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
            onClick={() => window.open(video.videoUrl, "_blank")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Video
          </button>
        </div>
      </div>
    </div>
  </div>
);

function LearningMaterial() {
  const [useMockData, setUseMockData] = useState(true); // Set to true to enable mock data by default
  const [universities, setUniversities] = useState([]);
  const [branches, setBranches] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showContent, setShowContent] = useState(true);
  const [submittedLearning, setSubmittedLearning] = useState([]);
  const [notes, setNotes] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [videoLectures, setVideoLectures] = useState([]);
  const [activeTab, setActiveTab] = useState('notes');
  const [showTabDropdown, setShowTabDropdown] = useState(false);
  const [tabsOverflow, setTabsOverflow] = useState(false);
  const tabsContainerRef = useRef(null);
  const [syllabus, setSyllabus] = useState([]);
  const [questionBank, setQuestionBank] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [testBook, setTestBook] = useState([]);
  const [practical, setPractical] = useState([]);
  const [viva, setViva] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch initial metadata (universities, branches, etc.)
    const fetchMetadata = async () => {
      try {
        if (useMockData) {
          console.log('Using mock data for universities');
          setUniversities(MOCK_DATA.universities || []);
          return;
        }

        const response = await axios.get('http://localhost:5000/api/v1/resource/metadata');
        console.log('Metadata response:', response.data);
        setUniversities(response.data.universities || []);
      } catch (error) {
        console.error('Error fetching metadata:', error);
        // Fallback to mock data on error
        console.log('Falling back to mock data for universities');
        setUniversities(MOCK_DATA.universities || []);
      }
    };

    fetchMetadata();
  }, [useMockData]);

  useEffect(() => {
    // Fetch resources based on filters
    const fetchResources = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (useMockData) {
          console.log('Using mock data for resources');
          // Filter mock data based on selected filters
          const filteredResources = MOCK_DATA.resources.filter(resource => {
            let match = true;
            if (selectedUniversity && resource.university !== selectedUniversity) match = false;
            if (selectedBranch && resource.branch !== selectedBranch) match = false;
            if (selectedSemester && resource.semester !== selectedSemester) match = false;
            if (selectedSubject && resource.subject !== selectedSubject) match = false;
            return match;
          });

          console.log('Filtered mock resources:', filteredResources);
          setSubmittedLearning(filteredResources);

          // Process the mock data for different sections
          const notesData = filteredResources
            .filter(item => item.note)
            .map(item => ({
              title: item.note.title,
              pdf: item.note.pdfUrl
            }));

          const pyqsData = filteredResources
            .filter(item => item.pyq)
            .map(item => ({
              title: item.pyq.title,
              pdf: item.pyq.pdfUrl
            }));

          const videoData = filteredResources
            .filter(item => item.video)
            .map(item => ({
              title: item.video.title,
              videoUrl: item.video.videoUrl,
              description: item.video.description,
              thumbnailUrl: item.video.thumbnailUrl
            }));

          const syllabusData = filteredResources
            .filter(item => item.syllabus)
            .map(item => ({
              title: item.syllabus.title,
              pdf: item.syllabus.pdfUrl,
              topics: item.syllabus.topics
            }));

          const questionBankData = filteredResources
            .filter(item => item.questionbank)
            .map(item => ({
              title: item.questionbank.title,
              pdf: item.questionbank.pdfUrl,
              totalQuestions: item.questionbank.totalQuestions
            }));

          const questionsData = filteredResources
            .filter(item => item.questions)
            .map(item => item.questions)
            .flat();

          const testBookData = filteredResources
            .filter(item => item.testbook)
            .map(item => ({
              title: item.testbook.title,
              pdf: item.testbook.pdfUrl,
              totalTests: item.testbook.totalTests
            }));

          const practicalData = filteredResources
            .filter(item => item.practical)
            .map(item => ({
              title: item.practical.title,
              pdf: item.practical.pdfUrl,
              experiments: item.practical.experiments
            }));

          const vivaData = filteredResources
            .filter(item => item.viva)
            .map(item => ({
              title: item.viva.title,
              pdf: item.viva.pdfUrl,
              totalQuestions: item.viva.totalQuestions
            }));

        setNotes(notesData);
        setPyqs(pyqsData);
          setVideoLectures(videoData);
          setSyllabus(syllabusData);
          setQuestionBank(questionBankData);
          setQuestions(questionsData);
          setTestBook(testBookData);
          setPractical(practicalData);
          setViva(vivaData);
          
          setIsLoading(false);
          return;
        }

        // Original API call code
        const params = new URLSearchParams();
        if (selectedUniversity) params.append('university', selectedUniversity);
        if (selectedBranch) params.append('branch', selectedBranch);
        if (selectedSemester) params.append('semester', selectedSemester);
        if (selectedSubject) params.append('subject', selectedSubject);

        const response = await axios.get('http://localhost:5000/api/v1/resource/resources', { params });
        console.log('Backend Response:', response.data);

        setSubmittedLearning(response.data);

        // Process the data for different sections
        const notesData = response.data
          .filter(item => item.note)
          .map(item => ({
            title: item.note.title,
            pdf: item.note.pdfUrl
          }));

        const pyqsData = response.data
          .filter(item => item.pyq)
          .map(item => ({
            title: item.pyq.title,
            pdf: item.pyq.pdfUrl
          }));

        const videoData = response.data
          .filter(item => item.video)
          .map(item => ({
            title: item.video.title,
            videoUrl: item.video.videoUrl,
            description: item.video.description,
            thumbnailUrl: item.video.thumbnailUrl
          }));

        const syllabusData = response.data
          .filter(item => item.syllabus)
          .map(item => ({
            title: item.syllabus.title,
            pdf: item.syllabus.pdfUrl,
            topics: item.syllabus.topics
          }));

        const questionBankData = response.data
          .filter(item => item.questionbank)
          .map(item => ({
            title: item.questionbank.title,
            pdf: item.questionbank.pdfUrl,
            totalQuestions: item.questionbank.totalQuestions
          }));

        const questionsData = response.data
          .filter(item => item.questions)
          .map(item => item.questions)
          .flat();

        const testBookData = response.data
          .filter(item => item.testbook)
          .map(item => ({
            title: item.testbook.title,
            pdf: item.testbook.pdfUrl,
            totalTests: item.testbook.totalTests
          }));

        const practicalData = response.data
          .filter(item => item.practical)
          .map(item => ({
            title: item.practical.title,
            pdf: item.practical.pdfUrl,
            experiments: item.practical.experiments
          }));

        const vivaData = response.data
          .filter(item => item.viva)
          .map(item => ({
            title: item.viva.title,
            pdf: item.viva.pdfUrl,
            totalQuestions: item.viva.totalQuestions
          }));

        setNotes(notesData);
        setPyqs(pyqsData);
        setVideoLectures(videoData);
        setSyllabus(syllabusData);
        setQuestionBank(questionBankData);
        setQuestions(questionsData);
        setTestBook(testBookData);
        setPractical(practicalData);
        setViva(vivaData);
        
      } catch (error) {
        console.error('Error fetching resources:', error);
        // Fallback to mock data on error
        console.log('Falling back to mock data for resources');
        
        // Filter mock data based on selected filters
        const filteredResources = MOCK_DATA.resources.filter(resource => {
          let match = true;
          if (selectedUniversity && resource.university !== selectedUniversity) match = false;
          if (selectedBranch && resource.branch !== selectedBranch) match = false;
          if (selectedSemester && resource.semester !== selectedSemester) match = false;
          if (selectedSubject && resource.subject !== selectedSubject) match = false;
          return match;
        });

        setSubmittedLearning(filteredResources);

        // Process the mock data for different sections
        const notesData = filteredResources
          .filter(item => item.note)
          .map(item => ({
            title: item.note.title,
            pdf: item.note.pdfUrl
          }));

        const pyqsData = filteredResources
          .filter(item => item.pyq)
          .map(item => ({
            title: item.pyq.title,
            pdf: item.pyq.pdfUrl
          }));

        const videoData = filteredResources
          .filter(item => item.video)
          .map(item => ({
            title: item.video.title,
            videoUrl: item.video.videoUrl,
            description: item.video.description,
            thumbnailUrl: item.video.thumbnailUrl
          }));

        const syllabusData = filteredResources
          .filter(item => item.syllabus)
          .map(item => ({
            title: item.syllabus.title,
            pdf: item.syllabus.pdfUrl,
            topics: item.syllabus.topics
          }));

        const questionBankData = filteredResources
          .filter(item => item.questionbank)
          .map(item => ({
            title: item.questionbank.title,
            pdf: item.questionbank.pdfUrl,
            totalQuestions: item.questionbank.totalQuestions
          }));

        const questionsData = filteredResources
          .filter(item => item.questions)
          .map(item => item.questions)
          .flat();

        const testBookData = filteredResources
          .filter(item => item.testbook)
          .map(item => ({
            title: item.testbook.title,
            pdf: item.testbook.pdfUrl,
            totalTests: item.testbook.totalTests
          }));

        const practicalData = filteredResources
          .filter(item => item.practical)
          .map(item => ({
            title: item.practical.title,
            pdf: item.practical.pdfUrl,
            experiments: item.practical.experiments
          }));

        const vivaData = filteredResources
          .filter(item => item.viva)
          .map(item => ({
            title: item.viva.title,
            pdf: item.viva.pdfUrl,
            totalQuestions: item.viva.totalQuestions
          }));

        setNotes(notesData);
        setPyqs(pyqsData);
        setVideoLectures(videoData);
        setSyllabus(syllabusData);
        setQuestionBank(questionBankData);
        setQuestions(questionsData);
        setTestBook(testBookData);
        setPractical(practicalData);
        setViva(vivaData);
        
        setError(error.message || 'Failed to load resources');
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedSubject) {
      fetchResources();
    }
  }, [selectedUniversity, selectedBranch, selectedSemester, selectedSubject, useMockData]);

  const handleUniversityChange = async (e) => {
    const value = e.target.value;
    setSelectedUniversity(value);
    setSelectedBranch(null);
    setSelectedSemester(null);
    setSubjects([]);
    
    try {
      if (useMockData) {
        console.log('Using mock data for branches');
        setBranches(MOCK_DATA.branches[value] || []);
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/v1/resource/branches/${value}`);
      console.log('Branches response:', response.data);
      setBranches(response.data.branches || []);
    } catch (error) {
      console.error('Error fetching branches:', error);
      // Fallback to mock data on error
      console.log('Falling back to mock data for branches');
      setBranches(MOCK_DATA.branches[value] || []);
    }
  };

  const handleBranchChange = async (e) => {
    const value = e.target.value;
    setSelectedBranch(value);
    setSelectedSemester(null);
    setSubjects([]);
    
    try {
      if (useMockData) {
        console.log('Using mock data for semesters');
        setSemesters(MOCK_DATA.semesters || []);
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/v1/resource/semesters/${value}`);
      console.log('Semesters response:', response.data);
      setSemesters(response.data.semesters || []);
    } catch (error) {
      console.error('Error fetching semesters:', error);
      // Fallback to mock data on error
      console.log('Falling back to mock data for semesters');
      setSemesters(MOCK_DATA.semesters || []);
    }
  };

  const handleSemesterChange = async (e) => {
    const value = e.target.value;
    setSelectedSemester(value);
    
    try {
      if (useMockData) {
        console.log('Using mock data for subjects');
        setSubjects(MOCK_DATA.subjects[selectedBranch] || []);
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/v1/resource/subjects/${selectedBranch}`, {
        params: { semester: value }
      });
      console.log('Subjects response:', response.data);
      setSubjects(response.data.subjects || []);
    } catch (error) {
      console.error('Error fetching subjects:', error);
      // Fallback to mock data on error
      console.log('Falling back to mock data for subjects');
      setSubjects(MOCK_DATA.subjects[selectedBranch] || []);
    }
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSearch = () => {
    setShowContent(true);
  };

  const filteredNotes = notes.filter((note) =>
    submittedLearning.some(
      (item) =>
        item.note?.title === note.title && item.subject === selectedSubject
    )
  );

  const filteredPyqs = pyqs.filter((pyq) =>
    submittedLearning.some(
      (item) =>
        item.pyq?.title === pyq.title && item.subject === selectedSubject
    )
  );

  const filteredVideos = videoLectures.filter((video) =>
    submittedLearning.some(
      (item) =>
        item.video?.title === video.title && item.subject === selectedSubject
    )
  );

  const filteredSyllabus = syllabus.filter((syl) =>
    submittedLearning.some(
      (item) =>
        item.syllabus?.title === syl.title && item.subject === selectedSubject
    )
  );

  const filteredQuestionBank = questionBank.filter((qb) =>
    submittedLearning.some(
      (item) =>
        item.questionbank?.title === qb.title && item.subject === selectedSubject
    )
  );

  const filteredQuestions = questions.filter((q) =>
    submittedLearning.some(
      (item) =>
        item.questions?.some(iq => iq.title === q.title) && item.subject === selectedSubject
    )
  );

  const filteredTestBook = testBook.filter((tb) =>
    submittedLearning.some(
      (item) =>
        item.testbook?.title === tb.title && item.subject === selectedSubject
    )
  );

  const filteredPractical = practical.filter((p) =>
    submittedLearning.some(
      (item) =>
        item.practical?.title === p.title && item.subject === selectedSubject
    )
  );

  const filteredViva = viva.filter((v) =>
    submittedLearning.some(
      (item) =>
        item.viva?.title === v.title && item.subject === selectedSubject
    )
  );

  const scrollToCenter = (tabId) => {
    const container = tabsContainerRef.current;
    const activeTab = container.querySelector(`[data-tab-id="${tabId}"]`);
    
    if (activeTab && container) {
      const containerWidth = container.offsetWidth;
      const tabWidth = activeTab.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    scrollToCenter(tabId);
  };

  // Add utility functions for file handling
  const getFileUrl = (fileUrl) => {
    if (!fileUrl) return '';
    if (fileUrl.startsWith('http')) return fileUrl;
    return `http://localhost:5000${fileUrl.startsWith('/') ? '' : '/'}${fileUrl}`;
  };

  // Update the handleFileView function with more detailed logging
  const handleFileView = (fileUrl) => {
    if (!fileUrl) {
      console.error('No file URL provided');
      return;
    }
    
    const url = getFileUrl(fileUrl);
    console.log('Viewing file at URL:', url);
    console.log('Original file path:', fileUrl);
    
    // Test if the URL is accessible
    fetch(url, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          console.log('File is accessible:', url);
          window.open(url, "_blank");
        } else {
          console.error('File is not accessible:', url, 'Status:', response.status);
          alert(`Cannot access file: ${url} (Status: ${response.status})`);
        }
      })
      .catch(error => {
        console.error('Error checking file accessibility:', error);
        alert(`Error accessing file: ${error.message}`);
      });
  };

  const handleFileDownload = (fileUrl, title) => {
    if (!fileUrl) {
      console.error('No file URL provided');
      return;
    }
    
    const url = getFileUrl(fileUrl);
    console.log('Downloading file from URL:', url);
    
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title || 'download');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // Add this useEffect to check for tab overflow
  useEffect(() => {
    const checkOverflow = () => {
      const tabsContainer = document.getElementById('tabs-container');
      if (tabsContainer) {
        setTabsOverflow(tabsContainer.scrollWidth > tabsContainer.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);


  // Add this after the useEffect for fetching resources
  useEffect(() => {
    // Debug logging for filtered data
    console.log('Selected University:', selectedUniversity);
    console.log('Selected Branch:', selectedBranch);
    console.log('Selected Semester:', selectedSemester);
    console.log('Selected Subject:', selectedSubject);
    console.log('All Resources:', submittedLearning);
    console.log('Filtered Notes:', filteredNotes);
    console.log('Filtered PYQs:', filteredPyqs);
    console.log('Filtered Videos:', filteredVideos);
  }, [selectedUniversity, selectedBranch, selectedSemester, selectedSubject, submittedLearning, filteredNotes, filteredPyqs, filteredVideos]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-[#553CDF] to-[#1a2980] w-full h-auto py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center text-white space-y-4">
              <h1 className="text-4xl font-bold">Engineer's Library</h1>
              <p className="max-w-3xl mx-auto">
                Unlock high-quality study materials and notes crafted by top achievers from renowned universities such as RTMNU, MIT-WPU, COEP, VJTI Mumbai, and more!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center w-full max-w-5xl">
              <select
                className="w-60 p-2 rounded-md border border-orange-500 bg-white text-gray-800"
                onChange={handleUniversityChange}
                value={selectedUniversity || ''}
              >
                <option value="">Select University</option>
                {universities.map((uni, index) => (
                  <option key={index} value={uni}>{uni}</option>
                ))}
              </select>

              <select
                className="w-60 p-2 rounded-md border border-orange-500 bg-white text-gray-800"
                onChange={handleBranchChange}
                value={selectedBranch || ''}
                disabled={!selectedUniversity}
              >
                <option value="">Select Branch</option>
                {branches.map((br, index) => (
                  <option key={index} value={br}>{br}</option>
                ))}
              </select>

              <select
                className="w-60 p-2 rounded-md border border-orange-500 bg-white text-gray-800"
                onChange={handleSemesterChange}
                value={selectedSemester || ''}
                disabled={!selectedBranch}
              >
                <option value="">Select Semester</option>
                {semesters.map((sem, index) => (
                  <option key={index} value={sem}>{sem}</option>
                ))}
              </select>

              <select
                className="w-60 p-2 rounded-md border border-orange-500 bg-white text-gray-800"
                onChange={handleSubjectChange}
                value={selectedSubject || ''}
                disabled={!selectedSemester}
              >
                <option value="">Select Subject</option>
                {subjects.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </div>

            {/* Mock data toggle */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md">
              <label className="text-gray-700 font-medium">Use Mock Data:</label>
              <div 
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${useMockData ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={() => setUseMockData(!useMockData)}
              >
                <div 
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${useMockData ? 'translate-x-6' : ''}`} 
                />
          </div>
              <span className="text-sm text-gray-600">{useMockData ? 'Enabled' : 'Disabled'}</span>
            </div>

          </div>
        </div>
      </div>

      {showContent && (
        <div className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="bg-white rounded-lg shadow h-full">
            <div className="relative border-b">
              {/* Mobile Dropdown */}
              <div className="lg:hidden p-2">
                <button
                  onClick={() => setShowTabDropdown(!showTabDropdown)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none"
                >
                  <div className="flex items-center gap-2">
                    <span>{TAB_OPTIONS.find(tab => tab.id === activeTab)?.label || 'Select Option'}</span>
                    {(() => {
                      let count = 0;
                      switch (activeTab) {
                        case 'notes':
                          count = filteredNotes.length;
                          break;
                        case 'pyqs':
                          count = filteredPyqs.length;
                          break;
                        case 'videos':
                          count = filteredVideos.length;
                          break;
                        case 'syllabus':
                          count = filteredSyllabus.length;
                          break;
                        case 'questionbank':
                          count = filteredQuestionBank.length;
                          break;
                        case 'questions':
                          count = filteredQuestions.length;
                          break;
                        case 'testbook':
                          count = filteredTestBook.length;
                          break;
                        case 'practical':
                          count = filteredPractical.length;
                          break;
                        case 'viva':
                          count = filteredViva.length;
                          break;
                        default:
                          count = 0;
                      }
                      return count > 0 ? (
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full bg-blue-100 text-blue-800">
                          {count}
                        </span>
                      ) : null;
                    })()}
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showTabDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
                    {TAB_OPTIONS.map((tab) => {
                      let count = 0;
                      switch (tab.id) {
                        case 'notes':
                          count = filteredNotes.length;
                          break;
                        case 'pyqs':
                          count = filteredPyqs.length;
                          break;
                        case 'videos':
                          count = filteredVideos.length;
                          break;
                        case 'syllabus':
                          count = filteredSyllabus.length;
                          break;
                        case 'questionbank':
                          count = filteredQuestionBank.length;
                          break;
                        case 'questions':
                          count = filteredQuestions.length;
                          break;
                        case 'testbook':
                          count = filteredTestBook.length;
                          break;
                        case 'practical':
                          count = filteredPractical.length;
                          break;
                        case 'viva':
                          count = filteredViva.length;
                          break;
                        default:
                          count = 0;
                      }
                      return (
                        <button
                          key={tab.id}
                          className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between ${
                            activeTab === tab.id ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                          }`}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setShowTabDropdown(false);
                          }}
                        >
                          <span>{tab.label}</span>
                          {count > 0 && (
                            <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full ${
                              activeTab === tab.id ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {count}
                            </span>
                          )}
                        </button>
                      );
                    })}
          </div>
                )}
        </div>

              {/* Desktop Tabs */}
              <div className="hidden lg:block relative">
                <div className="flex items-center">
                  {tabsOverflow && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-0 z-10 h-full px-2 bg-gradient-to-r from-white to-transparent"
                      onClick={() => {
                        const container = tabsContainerRef.current;
                        container.scrollBy({ left: -200, behavior: 'smooth' });
                      }}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                  )}

                  <div
                    ref={tabsContainerRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth mx-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    <div className="flex items-center space-x-2 px-4">
                      {TAB_OPTIONS.map((tab) => (
                        <motion.button
                          key={tab.id}
                          data-tab-id={tab.id}
                          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap
                            ${activeTab === tab.id 
                              ? 'bg-blue-50 text-blue-600' 
                              : 'text-gray-600 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                          onClick={() => handleTabClick(tab.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          layout
                        >
                          <motion.div
                            className="relative flex items-center gap-2"
                            initial={false}
                            animate={{
                              scale: activeTab === tab.id ? 1.1 : 1,
                              color: activeTab === tab.id ? "#2563EB" : "#4B5563"
                            }}
                          >
                            <span>{tab.label}</span>
                            {/* Count Badge */}
                            {(() => {
                              let count = 0;
                              switch (tab.id) {
                                case 'notes':
                                  count = filteredNotes.length;
                                  break;
                                case 'pyqs':
                                  count = filteredPyqs.length;
                                  break;
                                case 'videos':
                                  count = filteredVideos.length;
                                  break;
                                case 'syllabus':
                                  count = filteredSyllabus.length;
                                  break;
                                case 'questionbank':
                                  count = filteredQuestionBank.length;
                                  break;
                                case 'questions':
                                  count = filteredQuestions.length;
                                  break;
                                case 'testbook':
                                  count = filteredTestBook.length;
                                  break;
                                case 'practical':
                                  count = filteredPractical.length;
                                  break;
                                case 'viva':
                                  count = filteredViva.length;
                                  break;
                                default:
                                  count = 0;
                              }
                              return count > 0 ? (
                                <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full
                                  ${activeTab === tab.id 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-gray-100 text-gray-800'}`}>
                                  {count}
                                </span>
                              ) : null;
                            })()}
                            {activeTab === tab.id && (
                              <motion.div
                                className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600"
                                layoutId="activeTab"
                                initial={false}
                              />
                            )}
                          </motion.div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {tabsOverflow && (
                  <motion.button
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 z-10 h-full px-2 bg-gradient-to-l from-white to-transparent"
                    onClick={() => {
                      const container = tabsContainerRef.current;
                      container.scrollBy({ left: 200, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                )}
              </div>
            </div>

            <div className="bg-gray-50 min-h-[calc(100vh-300px)] p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {activeTab === 'notes' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNotes.map((note, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{note.title}</h3>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-200"
                                onClick={() => handleFileView(note.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View
                              </button>
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileDownload(note.pdf, note.title)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                              Download
                              </button>
                          </div>
                          </div>
                        </div>
                    ))}
                    </div>
                  )}

                  {activeTab === 'pyqs' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPyqs.map((pyq, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{pyq.title}</h3>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-200"
                                onClick={() => handleFileView(pyq.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View
                              </button>
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileDownload(pyq.pdf, pyq.title)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                              Download
                              </button>
                          </div>
                          </div>
                        </div>
                    ))}
                    </div>
                  )}

                  {activeTab === 'videos' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredVideos.map((video, index) => (
                        <VideoCard key={index} video={video} />
                      ))}
                    </div>
                  )}

                  {activeTab === 'syllabus' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredSyllabus.map((syl, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800">{syl.title}</h3>
                            </div>
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-600 mb-2">Topics Covered:</h4>
                              <div className="flex flex-wrap gap-2">
                                {syl.topics.map((topic, i) => (
                                  <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileView(syl.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View Syllabus
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'questionbank' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredQuestionBank.map((qb, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800">{qb.title}</h3>
                            </div>
                            <div className="mt-4">
                              <p className="text-gray-600">Total Questions: {qb.totalQuestions}</p>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileView(qb.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View Question Bank
                              </button>
                          </div>
                          </div>
                        </div>
                    ))}
            </div>
                  )}

                  {activeTab === 'questions' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredQuestions.map((q, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800">{q.title}</h3>
                            </div>
                            <div className="mt-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                q.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {q.difficulty}
                              </span>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileView(q.pdfUrl)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View Questions
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'testbook' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredTestBook.map((tb, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800">{tb.title}</h3>
                            </div>
                            <div className="mt-4">
                              <p className="text-gray-600">Total Tests: {tb.totalTests}</p>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileView(tb.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View Test Book
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'practical' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPractical.map((p, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
                            </div>
                            <div className="mt-4">
                              <p className="text-gray-600">Total Experiments: {p.experiments}</p>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileView(p.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View Lab Manual
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'viva' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredViva.map((v, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                              </svg>
                              <h3 className="text-xl font-semibold text-gray-800">{v.title}</h3>
                            </div>
                            <div className="mt-4">
                              <p className="text-gray-600">Total Questions: {v.totalQuestions}</p>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <button
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleFileView(v.pdf)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                View Viva Questions
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredNotes.length === 0 && filteredPyqs.length === 0 && filteredVideos.length === 0 && 
                   filteredSyllabus.length === 0 && filteredQuestionBank.length === 0 && filteredQuestions.length === 0 &&
                   filteredTestBook.length === 0 && filteredPractical.length === 0 && filteredViva.length === 0 && (
                    <div className="text-center py-12">
                      <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        alt="Empty state"
                        className="mx-auto h-36 mb-4"
                      />
                      <p className="text-gray-600 text-lg">
                        There is nothing to show! Just head towards the selectors given above to search for study materials
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LearningMaterial;
