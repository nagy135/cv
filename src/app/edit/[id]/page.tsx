import { currentUser } from "@clerk/nextjs";
import { api } from "~/trpc/server";
import { notFound } from "next/navigation";

export default async function Edit({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  const record = await api.record.getById.query({
    userId: user.id,
    id: parseInt(id),
  });
  if (!record) return notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {record.id}
    </main>
  );
}
