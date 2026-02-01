import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Book, Scan, AlertCircle, CheckCircle2, UserCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

const attendanceList = [
  { subject: "Mathematics III", teacher: "Dr. Alan Turing", percentage: 85, status: "Good" },
  { subject: "Data Structures", teacher: "Prof. Grace Hopper", percentage: 92, status: "Excellent" },
  { subject: "Operating Systems", teacher: "Dr. Linus Torvalds", percentage: 68, status: "Low" },
  { subject: "Computer Networks", teacher: "Prof. Vint Cerf", percentage: 78, status: "Average" },
  { subject: "DBMS", teacher: "Dr. Edgar Codd", percentage: 95, status: "Excellent" },
];

export default function StudentDashboard() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 shadow-card border-none bg-primary text-white">
            <CardHeader className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4 border-2 border-white/50">
                <User className="w-12 h-12" />
              </div>
              <CardTitle className="text-2xl">Lahar Solanki</CardTitle>
              <CardDescription className="text-white/80">Student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-80">Enrollment</span>
                <span className="font-semibold">STU-2023-045</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-80">Semester</span>
                <span className="font-semibold">5th Semester</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-80">Department</span>
                <span className="font-semibold">Computer Science</span>
              </div>
              <Button 
                variant="secondary" 
                className="w-full mt-4" 
                onClick={() => navigate("/student/profile")}
              >
                <UserCircle className="mr-2 h-4 w-4" /> View Full Profile
              </Button>
            </CardContent>
          </Card>

          {/* Mark Attendance Action */}
          <Card className="md:col-span-2 shadow-card border-none flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scan className="mr-2 text-primary" /> Mark Attendance
              </CardTitle>
              <CardDescription>Scan a class QR code to register your presence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isMobile && (
                <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Desktop Restriction</AlertTitle>
                  <AlertDescription>
                    Mobile scanning required. Use the ImIn app or visit this page on your mobile device.
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-xl border-2 border-dashed border-primary/20">
                <Scan className={`w-16 h-16 mb-4 ${isMobile ? 'text-primary' : 'text-muted-foreground opacity-50'}`} />
                <Button 
                  size="lg" 
                  disabled={!isMobile} 
                  className="w-full max-w-xs h-12 text-lg font-bold"
                >
                  {isMobile ? "Open Camera & Scan" : "Scanning Disabled"}
                </Button>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Location services must be enabled for attendance marking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Table */}
        <Card className="shadow-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2 text-primary" /> My Attendance
            </CardTitle>
            <CardDescription>Summary of your attendance across all subjects.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="hidden md:table-cell">Instructor</TableHead>
                  <TableHead className="text-right">Percentage</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceList.map((item, index) => (
                  <TableRow key={index} className="hover:bg-secondary/20 transition-colors">
                    <TableCell className="font-medium">{item.subject}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.teacher}</TableCell>
                    <TableCell className="text-right font-bold">
                      <div className="flex items-center justify-end space-x-2">
                        <span>{item.percentage}%</span>
                        <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden hidden sm:block">
                           <div 
                             className={`h-full ${item.percentage >= 75 ? 'bg-primary' : 'bg-destructive'}`} 
                             style={{ width: `${item.percentage}%` }}
                           />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant={item.percentage >= 75 ? "default" : "destructive"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-12 text-center text-muted-foreground text-sm">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>System active and secure</span>
        </div>
        &copy; 2026 ImIn Attendance System
      </footer>
    </div>
  );
}
