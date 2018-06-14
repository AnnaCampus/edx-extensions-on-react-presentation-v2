// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Appear    
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#ff4081"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" bgImage={"/assets/community.jpg"} bgDarken={0.75}>
          <Heading size={1} fit caps lineHeight={2} textColor="primary">
            Developing on Open edx
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            or how should we do that?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Developement methods for extensions</Heading>
          <List>
            <Appear>
              <ListItem>LTI Interface</ListItem>
            </Appear>
            <Appear>
              <ListItem>External Grader</ListItem>
            </Appear>
            <Appear>
              <ListItem>XBlock</ListItem>
            </Appear>
          </List>
          
            <Link href="https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/extending_platform/extending.html">
              <Text textColor="primary">
                Compare the extension methods
              </Text>
            </Link> 
          
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>LTI Interface</Heading>
          <Link href="https://www.imsglobal.org/activity/learning-tools-interoperability">
              <Text textColor="tertiary" size={1} fit bold>
                Click me for more details
              </Text>
            </Link> 
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps>External Grader</Heading>
          <Text textColor="tertiary" size={4}>
             An external grader is a service that receives learner responses to a problem, processes those responses, and returns feedback and a problem grade to the edX platform. 
        
          </Text>
          
          <Link href="https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/external_graders.html#create-a-code-response-problem">
              <Text textColor="tertiary" size={2} bold>
                Read this
              </Text>
            </Link> 
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>XBlock</Heading>
          <Link href="https://openedx.atlassian.net/wiki/spaces/COMM/pages/43385346/XBlocks+Directory">
              <Text textColor="secondary" size={2} bold>
                XBlocks directory
              </Text>
            </Link>
          <List textColor="primary">
            <Appear>
              <ListItem>Python</ListItem>
            </Appear>
            <Appear>
              <ListItem>SDK</ListItem>
            </Appear>
            <Appear>
              <ListItem>Integration on Staging</ListItem>
            </Appear>
            <Appear>
              <ListItem>Code Review and Guidlines</ListItem>
            </Appear>
            <Appear>
              <ListItem>Known issues</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps>Are we done?</Heading>
        </Slide>
      </Deck>
    );
  }
}
