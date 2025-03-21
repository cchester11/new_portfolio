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
            title: "The Smallest of Mistakes"
      },
      {
            id: "2",
            title: "building my usage monitor"
      },
      {
            id: "3",
            title: "Homebrew is not always the best answer"
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
                        content: "The Smallest of Mistakes"
                  },
                  {
                        type: "p",
                        content: "Sometimes we can spend hours working out a problem, pondering several possible bugs, only to find an answer to our problem that seems so prosaic we feel as if we've just lost so much time for nothing."
                  },
                  {
                        type: "p",
                        content: "But that's not always the case. Often, even when the fix to our problem ends up being the most mundane of fixes, something we should've seen from the beginning, we learn about the software we use along the way--attempting to solve all the possible issues until we finally get to the prosiac cause of the problem."
                  },
                  {
                        type: "h3",
                        content: "Using / as opposed to ./ to reference Public"
                  },
                  {
                        type: "p",
                        content: "Thats right. I just needed to delete a period in my src value's which referenced img's in my public folder. I tried commenting out Strict Mode in my main file. I tried placing my Navbar state at the top of my component tree. I tried using useMemo--yes! useMemo--instead of useEffect. I did everything, until I finally deleted those stupid periods."
                  },
                  {
                        type: "p",
                        content: "In the end, I learned about best practices, I learned about good ole useMemo, and I learned how to properly reference the public folder so that I never have to waste an evening again!"
                  },
                  {
                        type: "p",
                        content: "I didn't waste any time though because theres always something to learn."
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
      },
      {
            id: "3",
            content: [
                  {
                        type: "h2",
                        content: "Homebrew is not always the best answer"
                  },
                  {
                        type: "p",
                        content: `I’ve used homebrew for a long time. It’s always managed development tools like Node and Git, my   database services like MongoDB, and even hosting service CLI’s for software like Railway and Heroku.
                                    Recently, however, working on my Usage Monitor app, I was having issues. The issues stemmed from the integration of some important python files I needed to work but were failing. After some research and the good ole act of banging my head against the wall, I found that my Homebrew installation of python was actually what might be causing the problems for my app.`
                  },
                  {
                        type: "p",
                        content: `In an article by Daniel Kehoe, he wrote, "If you need to install Python for casual use case, it’s easy to install Python with Homebrew...Homebrew installed Python is adequate for running scripts. However, it has drawbacks and you may want to consider other options…".
My interest was peaked. He later mentioned software like Rye which seemed to be perfect for my use case. After visiting Rye’s site, I was encouraged to try uv, the successor to Rye, and I found that uv was very easy to use and very powerful.`
                  },
                  {
                        type: "h3",
                        content: "Using uv"
                  },
                  {
                        type: "p",
                        content: `The documentation is very good. It feels, as you’re reading their documentation, that the developers have thought deeply about user experience. I am not a Python developer and only use it when I can’t find any javascript packages that meet a particular need, so it’s nice to use a service that makes setting up Python development and environments very easy. 
Even creating a virtual environment for a project is as easy as writing the command ‘uv venv’ in your working directory. Furthermore, uv automatically installs necessary Python versions for you, leaving manual installation entirely optional. `
                  },
                  {
                        type: "p",
                        content: `Lastly, in Daniel Kehoe’s article, he states, “Rye is a newer tool that supports switching Python versions and provides better package management with virtual environments”. Obviously, I’m using uv, but uv has taken all the advantages of using Rye and created a more effective project.
In conclusion, my problem I faced with integrating Python into my Electron.js app was solved in the end by using a service that makes Python integration into projects more seamless. I highly recommend using uv for your own use of Python.`
                  }
            ]
      }
];

export default projects;