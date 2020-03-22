const fullName: String = "Kenneth Chase Graffeo";
const career: String = "Software Developer";
const description: String = "Proud Father that Loves Life";

console.log(`Name: ${fullName}`);
console.log(`Career: ${career}`);
console.log(`Description: ${description}`);

function space() {
    console.log(` `);
  }

space()

console.log("Interests:");
let interests: String[] = [
  "* Anime",
  "* Video games",
  `* Building PC's`,
  "* Capming",
  "* Hiking"
];
for (let i = 0; i < interests.length; i++) {
  console.log(`${interests}`);
}

space()

console.log("My Previous Experience:");
interface Jobs {
  company: String;
  title: String;
  description: string;
}
let position: Array<Jobs> = [
  {
    company: "Publix",
    title: `Deli Clerk`,
    description: `Fried Chicken, Cleaned, Maintained sales floor`
  },
  {
    company: "GDC",
    title: `Merchandiser`,
    description: `Maintained qaulity products`
  }
];

function displayPosition(company: any, title: any, description: any) {
    console.log(`* ${company} - ${title}: ${description}`);
  }
  
  for (let l = 0; l < position.length; l++) {
    displayPosition(
      position[l].company,
      position[l].title,
      position[l].description
    );
  }
  
  space()

  console.log(`My Skills:`);

displaySkill(`JavaScript`, true);
displaySkill(`HTML`, false);
displaySkill(`CSS`, false);
displaySkill(`Excel`, false);
displaySkill(`Cooking`, true);
displaySkill(`Photography`, true);


function displaySkill(skillNa, isCool) {
    if (isCool === true) {
      console.log(`* BAM: ${skillNa}`);
    } else {
      console.log(`* ${skillNa}`);
    }
  }
  
 