const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      failed: 1,        
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        title: "Complete onboarding documents",
        description: "Fill and submit all onboarding forms",
        date: "2025-01-05",
        category: "HR",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Attend team meeting",
        description: "Weekly sync-up with the development team",
        date: "2025-01-07",
        category: "Meeting",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve authentication issue in login page",
        date: "2025-01-10",
        category: "Development",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update documentation",
        description: "Update README with latest setup steps",
        date: "2025-01-12",
        category: "Documentation",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review PRs from junior developers",
        date: "2025-01-15",
        category: "Development",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstname: "Rohit",
    email: "employee2@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      failed: 1,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        title: "Design dashboard UI",
        description: "Create wireframes for employee dashboard",
        date: "2025-01-06",
        category: "Design",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare presentation",
        description: "Slides for project demo",
        date: "2025-01-08",
        category: "Presentation",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client feedback analysis",
        description: "Analyze feedback from last client call",
        date: "2025-01-11",
        category: "Analysis",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS issues",
        description: "Resolve layout breaking on mobile",
        date: "2025-01-14",
        category: "Development",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize images",
        description: "Compress assets for faster load",
        date: "2025-01-16",
        category: "Optimization",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstname: "Suresh",
    email: "employee3@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      failed: 1,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        title: "Database schema update",
        description: "Add new fields to employee table",
        date: "2025-01-04",
        category: "Database",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "API testing",
        description: "Test all auth related APIs",
        date: "2025-01-06",
        category: "Testing",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Error handling",
        description: "Improve backend error responses",
        date: "2025-01-09",
        category: "Backend",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for services",
        date: "2025-01-13",
        category: "Testing",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Refactor code",
        description: "Clean up legacy code",
        date: "2025-01-17",
        category: "Development",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstname: "Vikram",
    email: "employee4@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      failed: 1,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        title: "Setup CI pipeline",
        description: "Configure GitHub Actions",
        date: "2025-01-05",
        category: "DevOps",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server monitoring",
        description: "Check server health metrics",
        date: "2025-01-08",
        category: "DevOps",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix deployment issue",
        description: "Resolve production build failure",
        date: "2025-01-10",
        category: "DevOps",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Backup configuration",
        description: "Automate daily DB backups",
        date: "2025-01-14",
        category: "Database",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security audit",
        description: "Check vulnerabilities",
        date: "2025-01-18",
        category: "Security",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstname: "Ankit",
    email: "employee5@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      failed: 1,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        title: "Content update",
        description: "Update homepage content",
        date: "2025-01-03",
        category: "Content",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO optimization",
        description: "Improve SEO score",
        date: "2025-01-06",
        category: "Marketing",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email campaign",
        description: "Prepare email templates",
        date: "2025-01-09",
        category: "Marketing",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Analytics review",
        description: "Analyze website traffic",
        date: "2025-01-12",
        category: "Analytics",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Social media post",
        description: "Schedule posts for the week",
        date: "2025-01-15",
        category: "Marketing",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admins = [
  {
    "id": 101,
    firstname: "Admin",
    "email": "admin@me.com",
    "password": "123"
  }
]

export const SetLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admins', JSON.stringify(admins));
}

export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admins'));

  return {employees , admin};
}