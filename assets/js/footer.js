document.getElementById("chatButton").addEventListener("click", function() {
  document.getElementById("chatbox").style.display = "flex";
});

document.querySelector(".close-chat").addEventListener("click", function() {
  document.getElementById("chatbox").style.display = "none";
});

function sendMessage(text = "") {
  let input = document.getElementById("chatInput");
  let message = text || input.value.trim();
  
  if (message === "") return;
  
  let chatBody = document.querySelector(".chat-body");
  let userMessage = `<p><strong>You:</strong> ${message}</p>`;
  chatBody.innerHTML += userMessage;

  setTimeout(() => {
    let reply = "";
    if (message.toLowerCase().includes("sell")) {
      reply = "You can sell your phone by visiting our Sell Phone page.";
    } else if (message.toLowerCase().includes("contact")) {
      reply = "You can contact support via our Contact Us page.";
    } else {
      reply = "Please visit our FAQ section for more information.";
    }
    
    let botReply = `<p><strong>Support:</strong> ${reply}</p>`;
    chatBody.innerHTML += botReply;
  }, 1000);

  input.value = "";
}
