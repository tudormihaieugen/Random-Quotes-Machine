const quotes = [
  {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "― Mark Twain"
  },
  {
      quote: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "― Oscar Wilde"
  },
  {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "― Mahatma Gandhi"
  },
  {
      quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "― Martin Luther King Jr"
  },
  {
      quote: "We accept the love we think we deserve.",
      author: "― Stephen Chbosky"
  },
  {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "― Ralph Waldo Emerson"
  },
  {
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      author: "― J.K. Rowling, Harry Potter and the Chamber of Secrets"
  },
  {
      quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
      author: "― Albert Einstein"
  },
  {
      quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "― Bill Keane"
  },
  {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "― Thomas A. Edison"
  },
  {
      quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      author: "― Albert Einstein"
  },
  {
      quote: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
      author: "― Dr. Seuss"
  },
  {
      quote: "A day without sunshine is like, you know, night.",
      author: "― Steve Martin"
  },
  {
      quote: "That which does not kill us makes us stronger.",
      author: "― Friedrich Nietzsche"
  },
  {
      quote: "For every minute you are angry you lose sixty seconds of happiness.",
      author: "― Ralph Waldo Emerson"
  },
  {
      quote: "I have always imagined that Paradise will be a kind of library.",
      author: "― Jorge Luis Borges"
  },
  {
      quote: "Sometimes the questions are complicated and the answers are simple.",
      author: "― Dr. Seuss"
  },
  {
      quote: "Life isn't about finding yourself. Life is about creating yourself.",
      author: "― George Bernard Shaw"
  },
  {
      quote: "Logic will get you from A to Z; imagination will get you everywhere.",
      author: "― Albert Einstein"
  },
  {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "― Winston S. Churchill"
  },
  {
      quote: "It matters not what someone is born, but what they grow to be.",
      author: "― J.K. Rowling, Harry Potter and the Goblet of Fire"
  },
  {
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "― Albert Einstein"
  },
  {
      quote: "Not all those who wander are lost",
      author: "― J.R.R. Tolkien, The Fellowship of the Ring"
  },
  {
      quote: "The reason I talk to myself is because I’m the only one whose answers I accept.",
      author: "― George Carlin"
  },
  {
      quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
      author: "― John Lennon"
  },
  {
      quote: "Anyone who has never made a mistake has never tried anything new.",
      author: "― Albert Einstein"
  },
  {
      quote: "It takes courage to grow up and become who you really are.",
      author: "― Unknown"
  },
  {
      quote: "Some day you will be old enough to start reading fairy tales again.",
      author: "― C.S. Lewis"
  },
  {
      quote: "A lie can travel half way around the world while the truth is putting on its shoes.",
      author: "― Mark Twain"
  },
  {
      quote: "Knowing yourself is the beginning of all wisdom",
      author: "― Aristotle"
  },
  {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "― Robert Frost"
  },
  {
      quote: "Be the change that you wish to see in the world.",
      author: "― Mahatma Gandhi"
  },
  {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "― Mae West"
  },
  {
      quote: "Be yourself, everyone else is already taken.",
      author: "― Oscar Wilde"
  },
  {
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "― Bernard M. Baruch"
  },
  {
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "― Amelia Earhart"
  },
  {
      quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "― Oprah Winfrey"
  },
  {
      quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "― Maya Angelou"
  },
  {
      quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "― Unknown"
  },
  {
      quote: "Everything has beauty, but not everyone can see.",
      author: "― Confucius"
  },
  {
      quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "― Jesus"
  },
  {
      quote: "Either you run the day, or the day runs you.",
      author: "― Jim Rohn"
  },
  {
      quote: "The only way to do great work is to love what you do.",
      author: "― Steve Jobs"
  },
  {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "― Vince Lombardi"
  },
  {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "― Steve Jobs"
  },
  {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "― Confucius"
  },
  {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "― Napoleon Hill"
  },
  {
      quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "― Chinese Proverb"
  },
  {
      quote: "Dreaming, after all, is a form of planning.",
      author: "― Gloria Steinem"
  },
  {
      quote: "Believe you can and you’re halfway there.",
      author: "― Theodore Roosevelt"
  },
  {
      quote: "Fall seven times and stand up eight.",
      author: "― Japanese Proverb"
  },
  {
      quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "― Aristotle"
  },
  {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "― Walt Disney"
  },
  {
      quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      author: "― Benjamin Franklin"
  },
  {
      quote: "Certain things catch your eye, but pursue only those that capture the heart.",
      author: "― Ancient Indian Proverb"
  },
  {
      quote: "Definiteness of purpose is the starting point of all achievement.",
      author: "― W. Clement Stone"
  },
  {
      quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "― Ayn Rand"
  },
  {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "― Joshua J. Marine"
  },
  {
      quote: "You miss one hundred percent of the shots you don't take.",
      author: "― Wayne Gretzky"
  },
  {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "― Mother Teresa"
  },
  {
      quote: "There are no beautiful surfaces without a terrible depth.",
      author: "― Friedrich Nietzsche"
  },
  {
      quote: "A sense of humour is the only divine quality of man.",
      author: "― Arthur Schopenhauer"
  },
  {
      quote: "When you reach the end of your rope, tie a knot in it and hang on.",
      author: "― Franklin D. Roosevelt"
  },
  {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "― Albert Einstein"
  },
  {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "― Charles Swindoll"
  },
  {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "― Chinese Proverb"
  },
  {
      quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "― Maya Angelou"
  },
  {
      quote: "Certain things catch your eye, but pursue only those that capture the heart.",
      author: "― Ancient Indian Proverb"
  },
  {
      quote: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "― Unknown"
  }
];

window.onload = init;
function init() {
  generateQuote();
}

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuoteData = quotes[randomIndex]
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
  let tumblrLink = "https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DZig%2BZiglar%26content%3DIf%2Byou%2Bcan%2Bdream%2Bit%252C%2Byou%2Bcan%2Bachieve%2Bit.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"

  // Quote
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat;

  // Author
  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += authorInApiFormat;

  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("tumblr-quote").href = tumblrLink;
}
