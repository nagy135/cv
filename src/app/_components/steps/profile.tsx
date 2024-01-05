"use client";

import { type Profile } from "@prisma/client";

export default function Profile({ profile }: { profile?: Profile }) {
  return <div>{profile?.firstName ?? "-"}</div>;
}
