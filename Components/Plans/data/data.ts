interface PlanInformationProperties {
  id: number;
  header_title: string;
  header_explaination: string;
  header_button_content: string;
  more_button_content: string;
  initial_wrapper_classname: string;
  content_items: string[];
}

export const plansInformation: PlanInformationProperties[] = [
  {
    id: 1,
    header_title: "free trial",
    header_explaination:
      " For small teams that need to manage work and scale collaboration.",
    header_button_content: "read more",
    content_items: [
      "Try a demo of Chronos for 30 days",
      "Limited access to boards",
      "only for test purposes",
    ],
    more_button_content: "START TRIAL",
    initial_wrapper_classname: "deactive-left",
  },
  {
    id: 2,
    header_title: "Standard",
    header_explaination:
      "For individuals or teams looking to organize any project.",
    header_button_content: "READ MORE",
    content_items: [
      "Organization for every project from HR to IT. Access unlimited boards with Trello Standard.",
      "Cross off tasks more effectively across the whole team with Custom Fields and advanced checklists.",
      "Run commands up to 1000 times a month: Move cards, set dates, and much more, without even lifting a finger.",
    ],
    more_button_content: "GET STARTED",
    initial_wrapper_classname: "active-mid",
  },
  {
    id: 3,
    header_title: "Premium",
    header_explaination: "For organizations that need to have all features",
    header_button_content: "READ MORE",
    content_items: [
      "Work out of Chronos's signature boards - or out of a Timeline, Table, Calendar, and more.",
      "Unlock limitless automation to add teammates to tasks, move cards, set dates, and much more, without even lifting a finger. No coding necessary!",
    ],
    more_button_content: "GET EVERYTHING",
    initial_wrapper_classname: "deactive-right",
  },
];
