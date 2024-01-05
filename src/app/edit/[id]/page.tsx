import { currentUser } from "@clerk/nextjs";

export default async function Edit({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {params.id}
    </main>
  );
}
