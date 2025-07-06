import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle, Facebook, Twitter, Share2 } from "lucide-react";

const packages = [
  { id: "PKG001", name: "Alpine Wonders", destination: "Switzerland", price: "$2,800", status: "Active" },
  { id: "PKG002", name: "Roman Holiday", destination: "Italy", price: "$2,200", status: "Active" },
  { id: "PKG003", name: "Tropical Escape", destination: "Maldives", price: "$4,500", status: "Draft" },
  { id: "PKG004", name: "Viking Legends", destination: "Norway", price: "$3,100", status: "Active" },
  { id: "PKG005", name: "Outback Adventure", destination: "Australia", price: "$3,800", status: "Archived" },
];

export function PackageManager() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Tour Packages</CardTitle>
          <CardDescription>Manage your existing tour packages and add new ones.</CardDescription>
        </div>
        <Button size="sm" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Package
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Package Name</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Social Share</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell className="font-medium">{pkg.name}</TableCell>
                <TableCell>{pkg.destination}</TableCell>
                <TableCell>{pkg.price}</TableCell>
                <TableCell>
                  <Badge variant={pkg.status === "Active" ? "default" : "outline"}>{pkg.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4 text-sky-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
