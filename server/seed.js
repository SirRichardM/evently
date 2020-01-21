const { Event, User, Attending } = require('./models');

const seed = async () => {
  await Event.destroy({ where: {} })
  await User.destroy({ where: {} })
  await Attending.destroy({ where: {} });

  const event1 = await Event.create({
    title: "Presentation for p3",
    date: "January, 23, 2020",
    location: "GA, NY Campus",
    startTime: "11am",
    endTime: "11:15am",
    entry: "Free",
    image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
    category: "School",
    description: "Prepare to bask in the unending glory that is EVENTLY. A platform very similar to meet up but less advanced because we are n00bs",
    tagline: "A presentation to end all presentations"
  })
  const event2 = await Event.create({
    title: "Game Night",
    date: "January, 20th, 2020",
    location: "Barcade. ",
    startTime: "11am",
    endTime: "7pm",
    entry: "$15",
    image_url: "https://cdn.vox-cdn.com/thumbor/del40kXVNnljLwFEF64A-eFAZ-Y=/0x0:2000x1335/1200x0/filters:focal(0x0:2000x1335):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16209222/2019_05_02_Barcade_020.jpg",
    category: "Gaming",
    description: "Come join us for a night of drinking and video gaming. Tons of classic arcade games and great beers on tap. I heard they have food too. Wow. What a world! Entry includes $5 tokens and one drink.",
    tagline: ""
  })
  const event3 = await Event.create({
    title: "Real Estate Conference: How to sell",
    date: "January, 25, 2020",
    location: "Madison Square Garden",
    startTime: "10am",
    endTime: "2pm",
    entry: "$10",
    image_url: "https://crs.com/sf_images/default-source/attend-section/may-meetings_banner.jpeg?sfvrsn=65a35c4f_0",
    category: "Business",
    description: "Join us for speeches by Keller William, Barbara Corcoran and some other rich broker! Topics covered will range from how to turn friends into dollars and how to cheat the inspection so your seller gets their ridiculous price. Refreshments will be served but if you want besides chips and soda there will be an addintional charge. Sorry we didn't get rich by not being cheap.",
    tagline: "Don't worry you will be a millionaire soon"
  })

  const maleeha = await User.create({
    "username": "Maleeha",
    "password_digest": "$2b$11$jKeBUnZYoPIgRki.U5B5o.UMR6TtECB3e0HQvkwWVrse5JJBroC2C",
    "image_url": "https://i.imgur.com/j9j8hII.jpg",
    "description": "I like dollar pizza and crowded starbucks! I am  also partial to long commutes and quinoa filled lunches. I am told I am an excellent coder but I already knew that. I hope to find some great events to attend through evently.",
    "interests": "Pizza, Coding, Gaming, Pizza, Coding",
    "join_date": "Jan 17, 2020"
  })

  const richard = await User.create({
    "username": "Richard",
    "password_digest": "$2b$11$7zoiX9RizkmXwF0bZkPAYebA.yvzBJsRml.yI0XB8cNMrF/vvk99m",
    "image_url": "https://s3.amazonaws.com/nooklyn-pro/agents/26284/xlarge/newheadshot.jpeg",
    "description": "An annoying asshole by most accounts. I am good at overeating, wasting time on the internet and doing things I am too old to do. I hope to find some great events through our new platform evently!",
    "interests": "Gaming, Pizza, Generally Unhealthy Foods, Coding",
    "join_date": "Jan 17, 2020"
  })

  const sam = await User.create({
    "username": "Sam",
    "password_digest": "$2b$11$eEumHGhZY3SYT9UHdKFX2eFT8XzdEKUu0tRdJcUaP2gHF4Ppr65va",
    "image_url": "https://i.imgur.com/aLCxuY0.jpg",
    "description": "Hi I am Sam. I am an incredibly talented coder and love food. Yayforfood!!!! You can find me in my where's Waldo hat hacking away at making the next big thing or maybe just something I find enjoyable. I hope to find some stellar events through my new platform evently!",
    "interests": "Coding, Food, Day-trading, Gambling, Gaming",
    "join_date": "Jan 17, 2020"
  })

  await maleeha.addEvent(event1);
  await maleeha.addEvent(event2);
  await maleeha.addEvent(event3);


  await event1.addUser(maleeha);
  await event2.addUser(maleeha);
  await event3.addUser(maleeha);

  await event1.addUser(sam);
  await event2.addUser(sam);
  await event3.addUser(richard);

  process.exit();
}

seed();
