import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, GraduationCap, Users, Building2, Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const studentData = {
  name: "Lahar Solanki",
  enrollment: "STU-2023-045",
  mobile: "+91 98765 43210",
  email: "lahar.solanki@college.edu",
  semester: "5th Semester",
  parentName: "Rajesh Solanki",
  college: "Institute of Technology and Science",
  admissionYear: "2023",
  passingYear: "2027"
};

export default function StudentProfile() {
  const navigate = useNavigate();

  const profileFields = [
    { label: "Full Name", value: studentData.name, icon: <User className="w-5 h-5 text-primary" /> },
    { label: "Enrollment Number", value: studentData.enrollment, icon: <GraduationCap className="w-5 h-5 text-primary" /> },
    { label: "Email Address", value: studentData.email, icon: <Mail className="w-5 h-5 text-primary" /> },
    { label: "Mobile Number", value: studentData.mobile, icon: <Phone className="w-5 h-5 text-primary" /> },
    { label: "Current Semester", value: studentData.semester, icon: <Calendar className="w-5 h-5 text-primary" /> },
    { label: "Parent's Name", value: studentData.parentName, icon: <Users className="w-5 h-5 text-primary" /> },
    { label: "College Name", value: studentData.college, icon: <Building2 className="w-5 h-5 text-primary" /> },
    { label: "Admission Year", value: studentData.admissionYear, icon: <Calendar className="w-5 h-5 text-primary" /> },
    { label: "Expected Passing Year", value: studentData.passingYear, icon: <Calendar className="w-5 h-5 text-primary" /> },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/student")} 
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </div>

        <Card className="shadow-hover border-none">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/50">
                <User className="w-12 h-12" />
              </div>
              <div className="text-center md:text-left">
                <CardTitle className="text-3xl font-bold mb-2">{studentData.name}</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  {studentData.enrollment} • {studentData.semester}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-primary mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileFields.map((field, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="mt-1">{field.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">{field.label}</p>
                    <p className="text-base font-semibold text-foreground">{field.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-none bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-1">Need to update your information?</h4>
                <p className="text-sm text-muted-foreground">Contact the administration office for profile updates.</p>
              </div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => navigate("/student/contact-admin")}
              >
                Contact Admin
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
