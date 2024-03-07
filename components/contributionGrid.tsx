import { Skeleton } from "./ui/skeleton";

export interface Root {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  name: string;
  contributionsCollection: ContributionsCollection;
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

export interface ContributionCalendar {
  colors: string[];
  totalContributions: number;
  weeks: Week[];
}

export interface Week {
  contributionDays: ContributionDay[];
  firstDay: string;
}

export interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
}

const contributionsCountToColor = (contributions: number) => {
  if (contributions === 0) {
    return "bg-pink-100";
  }
  if (contributions > 0 && contributions < 3) {
    return "bg-pink-300";
  }
  if (contributions > 2 && contributions < 5) {
    return "bg-pink-500";
  }
  if (contributions > 4 && contributions < 7) {
    return "bg-pink-700";
  }
  if (contributions > 6) {
    return "bg-pink-900";
  }
  return "bg-black";
};

async function getContributions() {
  const headers = {
    Authorization: `bearer ${process.env.GH_TOKEN}`,
  };
  const body = {
    query: `query {
            user(login: "or-yam") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data as Root;
}

export const ContributionGridLoader = () => {
  const mockWeeks = Array.from({ length: 53 }, (_, i) => i);
  return (
    <div className="flex h-max w-full items-start justify-center gap-2 overflow-x-auto rounded-md bg-background py-4 shadow-2xl">
      {mockWeeks.map((week) => (
        <div key={week} className="flex h-full flex-col gap-2 bg-transparent">
          {Array.from({ length: 7 }, (_, i) => i).map((day) => {
            return (
              <Skeleton
                key={day}
                className="size-1.5 bg-slate-200 shadow-xl"
              ></Skeleton>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export async function ContributionGrid() {
  const { data } = await getContributions();
  const { weeks } = data.user.contributionsCollection.contributionCalendar;

  return (
    <div className="flex h-max w-full items-start justify-center gap-2 overflow-x-auto rounded-md bg-background py-4 shadow-2xl">
      {weeks.map((week) => (
        <div
          key={week.firstDay}
          className="flex h-full flex-col gap-2 bg-transparent"
        >
          {week.contributionDays.map((day) => (
            <div
              key={day.date}
              className={`${contributionsCountToColor(Number(day.contributionCount))} bg-pink size-1.5 rounded shadow-xl`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
