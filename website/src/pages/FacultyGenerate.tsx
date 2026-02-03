import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, TrendingUp, Users, Clock } from "lucide-react";
import QRCodeDataUrl from "@/components/ui/qrcodedataurl";
import { Bar, BarChart, XAxis, YAxis, Cell, PieChart, Pie } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const attendanceData = [
  { day: "Mon", count: 45 },
  { day: "Tue", count: 52 },
  { day: "Wed", count: 48 },
  { day: "Thu", count: 61 },
  { day: "Fri", count: 55 },
];

const ratioData = [
  { name: "Present", value: 85, color: "hsl(var(--primary))" },
  { name: "Absent", value: 15, color: "hsl(var(--muted-foreground))" },
];

const chartConfig = {
  count: {
    label: "Attendance Count",
    color: "hsl(var(--primary))",
  },
};

const pieChartConfig = {
  present: {
    label: "Present",
    color: "hsl(var(--primary))",
  },
  absent: {
    label: "Absent",
    color: "hsl(var(--muted-foreground))",
  },
};

export default function FacultyGenerate() {
  const [isQRActive, setIsQRActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    let timer: any;
    if (isQRActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsQRActive(false);
      setTimeLeft(60);
    }
    return () => clearInterval(timer);
  }, [isQRActive, timeLeft]);

  const handleGenerateQR = () => {
    setQrValue(`https://imin.app/mark-attendance/${Date.now()}`);
    setIsQRActive(true);
    setTimeLeft(60);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* QR Generation Card */}
      <Card className="shadow-card border-none">
        <CardHeader className="items-center text-center">
          <CardTitle className="flex items-center justify-center text-2xl">
            <QrCode className="mr-3 text-primary" /> QR Code Control
          </CardTitle>
          <CardDescription className="text-center">
            Generate a temporary QR code for student check-in (60-second session).
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-6 space-y-6 min-h-[400px]">
          {isQRActive ? (
            <div className="text-center space-y-4 animate-fade-in w-full">
              <div className="bg-white p-4 rounded-xl border-4 border-primary/20 inline-block mx-auto">
                <QRCodeDataUrl text={qrValue} width={250} />
              </div>
              <div className="flex items-center justify-center space-x-2 text-primary font-bold text-3xl">
                <Clock className="w-8 h-8 animate-pulse" />
                <span>{timeLeft}s</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Students can scan this code to mark their attendance. The session will automatically expire after the countdown.
              </p>
              <Button variant="destructive" className="w-full max-w-xs" onClick={() => setIsQRActive(false)}>
                Stop Session
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-64 h-64 bg-secondary/50 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20 mx-auto">
                <QrCode className="w-24 h-24 text-muted-foreground/30" />
              </div>
              <p className="text-muted-foreground max-w-md">
                Click the button below to start a 60-second attendance session. Students will be able to scan the QR code during this time.
              </p>
              <Button onClick={handleGenerateQR} className="w-full max-w-xs h-12 text-lg font-semibold">
                Generate QR Code
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart - Attendance Trends */}
        <Card className="shadow-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 text-primary" /> Attendance Trends
            </CardTitle>
            <CardDescription>Daily attendance counts for the current week.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart data={attendanceData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip 
                  cursor={{ fill: 'rgba(0, 86, 179, 0.05)' }}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Doughnut Chart - Ratio */}
        <Card className="shadow-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 text-primary" /> Overall Ratio
            </CardTitle>
            <CardDescription>Present vs. Absent percentage for all classes.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="h-[250px] w-full">
              <ChartContainer config={pieChartConfig} className="h-full w-full">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={ratioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ratioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </div>
            <div className="w-full space-y-3 mt-4">
              {ratioData.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-xl font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
