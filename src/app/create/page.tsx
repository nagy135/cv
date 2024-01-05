import { currentUser } from "@clerk/nextjs";
import AddEditRecord from "../_components/add-edit-record";

export default async function Create() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  return (
    <main className="justify-center">
      <AddEditRecord />
    </main>
  );
}
