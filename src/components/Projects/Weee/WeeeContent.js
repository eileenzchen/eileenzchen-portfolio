import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets/index.js'
import ModalImage from 'react-modal-image'

export function Intro() {
  const desc =  {
    role: "replace",
    team: "replace",
    skills: "replace, replace",
    tools: "replace, replace",
    duration: "replace months",
    cols: 2
  }

  return (
    <div id="Intro">
      <Polaroid 
        linkUrl="https://www.figma.com/proto/RnKtg5yRt8PQmSb0G185lA/Weee!-Redesign?type=design&node-id=464-11434&scaling=scale-down&page-id=464%3A11433&starting-point-node-id=464%3A11434" 
        imageUrl={Assets.WeeePreview} 
        alt="Weee Redesign"
        polaroidTitle="Weee Redesign"
        polaroidDescription="Fostering community within the grocery purchasing journey to inspire shoppers and drive e-grocery sales"
        aspectRatio="aspectRatioWide"/>
    </div>
  )
}

export function Summary() {
  return (
    <div id="Summary">
      <h1><span className="section-title highlight">summary</span></h1>
      <p className="subheading">problem</p>
      <p>
        In this case study of Weee, my <b>primary KPI is volume of groceries purchased</b>. As such, my problem statement is: <b>How can we encourage people to discover more new foods, and thus, purchase more groceries?</b>
      </p>
      <p className="subheading">solution</p>
      <p>
        I redesigned the Weee Search experience and Community journey in order to <b>increase findability of groceries</b> and <b>foster interactions with community content</b> throughout the purchasing process. 
      </p>
      <p className="subheading">role</p>
      <p>
        As this was a personal project, I was the sole user researcher and designer.
      </p>
      <p className="subheading">growth</p>
      <p>
        I learned to <b>design for an actual product with business goals, user incentives, and pre-existing workflows & design systems</b>. I was not building something from scratch here; I had to put myself in the mindset of a Weee designer and leverage the systems in place while thinking creatively in order to effectively design for Weee's product needs and goals.
      </p>

    </div>
  )
}

export function BackgroundResearch() {
  return (
    <div id="BackgroundResearch">
      <h1><span className="section-title highlight">background research</span></h1>
      <p>
      When I first started thinking about the Weee redesign, I went into it with my own experiences of using the app to grocery shop and check things off my grocery list. I thus assumed that I would be redesigning the experience of finding and buying groceries. But, as I began to dig into Weee's mission and niche, I realized that I was inadvertently bringing my own personal biases into how I was approaching the redesign. Weee's mission is much more than making it easy for people to buy groceries. It is to <b>create a community of shoppers who connect and inspire each other through their love and excitement for Asian and Hispanic food</b>. And thus, I reevaluated the way I was approaching the redesign and pivoted to focusing on how Weee can build and leverage the community to help people discover new foods in an easy way. 
      </p>
      <p>
        As CEO and founder of Weee, Larry Liu, puts it, “food shopping...should be much, much better, much, much more <b>inspiring and fun</b>”. On top of making it more accessible and affordable for people to get Asian and Hispanic groceries, Weee seeks to storytell the traditions and flavors of different ethnicities. 
      </p>
      <p>
        To build this community, Weee relies on <b>social commerce</b>, such as word of mouth and social media, to acquire and engage customers. A couple of notable features are order sharing to get rewards and a new community feed where Weee users can post recipe or unboxing videos to share with other users. The idea behind it all is that users will be excited about certain foods, share their excitement, and prompt their friends and family to want to buy what they are buying. 
      </p>
    </div>
  )
}

export function UserResearch() {
  return (
    <div id="UserResearch">
      <h1><span className="section-title highlight">user research</span></h1>
      <p>
        Since Weee positions itself as an e-grocer that provides a <b>discovery and social grocery shopping experience</b> versus a more individual search-based experience, I wanted to put that to the test and see if that mission resonated with users currently purchasing groceries on the app.
      </p>
      <p>
        Weee's customer base started out as primarily first generation Chinese immigrants and has since grown with second- and third-generation shoppers. Thus, I interviewed both <b>first generation shoppers 50+ years old and second and third generation shoppers in their 20s</b>. Users' frequency of use ranged from once every few months to biweekly. By <b>conducting grocery purchase task analyses and asking qualitative questions</b>, I gathered user behavior and opinions on Weee. 
      </p>
      <p>
        Through first bucketing the type of feedback I got (pain points, strength, recommendation, user patterns) and then <b>affinity mapping</b> them to pain point categories such as navigation and communication, I was able to start formulating areas of the app that could use redesigning. 
      </p>
      <p>
      Some notable user insights included:
        <ul>
          <li>
            What's the difference between the home and explore pages?
          </li>
          <li>
            I've never noticed the community page before   
          </li>
          <li>
            The community page is overwhelming and does not make me want to stay
          </li>
          <li>
            The subcategories don't make sense - “why is there a noodles and wraps category under tofu?”
          </li>
          <li>
            I always skip past the marketing carousel on the home page
          </li>
        </ul>
      </p>
      <video className="small-asset" autoPlay loop muted playsInline>
        <source src={Assets.BucketingAffinity} type="video/mp4" />
      </video>

      <p>
        From there, I used an impact-effort matrix to help me identify the areas that had the highest impact while requiring lower development effort. While there were “quick wins” identified, I wanted to challenge myself with something that was a “big bet”. That landed me on two options: the Community page or taxonomy and findability of groceries. As I pondered further, I realized that there was an opportunity here to integrate these experiences to both increase the ability for users to find relevant groceries while introducing them to new items through community posts throughout their purchasing process.
      </p>
      <img alt="impact effort matrix" src={Assets.ImpactEffort}></img>
      <p>
        With the user insights gathered on needs and behaviors, I jotted the main findings down to funnel into a main problem statement. 
      </p> 
      <img alt="problem framing" src={Assets.ProblemFraming}></img>
      <blockquote>
        How can we have Weee users inspire each other to try new items throughout the purchasing process?
      </blockquote>


    </div>
  )
}

export function DesignPatterns() {
  return (
    <div id="DesignPatterns">
      <h1><span className="section-title highlight">analyzing design patterns</span></h1>
      <p>
        With an idea of what the problem I wanted to tackle was, I turned to existing successful social media and ecommerce products to analyze how they approach community engagement and searching compared to Weee. I examined Pinterest, Amazon, and Instagram. An interesting experience that differed across the apps was the default search page. Pinterest had a default search page with personalized category widgets meant to help users quickly search something they are interested in. Instagram's was for infinitely exploring filled with personalized images and videos. Amazon was the only one without a separate search page, with the home page serving the same purpose. The home screen encouraged people to continue their shopping journey right away and also recommended deals. 
        </p>
        
        <p>
          A consistent design practice I saw across the three apps was having recent searches show once users tapped the search bar. The use of drawers were also common for showing more information without taking users away from a page. For social engagement pages within Instagram and Pinterest, the media was always the focus of the page and the rest of the page was kept to a minimal so that the content could pretty much speak for itself. 
        </p>
        <ModalImage
          small={Assets.DesignPatterns}
          large={Assets.DesignPatterns}
          alt="design patterns analysis"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
    </div>
  )
}

export function Sketching() {
  return (
    <div id="Sketching">
      <h1><span className="section-title highlight">sketching</span></h1>
      <p>
        With an idea of how other products approach social feeds and searching, I began to sketch out different points in the grocery shopping process where community posts could be brought in for inspiration. As the main point of the community posts are to inspire people to buy more groceries, I knew there had to be an easier way for people to add something to cart after seeing a post. 
      </p>
      <p>
        After sketching my ideas out, I mocked a user flow to make sense of how the different journeys users could take to ultimately add an item to cart. With this mapping, I was able to identify points in the journey I missed.
      </p>
      <img style={{marginTop:"20px", marginBottom:"20px"}} alt="sketches user flow" src={Assets.SketchUserFlow}/>
      <p>
        To ideate on the gaps, I did a couple more sketches to visualize how and at what point users could view the items used in the post and add them to cart. I created two versions of the community page, one with a gallery view and one with a single post view to test with users. 
      </p>
      <img alt="community flow sketches" src={Assets.CommunitySketches}/>
      <p>
        Even though they were just rough sketches, I put my initial ideas in front of my design mentor and a couple of users to get feedback early on. 
      </p>
      <p>
        A few pieces of feedback to note:
        <ul>
          <li>
            It would be nice to see what items are trending
          </li>
          <li>
            What’s the difference between the search bar on the home page and the search bar on the search page? I just want to find my groceries quickly
          </li>
          <li>
            I prefer the gallery view for inspiration – I like seeing multiple things at once
          </li>
          <li>
            Think about additional ways to onboard people onto a feature like a “new for you” feature
          </li>
        </ul>
      </p>
    </div>

  )
}

export function Wireframing() {
  return (
    <div id="Wireframing">
      <h1><span className="section-title highlight">wireframing</span></h1>
      <p>
        I then began adding more fidelity into wireframes, focusing on incorporating the feedback and how different components and new features would work together to drive discovery and purchases.
      </p>
      <ModalImage
        small={Assets.GroceriesSearchLofi}
        large={Assets.GroceriesSearchLofi}
        alt="lofi wireframes for the groceries and search pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <ModalImage
        small={Assets.ProductLofi}
        large={Assets.ProductLofi}
        alt="lofi wireframes for the product pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <ModalImage
        small={Assets.CommunityLofi}
        large={Assets.CommunityLofi}
        alt="lofi wireframes for the community pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
    </div>
  )
}

export function PrototypingDetails() {
  return (
    <div id="PrototypingDetails">
      <h1><span className="section-title highlight">refining & prototyping</span></h1>
      <p>
        Along with finalizing the individual screens, I was now ready to focus on more details with specific copy, colors, product images, and even envision small animations that would help catch user attention. Throughout this process, I closely aligned with Weee's current design system and patterns (font, sizing, button components, use of graphics) to ensure that my redesign would be practical and fit in branding with the current system. At the same time, I took liberties where I saw fit, such as with pops of color and animations.
      </p>
      <ModalImage
        small={Assets.HomeHifi}
        large={Assets.HomeHifi}
        alt="hifi wireframes for home and community pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <ModalImage
        small={Assets.SearchHifi}
        large={Assets.SearchHifi}
        alt="hifi wireframes for the search pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <ModalImage
        small={Assets.ProductHifi}
        large={Assets.ProductHifi}
        alt="hifi wireframes for the product pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      {/* insert final gifs (zoom in animation of view items used slide button, slider of groceries to community, overall user flow gifs in a carousel) */}

    </div>
  )
}

export function Joy() {
  return (
    <div id="Joy">
      <h1><span className="section-title highlight">a little nugget of joy</span></h1>
      <p>
        Seems like I was done with the redesign here. And I was pretty proud of my work--it integrated the community with the shopping experience and was clean and intuitive. But I recently listened to a talk, "Putting Joy on the Roadmap", at Config by Figma designers and product managers Jenny Wen, Mihika Kapoor, and Kee Yen Yeo that really inspired and prompted me to go back to the drawing board once more. Their talk was about bringing joy and delight to people in our digital products, seeking inspiration from our physical world. The talk highlighted how little interactions that bring joy to our users may not be the most seemingly critical features, but it may bring the joy we experience in the physical world to the digital one. The fun high fiving feature on FigJam was a prime example of an interaction that brought smiles to peoples' faces when performing a productivity task. 
      </p>
      <p>
        I immediately thought back to the Weee CEO's words of making grocery shopping "much more inspiring and fun". Looking at my prototype again, I didn't exactly do that. And thus I began thinking, "How can I bring a smile to someone's face when shopping on Weee"? I could spend hours going down every single aisle and freezer chest at Trader Joe's, picking up random snacks and frozen meals that were not planned for along the way. I could also go to 99 Ranch and beeline to any sales I see, oggle at the live fish and crabs, and throw some instant ramen into my cart on the way out just because how could you not when there are fifty kinds?
      </p>
      <p>
        To really pinpoint the moments that bring someone joy when grocery shopping at a brick and mortar store, I asked a user to describe the last time they enjoyed their grocery shopping experience in person. And from that, I created a storyboard. From storyboarding, I realized that people get a lot of joy from moments of pleasant surprise and discovery, such as picking up spur of the moment items. Ben picked up a bottle of wine, a bag of okra chips, and a bouquet of flowers, none of which were on his grocery list coming in or remotely related to the other items, but got him excited. The flowers caught his eye in the beginning of his shopping time, and the wine and okra caught his eye at the end of his shopping experience, starting and ending the trip with moments of delight.
      </p>
      <p>
        These are some of my initial ideas:
        - flicking grocery item into cart, a little swish when it goes in depending on physics of swipe and accuracy
        - community profile pic person animation or pops up to react to your add to cart from a video
        - autoscroll of items that people might like (like walking down grocery aisle)
        - recipes in community tab, share a recipe, get a recipe 
        - autocomplete for the cart/basket for free shipping
        - in the community screen with items used, something like "make pineapple fried rice" that adds all ingredients to the cart at once and the recipe itself
        - a grocery sale ad newspaper (always see my mom's eyes light up when she sees one near the entrance, never fails to grab one and come out with something from the ad)
        - under every product, show a row of "aisle browsing items"
      </p>
      <p>
        Throughout the design process, I made sure to balance bringing joy while not detracting from the productivity of grocery shopping as the convenience and efficiency is a big draw of Weee.
      </p>
      <p>
        I hope what I came up with will bring a smile to people's faces because I sure had a lot of fun creating it! 
      </p>

    </div>
  )
}

export function Challenges() {
  return (
    <div id="Challenges">
      <h1><span className="section-title highlight">challenges & takeaways</span></h1>
      <p>
        <ol>
          <li>
           I learned how to ruthlessly prioritize top features (and correspondingly, how to deprioritize ideas that could be A/B tested later)
          </li>
          <li>
            I also continued my  growth in designing entire user journeys not just single interfaces that required an end-to-end analysis and redesign—all the while staying consistent with Weee’s current design system and workflows. I considered that if this redesign would be released that it would not completely disrupt users’ mental models.
          </li>
          <li>
            I was also able to continue honing my Figma prototyping skills through creating micro-interactions and design fundamentals by focusing on information architecture, spacing, hierarchy, and more. 
          </li>
        </ol>
      </p>
    </div>
  )
}

