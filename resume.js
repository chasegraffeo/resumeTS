var fullName = "Kenneth Chase Graffeo";
var career = "Software Developer";
var description = "Proud Father that Loves Life";
console.log("Name: " + fullName);
console.log("Career: " + career);
console.log("Description: " + description);
function space() {
    console.log(" ");
}
space();
console.log("Interests:");
var interests = [
    "* Anime",
    "* Video games",
    "* Building PC's",
    "* Capming",
    "* Hiking"
];
for (var i = 0; i < interests.length; i++) {
    console.log("" + interests);
}
space();
console.log("My Previous Experience:");
var position = [
    {
        company: "Publix",
        title: "Deli Clerk",
        description: "Fried Chicken, Cleaned, Maintained sales floor"
    },
    {
        company: "GDC",
        title: "Merchandiser",
        description: "Maintained qaulity products"
    }
];
function displayPosition(company, title, description) {
    console.log("* " + company + " - " + title + ": " + description);
}
for (var l = 0; l < position.length; l++) {
    displayPosition(position[l].company, position[l].title, position[l].description);
}
space();
console.log("My Skills:");
displaySkill("JavaScript", true);
displaySkill("HTML", false);
displaySkill("CSS", false);
displaySkill("Excel", false);
displaySkill("Cooking", true);
displaySkill("Photography", true);
function displaySkill(skillNa, isCool) {
    if (isCool === true) {
        console.log("* BAM: " + skillNa);
    }
    else {
        console.log("* " + skillNa);
    }
}
