// Generate content in the console every one minute, line by line, about thoughts that are actually killing me and eating me.
const mensajes = [
  "i'm so tired of this world",
  "My addctns are consuming me",
  "I can't escape this cycle",
  "I feel like I'm drowning in my own thoughts",
  "I have hope, but she plucks off the petals every week.",
  "I want to be free from this pain",
  "I wish I could find a way out",
  "I feel like I'm losing myself",
  "I want to be happy, but it feels so far away",
  "I wish I could find a way to heal",
  "I want her",
  "I don't know if i need her really, but i want her",
  "I...",
  "I just want to be listened, not loved, or well yeah too..",
  "Look...",
  "Maybe if you're reading the console...",
  "Maybe you can understand me a little bit more",
  "I-I'm not sure if i can keep going like this",
  "I can try harder but i don't want to feel embarrased",
  "I want a continue button for every response",
  "I can't kill the THOUGHTS",
  "Should i just end it all? I don't know, but i want to",
  "I don't know if get it really to understands me, but i want her to",
  "I want to show her my position between all",
  "Pain.",
  "I want to be free from this pain",
  "I wish I could find a way out",
  "I feel like I'm losing her twice",
  "Maybe.",
  "Maybe..",
  "Maybe...",
  "Maybe i'm the problem",
  "Maybe i'm the one who needs to change",
  "But i need a kind of feedback, i need to know if i'm doing good or bad",
  "But i want to her to be better to",
  "I want settings",
  "And i know that i don't exist anymore for you in this world",
  "I want to find the key between problems without answers",
  "I miss you.",
  "Console.log(' > Leaving the chat')",
  "> Leaving the chat"
];

let i = 0;

function enviarMensaje() {
  if (i >= mensajes.length) return;

  console.log(mensajes[i]);
  i++;

  // Tiempo aleatorio entre 7 y 15 segundos
  const tiempo = Math.floor(Math.random() * (15000 - 7000 + 1)) + 7000;

  setTimeout(enviarMensaje, tiempo);
}

// iniciar
enviarMensaje();