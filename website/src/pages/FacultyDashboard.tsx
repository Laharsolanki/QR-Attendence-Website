import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, QrCode, Download, LogOut } from "lucide-react";
import FacultyTimetable from "./FacultyTimetable";
import FacultyGenerate from "./FacultyGenerate";

export default function FacultyDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<"timetable" | "generate">("generate");

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Student Name,Enrollment,Status\nJohn Doe,STU001,Present\nJane Smith,STU002,Absent";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance_records.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-secondary/20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col p-6 space-y-6 hidden md:flex">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-primary">Faculty Portal</h2>
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold">Dr. Sarah Johnson</p>
            <p>FAC-2023-001</p>
          </div>
        </div>
        
        <nav className="space-y-2 flex-1">
          <Button 
            variant={activeSection === "timetable" ? "default" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveSection("timetable")}
          >
            <Calendar className="mr-2 h-4 w-4" /> View Timetable
          </Button>
          <Button 
            variant={activeSection === "generate" ? "default" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveSection("generate")}
          >
            <QrCode className="mr-2 h-4 w-4" /> Generate QR & Analytics
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={downloadCSV}
          >
            <Download className="mr-2 h-4 w-4" /> Download CSV
          </Button>
        </nav>

        <Button 
          variant="outline" 
          className="w-full justify-start border-destructive text-destructive hover:bg-destructive/5"
          onClick={() => navigate("/login/faculty")}
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-10 p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-bold text-primary">Faculty Portal</h2>
            <p className="text-xs text-muted-foreground">Dr. Sarah Johnson • FAC-2023-001</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate("/login/faculty")}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button 
            size="sm"
            variant={activeSection === "timetable" ? "default" : "outline"} 
            onClick={() => setActiveSection("timetable")}
            className="flex-1"
          >
            <Calendar className="mr-1 h-3 w-3" /> Timetable
          </Button>
          <Button 
            size="sm"
            variant={activeSection === "generate" ? "default" : "outline"} 
            onClick={() => setActiveSection("generate")}
            className="flex-1"
          >
            <QrCode className="mr-1 h-3 w-3" /> Generate
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 mt-32 md:mt-0 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 hidden md:block">
            <h1 className="text-3xl font-bold text-primary mb-2">
              {activeSection === "timetable" ? "Class Timetable" : "Attendance Control & Analytics"}
            </h1>
            <p className="text-muted-foreground">
              {activeSection === "timetable" 
                ? "View your weekly class schedule" 
                : "Generate QR codes and monitor attendance trends"}
            </p>
          </header>

          {activeSection === "timetable" ? <FacultyTimetable /> : <FacultyGenerate />}
        </div>
      </main>
    </div>
  );
}
