import { useEffect, useState } from "react";
import axios from "../axios";
import { useUser } from "reactfire";
import { JournalCard } from "./journal/JournalCard";

export interface ChangesArrProps extends Array<ChangesProps> {}

export interface ChangesProps {
  typesOfChanges: string[];
  hour: number;
  minutes: number;
  notes?: string;
  email: string;
  createdAt: string;
}

interface ChangesEntriesShouldUpdate {
  update: boolean;
}

export function convertTime(hour: number, minutes: number) {
  return `${hour < 10 ? "0" + hour.toString() : hour}:${
    minutes < 10 ? "0" + minutes.toString() : minutes
  }`;
}

export const ChangesEntries: React.FC<ChangesEntriesShouldUpdate> = ({ update }) => {
  const { data: user } = useUser();
  const [ChangesEntries, setChangesEntries] = useState<ChangesArrProps>();

  useEffect(() => {
    async function getUserData() {
      try {
        const userParams = {
          where: `{"email": "${user?.email}"}`,
          sort: `{"createdAt" : "-1"}`,
          limit: 10,
        };
        const ChangesRes = await axios.get("/changes", { params: userParams });
        setChangesEntries(ChangesRes.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    user && getUserData();
  }, [user, update]);

  return (
    <div className="overflow-scroll pt-12" style={{ height: "88vh" }}>
      {ChangesEntries?.map(
        ({ typesOfChanges, createdAt, hour, minutes, notes }, idx) => {
          return (
            <JournalCard
              body={`${convertTime(hour, minutes)} ${
                notes ? `Notes: ${notes}` : ""
              }`}
              title={typesOfChanges.join(", ")}
              createdAt={createdAt}
              key={idx}
            />
          );
        }
      )}
    </div>
  );
};
