import { type RecordGetById } from "~/types";

export default function Summary({ record }: { record?: RecordGetById }) {
  return (
    <div>
      {record?.profile?.firstName} {record?.userId}
    </div>
  );
}
