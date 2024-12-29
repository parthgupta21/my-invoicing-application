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
import { Button } from "@/components/ui/button";
import { CopyPlus } from 'lucide-react';
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">
                    Invoices
                </h1>

                <p>
                    <Button className="inline-flex gap-2" variant="ghost" asChild>
                        <Link href="/invoices/new">
                            <CopyPlus className="h-4 w-4" />
                            Create Invoices
                        </Link>
                    </Button>
                </p>
            </div>


            <Table>
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
                            <span className="">johndoe@gmail.com</span>
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
