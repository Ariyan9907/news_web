function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() !== "") {
        const chatArea = document.getElementById('chat-area');
        
        // Add user's message
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        chatArea.appendChild(userMessage);
        
        // Scroll to the bottom of chat
        chatArea.scrollTop = chatArea.scrollHeight;

        // Clear input
        document.getElementById('user-input').value = '';
        
        // Simulate bot response after a delay
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = generateBotResponse(userInput);
            chatArea.appendChild(botMessage);
            
            // Scroll to the bottom of chat
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 1000);
    }
}
function generateBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Check for various keywords and respond accordingly
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (lowerInput.includes("help")) {
        return "Sure! I can help you with various tasks. What do you need assistance with?";
    } else if (lowerInput.includes("your name")) {
        return "I am a simple chatbot created to assist you!";
    } else if (lowerInput.includes("time")) {
        return "I'm unable to provide the current time, but you can check your device for the time.";
    } else if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
        return "You're welcome! Feel free to ask me anything else.";
    } else if (lowerInput.includes("weather")) {
        return "I cannot check the weather, but you can visit a weather website like weather.com.";
    } else if (lowerInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (lowerInput.includes("search option")) {
        return "Click in search bar and type the news content you want then click on search logo or press Enter";
    } else if (lowerInput.includes("how to search for news")) {
        return "Just type the topic you are interested in the search bar and press Enter or click the search icon.";
    } else if (lowerInput.includes("what topics can i search for")) {
        return "You can search for topics like Technology, Business, Sports, Politics, Entertainment, and Events.";
    } else if (lowerInput.includes("feedback")) {
        return "Yes, you can leave feedback by visiting the 'Feedback' section in the menu.";
    } else if (lowerInput.includes("what is todays news")) {
        return "You can check today's headlines on our homepage or by searching for 'Today's news' in the search bar.";
    } else if (lowerInput.includes("latest technology news")) {
        return "You can find the latest technology news by searching for 'Technology' or visiting the Technology section.";
    } else if (lowerInput.includes("business news")) {
        return "To get the latest business news, search for 'Business' or visit the Business section from the menu.";
    } else if (lowerInput.includes("how to use menu")) {
        return "Click on the menu icon (three bars) to open the navigation. From there, you can select different news categories.";
    } else if (lowerInput.includes("what is in the sidebar menu")) {
        return "The sidebar menu contains links to Technology, Business, Entertainment, Events, Sports, Politics, and Feedback sections.";
    } else if (lowerInput.includes("how to close menu")) {
        return "Click on the 'X' icon in the top-right corner of the sidebar menu to close it.";
    } else if (lowerInput.includes("who created this website")) {
        return "This website was created by a group of passionate developers to provide the latest news on various topics.";
    } else if (lowerInput.includes("what is your purpose")) {
        return "I am here to assist you with navigating the site, searching for news, and answering any general questions you may have.";
    } else if (lowerInput.includes("what can you do")) {
        return "I can help you search for news, guide you through the site's features, and answer general questions.";
    } else if (lowerInput.includes("tell me a joke")) {
        return "NO because you are a joke";
    } else if (lowerInput.includes("how are you")) {
        return "I'm just a bot, but thanks for asking! How can I help you today?";
    } else if (lowerInput.includes("exit") || lowerInput.includes("close")) {
        return "If you'd like to exit the chat, you can click the robot icon to minimize the chat window. Have a great day!";
    }  else {
        // Default response if input is not recognized
        return "Sorry, I don't understand that. Can you please ask something else?";
    }
}

