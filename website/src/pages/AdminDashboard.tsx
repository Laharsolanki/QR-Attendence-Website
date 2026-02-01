import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { UserPlus, History, User, BookOpen } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("registration");

  const studentForm = useForm({
    defaultValues: {
      name: "",
      enrollment: "",
      email: "",
      mobile: "",
      parentName: "",
      semester: "",
      college: "",
      admissionYear: "",
      passingYear: ""
    }
  });

  const facultyForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      department: "",
      password: ""
    }
  });

  const onStudentSubmit = (data: any) => {
    console.log("Student Data:", data);
    toast({ title: "Student Registered", description: `${data.name} has been added to the system.` });
    studentForm.reset();
  };

  const onFacultySubmit = (data: any) => {
    console.log("Faculty Data:", data);
    toast({ title: "Faculty Registered", description: `${data.name} has been added to the system.` });
    facultyForm.reset();
  };

  return (
    <div className="flex min-h-screen bg-secondary/30">
      {/* Sidebar - Mobile Responsive */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col p-6 space-y-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="p-2 bg-primary rounded-lg">
            <UserPlus className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-primary">Admin Panel</span>
        </div>
        
        <nav className="space-y-2">
          <Button 
            variant={activeTab === "registration" ? "default" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("registration")}
          >
            <UserPlus className="mr-2 h-4 w-4" /> Registration
          </Button>
          <Button 
            variant={activeTab === "logs" ? "default" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("logs")}
          >
            <History className="mr-2 h-4 w-4" /> View Logs
          </Button>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
             <TabsList>
                <TabsTrigger value="registration">Reg</TabsTrigger>
                <TabsTrigger value="logs">Logs</TabsTrigger>
             </TabsList>
          </Tabs>
        </div>

        {activeTab === "registration" ? (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>User Registration</CardTitle>
                <CardDescription>Register new students or faculty members to the system.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="student" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="student">Student Registration</TabsTrigger>
                    <TabsTrigger value="faculty">Faculty Registration</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="student">
                    <Form {...studentForm}>
                      <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={studentForm.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Lahar Solanki" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="enrollment" render={({ field }) => (
                          <FormItem><FormLabel>Enrollment Number</FormLabel><FormControl><Input placeholder="STU-2023-045" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="lahar.solanki@college.edu" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="mobile" render={({ field }) => (
                          <FormItem><FormLabel>Mobile Number</FormLabel><FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="parentName" render={({ field }) => (
                          <FormItem><FormLabel>Parent's Name</FormLabel><FormControl><Input placeholder="Rajesh Solanki" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="semester" render={({ field }) => (
                          <FormItem><FormLabel>Semester</FormLabel><FormControl><Input placeholder="5th" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="college" render={({ field }) => (
                          <FormItem><FormLabel>College Name</FormLabel><FormControl><Input placeholder="Institute of Technology and Science" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="admissionYear" render={({ field }) => (
                          <FormItem><FormLabel>Admission Year</FormLabel><FormControl><Input placeholder="2023" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={studentForm.control} name="passingYear" render={({ field }) => (
                          <FormItem><FormLabel>Expected Passing Year</FormLabel><FormControl><Input placeholder="2027" {...field} /></FormControl></FormItem>
                        )} />
                        <Button type="submit" className="md:col-span-2 mt-4">Register Student</Button>
                      </form>
                    </Form>
                  </TabsContent>

                  <TabsContent value="faculty">
                    <Form {...facultyForm}>
                      <form onSubmit={facultyForm.handleSubmit(onFacultySubmit)} className="space-y-6 max-w-2xl mx-auto">
                        <FormField control={facultyForm.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Prof. Smith" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={facultyForm.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="smith@college.edu" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={facultyForm.control} name="department" render={({ field }) => (
                          <FormItem><FormLabel>Department</FormLabel><FormControl><Input placeholder="Computer Science" {...field} /></FormControl></FormItem>
                        )} />
                        <FormField control={facultyForm.control} name="password" render={({ field }) => (
                          <FormItem><FormLabel>Temporary Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl></FormItem>
                        )} />
                        <Button type="submit" className="w-full mt-4">Register Faculty</Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>Review recent registration and attendance activities.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-secondary rounded-full text-primary">
                          {i % 2 === 0 ? <User size={20} /> : <BookOpen size={20} />}
                        </div>
                        <div>
                          <p className="font-semibold">{i % 2 === 0 ? "New Faculty Registered" : "New Student Registered"}</p>
                          <p className="text-sm text-muted-foreground">Admin processed registration at 10:45 AM</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">2 hours ago</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
