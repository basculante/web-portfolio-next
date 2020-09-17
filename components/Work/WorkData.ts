export interface IWorkData {
  name: string;
  type: WorkType;
  cardImage: string;
  secondaryImages: ISecondaryImages[];
  svgIcons: string[];
  liveSite?: string;
  github?: string;
}

export enum WorkType {
  Professional = "Professional",
  Personal = "Personal",
}

export interface ISecondaryImages {
  image: string;
  description?: string;
}

export const WorkData: IWorkData[] = [
  {
    name: "Voicegain ACP Portal",
    type: WorkType.Professional,
    cardImage: "../assets/work_images/acp/portal-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/acp/portal-1.PNG",
        description:
          "The Voicegain ACP Portal provides a full featured speech-to-text platform that includes both offline and real-time transcription utilizing Voicegain's deep-neural-network. It includes support for real-time STT using gRPC, WebSocket, and MRCP. The portal also provides live transcription with broadcast via WebSockets, speech analytics for call and meeting recordings, and RTC Callback to build voice bot applications or speech IVR systems.",
      },
      {
        image: "../assets/work_images/acp/transcription-tool.PNG",
        description:
          "Transcribe audio using Voicegain’s offline or real-time recognition models. Users can create custom language models and provide their own vocabulary data to increase the accuracy rates of the transcription. The transcriptions can then be reviewed using the transcription review tool, which includes a custom audio waveform graph that shows audio decibel data along with data for different regions of the audio where sound or noise is detected.",
      },
      {
        image: "../assets/work_images/acp/mic-capture.PNG",
        description:
          "Capture live microphone transcription using Voicegain’s real-time transcription model. Stream audio real-time using websocket streaming through the portal’s microphone capture feature, and add improved transcription results by selecting a customized language model.",
      },
      {
        image: "../assets/work_images/acp/websocket.PNG",
        description:
          "The ACP Portal provides live transcription which allows for real-time transcription that is then broadcasted over websockets. The CC App allows users to view live transcriptions with use cases including conferences, lectures, and meetings.",
      },
      {
        image: "../assets/work_images/acp/speech-analytics.PNG",
        description:
          "The call analytics feature provides metrics on call audio transcriptions including sentiment, agent scores, key topics, and key words. Clients can manage all their call recordings and analyze the key data points through the portal. This feature is currently just a working demo.",
      },
      {
        image: "../assets/work_images/acp/speech-analytics-2.PNG",
        description:
          "The call analytics transcription tool is used to review call transcriptions with relevant call data being displayed. All key words, sentiments, and topics are available for review as well as being annotated on the custom audio waveform graph. This feature is currently just a working demo.",
      },
      {
        image: "../assets/work_images/acp/greg.PNG",
        description:
          "The Portal supports grammars using GRXML & JSGF, and provides n-best results. Clients can use the real-time speech recognition engine for VoiceXML based IVR applications. The GREG interface can be used to create experiments with importing of grammars to analyze, tune, test, and optimize speech grammars. It provides analysis of results from large vocabulary models for utterances that are out of Grammar (OOG) or have low confidence results.",
      },
      {
        image: "../assets/work_images/acp/rtc-api.PNG",
        description:
          "Create a voicebot or speech IVR system using the Voicegain Real-time Communication (RTC) Callback. Establish a single real-time session with the Voicegain platform, and invoke commands to answer a call, play a prompt, get a spoken response, and transfer a call. The platform supports telephony using SIP/RTP and browser using WebRTC.",
      },
      {
        image: "../assets/work_images/acp/edge-1.PNG",
        description:
          "The ACP Portal is available on the cloud or deployable on premise / on Edge (client’s infrastructure).",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/typescript.svg",
      "../assets/logos/ant-design.svg",
    ],
    liveSite: "https://portal.voicegain.ai",
  },
  {
    name: "Voicegain Speechworks",
    type: WorkType.Professional,
    cardImage: "../assets/work_images/speech-works/speech-works-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/speech-works/speech-works-1.PNG",
        description:
          "Voicegain Speechworks allows users to upload audio files for transcription using Voicegain's offline transcription models. The product features a transcription review tool with customized audio waveform graph for easy and fast review of speech-to-text transcriptions.",
      },
      {
        image: "../assets/work_images/speech-works/speech-works-3.PNG",
        description:
          "Audio files are uploaded to the platform for offline transcription. Users have the option to use custom vocabulary to improve transcription results. Custom vocabulary models can be added, or a built-in model can be used.",
      },
      {
        image: "../assets/work_images/speech-works/speech-works-4.PNG",
        description:
          "By adding a new vocabulary model, transcription results can be improved by supplying the language model with specific jargon.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/typescript.svg",
      "../assets/logos/ant-design.svg",
    ],
    liveSite: "https://transcribe.voicegain.ai",
  },
  {
    name: "Voicegain SSO",
    type: WorkType.Professional,
    cardImage: "../assets/work_images/sso/sso.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/sso/sso.PNG",
        description:
          "The Voicegain Single Sign On (SSO) page can be used to authenticate into all of Voicegain’s applications. When users sign out using the SSO, they will be logged out of all of the apps. Based on the account type that a user selects when they sign up, different options will be available for redirection to applications. If a user forgets their password, they are able to request a password reset, and a link will be sent to their email where they can reset their password.",
      },
      {
        image: "../assets/work_images/sso/sso-2.PNG",
        description:
          "Users can select which application to redirect to after signing in through the SSO. Currently there are two applications available in the Voicegain environment: the ACP Portal and Speechworks.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/typescript.svg",
      "../assets/logos/ant-design.svg",
    ],
    liveSite: "https://sso.voicegain.ai",
  },
  {
    name: "Offline Transcription Demo",
    type: WorkType.Professional,
    cardImage:
      "../assets/work_images/transcription-demo/offline-transcription-demo.PNG",
    secondaryImages: [
      {
        image:
          "../assets/work_images/transcription-demo/offline-transcription-demo.PNG",
        description:
          "This is a demo application for Voicegain’s offline transcription API. The Node.js server provides a proxy for Voicegain’s API services by utilizing a call to retrieve a temporary JWT. This JWT is then used to authenticate Voicegain’s offline transcription services as well as file upload services. An audio file can be uploaded from the browser to Voicegain storage, and then the file is submitted for offline transcription. The application polls the current status of the offline transcription until it is finished, and then the text result of transcription is displayed. The application is built using HTML and CSS3 while the server is built using Node.js and Express.",
      },
    ],
    svgIcons: [
      "../assets/logos/html-5.svg",
      "../assets/logos/css-3.svg",
      "../assets/logos/javascript.svg",
      "../assets/logos/express.svg",
    ],
    github:
      "https://github.com/voicegain/platform/tree/master/examples/offline-transcription-demo",
  },
  {
    name: "NBA Box Scores",
    type: WorkType.Personal,
    cardImage: "../assets/work_images/nba-box-score/nba-box-score.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/nba-box-score/nba-box-score.PNG",
        description:
          "This is a NBA box score application to view daily game score and player stats. Having been part of a fantasy basketball league for several years, I found that there was no box score website that was quick and simple to scan to get player statistics. The NBA and ESPN box scores required too much clicking to go from game to game to view player stats, so I decided to create a simple app where me and the other members in our fantasy league could quickly scan all the games and get the important necessary statistics for each game. The game cards are clickable and will scroll directly to the relevant game score box. The box scores were designed to imitate the Yahoo fantasy basketball stats layout so that they could be scanned easily, and the columns are sortable to add even more efficiency in getting the data that is needed. This app consumes the MySportsFeed API service to get the game and player data. Currently, the app is only serving data after the game, not live data, and only data for the 2019-2020 season is provided. The API is wrapped in a proxy server using Node.js and Express. The front-end is built with React, Typescript, and styled with Material-UI components.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/typescript.svg",
      "../assets/logos/material-ui.svg",
    ],
    liveSite: "https://mystifying-benz-0117a6.netlify.app/",
    github: "https://github.com/basculante/nba-boxscore-server",
  },
  {
    name: "Standing-Eight",
    type: WorkType.Personal,
    cardImage: "../assets/work_images/standing-eight/standing-eight-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/standing-eight/standing-eight-1.PNG",
        description:
          "Standing-Eight is a web application used for learning boxing techniques by watching videos as well as keeping track of workouts using the workout tracker. There are also boxing and general fitness plans that can be purchased to help structure a training routine. The front-end is built using React, Redux, and styled using Materialize. The back-end server is using Node.js and Express along with MongoDB and PassportJS (for Google OAuth).",
      },
      {
        image: "../assets/work_images/standing-eight/standing-eight-2.PNG",
        description:
          "Users can watch boxing technique videos and leave notes or comments to help in their training. They can add videos to their favorites list and access videos that have been the most helpful from their favorites dashboard. All of the boxing videos on the website have been curated by me, and include some of the best content that I have personally used to learn in my own training.",
      },
      {
        image: "../assets/work_images/standing-eight/standing-eight-3.PNG",
        description:
          "Users can keep track of their boxing workouts including heavy bag rounds and jump rope rounds. React-Vis was used to visualize the data so that users could have an easy way of consuming their workout progress over time.",
      },
      {
        image: "../assets/work_images/standing-eight/standing-eight-4.PNG",
        description:
          "The application includes three training programs that can be purchased by users. Each program is tailored to a different aspect of boxing, and they can be tracked using the workout tracker.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/redux.svg",
      "../assets/logos/javascript.svg",
      "../assets/logos/materializecss.svg",
      "../assets/logos/mongodb.svg",
      "../assets/logos/express.svg",
    ],
    liveSite: "https://peaceful-atoll-85541.herokuapp.com/",
    github: "https://github.com/basculante/standing-eight-server",
  },
  {
    name: "Survey Soup",
    type: WorkType.Personal,
    cardImage: "../assets/work_images/survey-soup/survey-soup-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/survey-soup/survey-soup-1.PNG",
        description:
          "The Survey Soup application allows users to create, share, and complete custom surveys. Each survey will then have data visualization using the React-Vis library to consume the results of the survey. The front-end is built with React, Redux, and Materialize while the back-end is using Node.js, Express, MongoDB, and Passport.js (for Google OAuth).",
      },
      {
        image: "../assets/work_images/survey-soup/survey-soup-2.PNG",
        description:
          "Users can view all available surveys and pick which ones to complete. Once completed, the survey will be marked as completed.",
      },
      {
        image: "../assets/work_images/survey-soup/survey-soup-3.PNG",
        description:
          "Create new surveys by adding questions and respective answers for each question.",
      },
      {
        image: "../assets/work_images/survey-soup/survey-soup-4.PNG",
        description:
          "Users can go to their dashboard to view and manage all of their surveys that they have created.",
      },
      {
        image: "../assets/work_images/survey-soup/survey-soup-5.PNG",
        description:
          "They can select on each individual survey to view all related data included who took the survey, what the most selected answer was, and list of the questions in the survey.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/redux.svg",
      "../assets/logos/javascript.svg",
      "../assets/logos/materializecss.svg",
      "../assets/logos/mongodb.svg",
      "../assets/logos/express.svg",
    ],
    liveSite: "https://evening-river-73242.herokuapp.com/",
    github: "https://github.com/basculante/surveysoup",
  },
  {
    name: "Game of Life",
    type: WorkType.Personal,
    cardImage: "../assets/work_images/game-of-life/conway-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/game-of-life/conway-1.PNG",
        description:
          "This was the interview test that landed me my first job as a front-end developer at Voicegain! Built using React and Ant Design, I recreated Conway’s Game of Life based on the set of rules provided to me. The hardest challenge in creating this project was understanding how to visualize the game itself. The premise of the game was essentially working with a 2D array, and each grid was represented as dead or alive by the values of 0 and 1 respectively. The game board is seeded using a randomize function, and each tick interval represents the next phase of the game as dictated by the rules.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/javascript.svg",
      "../assets/logos/ant-design.svg",
    ],
    liveSite: "https://youthful-minsky-667d36.netlify.app/",
    github: "https://github.com/basculante/gameoflife",
  },

  {
    name: "Four Walls of Iron",
    type: WorkType.Personal,
    cardImage: "../assets/work_images/four-walls/four-walls-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/four-walls/four-walls-1.PNG",
        description:
          "Four Walls of Iron is an application that calculates and customizes workouts based on your current exercise levels. Users can choose a specific program and enter in their current exercise statistics, and the program will provide a fully calculated program for the user to follow. The front-end is built using React, Redux, and Semantic while the back-end uses Node.js and Express along with PostgreSQL for the user database.",
      },
      {
        image: "../assets/work_images/four-walls/four-walls-2.PNG",
        description:
          "Users can select either a bodybuilding oriented or strength oriented program to suit their needs. The programs provided are popular workout programs that have been tested and proven in the fitness community.",
      },
      {
        image: "../assets/work_images/four-walls/four-walls-4.PNG",
        description:
          "Users can enter in their current exercise statistics for each specific exercise movement as well as select an increment weight that they would like to progress by each week.",
      },
      {
        image: "../assets/work_images/four-walls/four-walls-3.PNG",
        description:
          "Based on the entered values for each exercise, the application will calculate and provide the full customized program, making it easy for users to follow their program. The work is done completely by the application, allowing people to focus on what matters most, exercising!",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/redux.svg",
      "../assets/logos/javascript.svg",
      "../assets/logos/semantic-ui.svg",
      "../assets/logos/express.svg",
      "../assets/logos/postgresql.svg",
    ],
    liveSite: "https://silly-curran-d6b678.netlify.app/",
    github: "https://github.com/basculante/fourwalls-frontend",
  },
  {
    name: "Speech-to-Text",
    type: WorkType.Personal,
    cardImage: "../assets/work_images/text-to-speech/tts-1.PNG",
    secondaryImages: [
      {
        image: "../assets/work_images/text-to-speech/tts-1.PNG",
        description:
          "The speech-to-text translator utilizes Google’s STT API and translation API to transcribe microphone audio into text. It is built using React, Redux, and Ant Design in the front end, and Node.js and Express in the backend. The app currently works only in Google Chrome.",
      },
    ],
    svgIcons: [
      "../assets/logos/react.svg",
      "../assets/logos/redux.svg",
      "../assets/logos/javascript.svg",
      "../assets/logos/express.svg",
    ],
    liveSite: "https://nameless-temple-35957.herokuapp.com/",
  },
];
