type Tdata = {
  id: string;
  title: string;
  content: string;
  className: string;
};

export const data: Tdata[] = [
  {
    id: "1",
    title: "Manage your tasks in one shared place",
    content:
      "Say goodbye to sticky notes and to-do lists: Trello allows teams of any size to easily manage tasks and hit deadlines - all without ever leaving the app. Trello makes it easy to organize and track individual or team tasks in one place.",
    className: "features-selected",
  },
  {
    id: "2",
    title: "Project management without the mayhem",
    content:
      "From initiation to completion, Trello makes it easy to monitor every aspect of your next project. Designed for teams of any size, anywhere. Manage all of your projects in one powerful tool that makes project management magical.",
    className: "features-not-selected",
  },
  {
    id: "3",
    title: "Meetings should save time, not waste it- Chronos can help",
    content:
      "Meetings should be productive, but done right, they can also boost team morale. Trello creates shared focus and transparency so you can focus on planning for action, getting work done, and celebrating successes.",
    className: "features-not-selected",
  },
  {
    id: "4",
    title: "Joining something new is exciting—we keep it that way!",
    content:
      "Simplify the ramp-up process with a vibrant, visual layout that keeps everything organized and everyone engaged. Trello’s 200+ tool integrations and easy-to-customize boards make every welcome experience feel tailored, without added effort.",
    className: "features-not-selected",
  },
  {
    id: "5",
    title: "Keep information organized and accessible with Chronos",
    content:
      "Knowledge is power - but only if it's accurate, accessible, and used correctly. Give teams a reliable hub from which to contribute, manage, and find relevant information quickly with Chronos. Then, watch their productivity skyrocket!",
    className: "features-not-selected",
  },
  {
    id: "6",
    title:
      "Uncover actionable ideas by brainstorming with Chronos, no matter where you're located",
    content:
      "A productive brainstorm helps your team identify innovative ideas and make decisions. Using Trello as a virtual whiteboard gets the creativity flowing. Whether you’re working in the same place or remotely, you can turn disruptive ideas into actionable projects.",
    className: "features-not-selected",
  },
];

type TdataKey = keyof Tdata;

export const getData = (keys: TdataKey[]) => {
  const res = [];
  for (const item of data) {
    const temp: any = {};
    for (const key of keys) temp[key] = item[key];
    res.push(temp);
  }
  return res;
};
