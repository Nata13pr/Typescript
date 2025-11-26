"use strict";
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let myStringArray = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git_Version_Control",
    "Flexbox_Layout",
    "Grid_System",
    "Responsive_Design",
    "Frontend_Development",
    "Backend_Development",
    "Vue_Js_Framework",
    "React_Js_Library",
    "Tailwind_CSS",
    "Web_Performance",
    "Accessibility_A11y",
    "Testing_Unit",
    "Debugging_Console",
    "Ternary_Operator",
    "Post_Increment",
    "Pre_Increment",
    "Falsy_Values"
];
let ii = 0;
while (ii < myStringArray.length) {
    document.write(`<h1>${myStringArray[ii]}-індекс-${[ii]}</h1>`);
    ii += 1;
}
