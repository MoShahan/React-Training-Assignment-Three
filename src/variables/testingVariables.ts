export const setPageNumber = jest.fn();
export const handleDeleteClick = jest.fn();
export const handleTitleClick = jest.fn();
export const setIsFormatted = jest.fn();
export const mockOnClick = jest.fn();
export const setStories = jest.fn();
export const setLoading = jest.fn();
export const setError = jest.fn();
export const handleSorting = jest.fn();
export const setSortInfo = jest.fn();
export const handleSearchTextChange = jest.fn();
export const setSearchText = jest.fn()

export const myStory = {
  title: "Shahan",
  url: "www.shahan.com",
  author: "Batman",
  num_comments: 27,
  objectID: "100",
};

export const myStory1 = {
  title: "Batman",
  url: "www.batman.com",
  author: "Bruce Wayne",
  num_comments: 1,
  objectID: "2580",
  created_at: "no idea",
  points: 5,
};

export const myStory2 = {
  title: "Flash",
  url: "www.flash.com",
  author: "Barry Allen",
  num_comments: 999,
  objectID: "999",
  created_at: "no idea",
  points: 7,
};

export const myStories = [
  myStory,
  myStory1,
  myStory2,
  {
    created_at: "2022-02-18T11:09:46.000Z",
    title:
      "Boeing 777 departing Dubai nearly had a major incident after takeoff",
    url: "https://onemileatatime.com/news/emirates-terrifying-boeing-777-flight-washington/",
    author: "lsllc",
    num_comments: 557,
    story_id: null,
    objectID: "29762387",
    points: 249,
  },
  {
    created_at: "2022-02-18T11:09:46.000Z",
    title: "The Dubai Debt Trap",
    url: "https://www.economist.com/1843/2021/12/15/the-dubai-debt-trap",
    author: "Geekette",
    points: 249,
    num_comments: 32,
    objectID: "30384338",
  },
  {
    created_at: "2011-03-12T19:13:42.000Z",
    title: "Dubai on Empty ",
    url: "http://www.vanityfair.com/culture/features/2011/04/dubai-201104?currentPage=all",
    author: "cwan",
    points: 243,
    num_comments: 97,
    objectID: "2317238",
  },
  {
    created_at: "2020-10-22T13:15:26.000Z",
    title:
      "iPhone 12 Pro so costly in India, you can fly to Dubai to buy it and save money",
    url: "https://www.indiatoday.in/technology/features/story/iphone-12-pro-so-expensive-in-india-that-you-can-fly-to-dubai-to-buy-it-come-back-and-still-save-money-1733722-2020-10-21",
    author: "notRobot",
    points: 236,
    num_comments: 250,
    objectID: "24857646",
  },
  {
    created_at: "2011-01-05T09:58:43.000Z",
    title: "The Dubai Job",
    url: "http://www.gq.com/news-politics/big-issues/201101/the-dubai-job-mossad-assassination-hamas?printable=true\u0026currentPage=7",
    author: "paulgerhardt",
    points: 215,
    num_comments: 59,
    objectID: "2070534",
  },
  {
    created_at: "2022-05-03T16:46:16.000Z",
    title:
      "Dubai real estate data leak – Exposes criminals, officials, and politicians",
    url: "https://e24.no/internasjonal-oekonomi/i/Bj97B0/dubai-uncovered-data-leak-exposes-how-criminals-officials-and-sanctioned-politicians-poured-money-into-dubai-real-estate",
    author: "punnerud",
    points: 210,
    num_comments: 111,
    objectID: "31250463",
  },
  {
    created_at: "2009-04-07T11:15:49.000Z",
    title: "The dark side of Dubai",
    url: "http://www.independent.co.uk/news/world/middle-east/the-dark-side-of-dubai-1664368.html",
    author: "fiaz",
    points: 174,
    num_comments: 66,
    objectID: "550719",
  },
  {
    created_at: "2021-10-06T18:19:18.000Z",
    title:
      "Dubai ruler hacked ex-wife using NSO Pegasus spyware, high court judge finds",
    url: "https://www.theguardian.com/world/2021/oct/06/dubai-ruler-hacked-ex-wife-using-nso-pegasus-spyware-high-court-judge-finds-sheikh-mohammed-princess-haya",
    author: "lostlogin",
    points: 168,
    num_comments: 38,
    objectID: "28776368",
  },
  {
    created_at: "2018-06-03T16:39:16.000Z",
    title: "Rice grown using seawater in Dubai’s deserts",
    url: "http://www.scmp.com/news/china/society/article/2148684/coming-plate-near-you-soon-rice-grown-chinese-scientists-using",
    author: "signa11",
    points: 164,
    num_comments: 69,
    _tags: ["story", "author_signa11", "story_17220356"],
    objectID: "17220356",
  },
  {
    created_at: "2021-07-21T11:15:15.000Z",
    title: "Dubai is making its own fake rain to beat 122°F heat",
    url: "https://www.independent.co.uk/climate-change/news/dubai-fake-rain-heat-b1887596.html",
    author: "kn9",
    points: 153,
    num_comments: 99,
    objectID: "27904758",
  },
  {
    created_at: "2021-08-18T15:42:58.000Z",
    title: "Dubai Is a Parody of the 21st Century",
    url: "https://youtube.com/watch?v=SacQ2YdVOyk\u0026t=613s",
    author: "tartoran",
    points: 144,
    num_comments: 36,
    objectID: "28222859",
  },
  {
    created_at: "2021-05-09T06:43:24.000Z",
    title: "Philips LEDs from Dubai: The Royal Lights You Can’t Buy",
    url: "https://hackaday.com/2021/01/17/leds-from-dubai-the-royal-lights-you-cant-buy/",
    author: "emptybits",
    points: 129,
    num_comments: 72,
    objectID: "27093793",
  },
  {
    created_at: "2009-11-30T19:09:45.000Z",
    title: "The dark side of Dubai",
    url: "http://www.independent.co.uk/opinion/commentators/johann-hari/the-dark-side-of-dubai-1664368.html",
    author: "gnosis",
    points: 103,
    num_comments: 66,
    objectID: "968439",
  },
  {
    created_at: "2012-12-12T06:33:37.000Z",
    title: "Urbanization of Dubai",
    url: "http://earthobservatory.nasa.gov/Features/WorldOfChange/dubai.php",
    author: "kumarski",
    points: 99,
    num_comments: 39,
    objectID: "4908939",
  },
  {
    created_at: "2016-11-08T14:39:15.000Z",
    title: "Hyperloop may become reality in Dubai",
    url: "http://www.bbc.com/news/technology-37908915",
    author: "nedsma",
    points: 94,
    num_comments: 112,
    objectID: "12900548",
  },
  {
    created_at: "2016-12-23T04:28:15.000Z",
    title: "Dubai Police now using Crime Prediction software",
    url: "http://newatlas.com/dubai-police-crime-prediction-software/47092/",
    author: "futureguy",
    points: 94,
    num_comments: 84,
    objectID: "13242835",
  },
  {
    created_at: "2010-08-15T21:38:56.000Z",
    title: "Good-bye to Dubai ",
    url: "http://www.nybooks.com/articles/archives/2010/aug/19/good-bye-dubai/?pagination=false",
    author: "cwan",
    points: 90,
    num_comments: 92,
    objectID: "1606019",
  },
  {
    created_at: "2021-10-24T01:04:48.000Z",
    title:
      "Prosecutors uncover money-laundering operation between US and Dubai",
    url: "https://samsung.tribunecontentagency.com/2021/10/23/prosecutors-in-detroit-uncover-massive-money-laundering-operation-between-us-and-dubai/",
    author: "gscott",
    points: 90,
    num_comments: 21,
    objectID: "28973924",
  },
  {
    created_at: "2010-02-17T23:51:32.000Z",
    title: "Alleged Assassins Caught on Dubai Surveillance Tape",
    url: "http://www.wired.com/threatlevel/2010/02/alleged-assassins-caught-on-tape/",
    author: "phsr",
    points: 82,
    num_comments: 39,
    objectID: "1132987",
  },
];
