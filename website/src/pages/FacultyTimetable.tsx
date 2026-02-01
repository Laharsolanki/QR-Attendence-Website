import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, BookOpen } from "lucide-react";

const timetableData = [
  { day: "Monday", time: "09:00 - 10:30", subject: "Data Structures", room: "Lab 101" },
  { day: "Monday", time: "11:00 - 12:30", subject: "Operating Systems", room: "Room 205" },
  { day: "Monday", time: "14:00 - 15:30", subject: "Computer Networks", room: "Room 303" },
  { day: "Tuesday", time: "09:00 - 10:30", subject: "DBMS", room: "Lab 102" },
  { day: "Tuesday", time: "11:00 - 12:30", subject: "Mathematics III", room: "Room 201" },
  { day: "Wednesday", time: "09:00 - 10:30", subject: "Data Structures", room: "Lab 101" },
  { day: "Wednesday", time: "14:00 - 15:30", subject: "Operating Systems", room: "Room 205" },
  { day: "Thursday", time: "09:00 - 10:30", subject: "Computer Networks", room: "Room 303" },
  { day: "Thursday", time: "11:00 - 12:30", subject: "DBMS", room: "Lab 102" },
  { day: "Friday", time: "09:00 - 10:30", subject: "Mathematics III", room: "Room 201" },
  { day: "Friday", time: "11:00 - 12:30", subject: "Data Structures", room: "Lab 101" },
];

const groupByDay = (data: typeof timetableData) => {
  const grouped: Record<string, typeof timetableData> = {};
  data.forEach((item) => {
    if (!grouped[item.day]) {
      grouped[item.day] = [];
    }
    grouped[item.day].push(item);
  });
  return grouped;
};

export default function FacultyTimetable() {
  const groupedTimetable = groupByDay(timetableData);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-card border-none">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Calendar className="mr-3 text-primary" /> Weekly Timetable
          </CardTitle>
          <CardDescription>Your complete class schedule for the week.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {days.map((day) => (
              <div key={day} className="border rounded-lg overflow-hidden">
                <div className="bg-primary text-white px-4 py-3 font-bold text-lg">
                  {day}
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Time</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead className="text-right">Room</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groupedTimetable[day]?.map((item, index) => (
                      <TableRow key={index} className="hover:bg-secondary/20">
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-primary" />
                            {item.time}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-2 text-primary" />
                            <span className="font-semibold">{item.subject}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">{item.room}</TableCell>
                      </TableRow>
                    )) || (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                          No classes scheduled
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
