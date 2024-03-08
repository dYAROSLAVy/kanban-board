const CARDS = [
  [
    { cardTitle: "Facebook post" },
    { cardTitle: "Call James" },
    { cardTitle: "Go to shop" },
    { cardTitle: "Insta post" },
  ],
  [
    { cardTitle: "Facebook post" },
    { cardTitle: "Call James" },
    { cardTitle: "Go to shop" },
  ],
  [{ cardTitle: "Facebook post" }, { cardTitle: "Call James" }],
  [{ cardTitle: "Facebook post" }],
];

const COLUMNS = [
  { title: "To do", cards: CARDS[0] },
  { title: "In Progress", cards: CARDS[1] },
  { title: "Testing", cards: CARDS[2] }, 
  { title: "Done", cards: CARDS[3] },
];

export default COLUMNS;
