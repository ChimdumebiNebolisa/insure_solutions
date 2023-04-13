// Define chatbot messages
const chatbotMessages = [
    { question: "What's your name?", answer: "My name is Chatbot." },
    { question: "What can you do?", answer: "I can answer your questions." },
    { question: "How old are you?", answer: "I'm a virtual assistant, I don't have an age." },
    { question: "Where are you from?", answer: "I was created by OpenAI." },
    { question: "Can you tell me a joke?", answer: "Why did the chicken cross the road? To get to the other side!" },
  ];
  
  // Function to show the chatbot
  function showChatbot() {
    document.getElementById("chatbot").style.display = "block";
  }
  
  // Function to hide the chatbot
  function hideChatbot() {
    document.getElementById("chatbot").style.display = "none";
  }
  
  // Function to send a message to the chatbot
  function sendMessage() {
    // Get input value
    const input = document.getElementById("chatbot-input").value;
    
    // Add user message to chat
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.innerText = input;
    document.getElementById("chatbot-messages").appendChild(userMessageElement);
    
    // Clear input
    document.getElementById("chatbot-input").value = "";
    
    // Find matching question
    const matchingQuestion = chatbotMessages.find((message) => {
      return message.question.toLowerCase() === input.toLowerCase();
    });
    
    // If matching question found, add answer to chat
    if (matchingQuestion) {
      const chatbotMessageElement = document.createElement("div");
      chatbotMessageElement.classList.add("chatbot-message");
      chatbotMessageElement.innerText = matchingQuestion.answer;
      document.getElementById("chatbot-messages").appendChild(chatbotMessageElement);
    }
    
    // Prevent form submission
    return false;
  }
  