export type Category = "water" | "energy" | "waste";

export interface Tip {
  id: string;
  category: Category;
  title: string;
  description: string;
}

export const tips: Tip[] = [
  { id: "w1", category: "water", title: "Turn off tap while brushing", description: "Save up to 6 liters of water every minute by closing the tap while brushing your teeth." },
  { id: "w2", category: "water", title: "Take shorter showers", description: "Cutting your shower by 2 minutes can save over 40 liters of water per day." },
  { id: "w3", category: "water", title: "Fix leaky faucets", description: "A single dripping tap can waste more than 75 liters of water per week." },
  { id: "w4", category: "water", title: "Reuse pasta water for plants", description: "Once cooled, starchy water gives houseplants extra nutrients." },

  { id: "e1", category: "energy", title: "Unplug idle electronics", description: "Phantom loads can account for up to 10% of your home's electricity use." },
  { id: "e2", category: "energy", title: "Switch to LED bulbs", description: "LEDs use 75% less energy and last 25× longer than incandescent bulbs." },
  { id: "e3", category: "energy", title: "Wash clothes in cold water", description: "About 90% of a washing machine's energy goes to heating water." },
  { id: "e4", category: "energy", title: "Air-dry your laundry", description: "Skip the dryer when you can — sunshine is free and gentle on fabrics." },

  { id: "r1", category: "waste", title: "Carry a reusable bottle", description: "One reusable bottle replaces hundreds of single-use plastics each year." },
  { id: "r2", category: "waste", title: "Compost food scraps", description: "Up to 30% of household waste can be composted into rich soil." },
  { id: "r3", category: "waste", title: "Bring your own bag", description: "Reusable bags eliminate hundreds of plastic bags from landfills annually." },
  { id: "r4", category: "waste", title: "Choose package-free", description: "Buy in bulk or refill stations to skip unnecessary packaging." },
];
