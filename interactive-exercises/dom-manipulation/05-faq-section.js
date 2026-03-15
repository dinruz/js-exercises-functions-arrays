// 1 

const container = document.querySelector("#faq-container");

// 2

const heading = document.createElement("h2");
heading.textContent = "Frequently Asked Questions";
heading.classList.add('faq-heading');
container.appendChild(heading);

// 3

const question = document.createElement("h3");
question.textContent = "What is DOM Manipulation?";
question.classList.add ("question"); 
container.appendChild(question);

// 4

const answer = document.createElement("p");
answer.textContent ="DOM stands for Document Object Model. \n It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content."
answer.classList.add('answer');
container.appendChild(answer);

// 5

const questionTwo = document.createElement("h3");
const answerTwo = document.createElement("p");
questionTwo.textContent = "Why is it important?";
answerTwo.textContent = "DOM manipulation allows web developers to create dynamic and interactive web pages without needing to reload the page. This is the foundation of modern web applications."
container.append(questionTwo, answerTwo);
