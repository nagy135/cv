import { type Experience } from "@prisma/client";

export default function Experience({
  experiences,
}: {
  experiences: Experience[];
}) {
  return experiences.map((e) => <div key={e.id}>{e.name}</div>);
}
