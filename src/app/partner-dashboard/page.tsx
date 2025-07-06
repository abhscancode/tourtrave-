import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageManager } from "@/components/partner/package-manager";
import { Invoices } from "@/components/partner/invoices";
import { Commissions } from "@/components/partner/commissions";

export default function PartnerDashboardPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Partner Dashboard</h1>
      <Tabs defaultValue="packages" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="packages">Packages</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="commissions">Commissions</TabsTrigger>
        </TabsList>
        <TabsContent value="packages">
          <PackageManager />
        </TabsContent>
        <TabsContent value="invoices">
          <Invoices />
        </TabsContent>
        <TabsContent value="commissions">
          <Commissions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
