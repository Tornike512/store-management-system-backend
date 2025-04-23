import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/storeRoute.js";
import productsRouter from "./routes/productsRouter.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(router);
app.use(productsRouter);

export let productsData = [
  {
    ID: "a1b2c3d4-e5f6-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870105+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870105+0000)/",
    modifiedBy: "anonymous",
    Name: "Premium Office Chair",
    Price_amount: "459",
    Price_currency: "USD",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    Specs:
      "Ergonomic design with lumbar support, adjustable height, 360-degree swivel, premium leather upholstery, weight capacity 300lbs.",
    Rating: 4,
    SupplierInfo:
      "Manufactured with precision engineering and premium materials. 5-year warranty included with extended options available.",
    MadeIn: "United States",
    ProductionCompanyName: "Ergonomics Plus",
    Status: "AVAILABLE",
    Store_ID: "7e3a1f60-8c24-492d-ae5b-87df12c39a45",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a1b2c3d4-e5f6-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a1b2c3d4-e5f6-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'a1b2c3d4-e5f6-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "b2c3d4e5-f6a1-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870106+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870106+0000)/",
    modifiedBy: "anonymous",
    Name: "Executive Desk Set",
    Price_amount: "1299",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    Specs:
      'Solid oak construction, L-shaped design, built-in cable management, matching file cabinet, dimensions 72" x 84".',
    Rating: 5,
    SupplierInfo:
      "Handcrafted from sustainable materials. Each piece unique with natural wood grain variations.",
    MadeIn: "Canada",
    ProductionCompanyName: "Heritage Woodworks",
    Status: "AVAILABLE",
    Store_ID: "7e3a1f60-8c24-492d-ae5b-87df12c39a45",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b2c3d4e5-f6a1-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b2c3d4e5-f6a1-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'b2c3d4e5-f6a1-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "c3d4e5f6-a1b2-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870107+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870107+0000)/",
    modifiedBy: "anonymous",
    Name: "Wireless Charging Pad",
    Price_amount: "79",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
    Specs:
      "15W fast charging, Qi-compatible, multiple device support, temperature control, sleek aluminum finish.",
    Rating: 4,
    SupplierInfo:
      "Designed with premium components for reliable charging performance and device protection.",
    MadeIn: "South Korea",
    ProductionCompanyName: "TechCharge",
    Status: "LOW_STOCK",
    Store_ID: "7e3a1f60-8c24-492d-ae5b-87df12c39a45",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c3d4e5f6-a1b2-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c3d4e5f6-a1b2-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'c3d4e5f6-a1b2-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "d4e5f6a1-b2c3-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870108+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870108+0000)/",
    modifiedBy: "anonymous",
    Name: "Smart Desk Lamp",
    Price_amount: "135",
    Price_currency: "USD",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/128.jpg",
    Specs:
      "Adjustable color temperature, brightness control, voice assistant integration, USB charging port, touch controls.",
    Rating: 4,
    SupplierInfo:
      "Energy efficient design with latest LED technology for reduced power consumption and extended lifespan.",
    MadeIn: "Japan",
    ProductionCompanyName: "LightTech Solutions",
    Status: "AVAILABLE",
    Store_ID: "7e3a1f60-8c24-492d-ae5b-87df12c39a45",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd4e5f6a1-b2c3-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd4e5f6a1-b2c3-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'd4e5f6a1-b2c3-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "e5f6a1b2-c3d4-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870109+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870109+0000)/",
    modifiedBy: "anonymous",
    Name: "Leather Portfolio Case",
    Price_amount: "89",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg",
    Specs:
      "Genuine leather, padded tablet sleeve, document organizer, business card slots, zippered closure.",
    Rating: 5,
    SupplierInfo:
      "Handcrafted from premium full-grain leather with meticulous attention to detail and quality stitching.",
    MadeIn: "Italy",
    ProductionCompanyName: "Milano Leather Goods",
    Status: "AVAILABLE",
    Store_ID: "7e3a1f60-8c24-492d-ae5b-87df12c39a45",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e5f6a1b2-c3d4-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e5f6a1b2-c3d4-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'e5f6a1b2-c3d4-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "f6a1b2c3-d4e5-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870110+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870110+0000)/",
    modifiedBy: "anonymous",
    Name: "Modern Bookshelf",
    Price_amount: "349",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg",
    Specs:
      "Contemporary design, 5 adjustable shelves, metal frame with walnut finish, free-standing or wall-mountable, weight capacity 250lbs.",
    Rating: 4,
    SupplierInfo:
      "Designed for both functionality and aesthetic appeal. Assembly service available for additional fee.",
    MadeIn: "Germany",
    ProductionCompanyName: "ModernHaus",
    Status: "AVAILABLE",
    Store_ID: "92f4d108-3b7c-41e2-9d5a-61c874e35c02",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f6a1b2c3-d4e5-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f6a1b2c3-d4e5-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'f6a1b2c3-d4e5-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "a2b3c4d5-e6f7-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870111+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870111+0000)/",
    modifiedBy: "anonymous",
    Name: "Minimalist Wall Clock",
    Price_amount: "129",
    Price_currency: "EUR",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg",
    Specs:
      "Scandinavian design, brushed aluminum face, silent quartz movement, 14-inch diameter, battery-powered.",
    Rating: 5,
    SupplierInfo:
      "Crafted with precision engineering for accurate timekeeping and elegant display.",
    MadeIn: "Sweden",
    ProductionCompanyName: "TimeWorks",
    Status: "LOW_STOCK",
    Store_ID: "92f4d108-3b7c-41e2-9d5a-61c874e35c02",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a2b3c4d5-e6f7-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a2b3c4d5-e6f7-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'a2b3c4d5-e6f7-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "b3c4d5e6-f7a2-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870112+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870112+0000)/",
    modifiedBy: "anonymous",
    Name: "Glass Desk Organizer",
    Price_amount: "85",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg",
    Specs:
      "Tempered glass construction, multiple compartments, pen holder, letter tray, business card slots.",
    Rating: 4,
    SupplierInfo:
      "Elegant solution for workspace organization with durable construction and easy cleaning.",
    MadeIn: "France",
    ProductionCompanyName: "Clear Solutions",
    Status: "AVAILABLE",
    Store_ID: "92f4d108-3b7c-41e2-9d5a-61c874e35c02",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b3c4d5e6-f7a2-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b3c4d5e6-f7a2-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'b3c4d5e6-f7a2-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "c4d5e6f7-a2b3-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870113+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870113+0000)/",
    modifiedBy: "anonymous",
    Name: "Wireless Keyboard and Mouse Set",
    Price_amount: "199",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    Specs:
      "Ergonomic design, backlit keys, rechargeable battery, Bluetooth 5.0, compatible with multiple operating systems.",
    Rating: 4,
    SupplierInfo:
      "Engineered for comfort during extended use with responsive keys and precise tracking.",
    MadeIn: "Netherlands",
    ProductionCompanyName: "ErgoTech",
    Status: "AVAILABLE",
    Store_ID: "92f4d108-3b7c-41e2-9d5a-61c874e35c02",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c4d5e6f7-a2b3-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c4d5e6f7-a2b3-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'c4d5e6f7-a2b3-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "d5e6f7a2-b3c4-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870114+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870114+0000)/",
    modifiedBy: "anonymous",
    Name: "Adjustable Monitor Stand",
    Price_amount: "69",
    Price_currency: "EUR",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
    Specs:
      "Height adjustable, 360-degree rotation, cable management, sturdy aluminum construction, fits monitors up to 32 inches.",
    Rating: 5,
    SupplierInfo:
      "Designed to reduce neck strain and improve posture with flexible positioning options.",
    MadeIn: "Denmark",
    ProductionCompanyName: "ErgoCraft",
    Status: "OUT_OF_STOCK",
    Store_ID: "92f4d108-3b7c-41e2-9d5a-61c874e35c02",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd5e6f7a2-b3c4-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd5e6f7a2-b3c4-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'd5e6f7a2-b3c4-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "e6f7a2b3-c4d5-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870115+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870115+0000)/",
    modifiedBy: "anonymous",
    Name: "High-Performance Desktop Computer",
    Price_amount: "1895",
    Price_currency: "USD",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jonathansimmons/128.jpg",
    Specs:
      "Intel i9 processor, 32GB RAM, 2TB SSD, RTX 3080 graphics card, liquid cooling, customizable RGB lighting.",
    Rating: 5,
    SupplierInfo:
      "Built with premium components for demanding applications and gaming performance.",
    MadeIn: "United States",
    ProductionCompanyName: "TechForge Systems",
    Status: "AVAILABLE",
    Store_ID: "5dc76e2f-a78b-4cb1-8c4d-f3e94136af21",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e6f7a2b3-c4d5-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e6f7a2b3-c4d5-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'e6f7a2b3-c4d5-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "f7a2b3c4-d5e6-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870116+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870116+0000)/",
    modifiedBy: "anonymous",
    Name: "Ultra-Wide Curved Monitor",
    Price_amount: "849",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
    Specs:
      "34-inch ultrawide display, 3440x1440 resolution, 144Hz refresh rate, 1ms response time, HDR support, AMD FreeSync.",
    Rating: 5,
    SupplierInfo:
      "Engineered for immersive viewing experience with vibrant colors and seamless motion.",
    MadeIn: "South Korea",
    ProductionCompanyName: "VisualTech",
    Status: "LOW_STOCK",
    Store_ID: "5dc76e2f-a78b-4cb1-8c4d-f3e94136af21",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f7a2b3c4-d5e6-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f7a2b3c4-d5e6-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'f7a2b3c4-d5e6-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "a3b4c5d6-e7f8-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870117+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870117+0000)/",
    modifiedBy: "anonymous",
    Name: "Professional Gaming Headset",
    Price_amount: "179",
    Price_currency: "USD",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/thecodestein/128.jpg",
    Specs:
      "7.1 surround sound, noise-cancelling microphone, memory foam ear cushions, RGB lighting, compatible with PC and consoles.",
    Rating: 4,
    SupplierInfo:
      "Designed for competitive gaming with emphasis on audio clarity and comfort during extended sessions.",
    MadeIn: "Taiwan",
    ProductionCompanyName: "AudioPro Gaming",
    Status: "AVAILABLE",
    Store_ID: "5dc76e2f-a78b-4cb1-8c4d-f3e94136af21",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a3b4c5d6-e7f8-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a3b4c5d6-e7f8-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'a3b4c5d6-e7f8-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "b4c5d6e7-f8a3-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870118+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870118+0000)/",
    modifiedBy: "anonymous",
    Name: "Mechanical Gaming Keyboard",
    Price_amount: "149",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/coderonin/128.jpg",
    Specs:
      "Cherry MX switches, full N-key rollover, customizable RGB per-key lighting, macro keys, detachable wrist rest.",
    Rating: 5,
    SupplierInfo:
      "Precision engineered for competitive gaming with durable construction and responsive keystrokes.",
    MadeIn: "Germany",
    ProductionCompanyName: "MechTech Gaming",
    Status: "AVAILABLE",
    Store_ID: "5dc76e2f-a78b-4cb1-8c4d-f3e94136af21",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b4c5d6e7-f8a3-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b4c5d6e7-f8a3-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'b4c5d6e7-f8a3-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "c5d6e7f8-a3b4-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870119+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870119+0000)/",
    modifiedBy: "anonymous",
    Name: "Gaming Mouse with Programmable Buttons",
    Price_amount: "89",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    Specs:
      "20,000 DPI optical sensor, 8 programmable buttons, adjustable weights, RGB lighting, ergonomic design for right-handed users.",
    Rating: 4,
    SupplierInfo:
      "Designed for precision control with customizable features for various gaming styles.",
    MadeIn: "Taiwan",
    ProductionCompanyName: "PrecisionPoint",
    Status: "AVAILABLE",
    Store_ID: "5dc76e2f-a78b-4cb1-8c4d-f3e94136af21",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c5d6e7f8-a3b4-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c5d6e7f8-a3b4-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'c5d6e7f8-a3b4-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "d6e7f8a3-b4c5-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870120+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870120+0000)/",
    modifiedBy: "anonymous",
    Name: "Luxury Bath Towel Set",
    Price_amount: "129",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/mtnmissy/128.jpg",
    Specs:
      "Egyptian cotton, 900 GSM, set of 6 pieces (2 bath towels, 2 hand towels, 2 washcloths), multiple colors available.",
    Rating: 5,
    SupplierInfo:
      "Crafted from premium long-staple cotton for exceptional absorbency and softness.",
    MadeIn: "Portugal",
    ProductionCompanyName: "Luxe Home Collection",
    Status: "AVAILABLE",
    Store_ID: "c8b42e6a-f5c3-49d1-b8a7-90d74f5318ae",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd6e7f8a3-b4c5-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd6e7f8a3-b4c5-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'd6e7f8a3-b4c5-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "e7f8a3b4-c5d6-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870121+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870121+0000)/",
    modifiedBy: "anonymous",
    Name: "Scented Candle Collection",
    Price_amount: "75",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/rssems/128.jpg",
    Specs:
      "Soy wax blend, 3-piece set, 50-hour burn time each, glass containers, natural essential oil fragrances.",
    Rating: 4,
    SupplierInfo:
      "Hand-poured in small batches with carefully curated fragrance profiles.",
    MadeIn: "France",
    ProductionCompanyName: "Aroma Artisan",
    Status: "AVAILABLE",
    Store_ID: "c8b42e6a-f5c3-49d1-b8a7-90d74f5318ae",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e7f8a3b4-c5d6-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e7f8a3b4-c5d6-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'e7f8a3b4-c5d6-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "f8a3b4c5-d6e7-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870122+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870122+0000)/",
    modifiedBy: "anonymous",
    Name: "Smart Thermostat",
    Price_amount: "199",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg",
    Specs:
      "Wi-Fi enabled, smartphone app control, voice assistant compatible, learning algorithm, energy usage reports.",
    Rating: 5,
    SupplierInfo:
      "Designed to optimize home comfort while reducing energy consumption with intelligent scheduling.",
    MadeIn: "Finland",
    ProductionCompanyName: "EcoSmart",
    Status: "LOW_STOCK",
    Store_ID: "c8b42e6a-f5c3-49d1-b8a7-90d74f5318ae",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f8a3b4c5-d6e7-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f8a3b4c5-d6e7-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'f8a3b4c5-d6e7-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "a4b5c6d7-e8f9-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870123+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870123+0000)/",
    modifiedBy: "anonymous",
    Name: "Decorative Throw Pillow Set",
    Price_amount: "89",
    Price_currency: "EUR",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marktimemedia/128.jpg",
    Specs:
      "Set of 4, 18x18 inches, removable covers, hidden zipper, geometric patterns, machine washable.",
    Rating: 4,
    SupplierInfo:
      "Crafted with premium fabrics for durability and comfort with designer patterns.",
    MadeIn: "Spain",
    ProductionCompanyName: "Casa Textiles",
    Status: "AVAILABLE",
    Store_ID: "c8b42e6a-f5c3-49d1-b8a7-90d74f5318ae",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a4b5c6d7-e8f9-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a4b5c6d7-e8f9-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'a4b5c6d7-e8f9-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "b5c6d7e8-f9a4-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870124+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870124+0000)/",
    modifiedBy: "anonymous",
    Name: "Artisan Ceramic Dinnerware Set",
    Price_amount: "249",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    Specs:
      "16-piece set (4 dinner plates, 4 salad plates, 4 bowls, 4 mugs), stoneware, reactive glaze finish, dishwasher safe.",
    Rating: 5,
    SupplierInfo:
      "Handcrafted by skilled artisans with unique variations in each piece making every set one-of-a-kind.",
    MadeIn: "Italy",
    ProductionCompanyName: "Arterra Ceramics",
    Status: "AVAILABLE",
    Store_ID: "c8b42e6a-f5c3-49d1-b8a7-90d74f5318ae",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b5c6d7e8-f9a4-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b5c6d7e8-f9a4-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'b5c6d7e8-f9a4-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "c6d7e8f9-a4b5-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870125+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870125+0000)/",
    modifiedBy: "anonymous",
    Name: "Premium Noise-Cancelling Headphones",
    Price_amount: "329",
    Price_currency: "USD",
    Photo:
      "https://s3.amazonaws.com/uifaces/faces/twitter/sircalebgrove/128.jpg",
    Specs:
      "Active noise cancellation, 30-hour battery life, Bluetooth 5.0, memory foam ear cups, foldable design with carrying case.",
    Rating: 5,
    SupplierInfo:
      "Engineered with cutting-edge acoustic technology for immersive audio experience.",
    MadeIn: "Japan",
    ProductionCompanyName: "AudioElite",
    Status: "AVAILABLE",
    Store_ID: "f1d96342-0e57-4df9-a742-c87dc3bfe208",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c6d7e8f9-a4b5-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'c6d7e8f9-a4b5-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'c6d7e8f9-a4b5-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "d7e8f9a4-b5c6-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870126+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870126+0000)/",
    modifiedBy: "anonymous",
    Name: "Smart Fitness Watch",
    Price_amount: "249",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/malgordon/128.jpg",
    Specs:
      "Heart rate monitor, GPS tracking, sleep analysis, waterproof to 50m, color touchscreen, 7-day battery life.",
    Rating: 4,
    SupplierInfo:
      "Designed with advanced sensors for accurate fitness metrics and durable construction for active lifestyles.",
    MadeIn: "Switzerland",
    ProductionCompanyName: "PrecisionFit",
    Status: "LOW_STOCK",
    Store_ID: "f1d96342-0e57-4df9-a742-c87dc3bfe208",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd7e8f9a4-b5c6-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'd7e8f9a4-b5c6-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'd7e8f9a4-b5c6-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "e8f9a4b5-c6d7-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870127+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870127+0000)/",
    modifiedBy: "anonymous",
    Name: "Portable Bluetooth Speaker",
    Price_amount: "129",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/dingyi/128.jpg",
    Specs:
      "360-degree sound, waterproof IPX7, 20-hour battery life, built-in microphone for calls, pair multiple speakers.",
    Rating: 4,
    SupplierInfo:
      "Engineered for outdoor use with rugged construction and exceptional sound quality.",
    MadeIn: "South Korea",
    ProductionCompanyName: "SoundStream",
    Status: "AVAILABLE",
    Store_ID: "f1d96342-0e57-4df9-a742-c87dc3bfe208",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e8f9a4b5-c6d7-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'e8f9a4b5-c6d7-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'e8f9a4b5-c6d7-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "f9a4b5c6-d7e8-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870128+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870128+0000)/",
    modifiedBy: "anonymous",
    Name: "Wireless Earbuds",
    Price_amount: "159",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/nikkisharp/128.jpg",
    Specs:
      "Active noise cancellation, 8-hour battery (28 hours with case), sweat resistant, touch controls, voice assistant support.",
    Rating: 5,
    SupplierInfo:
      "Designed for comfort during extended use with secure fit for active users.",
    MadeIn: "Singapore",
    ProductionCompanyName: "AudioPulse",
    Status: "AVAILABLE",
    Store_ID: "f1d96342-0e57-4df9-a742-c87dc3bfe208",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f9a4b5c6-d7e8-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'f9a4b5c6-d7e8-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'f9a4b5c6-d7e8-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "a5b6c7d8-e9f0-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870129+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870129+0000)/",
    modifiedBy: "anonymous",
    Name: "Smart Digital Camera",
    Price_amount: "799",
    Price_currency: "USD",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/chexee/128.jpg",
    Specs:
      "24.2MP sensor, 4K video recording, Wi-Fi connectivity, 3-inch LCD touchscreen, image stabilization, interchangeable lenses.",
    Rating: 4,
    SupplierInfo:
      "Designed for both professional and amateur photographers with intuitive controls and exceptional image quality.",
    MadeIn: "Japan",
    ProductionCompanyName: "OptiView",
    Status: "OUT_OF_STOCK",
    Store_ID: "f1d96342-0e57-4df9-a742-c87dc3bfe208",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a5b6c7d8-e9f0-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'a5b6c7d8-e9f0-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'a5b6c7d8-e9f0-4580-9362-5f669c6dacba')",
    },
  },
  {
    ID: "b6c7d8e9-f0a5-4580-9362-5f669c6dacba",
    createdAt: "/Date(1744269870130+0000)/",
    createdBy: "anonymous",
    modifiedAt: "/Date(1744269870130+0000)/",
    modifiedBy: "anonymous",
    Name: "Premium Standing Desk",
    Price_amount: "849",
    Price_currency: "EUR",
    Photo: "https://s3.amazonaws.com/uifaces/faces/twitter/leemunroe/128.jpg",
    Specs:
      "Electric height adjustment, memory settings, bamboo desktop, steel frame, cable management tray, supports up to 300lbs.",
    Rating: 5,
    SupplierInfo:
      "Engineered for stability and quiet operation with sustainable materials and modern design.",
    MadeIn: "Sweden",
    ProductionCompanyName: "ErgoWorks",
    Status: "AVAILABLE",
    Store_ID: "3e4a7d85-9bc2-4f6e-b31c-8d62fba7e542",
    Comment: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b6c7d8e9-f0a5-4580-9362-5f669c6dacba')/Comment",
      },
    },
    Store: {
      __deferred: {
        uri: "http://localhost:4004/v2/root/Products(guid'b6c7d8e9-f0a5-4580-9362-5f669c6dacba')/Store",
      },
    },
    __metadata: {
      type: "StoreService.Products",
      uri: "http://localhost:4004/v2/root/Products(guid'b6c7d8e9-f0a5-4580-9362-5f669c6dacba')",
    },
  },
];

export let data = [
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
