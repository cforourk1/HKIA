# HKIA

Vision: 


Hello Kitty Island Adventure lacks necessary user tracking. I am developing an app for additional tracking users can track information like sizes of fish caught, what they are missing, and provide data from the game wiki in a cleaner fashion and allow the user to store data. 

Currently I am beginning with fish 

It is saturday march 28th 2:33pm and this is day one of my project. I started at 1am and stopped around 530 am. And now I have been back at it for about an hour. I am determined that this project is what will really help me learn how to code. 


I am starting with fish data. Here is a sample entry: 

  {
    fishname: 'Tropical Sunfish',
    rarity: 'Uncommon',
    tags: [ 'Tropical', 'Rare' ],
    region: 'Seaside Resort',
    locations: [ 'Southern shores of Hopscotch Islands' ],
    dlcReq: '',
    timeOfDay: [ 'Day', 'Evening' ],
    weatherEvent: '',
    bait: 'Tofu Pizza',
    lure: 'Petal Plucker Lure',
    bonusCD: 'Sand-sational Sunset (Twilight Mix)',
    bonusItem: '',
    sizes: [ 'Tiny', 'Regular', 'Huge' ],
    caught: { tiny: false, regular: false, huge: false }
  }



  As you can see - each fish comes in 3 sizes. Hello Kitty Island Adventure built in achievement trackers don't tell you which fish you are missing. I am going to build something that can track that information. But I also want to be able to write queries like: 

  Look up a fish name and show me the data on that fish and which sizes I have caught. 

  Return fish names from a region 

  Show me weather related fish - or what fish offer bonus items. 

  Basically I want to be able to filter on any number of data from my properties within the objects and help people achieve their fishing dreams and achievements! 









