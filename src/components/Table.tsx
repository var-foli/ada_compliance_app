import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const students = [
  {
    studentID: "12345",
    name: "Alice Johnson",
    enrollDate: "2024-01-15",
    grade: "A",
  },
  {
    studentID: "12346",
    name: "Bob Smith",
    enrollDate: "2024-01-17",
    grade: "B+",
  },
  {
    studentID: "12347",
    name: "Cathy Lee",
    enrollDate: "2024-01-16",
    grade: "B",
  },
  {
    studentID: "12348",
    name: "Daniel Kim",
    enrollDate: "2024-01-18",
    grade: "B",
  },
  {
    studentID: "12349",
    name: "Eva Martinez",
    enrollDate: "2024-01-15",
    grade: "A",
  },
  {
    studentID: "12350",
    name: "Frank Wright",
    enrollDate: "2024-01-20",
    grade: "B-",
  },
  {
    studentID: "12351",
    name: "Grace Chen",
    enrollDate: "2024-01-14",
    grade: "A+",
  },
];

export default function CourseTable() {
  return (
    <Table className="w-[700px]" tabIndex={0} aria-label="A table with course enrollment data">
      <TableCaption aria-hidden="true">A table with course enrollment data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Student ID</TableHead>
          <TableHead>Student Name</TableHead>
          <TableHead>Enrollment Date</TableHead>
          <TableHead className="text-right">Grade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.studentID}>
            <TableCell className="font-medium">{student.studentID}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.enrollDate}</TableCell>
            <TableCell className="text-right">{student.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
