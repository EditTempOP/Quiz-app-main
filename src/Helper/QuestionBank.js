export const questions = [
    {
      question: "What is STL?",
      options: {
        A: "Standard Template Library",
        B: "Simple Template Library",
        C: "Systematic Template Library",
        D: "Standardized Template Language",
      },
      answer: "A",
    },
    {
      question: "What is a template?",
      options: {
        A: "A predefined function",
        B: "A type of container",
        C: "A feature for operating with generic types",
        D: "A library for standard data structures",
      },
      answer: "C",
    },
    {
      question: "Why do we use <bits/stdc++.h>?",
      options: {
        A: "To include all standard header files at once",
        B: "To include specific header files",
        C: "To exclude standard header files",
        D: "To optimize code compilation",
      },
      answer: "A",
    },
    {
      question: "Why do we need STL?",
      options: {
        A: "To save time",
        B: "To complicate code",
        C: "To increase memory usage",
        D: "To reduce code efficiency",
      },
      answer: "A",
    },
    {
      question: "What are containers in STL?",
      options: {
        A: "Type of functions",
        B: "Type of variables",
        C: "Class templates for implementing data structures",
        D: "Predefined algorithms",
      },
      answer: "C",
    },
    {
      question: "Which of the following is not a sequence container in STL?",
      options: {
        A: "vector",
        B: "list",
        C: "set",
        D: "deque",
      },
      answer: "C",
    },
    {
      question: "Which container in STL stores elements in sorted order and does not allow duplicate values?",
      options: {
        A: "vector",
        B: "list",
        C: "set",
        D: "map",
      },
      answer: "C",
    },
    {
      question: "What is the time complexity of accessing an element in a std::vector by index?",
      options: {
        A: "O(1)",
        B: "O(log n)",
        C: "O(n)",
        D: "O(n log n)",
      },
      answer: "A",
    },
    {
      question: "Which STL container does not support random access?",
      options: {
        A: "vector",
        B: "deque",
        C: "list",
        D: "array",
      },
      answer: "C",
    },
    {
      question: "What is the function of std::map in STL?",
      options: {
        A: "Associative array storing key-value pairs",
        B: "Dynamic array storing elements sequentially",
        C: "Doubly linked list",
        D: "Array of fixed size",
      },
      answer: "A",
    },
    {
      question: "Which of the following operations is supported by std::stack?",
      options: {
        A: "push",
        B: "pop",
        C: "top",
        D: "All of the above",
      },
      answer: "D",
    },
    {
      question: "What is the underlying data structure used by std::priority_queue?",
      options: {
        A: "Heap",
        B: "Linked List",
        C: "Array",
        D: "Tree",
      },
      answer: "A",
    },
    {
      question: "Which algorithm is used to find the smallest element in a container?",
      options: {
        A: "std::max_element",
        B: "std::min_element",
        C: "std::sort",
        D: "std::accumulate",
      },
      answer: "B",
    },
    {
      question: "What does the std::transform algorithm do?",
      options: {
        A: "Applies a function to a range of elements and stores the result",
        B: "Sorts elements in ascending order",
        C: "Copies elements from one container to another",
        D: "Finds the maximum element in a range",
      },
      answer: "A",
    },
    {
      question: "Which function is used to sort elements in a container?",
      options: {
        A: "std::sort",
        B: "std::reverse",
        C: "std::copy",
        D: "std::for_each",
      },
      answer: "A",
    },
    {
      question: "Which of the following is an associative container in STL?",
      options: {
        A: "vector",
        B: "list",
        C: "set",
        D: "deque",
      },
      answer: "C",
    },
    {
      question: "What does the std::pair class template represent?",
      options: {
        A: "A container that can hold two different values",
        B: "A type of iterator",
        C: "A function object",
        D: "A sorting algorithm",
      },
      answer: "A",
    },
    {
      question: "What is the function of std::find?",
      options: {
        A: "Finds the minimum element in a range",
        B: "Finds the first occurrence of a value in a range",
        C: "Sorts elements in a range",
        D: "Applies a function to each element in a range",
      },
      answer: "B",
    },
    {
      question: "Which container would you use for a first-in, first-out (FIFO) data structure?",
      options: {
        A: "std::vector",
        B: "std::deque",
        C: "std::queue",
        D: "std::priority_queue",
      },
      answer: "C",
    },
    {
      question: "What is the difference between std::vector and std::list?",
      options: {
        A: "std::vector is dynamic, std::list is static",
        B: "std::vector supports random access, std::list does not",
        C: "std::vector allows duplicate values, std::list does not",
        D: "std::vector is thread-safe, std::list is not",
      },
      answer: "B",
    },
    {
      question: "Which STL algorithm can be used to reverse the elements in a container?",
      options: {
        A: "std::sort",
        B: "std::reverse",
        C: "std::find",
        D: "std::transform",
      },
      answer: "B",
    },
    {
      question: "Which of the following is not an iterator category in STL?",
      options: {
        A: "Input iterator",
        B: "Output iterator",
        C: "Forward iterator",
        D: "Container iterator",
      },
      answer: "D",
    },
    {
      question: "What does the std::unique algorithm do?",
      options: {
        A: "Removes duplicate elements from a range",
        B: "Sorts elements in descending order",
        C: "Finds the unique element in a container",
        D: "Transforms elements using a unary operation",
      },
      answer: "A",
    },
    {
      question: "What is the main advantage of using an std::unordered_map over an std::map?",
      options: {
        A: "Faster insertion and retrieval on average",
        B: "Maintains elements in sorted order",
        C: "Uses less memory",
        D: "Supports bidirectional iteration",
      },
      answer: "A",
    },
    {
      question: "Which STL algorithm would you use to merge two sorted ranges?",
      options: {
        A: "std::sort",
        B: "std::merge",
        C: "std::copy",
        D: "std::accumulate",
      },
      answer: "B",
    },
    {
      question: "What is a functor in STL?",
      options: {
        A: "A function pointer",
        B: "A class or struct that defines the operator()",
        C: "A type of container",
        D: "An algorithm",
      },
      answer: "B",
    },
    {
      question: "Which container would you use for a last-in, first-out (LIFO) data structure?",
      options: {
        A: "std::queue",
        B: "std::deque",
        C: "std::stack",
        D: "std::vector",
      },
      answer: "C",
    },
    {
      question: "Which algorithm is used to remove all occurrences of a specific value from a container?",
      options: {
        A: "std::find",
        B: "std::remove",
        C: "std::unique",
        D: "std::erase",
      },
      answer: "B",
    },
    {
      question: "What is the purpose of the std::accumulate algorithm?",
      options: {
        A: "To calculate the sum of elements in a range",
        B: "To find the maximum element in a range",
        C: "To copy elements from one range to another",
        D: "To sort elements in ascending order",
      },
      answer: "A",
    },
    {
      question: "Which of the following is not a valid associative container in STL?",
      options: {
        A: "std::set",
        B: "std::map",
        C: "std::vector",
        D: "std::unordered_map",
      },
      answer: "C",
    },

];
