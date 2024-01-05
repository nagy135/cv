"use client";

import Title from "./title";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/app/_components/ui/tabs";
import Profile from "./steps/profile";
import Education from "./steps/education";
import Experience from "./steps/experience";
import Summary from "./steps/summary";
import { Step } from "~/enums";
import { type RecordGetById } from "~/types";

type AddEditRecord = {
  record?: RecordGetById;
};

const steps: Record<Step, string> = {
  profile: "Profile",
  education: "Education",
  experience: "Experience",
  summary: "Summary",
};

export default function AddEditRecord({ record }: AddEditRecord) {
  return (
    <div className="container min-w-[450px] md:w-1/2">
      <Title title={record ? "Edit" : "Create"} />
      <Tabs defaultValue="profile" className="flex flex-col justify-center">
        <TabsList>
          {Object.entries(steps).map(([key, value]) => (
            <TabsTrigger key={`tabs-trigger-${key}`} value={key}>
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={Step.profile}>
          <Profile profile={record?.profile ?? undefined} />
        </TabsContent>
        <TabsContent value={Step.education}>
          <Education educations={record?.educations ?? []} />
        </TabsContent>
        <TabsContent value={Step.experience}>
          <Experience experiences={record?.experiences ?? []} />
        </TabsContent>
        <TabsContent value={Step.summary}>
          <Summary record={record} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
