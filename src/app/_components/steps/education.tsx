import { type Education } from "@prisma/client";

export default function Education({ educations }: { educations: Education[] }) {
  return educations.map((e) => <div key={e.id}>{e.name}</div>);
}
