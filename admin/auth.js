function requireAuth(allowedRoles = []) {
  const emp = JSON.parse(localStorage.getItem("employee"));

  if (!emp || !emp.employee_id) {
    location.replace("/admin/login.html");
    return null;
  }

  // ⏱ optional expiry check (SAFE)
  if (emp.expires_at && Date.now() > emp.expires_at) {
    localStorage.removeItem("employee");
    alert("Session expired. Please login again.");
    location.replace("/admin/login.html");
    return null;
  }

  // 🔐 role-based protection
  if (allowedRoles.length && !allowedRoles.includes(emp.role)) {
    alert("Access denied");
    location.replace("/dashboard.html");
    return null;
  }

  return emp;
}
