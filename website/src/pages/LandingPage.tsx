import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, UserCheck, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const userTypes = [
    {
      title: "Student",
      description: "Mark your attendance and track your progress.",
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      path: "/login/student",
      buttonText: "Student Login"
    },
    {
      title: "Faculty",
      description: "Manage classes, generate QR codes, and view analytics.",
      icon: <UserCheck className="w-12 h-12 text-primary" />,
      path: "/login/faculty",
      buttonText: "Faculty Login"
    },
    {
      title: "Admin",
      description: "System administration and user registration.",
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      path: "/login/admin",
      buttonText: "Admin Enter"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center p-3 bg-primary rounded-xl mb-6 shadow-lg">
          <span className="text-white text-3xl font-bold">ImIn</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Welcome to ImIn</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The professional attendance solution. Seamless, secure, and smart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {userTypes.map((user, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-hover transition-all duration-300 border-2 border-transparent hover:border-primary group">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 p-5 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                {user.icon}
              </div>
              <CardTitle className="text-2xl font-bold">{user.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground">
                {user.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="w-full mt-auto pt-6">
              <Button 
                onClick={() => navigate(user.path)} 
                className="w-full text-lg h-12 font-semibold"
                variant="default"
              >
                {user.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <footer className="mt-20 text-muted-foreground text-sm font-medium">
        &copy; 2026 ImIn Attendance System • Professional Excellence
      </footer>
    </div>
  );
}
