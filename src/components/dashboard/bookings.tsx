import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const bookings = [
  {
    id: "TRV739",
    destination: "Santorini, Greece",
    date: "2024-08-15",
    status: "Confirmed",
  },
  {
    id: "TRV621",
    destination: "Kyoto, Japan",
    date: "2024-05-20",
    status: "Completed",
  },
  {
    id: "TRV448",
    destination: "Paris, France",
    date: "2023-10-10",
    status: "Completed",
  },
];

export function Bookings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Bookings</CardTitle>
        <CardDescription>View and manage your upcoming and past trips.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
