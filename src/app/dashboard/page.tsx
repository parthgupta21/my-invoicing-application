import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Home() {
    return (
        <main className="h-full px-6">
            {/* Centered Dashboard Heading */}
            <h1 className="text-5xl font-bold text-center mx-auto mb-6">
                Dashboard
            </h1>

            {/* Table with Left Margin */}
            <Table className="ml-8">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium text-left">
                            <span className="font-semibold">10/02/2003</span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span className="font-semibold">John Doe</span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span>johndoe@gmail.com</span>
                        </TableCell>
                        <TableCell className="text-center">
                            <Badge className="rounded-full">Open</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            <span className="font-semibold">$250.50</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    );
}
