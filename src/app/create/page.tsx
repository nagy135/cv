import { currentUser } from "@clerk/nextjs";

export default async function Create() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center"></main>
  );
}
