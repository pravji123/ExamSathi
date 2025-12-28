// const SIDEBAR = {
//   super_admin: [
//     { name: "Dashboard", link: "dashboard.html" },
//     { name: "Manage Tests", link: "tests.html" },
//     { name: "Students", link: "students.html" },
//     { name: "Results", link: "results.html" },
//     { name: "Payments", link: "payments.html" },
//     { name: "Reports", link: "reports.html" },
//     { name: "Admins", link: "admins.html" },
//     { name: "Settings", link: "settings.html" }
//   ],
//   admin: [
//     { name: "Dashboard", link: "dashboard.html" },
//     { name: "Manage Tests", link: "tests.html" },
//     { name: "Students", link: "students.html" },
//     { name: "Results", link: "results.html" }
//   ],
//   teacher: [
//     { name: "Dashboard", link: "dashboard.html" },
//     { name: "Create Test", link: "tests.html" },
//     { name: "Question Bank", link: "questions.html" }
//   ],
//   manager: [
//     { name: "Dashboard", link: "dashboard.html" },
//     { name: "Payments", link: "payments.html" },
//     { name: "Reports", link: "reports.html" }
//   ],
//   supervisor: [
//     { name: "Dashboard", link: "dashboard.html" },
//     { name: "Reports", link: "reports.html" }
//   ]
// };

// const sidebar = document.getElementById("sidebar");

// SIDEBAR[user.role].forEach(item => {
//   const a = document.createElement("a");
//   a.href = item.link;
//   a.innerText = item.name;
//   sidebar.appendChild(a);
// });

// document.getElementById("adminName").innerText =
//   user.name + " (" + user.role.replace("_"," ") + ")";

const SIDEBAR = {
  super_admin: [
    { name: "Dashboard", link: "dashboard.html", icon: "fa-solid fa-gauge" },
    { name: "Manage Tests", link: "tests.html", icon: "fa-solid fa-file-lines" },
    { name: "Students", link: "students.html", icon: "fa-solid fa-users" },
    { name: "Results", link: "results.html", icon: "fa-solid fa-chart-bar" },
    { name: "Payments", link: "payments.html", icon: "fa-solid fa-credit-card" },
    { name: "Reports", link: "reports.html", icon: "fa-solid fa-file-export" },
    { name: "Admins", link: "admins.html", icon: "fa-solid fa-user-shield" },
    { name: "Settings", link: "settings.html", icon: "fa-solid fa-gear" }
  ],

  director: [
    { name: "Dashboard", link: "dashboard.html", icon: "fa-solid fa-gauge" },
    { name: "Manage Tests", link: "tests.html", icon: "fa-solid fa-file-lines" },
    { name: "Question Bank", link: "questions.html", icon: "fa-solid fa-book" },
    { name: "Question Aprove", link: "questions-approval.html", icon: "fa-solid fa-book" },
    { name: "Question Analytics", link: "question-analytics.html", icon: "fa-solid fa-book" },
    { name: "Students", link: "students.html", icon: "fa-solid fa-users" },
    { name: "Results", link: "results.html", icon: "fa-solid fa-chart-bar" },
    { name: "Notification", link: "notifications.html", icon: "fa-solid fa-bell"},
    { name: "Payments", link: "payments.html", icon: "fa-solid fa-credit-card" },
    { name: "Reports", link: "reports.html", icon: "fa-solid fa-file-export" },
    { name: "Admins", link: "admins.html", icon: "fa-solid fa-user-shield" },
    { name: "Employee", link: "contributors.html", icon: "fa-solid fa-user-shield" },
    { name: "Employee Work", link: "work_submissions.html", icon: "fa-solid fa-user-shield" },
    { name: "Certificate", link: "certificates.html", icon: "fa-solid fa-envelope" }
  ],

  admin: [
    { name: "Dashboard", link: "dashboard.html", icon: "fa-solid fa-gauge" },
    { name: "Manage Tests", link: "tests.html", icon: "fa-solid fa-file-lines" },
    { name: "Students", link: "students.html", icon: "fa-solid fa-users" },
    { name: "Results", link: "results.html", icon: "fa-solid fa-chart-bar" }
  ],

  teacher: [
    { name: "Dashboard", link: "dashboard.html", icon: "fa-solid fa-gauge" },
    { name: "Create Test", link: "tests.html", icon: "fa-solid fa-pen-to-square" },
    { name: "Question Bank", link: "questions.html", icon: "fa-solid fa-book" },
    { name: "Question Analytics", link: "question-analytics.html", icon: "fa-solid fa-book" }
  ],

  manager: [
    { name: "Dashboard", link: "dashboard.html", icon: "fa-solid fa-gauge" },
    { name: "Payments", link: "payments.html", icon: "fa-solid fa-credit-card" },
    { name: "Reports", link: "reports.html", icon: "fa-solid fa-file-export" }
  ],

  supervisor: [
    { name: "Dashboard", link: "dashboard.html", icon: "fa-solid fa-gauge" },
    { name: "Reports", link: "reports.html", icon: "fa-solid fa-file-export" }
  ]
};

const sidebar = document.getElementById("sidebar");
const currentPage = location.pathname.split("/").pop();

SIDEBAR[user.role].forEach(item => {
  const a = document.createElement("a");
  a.href = item.link;
  a.innerHTML = `<i class="${item.icon}"></i><span>${item.name}</span>`;

  // ACTIVE MENU
  if (item.link === currentPage) {
    a.classList.add("active");
  }

  sidebar.appendChild(a);
});

document.getElementById("adminName").innerText =
  user.name + " (" + user.role.replace("_"," ") + ")";
