import { useEffect, useState } from "react";
import axios from "../axios";
import { useUser } from "reactfire";
import { JournalCard } from "./journal/JournalCard";

interface ChangesArrProps extends Array<ChangesProps> {}

interface ChangesProps {
  consistency: string;
  time: string;
  notes: string;
  email: string;
  createdAt: string;
}

interface ChangesEntriesShouldUpdate {
  update: boolean;
}

export const ChangesEntries: React.FC<ChangesEntriesShouldUpdate> = ({
  update,
}) => {
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
      {ChangesEntries?.map(({ consistency, notes, time }, idx) => {
        return (
          <JournalCard
            body={`${notes ? `Notes: ${notes}` : ""}`}
            title={consistency}
            createdAt={time}
            key={idx}
          />
        );
      })}
    </div>
  );
};
