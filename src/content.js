const content = [
  {
    id: 1,
    title: "Grow Together",
    body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    image: "/img/illustration-grow-together.svg",
  },
  {
    id: 2,
    title: "Flowing Conversations",
    body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    image: "/img/illustration-flowing-conversation.svg",
  },
  {
    id: 3,
    title: "Your Users",
    body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image: "/img/illustration-your-users.svg",
  },
];

const footerContact = [
  {
    contentStyle: {
      grid: "grid-column-start: 1; grid-column-end: 3; grid-row-start: 1;grid-row-end: 2;",
    },
    icon: {
      title: "/img/icon-location.svg",
      style: {
        grid: "grid-column-start: 1;grid-column-end: 2; grid-row-start: 1;grid-row-end: 1;",
        height: "height:99px;",
        width: "width:65px;",
      },
    },

    text: {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      style: {
        grid: "grid-column-start: 2; grid-column-end: 3;grid-row-start: 1; grid-row-end: 1;",
        position: "align-content: end;",
      },
    },
  },

  {
    contentStyle: {
      grid: "grid-column-start: 1;grid-column-end: 3;grid-row-start: 2; grid-row-end: 3;",
    },
    icon: {
      title: "/img/icon-phone.svg",
      style: {
        grid: "grid-column-start: 1; grid-column-end: 2;grid-row-start: 2; grid-row-end: 1;",
        height: "height:70px;",
        width: "width:71px;",
      },
    },
    text: {
      title: "+1-543-123-4567",
      style: {
        grid: "grid-column-start: 2;grid-column-end: 3;grid-row-start: 1; grid-row-end: 1;",
        position: "align-content: center;",
        height: "height: 75px;",
      },
    },
  },
  {
    contentStyle: {
      grid: "grid-column-start: 1;grid-column-end: 3;grid-row-start: 3;grid-row-end: 4;",
    },
    icon: {
      title: "/img/icon-email.svg",
      style: {
        grid: "grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 1;",
        height: "height:50px;",
        width: "width:71px;",
        position: "align-content: baseline;",
      },
    },
    text: {
      title: "example@buddle.com",
      style: {
        grid: "grid-column-start: 2;grid-column-end: 3;grid-row-start: 1;grid-row-end: 1;",
        height: "height: 50px;",
      },
    },
  },
];
const footerMenu = [
  {
    contentStyle: {
      grid: "grid-column-start: 2;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;",
      position: "justify-items: end;",
    },
    ul: {
      width: "width:200px;",
    },
    li: {
      one: "About Us",
      two: "What We Do",
      three: "FAQ",
    },
  },
  {
    contentStyle: {
      grid: "grid-column-start: 3;grid-column-end: 4;grid-row-start: 2;grid-row-end: 3;",
      position: "justify-items: center",
    },
    ul: {
      width: "width:213px;",
    },
    li: {
      one: "Career",
      two: "Blog",
      three: "Contact Us",
    },
  },
];

export default { content, footerContact, footerMenu };
