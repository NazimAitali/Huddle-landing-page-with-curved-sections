export const setFunction = (set, key, value) => {
  set((prevState) => ({
    ...prevState,
    [`${key}`]: value,
  }));
};

export const gridFunction = (query) => {
  const Grid = {
    0: "grid-row-start: 1 ; grid-row-end: 1;",
    1: "grid-row-start: 2 ; grid-row-end: 3;",
    2: "grid-row-start: 3 ; grid-row-end: 4;",
  };
  return Grid[query];
};
export const marginFunction = (query) => {
  const Grid = {
    0: "60px;",
    1: "36px;",
    2: "30px;",
  };
  return Grid[query];
};
export const GlobalSwitch = (change, current, position, parms, first) => {
  const changer = {
    change: () => (current >= position ? parms : first),
    changeRev: () => (current <= position ? parms : first),
    TestId: () => (current % position ? parms : first),
  };
  return changer[(current, position, parms, first, change)];
};
