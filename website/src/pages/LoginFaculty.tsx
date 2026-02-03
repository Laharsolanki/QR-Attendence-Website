import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { UserCheck, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function LoginFaculty() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      facultyNumber: "",
      password: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Faculty Login:", data);
    // Simulate authentication
    if (data.facultyNumber && data.password) {
      toast({ title: "Login Successful", description: "Welcome back, Faculty!" });
      navigate("/faculty");
    } else {
      toast({ title: "Login Failed", description: "Invalid credentials", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mb-4 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>

        <Card className="shadow-hover border-2">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto p-4 bg-primary rounded-full w-fit">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">Faculty Login</CardTitle>
            <CardDescription className="text-base">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="facultyNumber"
                  rules={{ required: "Faculty number is required." }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Faculty Number</FormLabel>
                      <FormControl>
                        <Input placeholder="FAC-2023-001" {...field} className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  rules={{
                    required: "Password is required.",
                    minLength: { value: 6, message: "Password must be at least 6 characters." }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg font-semibold">
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
            <p>Forgot your password? Contact your administrator.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
