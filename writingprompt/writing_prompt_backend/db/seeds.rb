# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#
Genre.create({title: "Sci-Fi"})
Genre.create({title: "Romance"})
Genre.create({title: "Fantasy"})
Genre.create({title: "Mystery"})
Genre.create({title: "Thriller"})
Genre.create({title: "Historical Fiction"})


Prompt.create({content: "The year is 1910. Adolf Hitler, a struggling artist, has fought off dozens of assasination attemps by well meaning time travelers, but this one is different. This traveller doesn't want to kill Hitler, he wants to teach him to paint. He pulls off his hood to reveal the frizzy afro of Bob Ross.", genre_id:6})
Prompt.create({content: "When you die, you appear in a cinema with a number of other people who look like you. You find out that they are your previous reincarnations, and soon you all begin watching your next life on the big screen.", genre_id:1})
Prompt.create({content: "It's 3 AM. An official phone alert wakes you up. It says 'DO NOT LOOK AT THE MOON'. You have hundreds of notifications. Hundreds of random numbers are sending 'It's a beautiful night tonight. Look outside.'", genre_id:5})
Prompt.create({content: "A woman has been dating guy after guy, but it never seems to work out. She’s unaware that she’s actually been dating the same guy over and over; a shapeshifter who’s fallen for her, and is certain he’s going to get it right this time.", genre_id:2})
Prompt.create({content: "Harry, Ron and Hermione aren't actually wizards or in the wizarding world. They are high on drugs and hallucinating throughout their journeys. The cops are Dementors and Dumbledore is a crazy old homeless man.", genre_id:3})
Prompt.create({content: "You're happily going about your day when you vanish in a cloud of smoke. Suddenly, you're standing in a ring of candles. A sorcerer holding a tome looks pleased at your arrival. Turns out Earth is Hell, we're the demons, and you've just been summoned.", genre_id:3})
Prompt.create({content: " Pennywise picks on the wrong kids: Malcolm, Reese and Dewey", genre_id:5})
Prompt.create({content: "You find yourself being the last person on Earth without any knowledge of where others have gone too. To keep your sanity of knowing there used to be others, you open up a great deal of graves only to find out there is nobody in them.", genre_id:4})



Story.create({title: "new story", content: "sum bullshit", user_id: 14, prompt_id: 3})
Story.create({title: "new new story", content: "sum more bullshit", user_id: 14, prompt_id: 2})
Story.create({title: "new new new story", content: "sum more fucking bullshit", user_id: 14, prompt_id: 5})
