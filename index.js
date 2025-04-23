import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const data = [
  {
    ID: "7e3a1f60-8c24-492d-ae5b-87df12c39a45",
    createdAt: "/Date(1744269870080+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870080+0000)/",
    modifiedBy: "anonymous",
    Name: "Stanton - Gleason",
    Email: "Darlene.Weber@gmail.com",
    PhoneNumber: "1-527-935-8812 x394",
    Address: "CA, West, 4721 Schneider Gateway",
    Established: "/Date(1615489302000+0000)/",
    FloorArea: 4832,
  },
  {
    ID: "92f4d108-3b7c-41e2-9d5a-61c874e35c02",
    createdAt: "/Date(1744269870085+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870085+0000)/",
    modifiedBy: "anonymous",
    Name: "Bogisich - Becker",
    Email: "Maxwell.Hermann@yahoo.com",
    PhoneNumber: "645-287-4522",
    Address: "NY, East, 672 Hettinger Plaza",
    Established: "/Date(1587326544000+0000)/",
    FloorArea: 7215,
  },
  {
    ID: "5dc76e2f-a78b-4cb1-8c4d-f3e94136af21",
    createdAt: "/Date(1744269870090+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870090+0000)/",
    modifiedBy: "anonymous",
    Name: "Lesch - Kuhlman",
    Email: "Christine.Schaefer@outlook.com",
    PhoneNumber: "(482) 593-7162",
    Address: "TX, South, 9038 Kessler Courts",
    Established: "/Date(1692847365000+0000)/",
    FloorArea: 3650,
  },
  {
    ID: "c8b42e6a-f5c3-49d1-b8a7-90d74f5318ae",
    createdAt: "/Date(1744269870095+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870095+0000)/",
    modifiedBy: "anonymous",
    Name: "Pacocha - Hane",
    Email: "Victor.Huel@hotmail.com",
    PhoneNumber: "1-354-892-6175 x215",
    Address: "FL, North, 372 Ledner Crossroad",
    Established: "/Date(1652738901000+0000)/",
    FloorArea: 5920,
  },
  {
    ID: "f1d96342-0e57-4df9-a742-c87dc3bfe208",
    createdAt: "/Date(1744269870100+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870100+0000)/",
    modifiedBy: "anonymous",
    Name: "Kuvalis - Boyle",
    Email: "Sam.Smitham@gmail.com",
    PhoneNumber: "784.453.9872",
    Address: "IL, Downtown, 5643 Willms Trail",
    Established: "/Date(1631784532000+0000)/",
    FloorArea: 4125,
  },
  {
    ID: "3e4a7d85-9bc2-4f6e-b31c-8d62fba7e542",
    createdAt: "/Date(1744269870105+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870105+0000)/",
    modifiedBy: "anonymous",
    Name: "Kunde - Schiller",
    Email: "Liam.Reichert@yahoo.com",
    PhoneNumber: "(235) 487-1234",
    Address: "WA, Eastside, 732 Rolfson Terrace",
    Established: "/Date(1572968421000+0000)/",
    FloorArea: 8750,
  },
  {
    ID: "a12b8f46-7d9e-48c3-95ab-c43e8f021b79",
    createdAt: "/Date(1744269870110+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870110+0000)/",
    modifiedBy: "anonymous",
    Name: "Ratke - Heller",
    Email: "Jessica.Kirlin@gmail.com",
    PhoneNumber: "1-894-235-7612",
    Address: "GA, Midtown, 3427 Tromp Junction",
    Established: "/Date(1604325478000+0000)/",
    FloorArea: 6340,
  },
  {
    ID: "d7e12f93-4c6a-4b8d-9e5f-2a3b1c5d8e7f",
    createdAt: "/Date(1744269870115+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870115+0000)/",
    modifiedBy: "anonymous",
    Name: "Streich - Crooks",
    Email: "Noah.Bartoletti@outlook.com",
    PhoneNumber: "527-694-3218 x745",
    Address: "CO, Central, 9182 Gulgowski Heights",
    Established: "/Date(1640278345000+0000)/",
    FloorArea: 4980,
  },
  {
    ID: "b5f2e9c1-3a7d-42e8-9b6f-0c4d8e1a7f3b",
    createdAt: "/Date(1744269870120+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870120+0000)/",
    modifiedBy: "anonymous",
    Name: "Emard - Kessler",
    Email: "Emma.Fisher@hotmail.com",
    PhoneNumber: "(374) 583-1294",
    Address: "MA, Waterfront, 546 Gusikowski Mill",
    Established: "/Date(1594782136000+0000)/",
    FloorArea: 5210,
  },
  {
    ID: "9a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
    createdAt: "/Date(1744269870125+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870125+0000)/",
    modifiedBy: "anonymous",
    Name: "Lind - Sauer",
    Email: "Isabella.Hahn@gmail.com",
    PhoneNumber: "1-238-947-5623 x109",
    Address: "AZ, Northwest, 812 Bartell Roads",
    Established: "/Date(1609438256000+0000)/",
    FloorArea: 7150,
  },
  {
    ID: "6d5e4f3a-2b1c-0d9e-8f7g-6h5j4k3l2m1n",
    createdAt: "/Date(1744269870130+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870130+0000)/",
    modifiedBy: "anonymous",
    Name: "Bogan - Haag",
    Email: "Ethan.Witting@yahoo.com",
    PhoneNumber: "(847) 392-6124",
    Address: "OR, Southwest, 2395 Harber Prairie",
    Established: "/Date(1589637451000+0000)/",
    FloorArea: 4375,
  },
  {
    ID: "2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p",
    createdAt: "/Date(1744269870135+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870135+0000)/",
    modifiedBy: "anonymous",
    Name: "Schumm - Schuppe",
    Email: "Sophia.Brakus@outlook.com",
    PhoneNumber: "465.728.9314 x327",
    Address: "MI, Downtown, 743 McClure Springs",
    Established: "/Date(1673492567000+0000)/",
    FloorArea: 6825,
  },
  {
    ID: "7p8o9i0u-1y2t3r4e-5w6q-7a8s9d0f",
    createdAt: "/Date(1744269870140+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870140+0000)/",
    modifiedBy: "anonymous",
    Name: "Batz - Beahan",
    Email: "Charlotte.Quigley@gmail.com",
    PhoneNumber: "1-362-495-1837",
    Address: "NC, Southside, 6374 Fadel Greens",
    Established: "/Date(1644873624000+0000)/",
    FloorArea: 5480,
  },
  {
    ID: "a1s2d3f4-g5h6j7k8-l9z0-x1c2v3b4n5m6",
    createdAt: "/Date(1744269870145+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870145+0000)/",
    modifiedBy: "anonymous",
    Name: "Heidenreich - Hammes",
    Email: "William.Purdy@hotmail.com",
    PhoneNumber: "(236) 584-9072",
    Address: "PA, Eastern, 981 Cartwright Place",
    Established: "/Date(1621538975000+0000)/",
    FloorArea: 7920,
  },
  {
    ID: "q1w2e3r4-t5y6u7i8-o9p0-a1s2d3f4g5h6",
    createdAt: "/Date(1744269870150+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870150+0000)/",
    modifiedBy: "anonymous",
    Name: "Howell - Kris",
    Email: "Olivia.Morar@outlook.com",
    PhoneNumber: "493-812-6547 x842",
    Address: "OH, Northern, 5248 Morissette Cape",
    Established: "/Date(1597863425000+0000)/",
    FloorArea: 4120,
  },
  {
    ID: "z1x2c3v4-b5n6m7l8-k9j0-h1g2f3d4s5a6",
    createdAt: "/Date(1744269870155+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870155+0000)/",
    modifiedBy: "anonymous",
    Name: "Robel - Predovic",
    Email: "Lucas.Bergstrom@yahoo.com",
    PhoneNumber: "1-762-345-8901",
    Address: "MN, Lakeside, 342 Botsford Station",
    Established: "/Date(1663245789000+0000)/",
    FloorArea: 6130,
  },
  {
    ID: "p0o9i8u7-y6t5r4e3-w2q1-z1x2c3v4b5n6",
    createdAt: "/Date(1744269870160+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870160+0000)/",
    modifiedBy: "anonymous",
    Name: "Schoen - Tillman",
    Email: "Ava.Bernier@gmail.com",
    PhoneNumber: "(371) 284-5692",
    Address: "MO, Downtown, 872 Batz Skyway",
    Established: "/Date(1580246735000+0000)/",
    FloorArea: 5860,
  },
  {
    ID: "m7n8b9v0-c1x2z3a4-s5d6f7g8-h9j0k1l2",
    createdAt: "/Date(1744269870165+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870165+0000)/",
    modifiedBy: "anonymous",
    Name: "Reinger - Skiles",
    Email: "Mia.Christiansen@hotmail.com",
    PhoneNumber: "427.938.1574 x623",
    Address: "VA, Central, 1982 Pagac Coves",
    Established: "/Date(1634729456000+0000)/",
    FloorArea: 7410,
  },
  {
    ID: "e3r4t5y6-u7i8o9p0-a1s2-d3f4g5h6j7k8",
    createdAt: "/Date(1744269870170+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870170+0000)/",
    modifiedBy: "anonymous",
    Name: "Koelpin - Lueilwitz",
    Email: "Benjamin.Schaden@outlook.com",
    PhoneNumber: "1-254-673-8901",
    Address: "NJ, Seaside, 634 Kovacek Summit",
    Established: "/Date(1607492385000+0000)/",
    FloorArea: 5240,
  },
  {
    ID: "l9z8x7c6-v5b4n3m2-q1w2-e3r4t5y6u7i8",
    createdAt: "/Date(1744269870175+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870175+0000)/",
    modifiedBy: "anonymous",
    Name: "Schmitt - Wehner",
    Email: "Elijah.Senger@yahoo.com",
    PhoneNumber: "(578) 394-2615",
    Address: "IN, Western, 421 Gottlieb Mountain",
    Established: "/Date(1649573429000+0000)/",
    FloorArea: 6270,
  },
];

// send store info
app.get("/api/stores", (req, res) => {
  try {
    res.json({ stores: data });
  } catch (error) {
    console.log("error sending get request", error);
  }
});

// create new store
app.post("/api/stores", (req, res) => {
  try {
    const newData = req.body;

    res.json(newData);
  } catch (error) {
    console.log("Error adding a new store", error);
  }
});

// delete store
app.delete("/api/stores/:id", (req, res) => {
  try {
    const id = req.params.id;

    const filterData = data.filter((newData) => newData.ID === id);

    res.json(filterData);
  } catch (error) {
    console.log("Error deleting a store", error);
  }
});

// update store
app.put("/api/stores/:id", (req, res) => {
  try {
    const id = req.params.id;
    let updatedStoreData = req.body;

    let findById = data.find((newData) => newData.ID === id);
    Object.assign(findById, updatedStoreData);
    res.json(findById);
  } catch (error) {
    console.log("Error updating store", error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
