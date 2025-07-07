import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const commissionHistory = [
  { bookingId: "BK-5812", package: "Alpine Wonders", date: "2024-07-20", amount: "$420.00", status: "Cleared" },
  { bookingId: "BK-5799", package: "Roman Holiday", date: "2024-07-18", amount: "$330.00", status: "Cleared" },
  { bookingId: "BK-5750", package: "Viking Legends", date: "2024-07-11", amount: "$465.00", status: "Cleared" },
  { bookingId: "BK-5698", package: "Alpine Wonders", date: "2024-07-05", amount: "$420.00", status: "Cleared" },
];

export function Commissions() {
  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Commission Earned</CardTitle>
            <CardDescription>All-time earnings as a Skyworld partner.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">$51,450.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Payout</CardTitle>
            <CardDescription>Commissions to be paid out in the next cycle.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$1,635.00</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Commission History</CardTitle>
          <CardDescription>Detailed history of your recent commissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commissionHistory.map((item) => (
                <TableRow key={item.bookingId}>
                  <TableCell className="font-medium">{item.bookingId}</TableCell>
                  <TableCell>{item.package}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
