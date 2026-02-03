import LandingPage from './pages/LandingPage';
import LoginStudent from './pages/LoginStudent';
import LoginFaculty from './pages/LoginFaculty';
import LoginAdmin from './pages/LoginAdmin';
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import StudentUpdateRequest from './pages/StudentUpdateRequest';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Landing',
    path: '/',
    element: <LandingPage />
  },
  {
    name: 'Student Login',
    path: '/login/student',
    element: <LoginStudent />
  },
  {
    name: 'Faculty Login',
    path: '/login/faculty',
    element: <LoginFaculty />
  },
  {
    name: 'Admin Login',
    path: '/login/admin',
    element: <LoginAdmin />
  },
  {
    name: 'Admin Dashboard',
    path: '/admin',
    element: <AdminDashboard />
  },
  {
    name: 'Faculty Dashboard',
    path: '/faculty',
    element: <FacultyDashboard />
  },
  {
    name: 'Student Dashboard',
    path: '/student',
    element: <StudentDashboard />
  },
  {
    name: 'Student Profile',
    path: '/student/profile',
    element: <StudentProfile />
  },
  {
    name: 'Student Update Request',
    path: '/student/contact-admin',
    element: <StudentUpdateRequest />
  }
];

export default routes;
