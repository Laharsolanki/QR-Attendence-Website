import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { ArrowLeft, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function StudentUpdateRequest() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      requestType: "",
      fieldToUpdate: "",
      newValue: "",
      contactEmail: "",
      details: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Student Update Request:", data);
    toast({
      title: "Request Submitted",
      description: "Your update request has been sent to the admin team."
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-secondary/20 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/student/profile")}
          className="text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Profile
        </Button>

        <Card className="shadow-hover border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Request Profile Update</CardTitle>
            <CardDescription>
              Send the admin team the details of the information you need updated.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="requestType"
                  rules={{ required: "Select a request type." }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Request Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select request type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personal-info">Personal Information</SelectItem>
                          <SelectItem value="contact-info">Contact Information</SelectItem>
                          <SelectItem value="academic-info">Academic Details</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fieldToUpdate"
                  rules={{ required: "Field name is required." }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field to Update</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Mobile Number, Semester" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newValue"
                  rules={{ required: "New value is required." }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Value</FormLabel>
                      <FormControl>
                        <Input placeholder="Provide the updated value" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactEmail"
                  rules={{ required: "Contact email is required." }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="details"
                  rules={{ required: "Please include details for the admin." }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Explain the update request and any supporting information."
                          className="min-h-[140px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Submit Request
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
