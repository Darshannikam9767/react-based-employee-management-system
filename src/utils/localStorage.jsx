
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@company.com",
    password: "pass123",
    tasks: [
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue on login page.",
        taskCategory: "Frontend",
        taskDate: "2026-06-03",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Dashboard UI",
        taskDescription: "Implement new dashboard design from Figma.",
        taskCategory: "UI/UX",
        taskDate: "2026-06-05",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write API Documentation",
        taskDescription: "Document user authentication endpoints.",
        taskCategory: "Documentation",
        taskDate: "2026-05-28",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    name: "Priya Patel",
    email: "employee2@company.com",
    password: "pass123",
    tasks: [
      {
        taskTitle: "Create User Profile Page",
        taskDescription: "Develop responsive profile page.",
        taskCategory: "Frontend",
        taskDate: "2026-06-04",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Optimize Database Queries",
        taskDescription: "Improve query performance by adding indexes.",
        taskCategory: "Backend",
        taskDate: "2026-06-06",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Payment Gateway Error",
        taskDescription: "Investigate transaction failures.",
        taskCategory: "Backend",
        taskDate: "2026-05-30",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from junior developers.",
        taskCategory: "Development",
        taskDate: "2026-05-29",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    name: "Amit Verma",
    email: "employee3@company.com",
    password: "pass123",
    tasks: [
      {
        taskTitle: "Implement JWT Authentication",
        taskDescription: "Secure API using JWT tokens.",
        taskCategory: "Backend",
        taskDate: "2026-06-03",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Deploy Staging Server",
        taskDescription: "Prepare staging environment for testing.",
        taskCategory: "DevOps",
        taskDate: "2026-06-07",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure GitHub Actions workflow.",
        taskCategory: "DevOps",
        taskDate: "2026-05-27",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    name: "Sneha Kulkarni",
    email: "employee4@company.com",
    password: "pass123",
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create modern landing page layout.",
        taskCategory: "UI/UX",
        taskDate: "2026-06-02",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Cross Browser Testing",
        taskDescription: "Test application on major browsers.",
        taskCategory: "QA",
        taskDate: "2026-06-04",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Responsive Issues",
        taskDescription: "Resolve mobile layout bugs.",
        taskCategory: "Frontend",
        taskDate: "2026-05-25",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Performance Audit",
        taskDescription: "Analyze page load performance.",
        taskCategory: "Optimization",
        taskDate: "2026-05-29",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 5,
    name: "Karan Mehta",
    email: "employee5@company.com",
    password: "pass123",
    tasks: [
      {
        taskTitle: "Build REST API",
        taskDescription: "Develop CRUD APIs for products module.",
        taskCategory: "Backend",
        taskDate: "2026-06-05",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Unit Testing",
        taskDescription: "Write Jest test cases for services.",
        taskCategory: "Testing",
        taskDate: "2026-06-06",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Fix Sprint",
        taskDescription: "Resolve reported issues from QA team.",
        taskCategory: "Maintenance",
        taskDate: "2026-05-31",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Server Monitoring Setup",
        taskDescription: "Configure monitoring alerts.",
        taskCategory: "DevOps",
        taskDate: "2026-05-28",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Check vulnerabilities in APIs.",
        taskCategory: "Security",
        taskDate: "2026-06-08",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];



const admin = [
  {
    id: 1,
    name: "Darshan Nikam",
    email: "darshannikam@gmail.com",
    password: "pass123"
  }
];

// localStorage.clear()

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  // 1. Get raw string data from localStorage
  let empRaw = localStorage.getItem("employees")
  let adminRaw = localStorage.getItem("admin")

  // 2. If storage is empty, initialize it with your mock data arrays above
  if (!empRaw || !adminRaw) {
    setLocalStorage()
    empRaw = localStorage.getItem("employees")
    adminRaw = localStorage.getItem("admin")
  }

  // 3. Crucial Fix: Convert strings back into usable JS objects/arrays
  const empData = JSON.parse(empRaw)
  const adminData = JSON.parse(adminRaw)

  return { empData, adminData }
}