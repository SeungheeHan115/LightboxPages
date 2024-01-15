class LightBox_ {
  //Lightbox Class
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
class Light_ {
  //Light Class
  constructor(name, price, description, length, watts, short, lumen) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.length = length;
    this.watts = watts;
    this.short = short;
    this.lumen = lumen;
  }
}
class PowerSupply_ {
  //Powersupply Class
  constructor(name, price, description, watts) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.watts = watts;
  }
}

class Tables {
  constructor() {
    this.array = [];
    this.deletes = [];
  }
}

class Item {
  constructor(totalCost) {
    this.array = [];
    this.totalCost = totalCost;
  }
}

class Contents {
  constructor(name, description, price, quantity, total) {
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
  }
}

class DeleteData {
  constructor(button, start, size) {
    this.button = button;
    this.start = start;
    this.size = size;
  }
}

class LightBoxes {
  constructor() {
    this.array = [];
    this.array.push(new LightBox_("LF-0050-SWSV-3000", 18, "Lightbox fixture, 50mm, Single side, Wall mount, Silver"));
    this.array.push(new LightBox_("LF-0065-SWSV-3000", 21.5, "Lightbox fixture, 65mm, Single side, Wall mount, Silver"));
    this.array.push(new LightBox_("LF-0090-SWSV-3000", 25.8, "Lightbox fixture, 90mm, Single side, Wall mount, Silver"));
    this.array.push(new LightBox_("LF-0100-SWSV-3000", 25.8, "Lightbox fixture, 100mm, Single side, Wall mount, Silver"));
    this.array.push(new LightBox_("LF-0120-SWSV-3000", 27.5, "Lightbox fixture, 120mm, Single side, Wall mount, Silver"));
    this.array.push(new LightBox_("LF-0120-DSSV-3000", 28, "Lightbox fixture, 120mm, Double side, Standing use, Silver"));
    this.array.push(new LightBox_("LF-0156-DSSV-3000", 29.5, "Lightbox fixture, 156mm, Double side, Standing use, Silver"));
  }
}
class Lights {
  constructor() {
    this.array = [];
    this.array.push(new Light_("PER-3-W60G2", 27, "InSem Perimeter 3 DIODE LED (6000K)", 8.60, 8.16, "PER-3", 610));
    this.array.push(new Light_("PER-5-W60G2", 30, "InSem Perimeter 5 DIODE LED (6000K)", 14.38, 13.5, "PER-5", 1020));
    this.array.push(new Light_("PER-6-W60G2", 35, "InSem Perimeter 6 DIODE LED (6000K)", 17.25, 15.6, "PER-6", 1200));
    this.priorityIndex = 1;
    this.priorityMin = 2;
  }
}
class PowerSupplies {
  constructor() {
    this.array = [];
    this.array.push(new PowerSupply_("SMPS-120A-24", 85, "24V DC 120W SWICHING MODE POWER SUPPLY", 96));
    this.array.push(new PowerSupply_("SMPS-96Q-24", 68, "24V DC 96W SWICHING MODE POWER SUPPLY", 76));
  }
}
var CustomerList = [
  "3-D Signs",
  "3 B Sign and Neon",
  "3D EXHIBITS",
  "3D Signs",
  "5 Star Wholesale Electric Supply & Lighti",
  "502 Concepts",
  "60 Grit",
  "760 Display",
  "A & R Electric",
  "A. GEO.DIACK",
  "A.G.Machinig",
  "AAAP Promotional Products Inc.",
  "Absolute Exhibits",
  "Absolute Sign",
  "Access Signs",
  "ACE SIGN DESIGN",
  "ACME Made In America",
  "AD Signs",
  "ADIMPACT",
  "ADM works",
  "Alamo Retail Solutions",
  "Alcoa Signage",
  "Alex Castaneda",
  "Alison Strauss",
  "All Around Lighting, Inc.",
  "All Kinds of Signs Inc.",
  "All Star Wholesale Electric & Lighting",
  "ALLAN STORE FIXTURES",
  "Alliance",
  "Allied Lighting",
  "ALPHA & OMEGA DISPLAYS",
  "ALPHA Store Fixtures, INC",
  "Amazing Signs",
  "AMDEN JEWELRY",
  "American Acrylic Display INC",
  "Amotech",
  "AMS LL",
  "Anaheim Hills Jewelry & Coin Mart",
  "Andrade Cabinets",
  "Andres Ramos",
  "Andy Kim",
  "Angel Construction Services, Inc.",
  "ANTHONY WHOLESALE ELECTRIC",
  "ARC Electric",
  "ARCHITECTURAL DESIGN & SIGNS, INC",
  "Arizona Case",
  "Arizona Western Fixture and Display, INC.",
  "Arnel Commercial Properties",
  "Artisian Glass Design",
  "Artistry in Gold",
  "ASTOUND GROUP",
  "Astro Display",
  "ASV Inc",
  "ATT",
  "AUSTIN STORE FIXTURES",
  "B.Y.B TRADING",
  "Band sign system",
  "Bardon Cabinetry",
  "Bargain Store Equipment",
  "Barton Sign Fab",
  "Bayview Plastic Solutions",
  "Beauty College",
  "Beaver Exhibit Inc.",
  "Beemak",
  "Bella Tile",
  "Best Home Interior Design",
  "Better signs & Services",
  "Bishop Store Fixture and Millwork",
  "BK signs",
  "Blade Gallery",
  "Blake Sign Company Inc.",
  "Blaze Electric & Service Company",
  "Blueview Elec-optic Tech Co., Ltd.",
  "Bock Craft Metal",
  "Bock Craft Metal & Exterior Design",
  "BONAGE USA LLC",
  "Boomers",
  "BP Built",
  "BRAIN NELSON",
  "Brigade",
  "BRISTOL CELLULAR, INC.",
  "Britex Engineering Ltd",
  "Brixen & Sons",
  "Bruna Ferrari Bead",
  "Bruno Bomis",
  "Builders Surplus, Inc.",
  "Burgin",
  "C&B Displays",
  "C&M Products",
  "C.B. Summer Construction Co. Inc.",
  "C3 Lighting Solutions, Inc",
  "C3 Signs",
  "Cabinet Magic",
  "Cabinets Expo & Window",
  "Cal West Signs",
  "CALIFORNIA QUALITY PLASTICS",
  "CALWEST SIGNS",
  "CANOGA ELECTRIC SUPPLY CO",
  "Capitol Neon",
  "Capitol Store Fixture",
  "Carmel at Woodbury",
  "Casco Pet",
  "Casey King",
  "Cash Strauss",
  "CDC exhibits",
  "CED Nunn Electrical Distrubutors",
  "CEES SMIT",
  "Celco Manufacturing",
  "CFS Millswork",
  "Chandler Sign",
  "Chiapparelli Inc.",
  "CHOURA EVENTS",
  "Clever Home & Yacht",
  "Coast sign",
  "Coastal Sign",
  "CoGent Signs",
  "Come Signn In",
  "Complete Store Fixtures",
  "Compu-Signs",
  "Concept Displays Inc.",
  "Conserve-A-Watt",
  "CONTINENTAL DISPLAY INC",
  "CONTINENTAL STORE FIXTURES",
  "Contrast Media",
  "Cornerstone Display Group",
  "Creative Kitchen & Bath",
  "Crescent Electric Supply",
  "Crescent Pacific, Inc.",
  "CUSTOM CLOSETS",
  "Czarnowski",
  "D'AMATI FINE JEWELRY",
  "D'Andrea Visual Communications",
  "D&P CUSTOM LIGHTS & WIRING SYSTEMS INC.",
  "D&S Signs",
  "Daniel's Jewelers",
  "Daniels Display Company",
  "Danite Sign Co.",
  "Danny's Signs",
  "DARIO JEWELERS",
  "Del amo Image",
  "Delta Exhibitions",
  "Desart",
  "Design by Kelarice",
  "DESIGN IMAGES",
  "Detroit Store Fixtures",
  "Direct Edge",
  "Direct LED Frames",
  "Disciple Built",
  "Display by Design",
  "display fabrication group",
  "Display Plus Inc.",
  "Display Warehouse Inc.",
  "Displayit Inc.",
  "Displays & Holders",
  "Displays by Design",
  "Displays By Jack",
  "Distek, Inc.",
  "DN SIGNS",
  "Don Roberto Jewelers",
  "Donco and Sons, Inc.",
  "DONGGUAN DAWANG MACHINERY EQUIPMENT",
  "Double R Display",
  "DSA. Phototech",
  "Dynamic Display Systems",
  "Earth And Water",
  "EASIGO",
  "EC Retail",
  "EC Retail Studio",
  "Econo Display",
  "Electricore Signs",
  "Ellis & Ellis Sign Systems",
  "Elro Signs",
  "Empire Maintenance",
  "EnK Custom Display",
  "ESI Services",
  "ET Custom Sign & Design",
  "Evans Sign",
  "EWI",
  "Exhibit Option",
  "Exhibitree, Inc",
  "Expedition Sign Inc.",
  "Expo Services",
  "Express Jewelry",
  "EXPRESS SIGN & NEON",
  "FABRICADORES DE ALUMINO",
  "Fairway Holdings",
  "FAST FIX JEWELRY",
  "FASTSIGNS® of American Canyon",
  "Federal Heath Sign Company",
  "Felbro Display",
  "Final Phase Construction, Inc.",
  "Finn Retail",
  "First & Main Signage for Modern Brands LL",
  "Fisher & Paykel Appliances, Inc.",
  "Floors Next Day",
  "Forward Sign",
  "Freddie G Production",
  "Freehand Sign Co",
  "FSG",
  "FTC INSTALLATION INC.",
  "FX SIGNS",
  "Gardena Electric",
  "GAVRIELI",
  "Gemini Sign Products",
  "GentLA",
  "GEORGE P. JOHNSON",
  "Glen Hager",
  "GO DESIGN & DISPLAY, INC",
  "Go2Cellairis",
  "Golden Gate Sign Co",
  "Granite Creek Electric",
  "Graphical Dimensions",
  "Great Spaces USA",
  "GreveCo Displays and Exhibits",
  "Grid Exhibition Service",
  "Gridot Exhibit LLC",
  "Gumme Diamonds & Jewelry",
  "Gus Signs",
  "Hanmi Sign",
  "Harbor Sign",
  "Harbor Wholesale Elect",
  "Harkins Theatres",
  "HD Fullerton Construction Inc",
  "Hill Display",
  "Hilton",
  "Hippo",
  "Ho's remodel corp.",
  "Horizon Lighting",
  "IAK Wholesale",
  "Ibex Cleaning Services",
  "Icon Design",
  "Idaho electric signs",
  "Ideal Lighting Supply",
  "Identity Sign Group Inc",
  "IDI Electric LLC",
  "IKON SIGNS.",
  "Illuminated Light Panels",
  "Illuminated Products",
  "Image Options",
  "Impact-XM",
  "Indicom Electric Co",
  "INLINE",
  "INSTANT NEON SIGN AND ELECTRICAL",
  "Instant Signs Cypress, LLC",
  "Instore Design Display",
  "INTERSTATE ELECTRIC CO.",
  "Intrigue jewelers",
  "Intrigue Jewelry",
  "Irvine Printing & Display",
  "Ivar's Displays",
  "J and J",
  "James Gartner & Associates Architects",
  "Jeffery Rome and Associates",
  "Jejjoni Sign Manufacturing",
  "Jendayi Collection",
  "Jewelry Exchange",
  "JF Fixtures",
  "JH Cabinet",
  "Jim Mitchell",
  "JM Kitchen Cabinet Co.",
  "Joe Gartner",
  "John's Installations",
  "John Barrett",
  "Johnson Electric Co.",
  "Jolin Electrical Maintenance & Service",
  "JP Electric",
  "JPAK LED",
  "JPS Design",
  "Just for Show INC",
  "JYE'S International, Inc.",
  "K 2 Sign",
  "K.M. Lighting",
  "K2 Fabrication and Design",
  "KB Surgical Center",
  "KC STORE FIXTURES",
  "Kendra Scott",
  "Kevin's Presentation",
  "Kevin Riggs Builder, Inc.Shipping",
  "KIEFFER & CO. INC.",
  "KIM BON JUN SIGN INC",
  "Kim Khanh Gift Shop",
  "KMR Pro.",
  "KNJ Display",
  "Koin Enterprises",
  "LA Digital Graphics",
  "LAMP",
  "Las Vegas Lighting Inc",
  "Lawndale Jewelry and loan",
  "LED ENTERPRISE INC",
  "LED USA",
  "LEED Green Associate",
  "LIGHT BULB ETC/Montclair",
  "Light Bulbs & More",
  "Light Bulbs etc",
  "Light Bulbs ETC/Lightstyles",
  "Light Bulbs Unlimited",
  "Lucky Signs",
  "Lucky Store Fixture",
  "Luis",
  "Luxary Lighting",
  "MAC and TEA",
  "Macy's",
  "Mag-Trol L.B.,LLC",
  "Magnolia Electric",
  "MAGNUM DESIGN GROUP",
  "Main Electric Supply",
  "Main Place Lighting",
  "MAJESTIC LIGHTING",
  "Mancraft Industries",
  "Marble/ Unlimited",
  "Martin Furniture",
  "Maximum Sign Co",
  "Maximum Visibility",
  "MCOR Lighting",
  "MEIGA SUSHI",
  "Meritage Homes",
  "Metro Commercial Construction",
  "Meyer Sign Company of Oregon",
  "Midas convention service Inc",
  "Mike Dore",
  "MJB Supply, LLC",
  "Modotech Design & Fabrication Inc",
  "Monster Signs LLC",
  "Moon International Inc.",
  "MORALES SIGNS & GRAPHICS",
  "Morales Signs and Graphics",
  "Motif Events",
  "MSI",
  "MT Exhibits LLC",
  "Nakamura-Beeman",
  "Narrow mountain Products",
  "National Mall Front & Design",
  "Nayoung Yu",
  "NBrand Signs CO.",
  "NC  Builders ",
  "NEC Building Services",
  "NEON",
  "Nest Experiential",
  "Newtech Display",
  "NicoNat",
  "Nimlok",
  "Noco",
  "Norse Manufacturing",
  "Northshore Creative Group",
  "OAK-IT Inc.",
  "OC Electrical Services",
  "OCP Construction",
  "Off The Wall Co.",
  "Old California Lighting",
  "One Source Industries",
  "Orange County Industrial Plastics",
  "Orange Display",
  "Orange Pico",
  "Orion Inc",
  "OROZCO INC",
  "OUTDOOR DIMENSIONS",
  "Pacific Coast Sign Supply",
  "Pacific Panel",
  "Pacific Prestige Properties",
  "Pacific Store Designs",
  "Palmer Promotional Products",
  "Pan-Oston",
  "Patrick Kincaid",
  "Patterson Signs",
  "Permier Pain Consultants",
  "PF Cali LLC",
  "Photo Booth Supply Co.",
  "Piece Maker",
  "Pinnacle Exhibits",
  "Pinnacle Sign Systems",
  "pl",
  "PLAN A EXPOSITION INC",
  "Platinum Lighting LLC",
  "POP 82",
  "POSC Design Company",
  "Preferred Project",
  "Premier Display & Exhibit",
  "PREMIER FIXTURE AND DISPLAY",
  "PREMIER SOURCE,INC",
  "Premiere Rack Solution",
  "Premium Quality Lighting",
  "Presentation Media Inc",
  "Primary Color",
  "Prime Expo",
  "Pro Exhibits",
  "Prodigy Group",
  "Production Resource Group",
  "Profab Signs, LLC",
  "Professional Retail Outlet Services",
  "Promotional Signs",
  "Punch Inc.",
  "purpose",
  "Purpose Supply Co",
  "QED Electrical Supply",
  "R&A Enterprises",
  "R.B.SIGNS INC",
  "R.E. Wholesale Lighting",
  "Ralph Jones Display",
  "RAMOS WOODWORKS LLC",
  "Randal Retail Group, Inc",
  "RB sign",
  "RC Mechanical",
  "RC NEON",
  "RCSIGNS",
  "Reborn Cabinets Inc.",
  "Regency Lighting",
  "REITZ ELECTRIC SERVICE INC.",
  "Resco Electric, Inc.",
  "Residential Development Inc.",
  "Retail Electrical",
  "RetailOne",
  "Rexel",
  "Rhino Electric",
  "Rich Limited",
  "Rick's Signs",
  "RJ MANUFATURING",
  "RNS Channel letters",
  "Rodgers-Wade",
  "Room Service Interiors",
  "Royal Custom Designs",
  "Royal Lighting",
  "Royal Wholesale Electric",
  "RSM Facility Solutions",
  "Russ Andrade Custom Cabinets",
  "Saks Fifth Ave.",
  "SAMSUNG SIGN CO",
  "Sandbox Sign Co",
  "Santa Cruz Industries, Inc.",
  "SAV-ON FIXTURE",
  "SC Construction Corp",
  "SE Display",
  "Seafood City",
  "Serrano Printing",
  "Sgns By Neil",
  "Sheets Contracting Inc",
  "Shergill enterprises llc",
  "Sherwood Management Company",
  "Show offs Display Inc.",
  "Showcase Components",
  "Shryne Group",
  "Sign-Mart",
  "Sign Designs",
  "Sign Done Fast",
  "Sign Haus",
  "Sign Industries",
  "SIGN ONE DESIGN & SERVICES",
  "Sign Resource",
  "Sign Spots",
  "Sign Studio",
  "Sign Technics & Grapfixs",
  "SignComm",
  "Signmakers",
  "SIGNS EXPRESS",
  "Signs International Distributor Corp",
  "Signtopia",
  "Signum",
  "SJ Lighting Inc.",
  "SJP SIGNS INC.",
  "Sky Factory",
  "SMC",
  "SMUN, Inc.",
  "So Cal Handyman Services",
  "Soliddd Corp",
  "South California Electric Supplies",
  "Southwest Sign Co.",
  "Southwest Sign Maintenance",
  "SPACE DESIGN & DISPLAY",
  "Spark Retail Solutions Inc.",
  "Sparks",
  "Special Signs",
  "Specialized Marketing international",
  "Speed Quality Signs",
  "SRS FABRICATION INC.",
  "STANFORD SIGN & AWING,INC",
  "Star Design",
  "Steam Puff",
  "Steelhead Productions",
  "STELLAR KITCHEN SOLUTIONS",
  "STEVE HANAVER",
  "Sticky Battle Creek",
  "Stone Age",
  "STORE FIXTURES",
  "Strategic 10",
  "STUART BENJAMIN & CO",
  "Studio Concepts",
  "Sungmin ELC",
  "Superior Display",
  "Superior Electrical Advg",
  "Superior Signs and Neon",
  "Synergy Custom Fixtures",
  "Tae Gwang Inc",
  "Taft Electric Company",
  "Tako Tyko",
  "Taylor Design",
  "TC Custom Design",
  "TDI Signs",
  "TEBO DESIGN & FIXTURE",
  "Tecno Display",
  "Tectonics",
  "TEE EDGE / Concept Displays",
  "TEMEKA",
  "TFN Architectural Signage",
  "The ADART Company",
  "The Bernard Group",
  "The create people",
  "The Creative Eyewear",
  "The Display Builders",
  "THE GREAT ORGANIZATION",
  "The Lighting Gallery",
  "The Scenic Express",
  "The Tipsy Robot",
  "Thomas Swan Sign Inc.",
  "Todd Trenchard",
  "TOM General Construction LLC",
  "Top-Shelf Fixtures, LLC",
  "Total Display Fixture",
  "TP International",
  "TPL Exhibit LLC",
  "TRAC VALERIE BUNDARIN",
  "Travis Mathew",
  "Trilogy Signs & Advertising",
  "Tucson Store Fixture",
  "Turtle & Hughes Inc.",
  "Tyler Lighting Services, Inc.",
  "ULTIMATE ACRYLICS",
  "Underground Sign Solution",
  "United Sign Systems",
  "Universal Carpet",
  "Universal Custom Display",
  "University of Southern California",
  "UNIWEB, INC.",
  "USCMABO",
  "Valley Signs & Lighting Inc",
  "Velacci Group Inc",
  "VERIDA SIGNS",
  "Victory Diaplay",
  "visio",
  "Vision Sign, INC.",
  "Visual Marketing Resource",
  "VN Signs Factory",
  "Walters Wholesale Electric Co.",
  "Walters/Corona",
  "Watson Electrical Construction Co.",
  "Wearecircle",
  "Wert Fixture & Display",
  "Wesco Signs",
  "West Coast Pops",
  "Western Sign",
  "WESTERN SIGN AND AWNING",
  "Westside Wholesale Electric & Lighting I",
  "Westwood Wholesale Electric",
  "Westwood Wholesale Electric Co",
  "WG Signs CO",
  "Wholesale Sign Builder",
  "Wholesale Sign Manufacturer Company",
  "WISE OWL EXHIBITS",
  "Woods Electric",
  "Woven Wood",
  "Woworking Display",
  "Xibit Solutions",
  "Xpert Exposition Services",
  "YESCO",
  "Zee sign systems Inc",
  "ZION CABINETS,INC.",
  "Zuni Signs"
]

let totCost = 0;
let table = new Tables();
let clicked = false;

function autocomplete(text, option) {
  const triggers = ["input", "click"];
  for (let i = 0; i < triggers.length; i++) {
    text.addEventListener(triggers[i], function() {
      clicked = true;
      var currentElements = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < currentElements.length; i++) {
        currentElements[i].parentNode.removeChild(currentElements[i]);
      }
      var dropdown = document.createElement("DIV");
      dropdown.setAttribute("id", "dropdownParent");
      dropdown.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(dropdown);
      let displayType = dropdown.style.display;

      for (let i = 0; i < option.length; i++) {
        if (option[i].substr(0, this.value.length).toUpperCase() == this.value.toUpperCase()) {
          //console.log(option[i]);
          let dropdownElement = document.createElement("DIV");
          dropdownElement.accessKey = option[i];
          dropdownElement.innerHTML = option[i];
          dropdownElement.setAttribute("id", "dropdownElements");
          dropdownElement.addEventListener("click", function() {
            var curElements = document.getElementsByClassName("autocomplete-items");
            for (let i = 0; i < curElements.length; i++) {
              curElements[i].parentNode.removeChild(curElements[i]);
            }
            text.value = this.accessKey;
            updateTable();
          });
          dropdown.appendChild(dropdownElement);
        }
      }
      if (dropdown.children.length == 0) {
        dropdown.style.display = "none";
      }
      else {
        dropdown.style.display = displayType;
      }
    });
  }
}

function numerize(text) {
  let front = 0.0;
  let top = 0.0;
  let bot = 0.0;
  let fraction = false;
  let space = false;
  for (let i = 0; i < text.length; i++) {
    let current = text.charAt(i);
    if (current == ' ') {
      if (space != true) {
        space = true;
        top = 0.0;
      }
      continue;
    }
    if (current == '.') {
      console.log(parseFloat(text));
      return parseFloat(text);
    }
    if (current == '/') {
      fraction = true;
      continue;
    }

    if (!fraction) {
      if (space == false) {
        front = front * 10;
        front = front + parseFloat(current);
      }
      top = top * 10;
      top = top + parseFloat(current);
    }
    if (fraction) {
      bot = bot * 10;
      bot = bot + parseFloat(current);
    }

  }
  if (bot == 0) {
    console.log(top);
    return top;
  }
  if (space == true) {

    console.log(front + top / bot);
    return top / bot + front;
  }
  console.log(top / bot);
  return top / bot;
}

function onDocLoad() {
  updateTable();
  autocomplete(document.getElementById("customerInput"), CustomerList);

  document.getElementById("DiscountText").style.display = "none";
  document.getElementById("DiscountText").addEventListener("input", function() {
    updateTable();
  });
  document.getElementById("customerInput").addEventListener("input", function() {
    updateTable();
  });
  document.getElementById("discountType").addEventListener("click", function() {
    updateTable();
  });

  document.addEventListener("click", function(e) {
    if (document.getElementById("discountType").value == "None") {
      //console.log("Eho");
      document.getElementById("DiscountText").style.display = "none";
    }
    else {
      document.getElementById("DiscountText").style.display = "initial";
    }
    if (clicked) {
      clicked = false;
      return;
    }
    var currentElements = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < currentElements.length; i++) {
      currentElements[i].parentNode.removeChild(currentElements[i]);
    }
  });
}

function totalCost(discount) {
  document.getElementById("cost").innerHTML = "Total Cost: $" + totCost;
  if (document.getElementById("discountType").value != "None") {
    document.getElementById("cost").innerHTML += "<br> Discounted Cost: $" + discount.toFixed(2);
  }
}

function updateTable() {
  clearTable();
  totCost = 0;
  for (let i = 0; i < table.array.length; i++) {
    for (let k = 0; k < table.array[i].array.length; k++) {
      document.getElementById("name").innerHTML += table.array[i].array[k].name;
      document.getElementById("description").innerHTML += table.array[i].array[k].description;
      document.getElementById("price").innerHTML += table.array[i].array[k].price;
      document.getElementById("quantity").innerHTML += table.array[i].array[k].quantity;
      document.getElementById("total").innerHTML += table.array[i].array[k].total;
    }
    totCost += table.array[i].totalCost;
  }
  let discount = 0;
  let totHold = totCost;
  if (document.getElementById("discountType").value != "None" && parseFloat(document.getElementById("Discount").value) > 0) {
    if (document.getElementById("discountType").value == "Percent") {
      discount = (totCost * 0.01 * parseFloat(document.getElementById("Discount").value));
      totCost = (totCost - discount);
    }
    else {
      discount = parseFloat(document.getElementById("Discount").value);
      totCost = (totCost - discount);
    }
  }
  totCost = totCost.toFixed(2);
  if (totCost < 0) {
    discount = totHold;
    totCost = 0;
  }
  totalCost(discount);
  if (document.getElementById("customerInput").value != "") {
    document.getElementById("customer").innerHTML = "Customer: " + document.getElementById("customerInput").value;
  }
  else {
    document.getElementById("customer").innerHTML = "";
  }
}

function emptyTable() {
  clearTable();
  while (table.array.length > 0) {
    table.array.pop();
  }
  document.getElementById("delete").innerHTML = "Delete <br>";
  totCost = 0;
  updateTable();
}

function printHelp(name, description, quantity, price) {
  clearTable();
  let insert = new Contents("<br>" + name, "<br>" + description, "<br>$" + price + ".00", "<br>" + quantity, "<br>$" + (price * quantity) + ".00");
  updateTable();
  return insert;
}

function clearTable() {
  document.getElementById("name").innerHTML = "Item <br>";
  document.getElementById("description").innerHTML = "Description <br>";
  document.getElementById("price").innerHTML = "Price <br>";
  document.getElementById("quantity").innerHTML = "Quantity<br>";
  document.getElementById("total").innerHTML = "Total <br>";
  document.getElementById("errors").innerHTML = "";
}

function addElement(name, description, price, quantity, total) {
  clearTable();
  let insert = new Contents(name, description, price, quantity, total, "<br>");
  updateTable();
  return insert;
}

function clearArray(ar) {
  for (let i = 0; i < ar.length; i++) {
    ar[i] = 0;
  }
  return ar;
}

function printHelper() {

  var popOut = window.open("", 'INSEM Lightbox Quote', 'width=1080px,height=2160');

  var doc = popOut.document;
  doc.open();
  doc.write("<link href=\"style.css\" rel=\"stylesheet\" type=\"text/css\" />");

  popOut.onload = function() {
    popOut.print();
  }
  popOut.onafterprint = function() {
    popOut.close();
  }

  doc.write(document.getElementById("base").outerHTML);
  doc.getElementById("line").style.width = "18.6cm";
  doc.getElementById("total").style.borderRight = "2px solid black";
  doc.getElementById("delete").remove();
  const date = new Date();
  let titleString = "";
  titleString = "PI";
  if (document.getElementById("customerInput").value != "") {
    let tempString = "" + document.getElementById("customerInput").value;
    titleString += "-" + tempString.replace(/\s/g, "");
  }
  titleString += " ";
  if (date.getDate() < 10) {
    titleString += "0";
  }
  titleString += date.getDate();
  if (date.getMonth() + 1 < 10) {
    titleString += "0";
  }
  titleString += (date.getMonth() + 1);
  titleString += date.getFullYear();
  doc.title = titleString;

  doc.close();
}

function addEstimate() {

  //Variable Storage
  let obj = document.getElementById("boxQ");
  let quantity = parseFloat(obj.elements[0].value);
  obj = document.getElementById("boxH");
  let height = numerize(obj.elements[0].value);
  obj = document.getElementById("boxW");
  let width = numerize(obj.elements[0].value);
  obj = document.getElementById("boxS");
  let sides = parseFloat(obj.options[obj.selectedIndex].value);
  obj = document.getElementById("boxT");
  let tIndex = obj.selectedIndex;

  let item = new Item(0);

  //Error Handling
  let errorText = "";
  if (quantity <= 0) {
    errorText = errorText + "Enter a positive quantity" + "<br>";
  }
  if (quantity % 1 != 0) {
    errorText = errorText + "Enter a whole number for quantity" + "<br>";
  }
  if (quantity <= 0 || quantity % 1 != 0) {
    document.getElementById("errors").innerHTML = errorText;
    return;
  }
  document.getElementById("errors").innerHTML = "";

  //Indentation
  //item.array.push(addElement("<br>", "<br>", "<br>", "<br>", "<br>"));

  //Initialize data structures
  const box = new LightBoxes();
  const light = new Lights();
  const power = new PowerSupplies();

  //Price of Box
  let total = 0;
  let boxHeight = parseInt(height / 6) + 1;
  let boxWidth = parseInt(width / 6) + 1;
  if (width % 6 == 0) {
    boxWidth--;
  }
  if (height % 6 == 0) {
    boxHeight--;
  }
  boxHeight = boxHeight / 2;
  boxWidth = boxWidth / 2;
  //console.log(boxWidth);
  //console.log(boxHeight);
  let price = parseInt(box.array[tIndex].price * (boxHeight + boxWidth) * 2);
  let tableSize = 3;
  var send = "Custom " + box.array[tIndex].name + " Frame for " + document.getElementById("boxW").elements[0].value + "\" x " + document.getElementById("boxH").elements[0].value + "\"";
  let saveStart = item.array.length;
  item.array.push(addElement("<br>", "<br>Light Box - " + document.getElementById("boxW").elements[0].value + "\" x " + document.getElementById("boxH").elements[0].value + "\"", "<br>", "<br>", "<br>"));
  item.array.push(printHelp("Custom", send, quantity, price));
  total = total + (quantity * price);

  //Price of Fablic
  price = parseInt(11.5 * boxHeight * boxWidth);
  item.array.push(printHelp("Custom", "Custom fablic for " + document.getElementById("boxW").elements[0].value + "\" x " + document.getElementById("boxH").elements[0].value + "\"", quantity, price));
  total = total + (quantity * price);

  //Setting Bigger/Smaller sides
  sides = parseInt(sides);
  let priorityLength = light.array[light.priorityIndex].length;
  let bigger = height;
  let smaller = width;
  if (width > height) {
    bigger = width;
    smaller = height;
  }

  //Preperation for 4-sided Box
  let arraySmall = new Array(light.array.length);
  let remainder = light.array[light.priorityIndex].length + 10;
  let tempSix = 0;
  arraySmall = clearArray(arraySmall);
  if (sides == 4) {
    while (tempSix * priorityLength < smaller) {
      tempSix++;
    }
    tempSix--;
    if (tempSix < 0) {
      tempSix = 0;
    }
    arraySmall[light.priorityIndex] = tempSix;
    remainder = (smaller - tempSix * priorityLength);
    for (let i = 0; i < light.array.length; i++) {
      let x = light.array[i].length;
      // console.log(smaller);
      // console.log(tempSix * priorityLength);
      if ((tempSix * priorityLength + x < smaller) && (smaller - tempSix * priorityLength - x) < remainder) {
        remainder = smaller - tempSix * priorityLength - x;
        arraySmall = clearArray(arraySmall);
        arraySmall[light.priorityIndex] = tempSix;
        arraySmall[i]++;
      }
      for (let k = 0; k < light.array.length; k++) {
        let y = light.array[k].length;
        for (let m = 0; m < light.priorityMin; m++) {
          if (tempSix < 0) {
            tempSix--;
            continue;
          }
          if ((tempSix * priorityLength + x + y < smaller) && (smaller - tempSix * priorityLength - x - y) < remainder) {
            remainder = smaller - tempSix * priorityLength - x - y;
            arraySmall = clearArray(arraySmall);
            arraySmall[light.priorityIndex] = tempSix;
            arraySmall[i]++;
            arraySmall[k]++;
          }
          tempSix--;
        }
        tempSix = tempSix + light.priorityMin;
      }
    }
  }

  tempSix = 0;
  let arrayBig = new Array(light.array.length);
  arrayBig = clearArray(arrayBig);
  remainder = light.array[light.priorityIndex].length + 1;

  while (tempSix * priorityLength < bigger) {
    tempSix++;
  }
  tempSix--;
  if (tempSix < 0) {
    tempSix = 0;
  }
  arrayBig[light.priorityIndex] = tempSix;
  remainder = (bigger - tempSix * priorityLength);
  for (let i = 0; i < light.array.length; i++) {
    let x = light.array[i].length;
    if ((tempSix * priorityLength + x < bigger) && (bigger - tempSix * priorityLength - x) < remainder) {
      remainder = bigger - tempSix * priorityLength - x;
      arrayBig = clearArray(arrayBig);
      arrayBig[light.priorityIndex] = tempSix;
      arrayBig[i]++;
    }
    for (let k = 0; k < light.array.length; k++) {
      let y = light.array[k].length;
      for (let m = 0; m < light.priorityMin; m++) {
        if (tempSix < 0) {
          tempSix--;
          continue;
        }
        if ((tempSix * priorityLength + x + y < bigger) && (bigger - tempSix * priorityLength - x - y) < remainder) {
          remainder = bigger - tempSix * priorityLength - x - y;
          arrayBig = clearArray(arrayBig);
          arrayBig[light.priorityIndex] = tempSix;
          arrayBig[i]++;
          arrayBig[k]++;

        }
        tempSix--;
      }
      tempSix = tempSix + light.priorityMin;
    }
  }

  let subtitle1 = "" + smaller + "\" section - ";
  let subtitle2 = "" + bigger + "\" section - ";

  let lumenOutput = 0;
  if (sides == 1) {
    subtitle2 += "Single Side";
  }
  else {
    subtitle1 += "Double Side";
    subtitle2 += "Double Side";
  }
  if (sides == 4) {
    for (let i = 0; i < light.array.length; i++) {
      if (arrayBig[i] != 0) {
        subtitle2 += ", " + arrayBig[i] + "pcs " + light.array[i].short;
      }
      if (arraySmall[i] != 0) {
        subtitle1 += ", " + arraySmall[i] + "pcs " + light.array[i].short;
      }
      //arrayBig[i] = arraySmall[i] + arrayBig[i];
    }
    item.array.push(addElement("<br>", "<br>" + subtitle1, "<br>", "<br>", "<br>"));
    item.array.push(addElement("<br>", "<br>" + subtitle2, "<br>", "<br>", "<br>"));
    tableSize += 2;
  }



  //Print Lights and calculate Watts
  let wattSmall = 0;
  let wattBig = 0;
  for (let i = 0; i < light.array.length; i++) {
    if (sides != 4 && arrayBig[i] != 0) {
      subtitle2 += ", " + arrayBig[i] + "pcs " + light.array[i].short;
    }
    wattSmall = wattSmall + arraySmall[i] * light.array[i].watts;
    wattBig = wattBig + arrayBig[i] * light.array[i].watts;

    if (sides != 1) {
      arrayBig[i] = arrayBig[i] * 2;
      arraySmall[i] = arraySmall[i] * 2;
    }

    lumenOutput += arraySmall[i] * light.array[i].lumen;
    lumenOutput += arrayBig[i] * light.array[i].lumen;

    arrayBig[i] = arrayBig[i] * quantity;
    arraySmall[i] = arraySmall[i] * quantity;
  }
  if (sides != 4) {
    item.array.push(addElement("<br>", "<br>" + subtitle2, "<br>", "<br>", "<br>"));
    tableSize += 1;
  }
  for (let i = 0; i < light.array.length; i++) {
    if (arrayBig[i] + arraySmall[i] != 0) {
      item.array.push(printHelp(light.array[i].name, light.array[i].description, arrayBig[i] + arraySmall[i], light.array[i].price));
      tableSize += 1;
      total = total + (arraySmall[i] + arrayBig[i]) * light.array[i].price;
    }
  }
  let outputPer = (lumenOutput / (width / 12 * height / 12)).toFixed(2);

  //Price of Power Supplies
  let minimum = Number.MAX_VALUE;
  let powerIndexBig = 0;
  let powerQuantityBig = 0;
  // console.log(wattBig);
  for (let i = 0; i < power.array.length; i++) {
    if ((power.array[i].watts * (parseInt(wattBig / power.array[i].watts, 10) + 1)) - wattBig < minimum) {
      powerQuantityBig = parseInt((wattBig / power.array[i].watts), 10) + 1;
      minimum = power.array[i].watts * (parseInt(wattBig / power.array[i].watts, 10) + 1) - wattBig;
      powerIndexBig = i;
    }
  }
  // console.log(powerQuantityBig);
  minimum = Number.MAX_VALUE;
  let powerIndexSmall = 0;
  let powerQuantitySmall = 0;
  if (sides == 4) {
    for (let i = 0; i < power.array.length; i++) {
      if ((power.array[i].watts * (parseInt(wattSmall / power.array[i].watts, 10) + 1)) - wattSmall < minimum) {
        powerQuantitySmall = parseInt((wattSmall / power.array[i].watts), 10) + 1;
        minimum = power.array[i].watts * (parseInt(wattSmall / power.array[i].watts, 10) + 1) - wattSmall;
        powerIndexSmall = i;
      }
    }
  }

  if (sides != 1) {
    powerQuantityBig *= 2;
    powerQuantitySmall *= 2;
  }
  powerQuantityBig = powerQuantityBig * quantity;
  powerQuantitySmall = powerQuantitySmall * quantity;


  if (powerIndexBig == powerIndexSmall) {
    powerQuantityBig += powerQuantitySmall;
    item.array.push(printHelp(power.array[powerIndexBig].name, power.array[powerIndexBig].description, powerQuantityBig, power.array[powerIndexBig].price));
    tableSize += 1;
    total = total + powerQuantityBig * power.array[powerIndexBig].price;
  }
  else {
    if (powerQuantityBig != 0) {
      item.array.push(printHelp(power.array[powerIndexBig].name, power.array[powerIndexBig].description, powerQuantityBig, power.array[powerIndexBig].price));
      tableSize += 1;
      total = total + powerQuantityBig * power.array[powerIndexBig].price;
    }
    if (powerQuantitySmall != 0) {
      item.array.push(printHelp(power.array[powerIndexSmall].name, power.array[powerIndexSmall].description, powerQuantitySmall, power.array[powerIndexSmall].price));
      tableSize += 1;
      total = total + powerQuantitySmall * power.array[powerIndexSmall].price;
    }
  }
  let powerQuantity = powerQuantityBig + powerQuantitySmall;
  //Price of Cables
  item.array.push(printHelp("INT-MJ-MF-18", "5.5/2.1mm jack to harness female interconnector, 18\"", powerQuantity, 3));
  tableSize += 1;
  total = total + powerQuantity * 3;

  //Final Price
  item.array.push(addElement("<br><br>Total <br>", "<br><br><br>", "<br><br><br>", "<br><br><br>", "<br><br>$" + total + ".00<br>"));
  tableSize += 1;
  item.totalCost = total;
  table.array.push(item);

  let deleteButton = document.createElement("SPAN");
  // let discountPrompt = document.createElement("FORM");
  // discountPrompt.innerHTML = "<br><br><br> <input type = \"number\">";
  deleteButton.innerHTML = "<br><br> Delete";

  for (let i = 0; i < tableSize; i++) {
    deleteButton.innerHTML += "<br>";
    // discountPrompt.innerHTML += "<br>";
  }
  deleteButton.style.display = "inline-block";
  // discountPrompt.style.display = "inline-block";

  deleteButton.addEventListener("click", function() {
    let deleteIndex = 0;
    for (let i = 0; i < table.deletes.length; i++) {
      if (table.deletes[i].button == this) {
        deleteIndex = i;
      }
    }
    this.parentNode.removeChild(this);
    table.deletes.splice(deleteIndex, 1);
    table.array.splice(deleteIndex, 1);
    updateTable();
  });
  let insert = new DeleteData(deleteButton, table.array.length, tableSize);
  table.deletes.push(insert);
  document.getElementById("delete").append(deleteButton);
  // document.getElementById("discount").append(discountPrompt);

  updateTable();
}