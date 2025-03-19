// object that houses project info for each project 
const projects = [
      {
            // project name
            // project screenshot
            // project github link
            id: "1",
            name: "usageMonitor",
            screenshot: "usageMonitor",
            link: "https://github.com/cchester11/usageMonitor"
      },
      {
            id: "2",
            name: "audioEffects",
            screenshot: "audioEffects",
            link: "https://github.com/tostaylo/audio-effects"
      },
      {
            id: "3",
            name: "phopApp",
            screenshot: "phopApp",
            link: "https://github.com/cchester11/phop_frontend"
      }
];

export const posts = [
      {
            id: "1",
            title: "why so many semi colons?"
      },
      {
            id: "2",
            title: "building my usage monitor"
      }
];

export const post_details = [
      {
            // each object contains an id and a content array
            id: "1",
            content: [
                  // each content array contains nested objects which contain an element type (like h2) and content
                  {
                        type: "h2",
                        content: "Why So Many Semi Colons?"
                  },
                  {
                        type: "p",
                        content: "Semi colon's are often used absent-mindedly as we write our various files."
                  }
            ]
      },
      {
            id: "2",
            content: [
                  {
                        type: "h2",
                        content: "Building My Usage Monitor"
                  },
                  {
                        type: "p",
                        content: "Usage Monitor was a fun project that I could benefit from in my everyday development experience. It was one of my first experiences with Electron,which I find to be a fun framework to work with."
                  },
                  {
                        type: "p",
                        content: "I chose to use Electron for this project so that I could create and launch my own desktop application. The idea of creating my own desktop application seemed like a quintessential task I needed to check off on my developer experience."
                  },
                  {
                        type: "p",
                        content: "Electron makes use of a preload.js file which can be used to store functions or data in an object. The preload file is very powerful in that it can be accessed easily across other files. In general, I found Electron to be well designed and approached in a modular way."
                  },
                  {
                        type: "h3",
                        content: "Using Python"
                  },
                  {
                        type: "p",
                        content: "Using python in this project felt very fulfilling. Up until this time, I was not used to using multiple programming languages in a project (unless we consider using html and css with js). In order to successfully use psutil, a very easy to use library that can read your system's cpu usage, battery percentage, etc, I needed to simply create a virtual environment in my projects root directory."
                  },
                  {
                        type: "p",
                        content: "From there, using Nodes native spawn method allowed me to create a shell that could run python in the background. I needed to use python because I couldn't really find a js alternative to psutil. Psutil was just too powerful, cross-platform compatible, and easy to use"
                  },
                  {
                        type: "p",
                        content: "In the end, this project helped me learn and grow as a developer. To top it off, I get to enjoy using my own application through out my work day."
                  }
            ]
      }
];

export default projects;