import { api } from "~/trpc/server";
import { Button } from "./_components/ui/button";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import RecordCard from "./_components/record-card";

export default async function Home() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  const records = await api.record.getAll.query({ userId: user.id });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {records.length ? (
        records.map((record) => <RecordCard key={record.id} record={record} />)
      ) : (
        <Link href="/create">
          <Button>Add cv</Button>
        </Link>
      )}
    </main>
  );
}
