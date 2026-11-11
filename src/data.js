export const mockResources = [
  {
    id: 1,
    title: "Surplus Organic Produce",
    category: "Food & Agriculture",
    quantity: "50 kg",
    location: "Downtown Hub, NY",
    donor: "Green Grocery Co.",
    status: "Available",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500",
    description: "Fresh fruits and vegetables ready for rescue. High quality, near surplus margin."
  },
  {
    id: 2,
    title: "Ergonomic Office Chairs",
    category: "Furniture",
    quantity: "12 units",
    location: "Tech District, CA",
    donor: "Apex Corp",
    status: "Available",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=500",
    description: "Lightly used mesh office chairs in great condition. Perfect for non-profits or community centers."
  },
  {
    id: 3,
    title: "Laptops for Education",
    category: "Electronics",
    quantity: "8 units",
    location: "Seattle Center, WA",
    donor: "Innovate LLC",
    status: "Claimed",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "Refurbished Core i5 laptops suitable for student learning and remote work."
  }
];

export const mockRequests = [
  {
    id: 1,
    resourceTitle: "Surplus Organic Produce",
    requestedBy: "Community Food Bank",
    requestDate: "2026-03-28",
    status: "Pending",
    notes: "Urgent need for weekend food relief program."
  },
  {
    id: 2,
    resourceTitle: "Laptops for Education",
    requestedBy: "Youth Tech Club",
    requestDate: "2026-03-25",
    status: "Approved",
    notes: "Allocated for computer literacy workshops."
  }
];

export const mockTransactions = [
  {
    id: "TX-901",
    resource: "Surplus Organic Produce",
    donor: "Green Grocery Co.",
    recipient: "Shelter Hope",
    date: "2026-03-20",
    status: "Completed"
  },
  {
    id: "TX-902",
    resource: "Ergonomic Office Chairs",
    donor: "Apex Corp",
    recipient: "Community Tech Hub",
    date: "2026-03-22",
    status: "In Transit"
  }
];