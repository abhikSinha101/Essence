export const sidebarMediaLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/main",
    label: "Dashboard",
    location: "Main",
  },
  {
    imgURL: "/assets/compaigns.svg",
    route: "/main/create-campaign",
    label: "Campaigns",
    location: "Main/Campaign",
  },
  {
    imgURL: "/assets/message.svg",
    route: "/main/message",
    label: "Messages",
    location: "Main/Message",
  },
  {
    imgURL: "/assets/money.svg",
    route: "/main/leads",
    label: "Leads",
    location: "Leads",
  },
  {
    imgURL: "/assets/folder.svg",
    route: "/main/archive",
    label: "Archive",
    location: "Main/Archive",
  },
  {
    imgURL: "/assets/help.svg",
    route: "/main/support-center",
    label: "Support Center",
    location: "Main/Support",
  },
];
export const sidebarDocLinks = [
  {
    imgURL: "/assets/document.svg",
    route: "/main/technical-docs",
    label: "Technical Docs",
    location: "Main/Doc",
  },
  {
    imgURL: "/assets/camera.svg",
    route: "/main/contacts",
    label: "Contacts",
    location: "Main/Contacts",
    leftIcon: "/assets/arrow-down.svg",
  },
];
export const ContentSideBarLinks = [
  {
    imgURL: "/assets/folder.svg",
    route: "/main/channels",
    label: "Channels",
  },
  {
    imgURL: "/assets/photo.svg",
    route: "/main/files",
    label: "Files & Media",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
