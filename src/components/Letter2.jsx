import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

function Letter({ title, paragraphs, speed, onClose }) {
  const content = [
    "Aashi ^2000 Meri Pyari C Billi ^2000 <br/><br/> I once thought that meeting must be like a painting formed by poetry^1000, or a song composed from lyrics. ^2000 It should be rescuing someone under galloping hooves in a bustling market,^1000 or seeking shelter in a deserted temple in the mountains. ^2000 It’s the hero saving the beauty,^1000 saying with a bow, ‘Forgive me.’ ^2000 Warming by a fire,^1000 listening to the night’s wind and rain. ^2000 Or hearing a lady's laughter in the garden^1000 and turning to see peach blossoms bloom. ^2000 Peach blossoms should pale in comparison,^1000 and ten miles of spring breeze could never match. ^2000 Your every smile and glance^1000 would make me search for you a thousand times in the dim light. ^2000 This meeting should be poetic and romantic, ^1000 worthy of song and verse. Later, I believed that meeting must be a door destined to open in this lifetime. ^2000 Behind it lay a bright world, ^1000 full of thriving life. ^2000 A mute child holding a lollipop,^1000 eyes meeting mine, ^1000 exchanging glances. ^2000 As if meeting again after a long time, ^1000 with all the force and fortune of life pushing that door open. ^2000 Knowing you were behind it, ^1000 I would give everything, ^1000 holding nothing back. ^2000 Completely unreserved.Then, I thought meeting must be a journey, long and purposeful, without end. ^2000 Crossing mountains by moonlight,^1000 braving every thorn and bramble. ^2000 Enduring the wear of years and the chaos of the world,^1000 bearing the silence and emptiness of long streets. ^2000 Taking the wrong bus, getting off at the wrong stop, ^1000 crying through long nights and struggling to sleep.Climbing over fences and high walls, ^1000 standing before you. ^2000 Facing wind and snow, ^1000 standing before you. ^2000 Pretending it was fate, ^1000 standing before you. ^2000 A thousand coincidences, ^1000 just to win one lingering glance. ^2000 So real.I once thought it was me searching tirelessly, ^1000 hearing the wind from subways and crowds. ^2000 Passing through countless waves, ^1000 fixing my hair a thousand times. ^2000 Though the wait felt endlessly slow, ^1000 I waited knowing you would come. ^2000 That was enough, But girl, ^1000 love has no logic.All those poetic fantasies,^1000 fateful doors, ^1000 waiting and traveling, it’s all nonsense. Until I met you.I just felt that winter clothes no longer needed to be bulky,^1000 and I must brush my teeth and wash my hair to see you. ^2000 I thought of you before sleep and upon waking,^1000 when leaving and returning home. ^2000 When I was ill or when it snowed or flowers bloomed, ^1000 I wanted to tell you. ^2000 I wanted to save every piece of cake, ^1000 simply because of you.Just because there is you,^1000 anywhere I go feels right, ^1000 and any encounter feels perfect. ^1000 It doesn’t need to be poetic, ^1000 or romantic, ^1000 or even real. None of that matters anymore ,I once believed I could see the truth by clearing my mind,^1000 that flowers would bloom once the right moment came. ^2000 That scenery would bring the right emotions. ^2000 I thought seeing the red string meant finding destiny.I thought too simply.Then I realized, ^1000 when pouring a cup of hot water, ^1000 before it cooled, ^1000 I was already thirsty. ^2000 Fate isn’t crafted with coincidences and destiny. ^2000 It’s about piecing together the romance with streetlights and scenes.Suddenly, I wondered, ^1000 what perfect plan in this world exists to love both God and you equally? ^2000 Upon meeting you, ^1000 you became as important as faith, ^1000 the most precious thing splitting equally with you. ^2000 Boats help people cross rivers, ^1000 you help me navigate life.,Thankfully, ^1000 I met you in my early twenties.,Dreaming of holding your hand. ^2000 Life may seem long, ^1000 but it’s not enough to witness the desert’s lonely smoke or the sunset over the long river. ^2000 I want to experience the unknown with you, ^1000 share longing and love. ^2000 For you to rest on my shoulder. ^2000 You look at the scenery, ^1000 I look at you. Girl, ^1000 the quiet night full of stars, ^1000 and the wind whispering through the window cracks, are not reasons I miss you. ^2000 The soft glow of the old lamp, ^1000 the cramped paper filled with words, ^1000 are not the way I miss you.They are not.I remember searching for you everywhere, ^1000 in the room across the street, ^1000 or the window deep in an alley. ^2000 In the gaps while waiting for a bus, ^1000 glancing around the corner of the road. ^2000 At the crossroads, ^1000 behind me. ^2000 Knowing you were not there.Some tried to help me find you, ^1000 but if it were just to fill loneliness, ^1000 anyone would do. ^2000 But on those nights when stars fell, ^1000 I couldn’t deceive myself.Unexpectedly, you appeared, ^1000 without light or clouds.Was it a windy and clear day? ^1000 Or had the spring blossomed? I don’t remember. ^1000 Were there luxury cars or bright lights? I don’t remember. ^2000 But I’ll never forget you. No, ^1000 it’s certain I won’t.I should say something solid, ^1000 like ‘thunder in winter or snow in summer could separate us.’Or something smooth, ^1000 like ‘holding your hand, we will never part.’ ^2000 There’s always something to say. ^2000 I fear when youth becomes a fleeting memory, ^1000 I will no longer have the chance to confess. ^2000 I fear waiting at the stone bridge for you, ^1000 and you coming with an oil-paper umbrella only to sail away in a boat. That would be too regretful. Aashi, ^1000 I’ve said so much, ^1000 yet it’s only five parts excitement, ^1000 three parts trembling, ^1000 two parts sentimentality, ^1000 and one genuine heart. ^2000 If you’ve read this far, then mujhe tum mera pyara billu likh krr bhejo, nhi to tum gndi billi^1000 I’m deeply grateful.Tsvetaeva said, ^1000 ‘I want to live with you, ^1000 in a certain town, ^1000 sharing endless dusks, ^1000 and endless chimes.’I think so too .... <br/><br/><br/>Happy Relationship Anniversary<br/> Gagan Suman....."
  ];
  
  const el = useRef();
  const letterContentRef = useRef();

  // Function to scroll to the bottom when the content reaches 70% of the screen height
  const scrollToBottom = () => {
    const contentElement = letterContentRef.current;
    const windowHeight = window.innerHeight;
    const contentHeight = contentElement.scrollHeight;
    const scrollTop = contentElement.scrollTop;

    if (contentHeight - scrollTop <= windowHeight * 1) {
      contentElement.scrollTop = contentHeight;
    }
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: content,
      typeSpeed: 90,
      showCursor: false,
      onComplete: () => {
        // Once the typing completes, ensure it scrolls to the bottom
          setTimeout(() => scrollToBottom(), 100);
        //   clearInterval(scrollInterval)
      },
    });

    // Scroll the content every 100ms to check if it should be scrolled
    const scrollInterval = setInterval(() => {
      scrollToBottom();
    }, 100);

    return () => {
      typed.destroy();
      clearInterval(scrollInterval);  // Cleanup the interval when the component unmounts
    };
  }, []);

  return (
    <div className="letter" ref={letterContentRef} style={{ overflowY: "auto", maxHeight: "80vh" }}>
      <div  className="letter-content">
        <h3 ref={el}></h3>
      </div>
    </div>
  );
}

export default Letter;
