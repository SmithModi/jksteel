export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Stainless Steel Soap Dispenser",
    price: "₹89.99",
    originalPrice: "₹109.99",
    image: "/lovable-uploads/a11e4138-9c9d-4721-bff2-48da52d5ce99.png",
    category: "Kitchen Accessories",
    description: "Elevate your kitchen sink area with this premium stainless steel soap dispenser. Featuring a sleek brushed finish and ergonomic pump design, it combines style with functionality. The large capacity reservoir reduces refill frequency while the durable construction ensures long-lasting performance.",
    features: [
      "Premium 304 stainless steel construction",
      "Brushed finish resists fingerprints and water spots",
      "Large 12oz capacity reduces refill frequency",
      "Ergonomic pump with smooth operation",
      "Easy-fill top design",
      "Leak-proof seal technology",
      "Matches modern kitchen fixtures"
    ],
    isNew: true
  },
  {
    id: "2",
    title: "Nested Storage Container Set - Ocean Blue",
    price: "₹45.99",
    originalPrice: "₹65.99",
    image: "/lovable-uploads/678b3b33-2f62-4422-b62d-724ba30e2b4a.png",
    category: "Storage Solutions",
    description: "Keep your kitchen organized with this beautiful 6-piece nested storage container set. The vibrant ocean blue color adds a pop of personality to your pantry while the airtight seals keep food fresh longer. Perfect for storing leftovers, meal prep, or organizing dry goods.",
    features: [
      "6-piece nested design saves 50% storage space",
      "Airtight silicone seals keep food fresh",
      "Microwave safe (without lids)",
      "Dishwasher safe for easy cleaning",
      "BPA-free food-grade plastic",
      "Clear graduated sizes",
      "Stack and nest for compact storage"
    ]
  },
  {
    id: "3",
    title: "Professional Milk Frother with Red Handle",
    price: "₹79.99",
    image: "/lovable-uploads/7e8c635b-496e-4f1e-85a7-1833f23dcca5.png",
    category: "Kitchen Gadgets",
    description: "Create café-quality beverages at home with this professional-grade milk frother. The powerful motor and precision-engineered whisk create perfect microfoam for lattes, cappuccinos, and hot chocolates. The ergonomic red handle provides comfort during extended use.",
    features: [
      "Professional-grade motor for consistent results",
      "Precision stainless steel whisk",
      "Ergonomic soft-grip handle",
      "Creates perfect microfoam in 30 seconds",
      "Works with all milk types",
      "Easy one-button operation",
      "Compact storage design"
    ],
    isNew: true
  },
  {
    id: "4",
    title: "Premium Cutting Board with Marble Background",
    price: "₹129.99",
    originalPrice: "₹159.99",
    image: "/lovable-uploads/_AP_4166.JPG",
    category: "Cutting Tools",
    description: "This premium cutting board combines functionality with stunning aesthetics. The deep purple surface is knife-friendly and naturally antimicrobial, while the elegant marble background makes it perfect for serving. Ideal for both food preparation and presentation.",
    features: [
      "Knife-friendly composite surface",
      "Natural antimicrobial properties",
      "Non-slip bottom for safety",
      "Stain and odor resistant",
      "Easy to clean and maintain",
      "Dual-purpose: prep and serving",
      "Elegant marble aesthetic"
    ]
  },
  {
    id: "5",
    title: "Stainless Steel Paper Towel Holder",
    price: "₹34.99",
    image: "/lovable-uploads/Stainless Steel Paper Towel Holder.JPG",
    category: "Kitchen Organization",
    description: "Keep your paper towels organized and easily accessible with this sleek stainless steel holder. The weighted base provides stability while the spring-loaded arm holds rolls securely. The modern design complements any kitchen décor.",
    features: [
      "Heavy-duty stainless steel construction",
      "Weighted base prevents tipping",
      "Spring-loaded arm for easy loading",
      "Fits standard and mega rolls",
      "Tear-assist design",
      "Non-slip base pads",
      "Modern minimalist design"
    ]
  },
  {
    id: "6",
    title: "Adjustable Vacuum Pump with Blue Accents",
    price: "₹59.99",
    originalPrice: "₹79.99",
    image: "/lovable-uploads/32ac6790-0dc7-4a00-ba01-c7330561fc36.png",
    category: "Food Preservation",
    description: "Extend the life of your food with this innovative vacuum pump system. The adjustable pressure settings work with various container types, while the ergonomic blue accents make operation comfortable and intuitive. Perfect for sous vide preparation and food storage.",
    features: [
      "Adjustable vacuum pressure settings",
      "Compatible with multiple container types",
      "Ergonomic blue silicone grips",
      "One-handed operation",
      "Built-in pressure gauge",
      "Extends food freshness up to 5x",
      "Easy-release valve"
    ]
  },
  {
    id: "7",
    title: "Ergonomic Vegetable Brush with Curved Handle",
    price: "₹19.99",
    image: "/lovable-uploads/7c02af64-68dd-4615-93e9-5b7e437f2ef2.png",
    category: "Cleaning Tools",
    description: "Make vegetable cleaning effortless with this ergonomically designed brush. The curved handle provides optimal grip angle while the firm bristles effectively remove dirt and residue. The sleek design looks great hanging in your kitchen.",
    features: [
      "Ergonomic curved handle design",
      "Firm natural bristles",
      "Comfortable grip texture",
      "Hangs for easy storage",
      "Works on all vegetables",
      "Long-lasting construction",
      "Easy to clean"
    ]
  },
  {
    id: "8",
    title: "Professional Mandoline Slicer with Safety Guard",
    price: "₹149.99",
    originalPrice: "₹199.99",
    image: "/lovable-uploads/54142ba1-7805-4e70-a710-2f395ac25de6.png",
    category: "Cutting Tools",
    description: "Achieve professional-quality cuts with this precision mandoline slicer. Features adjustable thickness settings, multiple cutting options, and an integrated safety guard. The stainless steel blades ensure clean cuts every time.",
    features: [
      "Precision stainless steel blades",
      "Adjustable thickness from 1-9mm",
      "Multiple cutting patterns",
      "Integrated safety hand guard",
      "Non-slip base for stability",
      "Easy blade adjustment",
      "Compact storage design"
    ],
    isNew: true
  },
  {
    id: "9",
    title: "Glass Spice Container with Grid Organizer",
    price: "₹89.99",
    image: "/glass_spice_organizer.jpg",
    category: "Storage Solutions",
    description: "Organize your spices in style with this premium glass container featuring a precision grid organizer. The airtight seal preserves freshness while the clear design lets you see contents at a glance. Perfect for spice enthusiasts and professional chefs.",
    features: [
      "Premium borosilicate glass construction",
      "Precision stainless steel grid",
      "Airtight silicone seal",
      "12 individual compartments",
      "Clear visibility of contents",
      "Easy-pour design",
      "Stackable for multiple units"
    ]
  },
  {
    id: "10",
    title: "Stackable Storage Baskets - Pink Set",
    price: "₹39.99",
    originalPrice: "₹54.99",
    image: "/lovable-uploads/9c54fc18-1a08-4b68-a90b-90e083592c02.png",
    category: "Organization",
    description: "Add a pop of color to your kitchen organization with these cheerful pink storage baskets. The perforated design provides ventilation for produce while the stackable design maximizes space efficiency. Perfect for fruits, vegetables, or general storage.",
    features: [
      "Vibrant pink color brightens any space",
      "Perforated design for air circulation",
      "Stackable for space efficiency",
      "Comfortable carry handles",
      "Easy-clean smooth surface",
      "Versatile multi-purpose use",
      "Lightweight yet durable"
    ]
  },
  {
    id: "11",
    title: "Sleek Stainless Mash & Lift Duo",
    price: "₹99.99",
    originalPrice: "₹129.99",
    image: "/lovable-uploads/_AP_3584.JPG",
    category: "Kitchen Gadgets",
    description: "Streamline prep night with this modern stainless duo featuring a perforated masher and a lift-style aerator. The minimalist handles stand upright on the counter, while the vented plates glide through potatoes, root vegetables, and beans without bending.",
    features: [
      "Dual-tool set combines a perforated masher and aerating lift",
      "Heavy-gauge stainless steel bodies resist warping",
      "Mirror-polished handles stay cool and wipe clean",
      "Wide vent patterns speed through dense ingredients",
      "Flat edges scrape pots and sheet pans without scratching",
      "Balanced bases let each tool stand upright between uses",
      "Dishwasher-safe construction for hassle-free cleanup"
    ]
  },
  {
    id: "12",
    title: "Heritage Wood-Handle Masher Trio",
    price: "₹74.99",
    originalPrice: "₹89.99",
    image: "/lovable-uploads/Heritage Wood-Handle Masher Trio.png",
    category: "Kitchen Accessories",
    description: "Warm hardwood handles meet stainless strength in this trio of countertop-friendly mashers. Sized for saucepans, stockpots, and mixing bowls, each tool brings farmhouse charm and reliable heft to potatoes, root vegetables, and lentil mixes.",
    features: [
      "Set of three mashers sized for everyday pots and bowls",
      "Hand-polished hardwood handles sealed with food-safe oil",
      "Solid stainless discs resist rust, dents, and heat",
      "Balanced weight reduces wrist fatigue during batch cooking",
      "Flat foot design stands upright for tidy countertops",
      "Rounded edges are safe for enamel and non-stick cookware",
      "Quick-rinse cleanup; simply wipe handles dry after washing"
    ]
  },
  {
    id: "13",
    title: "Mirror-Finish Manual Coconut Scraper",
    price: "₹119.99",
    originalPrice: "₹149.99",
    image: "/coconut_scraper.jpg",
    category: "Kitchen Gadgets",
    description: "Create fluffy coconut shavings in seconds with this mirror-finish scraper. The serrated blade cluster couples with a smooth hand crank, while the locking vacuum base anchors the tool to marble or tile counters for safe, wobble-free operation.",
    features: [
      "Razor-sharp serrated wheel delivers fine or coarse coconut flakes",
      "Hand-crank mechanism offers precise control without electricity",
      "Full stainless body resists corrosion from salty coconut water",
      "Locking vacuum base secures to smooth countertops",
      "Removable catch tray keeps counters tidy",
      "Compact footprint fits easily inside appliance cabinets",
      "Detachable blade assembly rinses clean in seconds"
    ]
  },
  {
    id: "14",
    title: "Stainless Medu Vada Dispenser",
    price: "₹64.99",
    image: "/lovable-uploads/Stainless Medu Vada Dispenser.JPG",
    category: "Kitchen Gadgets",
    description: "Shape perfectly round medu vadas, donut fritters, and pakodas with this spring-loaded dispenser. The polished canister resists stains, while the elevated red base keeps the nozzle off your work surface between batches.",
    features: [
      "Spring-loaded plunger extrudes consistent batter rings",
      "Polished stainless cylinder will not absorb aromas",
      "Wide-mouth opening simplifies filling and scraping",
      "Raised anti-slip base protects countertops from drips",
      "Lightweight top handle stays comfortable during long frying sessions",
      "Ideal for vada, donut, pakoda, and jalebi batters",
      "Dishwasher-safe components for fast cleanup"
    ]
  },
  {
    id: "15",
    title: "Premium Sev & Murukku Maker Trio",
    price: "₹139.99",
    originalPrice: "₹169.99",
    image: "/lovable-uploads/_AP_3569.JPG",
    category: "Kitchen Gadgets",
    description: "From festive chaklis to everyday sev, this trio of crank-style extruders handles every snack craving. Three barrel sizes pair with a smooth-turn handle, allowing you to press small tasting plates or party-ready platters with equal ease.",
    features: [
      "Includes three barrel capacities for small, medium, and large batches",
      "Food-grade stainless steel with a mirror polish",
      "Smooth geared crank minimizes effort on stiff doughs",
      "Compatible with interchangeable plates for sev, chakli, and murukku",
      "Sealed tops prevent dough seepage while pressing",
      "Ergonomic blue knobs provide a steady, non-slip grip",
      "Breaks down quickly for soaking, rinsing, and compact storage"
    ]
  },
  {
    id: "16",
    title: "Compact Medu Vada Dropper",
    price: "₹59.99",
    image: "/lovable-uploads/_AP_3540.JPG",
    category: "Kitchen Gadgets",
    description: "Perfect bite-sized vadas are a squeeze away with this compact dropper. The red plunger controls batter flow while the elevated tripod base keeps the spout lifted cleanly above your oil pot.",
    features: [
      "Compact footprint fits easily beside the fryer",
      "Spring plunger gives you one-handed portion control",
      "Polished stainless canister resists staining from spices",
      "Raised anti-slip base keeps the nozzle off messy counters",
      "Wide top opening makes filling and cleaning simple",
      "Ideal for medu vada, donut, and pakoda batters",
      "Dishwasher-safe components for quick turnaround"
    ]
  },
  {
    id: "17",
    title: "Precision Trigger Snack Press",
    price: "₹94.99",
    originalPrice: "₹119.99",
    image: "/lovable-uploads/_AP_3544.JPG",
    category: "Kitchen Gadgets",
    description: "Craft picture-perfect chaklis, cookie rosettes, or cheese straws with this trigger-driven press. The pistol grip keeps your wrist relaxed while the top plunger reloads dough for the next batch in seconds.",
    features: [
      "Trigger handle dispenses uniform ribbons or shapes",
      "Heavy-gauge stainless body stays rigid under pressure",
      "Top-loading plunger minimizes air pockets in dough",
      "Works with interchangeable discs for sweet or savory snacks",
      "Balanced handle provides leverage without strain",
      "Mirror finish wipes clean between flavor changes",
      "Compact enough to store in standard kitchen drawers"
    ]
  },
  {
    id: "18",
    title: "Grand Barrel Murukku Maker",
    price: "₹129.99",
    originalPrice: "₹159.99",
    image: "/lovable-uploads/_AP_3530.JPG",
    category: "Kitchen Gadgets",
    description: "Engineered for festive cooking marathons, this tall-barrel murukku maker holds generous dough portions so you can press tray after tray without constant refills.",
    features: [
      "Extra-tall barrel ideal for bulk dough",
      "Smooth crank with ergonomic blue knob",
      "Thick stainless walls resist bowing during pressing",
      "Precision threads keep plates locked without leaks",
      "Wide base ring adds stability on countertops",
      "Compatible with standard sev and chakli discs",
      "Disassembles quickly for soaking and scrubbing"
    ]
  },
  {
    id: "19",
    title: "Everyday Sev Extruder",
    price: "₹89.99",
    image: "/lovable-uploads/_AP_3532.JPG",
    category: "Kitchen Gadgets",
    description: "This midsize sev maker keeps weeknight cravings satisfied. The lighter barrel is easy to grip while the curved crank plate ensures even extrusion of spiced dough.",
    features: [
      "Medium-capacity barrel suited to daily cooking",
      "Curved crank arm reduces wrist fatigue",
      "Sealed top prevents dough from squeezing out",
      "Durable stainless body with polished finish",
      "Compatible with sev, chakli, and murukku discs",
      "Detachable parts rinse clean under the tap",
      "Compact enough to tuck inside utensil drawers"
    ]
  },
  {
    id: "20",
    title: "Fresh Cut Manual Veggie Dicer",
    price: "₹79.99",
    originalPrice: "₹99.99",
    image: "/lovable-uploads/_AP_3537.JPG",
    category: "Kitchen Gadgets",
    description: "Chop onions, chilies, and nuts without plugs or batteries. The green hand-crank dicer funnels produce toward twin stainless blades, giving you restaurant-style cuts in just a few spins.",
    features: [
      "Hand-crank operation—no power needed",
      "Dual stainless blades stay sharp and rust-free",
      "Wide hopper guides ingredients toward the cutters",
      "Non-slip base keeps the unit steady on the counter",
      "Transparent body lets you monitor dice size",
      "Lightweight build stores neatly in small kitchens",
      "All plastic components are BPA-free"
    ]
  },
  {
    id: "21",
    title: "Vibrant Countertop Coconut Scraper",
    price: "₹124.99",
    image: "/lovable-uploads/_AP_3516.JPG",
    category: "Kitchen Gadgets",
    description: "Brighten your prep station with this orange-bodied coconut scraper. The color-coated shell wipes clean instantly while the serrated flower blade spins out cloud-light shavings for chutneys, curries, and desserts.",
    features: [
      "Crank-driven stainless blade delivers fluffy coconut flakes",
      "Bold powder-coated body resists rust and staining",
      "Rubberized suction base locks to granite or tile counters",
      "Side-mounted handle keeps knuckles away from the blade",
      "Compact cone profile stores easily in appliance cabinets",
      "Blade cartridge detaches for safe scrubbing",
      "Perfect for coconut fillings, toppings, and fresh coconut milk"
    ]
  },
  {
    id: "22",
    title: "Slim Barrel Snack Press with Grip",
    price: "₹109.99",
    image: "/lovable-uploads/_AP_3519.JPG",
    category: "Kitchen Gadgets",
    description: "Create perfectly shaped chaklis, string hoppers, or spiral biscuits with this slim stainless press. The vertical handle lets you extrude dough directly over trays or oil with steady control.",
    features: [
      "Tall cylindrical barrel feeds long dough ribbons",
      "Heat-resistant side handle keeps hands away from the action",
      "Quick-lock lid with vent hook prevents accidental opening",
      "Compatible with standard sev and murukku plates",
      "Mirror-polished finish wipes spotless in seconds",
      "Threaded base seals tight to keep dough from seeping",
      "Lightweight body ideal for everyday snack runs"
    ]
  },
  {
    id: "23",
    title: "Pro Suction Coconut Scraper",
    price: "₹134.99",
    originalPrice: "₹159.99",
    image: "/lovable-uploads/_AP_3521.JPG",
    category: "Kitchen Gadgets",
    description: "This mirror-finish scraper pairs a heavy stainless housing with a dual-suction base for rock-solid stability. Turn the smooth crank to harvest coconut ribbons without fatigue.",
    features: [
      "Double-suction pads anchor firmly to slick countertops",
      "Hardened serrated petals shred coconut in either direction",
      "Swept-back crank arm clears mixing bowls and trays",
      "Brass bushing at the hub ensures long-lasting spin",
      "Compact base ring saves space on crowded prep lines",
      "Easy-release vacuum lever for quick repositioning",
      "Dishwasher-safe blade head for hygienic cleanup"
    ]
  },
  {
    id: "24",
    title: "Artisan Wooden Coconut Grater Board",
    price: "₹84.99",
    image: "/lovable-uploads/_AP_3525.JPG",
    category: "Kitchen Gadgets",
    description: "Inspired by traditional countertop graters, this artisan board features a solid-wood platform with dual stainless scraping wheels. Simply sit or press the coconut against the serrated discs for hand-grated texture.",
    features: [
      "Handcrafted hardwood board with protective food-safe seal",
      "Dual scraping wheels tackle coarse and fine textures",
      "Raised foam base keeps the board from slipping",
      "Low-profile design stores flat in drawers or shelves",
      "Removable wheels rinse clean under running water",
      "Ideal for fresh chutneys, garnishes, and dessert fillings",
      "Doubles as a charming serving board between prep sessions"
    ]
  },
  {
    id: "25",
    title: "Extruder Disc & Plunger Kit",
    price: "₹34.99",
    image: "/lovable-uploads/_AP_3528.JPG",
    category: "Kitchen Accessories",
    description: "Upgrade or refresh your murukku press with this stainless plunger rod and perforated disc set. Designed to fit most threaded snack extruders, it restores crisp shapes and even dough flow.",
    features: [
      "Universal plunger rod matches standard spiral presses",
      "Precision-cut disc delivers uniform strands",
      "316 stainless build resists bending and rust",
      "Hooked handle makes insertion and removal effortless",
      "Polished surface prevents dough from sticking",
      "Dishwasher-safe for fast sanitation",
      "Ideal backup set during festival cooking marathons"
    ]
  },
  {
    id: "26",
    title: "Stainless Micro-Foot Coconut Scraper",
    price: "₹72.99",
    image: "/lovable-uploads/_AP_3499.JPG",
    category: "Kitchen Gadgets",
    description: "This gleaming countertop scraper uses a low-profile stainless platform with bright anti-slip feet to keep things steady while you grate coconut by hand.",
    features: [
      "Curved serrated arm creates fluffy shavings with minimal effort",
      "Full stainless platform resists corrosion and wipes clean",
      "Colored anti-slip feet keep the board stable on wet counters",
      "Compact footprint slides easily into shallow cabinets",
      "Removable blade fastens with two screws for easy servicing",
      "Ideal for chutneys, curries, desserts, and garnishes",
      "Includes hanging hole for wall storage"
    ]
  },
  {
    id: "27",
    title: "Premium Oval Coconut Grater",
    price: "₹82.99",
    image: "/lovable-uploads/_AP_3501.JPG",
    category: "Kitchen Gadgets",
    description: "An elongated oval base gives this grater the reach you need for mature coconuts. The burgundy edge trim adds a touch of color to traditional prep.",
    features: [
      "Elongated base supports larger coconut halves",
      "Precision-toothed wheel delivers consistent flakes",
      "Soft-grip underside ring prevents sliding on tile",
      "Mirror polish resists stains from spices and palm sugar",
      "Low profile stores flat inside drawers or shelves",
      "Blade arm detaches for sharpening or replacement",
      "Doubles as a quick ginger or garlic scraping board"
    ]
  },
  {
    id: "28",
    title: "Scandi Wood Coconut Grater",
    price: "₹89.99",
    image: "/lovable-uploads/_AP_3506.JPG",
    category: "Kitchen Gadgets",
    description: "Blend minimalist décor with traditional prep using this wood-grain board and stainless serrated wheel—perfect for open-concept kitchens.",
    features: [
      "Engineered wood board sealed with food-safe varnish",
      "Raised rubber pads protect countertops from scratches",
      "Sweeping blade arc mimics the motion of classic bench graters",
      "Lightweight design is easy to move between prep zones",
      "Simple hardware allows quick blade removal for cleaning",
      "Neutral tones complement both modern and rustic spaces",
      "Great for coconut, kakra, or even chocolate curls"
    ]
  },
  {
    id: "29",
    title: "Emerald Comfort Coconut Scraper",
    price: "₹94.99",
    originalPrice: "₹109.99",
    image: "/lovable-uploads/_AP_3510.JPG",
    category: "Kitchen Gadgets",
    description: "A molded emerald base and built-in suction feet keep this scraper planted as you shave coconut for chutneys, sweets, and curries.",
    features: [
      "Molded ABS body with integrated suction pads",
      "Wide platform doubles as a drip tray for coconut water",
      "Arching serrated blade glides smoothly across coconut flesh",
      "Side knob releases the suction seal instantly",
      "High-contrast color is easy to spot in a busy kitchen",
      "Rinses clean under running water—no tiny crevices",
      "Compact enough to store vertically to save space"
    ]
  },
  {
    id: "30",
    title: "Polished Edge Coconut Board",
    price: "₹76.99",
    image: "/lovable-uploads/_AP_3513.JPG",
    category: "Kitchen Gadgets",
    description: "This fully polished board with aqua feet brings modern flair to traditional coconut grating. The gentle arch keeps your knuckles clear while you work.",
    features: [
      "High-polish stainless board resists pitting and odors",
      "Curved handle offers comfortable leverage",
      "Removable toothed wheel delivers both coarse and fine textures",
      "Silicone feet grip marble and laminate surfaces",
      "Low-slung profile fits easily in pantry shelves",
      "Ideal for coconut, almonds, chocolate, and more",
      "Quick rinse cleanup—no electricity required"
    ]
  },
  {
    id: "31",
    title: "Modern Angle Potato Masher",
    price: "₹54.99",
    image: "/lovable-uploads/_AP_3487.JPG",
    category: "Kitchen Accessories",
    description: "Designed for compact kitchens, this angled masher features a perforated stainless head that slips neatly along saucepan corners to eliminate lumps.",
    features: [
      "Angled plate reaches pot edges without scratching",
      "Perforated head creates silky mashed potatoes and root veg",
      "Slim tubular handle saves drawer space",
      "Built-in guard keeps hands elevated over hot steam",
      "Single-piece stainless build resists rust and odors",
      "Lightweight yet sturdy for everyday cooking",
      "Dishwasher-safe for effortless cleanup"
    ]
  },
  {
    id: "32",
    title: "Square Column Vegetable Masher",
    price: "₹57.99",
    image: "/lovable-uploads/_AP_3492.JPG",
    category: "Kitchen Accessories",
    description: "This architectural masher trades curves for clean lines. The square column handle offers a confident grip while the broad perforated base powers through dal, beans, and sweet potatoes.",
    features: [
      "Square handle prevents rolling on the counter",
      "Large perforated base speeds up batch mashing",
      "Seamless welds give the tool a minimalist look",
      "Weight-balanced design reduces wrist fatigue",
      "Perfect for mashed potatoes, sabzi, and baby food",
      "Mirror finish wipes clean without effort",
      "Hanging ring keeps it within reach"
    ]
  },
  {
    id: "33",
    title: "Classic Round Base Masher",
    price: "₹49.99",
    image: "/lovable-uploads/_AP_3495.JPG",
    category: "Kitchen Accessories",
    description: "A timeless cylindrical handle and radial cutouts give this masher heritage charm with modern durability—ideal for everyday meal prep.",
    features: [
      "Circular plate with radial slots prevents suction",
      "Tall handle keeps knuckles away from hot pots",
      "Made from food-grade stainless steel",
      "Balanced weight delivers smooth downward pressure",
      "Compatible with non-stick cookware when used gently",
      "Integrated finger rest improves control",
      "Safe for dishwasher racks"
    ]
  },
  {
    id: "34",
    title: "Heritage Wood & Steel Masher",
    price: "₹64.99",
    image: "/lovable-uploads/_AP_3496.JPG",
    category: "Kitchen Accessories",
    description: "Warm teak-inspired wood meets polished steel in this countertop-worthy masher. It's perfect for rustic kitchens that crave artisanal accents.",
    features: [
      "Ergonomic wooden handle sealed with food-safe oil",
      "Square perforated base handles dense veggies",
      "Stainless shaft won’t corrode over time",
      "Comfortable grip for extended mashing sessions",
      "Adds a touch of craft style when left on display",
      "Works equally well for fruits, potatoes, and legumes",
      "Hand-wash handle to maintain its natural finish"
    ]
  },
  {
    id: "35",
    title: "Elevated Wire-Frame Masher",
    price: "₹59.99",
    image: "/lovable-uploads/_AP_3485.JPG",
    category: "Kitchen Accessories",
    description: "This elevated masher combines a geometric handle with four-wire reinforcement for maximum leverage while staying featherlight.",
    features: [
      "Raised wire legs prevent the base from sticking",
      "Square perforated plate covers large surface area",
      "Hollow handle keeps the tool lightweight",
      "Durable welds withstand heavy-duty use",
      "Ideal for mashing root vegetables or avocados",
      "Minimalist profile complements modern cookware",
      "Dishwasher-safe stainless construction"
    ]
  },
  {
    id: "36",
    title: "Monolith Square Masher",
    price: "₹52.99",
    image: "/lovable-uploads/_AP_3482.JPG",
    category: "Kitchen Accessories",
    description: "A sleek square-column handle rises from a perforated base, giving this masher museum-worthy lines plus the heft to tame potatoes, pumpkin, or rajma.",
    features: [
      "Square-column grip offers anti-roll stability",
      "Perforated stainless plate delivers ultra-smooth mash",
      "Integrated steam guard shields fingers from heat",
      "One-piece construction wipes clean in seconds",
      "Compact profile stands upright for storage",
      "Perfect for potatoes, lentils, and baby food",
      "Dishwasher-safe and rust resistant"
    ]
  },
  {
    id: "37",
    title: "Color Pop Mini Masher Set",
    price: "₹119.99",
    originalPrice: "₹139.99",
    image: "/lovable-uploads/_AP_3466.JPG",
    category: "Kitchen Accessories",
    description: "Bright silicone halos and identical round bases make this four-piece masher set ideal for family kitchens, food stylists, or café prep lines.",
    features: [
      "Set includes four mashers with color-coded grips",
      "Radial-cut base prevents suction in silky mash",
      "Compact size perfect for smaller saucepans",
      "Hanging loop keeps each tool easy to identify",
      "Food-grade silicone accents stay cool to the touch",
      "Great for guacamole bars, mashed potatoes, or baby purées",
      "Dishwasher-safe stainless steel construction"
    ]
  },
  {
    id: "38",
    title: "Hand-Turned Round Base Masher",
    price: "₹62.99",
    image: "/lovable-uploads/_AP_3470.JPG",
    category: "Kitchen Accessories",
    description: "A smooth hand-turned wooden handle crowns this round-base masher, blending artisanal warmth with everyday durability.",
    features: [
      "Wide radial base smooths out lumps in seconds",
      "Handcrafted wood handle provides a natural grip",
      "Stainless shaft resists staining and odors",
      "Ideal for mashed potatoes, paneer bhurji, or fruits",
      "Adds rustic charm when displayed on countertops",
      "Balanced weight minimizes wrist strain",
      "Hand wash handle; metal components are dishwasher-safe"
    ]
  },
  {
    id: "39",
    title: "Heritage Oak Swirl Masher",
    price: "₹64.99",
    image: "/lovable-uploads/_AP_3476.JPG",
    category: "Kitchen Accessories",
    description: "Rich wood grain and a polished round base give this masher heirloom appeal, perfect for festive cooking and countertop display.",
    features: [
      "Solid wood handle with comfortable palm swell",
      "Circular stainless plate features deep swirl slots",
      "Great for potatoes, pumpkin mash, or fruit compotes",
      "Stainless post is rust-resistant and odor-proof",
      "Looks beautiful alongside wooden boards and bowls",
      "Sturdy enough for everyday restaurant prep",
      "Quick rinse cleanup; oil the handle occasionally"
    ]
  },
  {
    id: "40",
    title: "Cobalt Pantry Keeper Set",
    price: "₹69.99",
    image: "/cobalt_pantry_keeper.jpg",
    category: "Storage Solutions",
    description: "Bright cobalt lids crown this five-piece pantry set, pairing frosted bodies with airtight seals to keep lentils, pasta, and snacks fresh and organized.",
    features: [
      "Includes five stackable containers in graduated sizes",
      "Snap-tight lids protect against moisture and pests",
      "Semi-transparent walls show fill levels at a glance",
      "Oval footprint tucks neatly against pantry walls",
      "BPA-free plastic is safe for family kitchens",
      "Lids and bases nest to save cabinet space",
      "Dishwasher safe (top rack) for quick cleaning"
    ]
  },
  {
    id: "41",
    title: "Gourmet Trigger Cookie & Chakli Press",
    price: "₹149.99",
    originalPrice: "₹179.99",
    image: "/gourmet_trigger_press.jpg",
    category: "Kitchen Gadgets",
    description: "From buttery cookies to festive chaklis, this mirror-finish trigger press delivers bakery-perfect shapes with a squeeze of the ergonomic handle.",
    features: [
      "Trigger mechanism dispenses consistent dough ribbons",
      "Polished stainless barrel resists staining and odors",
      "Top plunger reloads dough without disassembly",
      "Includes decorative discs for sweet and savory treats",
      "Ergonomic grip reduces wrist fatigue",
      "Compact enough to store in utensil drawers",
      "Disassembles quickly for thorough cleaning"
    ]
  },
  {
    id: "42",
    title: "Citrus Twist Slow Juicer",
    price: "₹139.99",
    image: "/lovable-uploads/_AP_4216.JPG",
    category: "Kitchen Gadgets",
    description: "Hand-crank your way to pulp-free orange juice with this countertop slow juicer featuring an anti-drip spout and locking suction base.",
    features: [
      "Hand-powered auger extracts maximum juice",
      "Wide hopper fits whole citrus segments",
      "Anti-drip spout keeps counters spotless",
      "Suction base locks to marble or tile",
      "Detachable parts rinse clean in seconds",
      "Compact profile stores easily when not in use",
      "Includes cup with measurement marks"
    ]
  },
  {
    id: "43",
    title: "Ruby Press Pomegranate Juicer",
    price: "₹149.99",
    image: "/lovable-uploads/_AP_4184.JPG",
    category: "Kitchen Gadgets",
    description: "Specially geared for tough fruits, this ruby-themed juicer powers through pomegranate arils and berries to deliver vibrant, nutrient-rich juice.",
    features: [
      "High-torque auger crushes seeds without heating",
      "Dual-stage filter separates pulp and foam",
      "Locking base switch secures the unit mid-use",
      "Clear body lets you monitor the extraction",
      "Ideal for pomegranate, grapes, and mixed berries",
      "Easy-turn crank with slip-resistant handle",
      "All food-contact parts are BPA-free"
    ]
  },
  {
    id: "44",
    title: "Pro Cookie Disc Expansion Kit",
    price: "₹59.99",
    image: "/lovable-uploads/Pro Cookie Disc Expansion Kit.JPG",
    category: "Kitchen Accessories",
    description: "Swap up your cookie press repertoire with this thirteen-disc expansion kit, laser-cut for sharp details and bundled with a matching trigger barrel.",
    features: [
      "Set of 13 stainless discs plus polished barrel",
      "Shapes include florals, braids, and classic sticks",
      "Precision-cut openings ensure clean dough release",
      "Compatible with most trigger-style presses",
      "Numbered discs for easy recipe references",
      "Comes in a velvet pouch for safe storage",
      "Dishwasher safe pieces for quick cleanup"
    ]
  },
  {
    id: "45",
    title: "Satin Steel Pastry Board",
    price: "₹79.99",
    image: "/lovable-uploads/Satin Steel Pastry Board.JPG",
    category: "Kitchen Accessories",
    description: "Roll out rotis, fondant, or laminated dough on this satin-finished stainless board featuring rounded edges and a cool-to-the-touch surface.",
    features: [
      "Brushed steel stays naturally cool for pastry work",
      "Rounded corners are gentle on countertops",
      "Non-porous surface wipes clean without stains",
      "Slim 3mm profile slides beside cutting boards",
      "Doubles as a chic cheese or dessert platter",
      "Scratch-resistant finish stands up to rolling pins",
      "Dishwasher safe for deep sanitizing"
    ]
  },
  {
    id: "46",
    title: "Blush Basket Trio",
    price: "₹49.99",
    image: "/lovable-uploads/_AP_4175.JPG",
    category: "Organization",
    description: "Woven-look blush baskets corral bath products, office supplies, or craft essentials. Handles make it easy to shuttle them room to room.",
    features: [
      "Three nesting baskets with ventilated weave",
      "Soft-touch matte finish resists scuffs",
      "Built-in handles for quick grab-and-go",
      "Perfect for vanity shelves, drawers, or desks",
      "Flexible plastic keeps its shape without cracking",
      "Stackable design saves storage space",
      "Wipes clean with mild soap"
    ]
  },
  {
    id: "47",
    title: "Azure Pantry Keeper Set",
    price: "₹69.99",
    image: "/lovable-uploads/Azure Pantry Keeper Set.JPG",
    category: "Storage Solutions",
    description: "Keep grains, pasta, and snacks fresh with this frosted container quintet featuring signature azure lids and a slim, space-saving silhouette.",
    features: [
      "Five containers sized for pulses, cereal, and snacks",
      "Snap-fit lids seal in freshness",
      "Frosted bodies hide fingerprints yet show contents",
      "Modular design maximizes shelf real estate",
      "BPA-free, food-safe plastic",
      "Lids nest for compact storage",
      "Top-rack dishwasher safe"
    ]
  },
  {
    id: "48",
    title: "Coastal Basket Trio",
    price: "₹54.99",
    image: "/coastal_basket_trio.jpg",
    category: "Organization",
    description: "Bright blue baskets bring breezy energy to countertops. Use them for fruit, pantry packets, or entryway odds and ends.",
    features: [
      "Set of three baskets in complementing sizes",
      "Perforated weave promotes airflow for produce",
      "Rounded rims comfortable to carry",
      "Durable plastic won’t warp or absorb odors",
      "Ideal for pantry, bathroom, or playroom storage",
      "Nests inside each other when not in use",
      "Easy-wipe surface for fast cleanup"
    ]
  },
  {
    id: "49",
    title: "Mix & Match Basket Pack",
    price: "₹59.99",
    image: "/lovable-uploads/_AP_4172.JPG",
    category: "Organization",
    description: "Alternate pink and teal baskets to color-code every shelf. The set includes two sizes so you can separate snacks, toiletries, or craft pieces with ease.",
    features: [
      "Two colorways help categorize contents instantly",
      "Smooth interior protects delicate items",
      "Ventilated pattern keeps produce fresh",
      "Stackable when empty to save space",
      "Lightweight yet sturdy construction",
      "Perfect for fridge zones, closets, or kids’ rooms",
      "Rinse or wipe clean—no liners required"
    ]
  },
  {
    id: "50",
    title: "Signature Steel Pastry Slab",
    price: "₹89.99",
    image: "/lovable-uploads/_AP_4163.JPG",
    category: "Cutting Tools",
    description: "This ultra-smooth stainless pastry slab keeps dough cool and doubles as a sleek serving board for cheeses or petit fours.",
    features: [
      "Full stainless construction resists stains and odors",
      "Naturally cool surface ideal for tempering chocolate",
      "Rounded edges protect countertop surfaces",
      "Non-porous board cleans up with one wipe",
      "Slim profile slides beside baking sheets",
      "Doubles as a presentation platter",
      "Dishwasher safe for effortless sanitation"
    ]
  },
  {
    id: "51",
    title: "Chef Handle Steel Board - Petite",
    price: "₹74.99",
    image: "/lovable-uploads/_AP_4164.JPG",
    category: "Cutting Tools",
    description: "Compact yet mighty, this handled steel board is perfect for chopping aromatics or serving bar snacks straight from prep.",
    features: [
      "Integrated handle for easy lifting and hanging",
      "Brushed finish hides knife marks",
      "Rounded corners keep storage safe",
      "Non-reactive surface won’t retain onion or garlic odors",
      "Lightweight design great for outdoor grilling stations",
      "Doubles as a plating tray for canapés",
      "Dishwasher friendly"
    ]
  },
  {
    id: "52",
    title: "Garden Prep Steel Board",
    price: "₹79.99",
    image: "/lovable-uploads/_AP_4165.JPG",
    category: "Cutting Tools",
    description: "Prep salads and garnishes on this elongated steel board with a wave-grip handle that stays comfortable even when wet.",
    features: [
      "Wave-grip handle ensures secure carry",
      "Large surface accommodates full lettuce heads",
      "Knife-friendly brushed texture",
      "Non-porous steel prevents cross-contamination",
      "Doubles as a serving board for charcuterie",
      "Thin build stores upright behind appliances",
      "Oven-safe for use as a hot trivet"
    ]
  },
  {
    id: "53",
    title: "Pro Series Utility Board",
    price: "₹82.99",
    image: "/lovable-uploads/_AP_4166.JPG",
    category: "Cutting Tools",
    description: "The pro favorite for butchering and carving, this handled utility board shrugs off stains and goes from prep to presentation seamlessly.",
    features: [
      "Generous surface supports carving roasts",
      "Handle cutout doubles as a hanging hook",
      "Rounded corners prevent chipping",
      "Sanitary stainless won’t harbor bacteria",
      "Safe for freezer or oven chill techniques",
      "Great backdrop for sushi or dessert spreads",
      "Dishwasher safe"
    ]
  },
  {
    id: "54",
    title: "Wave Handle Charcuterie Board",
    price: "₹84.99",
    image: "/lovable-uploads/_AP_4170.JPG",
    category: "Cutting Tools",
    description: "Elevate grazing tables with this wave-handle steel board—sleek enough for entertaining yet tough enough for daily chopping.",
    features: [
      "Wave-cut handle offers improved grip",
      "Mirror-finish surface highlights plated treats",
      "Resists stains from beets, turmeric, or wine",
      "Safe for knives and pastry cutters alike",
      "Use as a cold plate after chilling in fridge",
      "Ultra-thin silhouette saves drawer space",
      "Easy to sanitize in the dishwasher"
    ]
  },
  {
    id: "55",
    title: "Crescent Crimp Dumpling Mold",
    price: "₹39.99",
    image: "/lovable-uploads/_AP_4135.JPG",
    category: "Kitchen Gadgets",
    description: "Create neatly pleated dumplings, gujiyas, or empanadas with this polished crescent mold that seals fillings in one quick press.",
    features: [
      "Integrated hinge keeps halves aligned",
      "Fluted edge crimps dough for a decorative finish",
      "Food-grade stainless resists rust and odors",
      "Perfect for sweet or savory fillings",
      "Compact size tucks into utensil drawers",
      "Dishwasher safe for easy cleanup",
      "Doubles as a ravioli stamp in a pinch"
    ]
  },
  {
    id: "56",
    title: "Precision Herb & Nut Crusher",
    price: "₹49.99",
    image: "/lovable-uploads/_AP_4137.JPG",
    category: "Kitchen Accessories",
    description: "This micro-toothed crusher breaks down herbs, garlic, and nuts with a few twists, delivering flavor-packed toppings on demand.",
    features: [
      "Stainless teeth crush without bruising",
      "Ergonomic tubular handle with hanging loop",
      "Great for garlic, ginger, nuts, or biscuit crumbs",
      "Open-grid head rinses clean in seconds",
      "Compact size ideal for bar carts and camping",
      "One-piece steel body won’t warp",
      "Dishwasher safe"
    ]
  },
  {
    id: "57",
    title: "Cobalt Square Pantry Trio",
    price: "₹64.99",
    image: "/lovable-uploads/_AP_4140.JPG",
    category: "Storage Solutions",
    description: "Square canisters with cobalt lids bring order to bulk grains, pulses, and baking supplies while maximizing shelf depth.",
    features: [
      "Set of three stack-friendly capacities",
      "Snap-lock lids keep humidity out",
      "Clear walls show contents at a glance",
      "Wide-mouth opening for easy scooping",
      "BPA-free plastic safe for pantry staples",
      "Lightweight yet durable for daily use",
      "Top-rack dishwasher safe lids"
    ]
  },
  {
    id: "58",
    title: "Crimson Square Pantry Trio",
    price: "₹64.99",
    image: "/lovable-uploads/_AP_4144.JPG",
    category: "Storage Solutions",
    description: "Add a pop of red to your shelves with this square container trio—perfect for color-coding rice, lentils, and snacks.",
    features: [
      "Three nesting containers with vibrant lids",
      "Airtight seal guards against pantry pests",
      "Square base fits snugly in cabinets",
      "Graduated measurements molded inside",
      "Stain-resistant plastic stays crystal clear",
      "Ideal for bulk spices, grains, or pet treats",
      "Easy-clean pieces stack when not in use"
    ]
  },
  {
    id: "59",
    title: "Solo Serve Citrus Juicer",
    price: "₹129.99",
    image: "/lovable-uploads/_AP_4153.JPG",
    category: "Kitchen Gadgets",
    description: "This personal-size hand-crank juicer delivers café-quality orange juice without plugs, pairing a locking suction base with a drip-free spout.",
    features: [
      "Hand-crank auger extracts maximum juice",
      "Compact hopper sized for single servings",
      "Transparent chamber shows pulp level",
      "Quick-lock base keeps the unit steady",
      "Included glass doubles as a serving cup",
      "All plastic parts are BPA-free",
      "Disassembles for a thorough rinse"
    ]
  },
  {
    id: "60",
    title: "Slimline Oval Pantry Set",
    price: "₹74.99",
    image: "/lovable-uploads/_AP_4106.JPG",
    category: "Storage Solutions",
    description: "Five frosted oval canisters with cobalt lids keep pasta, lentils, and dry fruits fresh while maximizing narrow shelf space.",
    features: [
      "Includes five stackable oval sizes",
      "Snap-fit lids seal in freshness",
      "Semi-transparent walls reveal contents",
      "Slim profile fits refrigerator doors",
      "BPA-free plastic is food safe",
      "Bases nest for compact storage",
      "Top-rack dishwasher safe"
    ]
  },
  {
    id: "61",
    title: "Charming Bloom Canister Set",
    price: "₹79.99",
    image: "/lovable-uploads/Charming Bloom Canister Set.JPG",
    category: "Storage Solutions",
    description: "Bring artful color to your pantry with this floral canister family, perfect for pulses, cookies, or festive snacks.",
    features: [
      "Five graduated jars with airtight lids",
      "Vibrant floral print brightens shelves",
      "Wide mouths make scooping effortless",
      "Ribbed lids provide a secure grip",
      "Clear bodies let you gauge quantities",
      "Ideal for dry fruits, candies, or spices",
      "Easy-clean plastic resists stains"
    ]
  },
  {
    id: "62",
    title: "Ruby Nesting Serveware Set",
    price: "₹84.99",
    image: "/lovable-uploads/_AP_4118.JPG",
    category: "Kitchen Accessories",
    description: "A tower of six ruby bowls covers everything from prep to potluck, each with snap-on white lids for leak-free transport.",
    features: [
      "Set of six nesting round containers",
      "Snap-on lids prevent spills on the go",
      "Bold red finish adds flair to tabletops",
      "Microwave-safe (without lids)",
      "Ideal for leftovers, salads, or marinating",
      "Space-saving stack when stored",
      "Dishwasher safe for daily use"
    ]
  },
  {
    id: "63",
    title: "Rosy Market Basket Trio",
    price: "₹54.99",
    image: "/lovable-uploads/_AP_4123.JPG",
    category: "Organization",
    description: "Pink ventilated baskets keep produce, toys, or pantry packets tidy while adding a cheerful pop to countertops.",
    features: [
      "Set of three perforated baskets",
      "Handles make carrying effortless",
      "Breathable weave keeps fruits fresh",
      "Durable plastic resists warping",
      "Ideal for pantry, fridge, or vanity storage",
      "Nest together when not in use",
      "Wipes clean in seconds"
    ]
  }
];

export const categories = [
  "All Products",
  "Storage Solutions",
  "Kitchen Accessories",
  "Kitchen Gadgets",
  "Cutting Tools",
  "Kitchen Organization",
  "Food Preservation",
  "Cleaning Tools",
  "Organization"
];