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
                  }
            ]
      },
      {
            id: "2",
            content: [
                  {
                        type: "h2",
                        content: "Building My Usage Monitor"
                  }
            ]
      }
];

export default projects;