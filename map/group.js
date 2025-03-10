const orders = [
  { id: 101, total: 250, status: "completed", customer: "ABC" },
  { id: 102, total: 250, status: "completed", customer: "ABC" },
  { id: 103, total: 250, status: "pending", customer: "ABC" },
  { id: 104, total: 250, status: "cancelled", customer: "ABC" },
  { id: 105, total: 250, status: "pending", customer: "ABC" },
  { id: 106, total: 250, status: "completed", customer: "ABC" },
];

// group orders based on status

console.log(Object.fromEntries(Map.groupBy(orders, (x) => x?.status)));
