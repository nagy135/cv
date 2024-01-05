import { type Record } from "@prisma/client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/app/_components/ui/card";

type RecordCard = {
  record: Record;
};
export default function RecordCard({ record }: RecordCard) {
  return (
    <Link href="/record/[id]" as={`/record/${record.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{record.createdAt.toUTCString()}</CardTitle>
          <CardDescription>active</CardDescription>
        </CardHeader>
        <CardContent>
          <p></p>
        </CardContent>
        <CardFooter>
          <p>Developer</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
