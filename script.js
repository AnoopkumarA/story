document.addEventListener('DOMContentLoaded', () => {
    const characterCards = document.querySelectorAll('.character-card');
    const placeCards = document.querySelectorAll('.place-card');
    const styleCards = document.querySelectorAll('.style-card');
    const startOverButton = document.querySelector('.start-over');
    const generateStoryButton = document.querySelector('.generate-story');
    const storyContent = document.querySelector('.story-content');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const audioControl = document.querySelector('.audio-control');

    let selectedCharacter = null;
    let selectedPlace = null;
    let selectedStyle = null;
    let isSpeaking = false;
    let speechSynthesis = window.speechSynthesis;
    let speechUtterance = null;

    
    // Story templates for different styles
    const storyTemplates = {
        "Singing Adventure": [
            `In the mystical realm of the {place}, where stardust sparkled like morning dew and ancient magic flowed through every breeze, {character} discovered an enchanted crystal music box adorned with runes of the First Age. ✨

As {character} traced the ethereal runes with gentle wonder, the box awakened, releasing a cascade of prismatic musical notes that transformed into shimmering butterflies with wings of pure light. Each butterfly's flight left trails of rainbow magic that painted the air with ancient melodies never heard in a thousand years.

Drawn by an otherworldly calling, {character} followed these luminous guides deeper into the heart of the {place}. They encountered a grove of Whisperwind Trees whose leaves sang in the ancient tongue of the fae, and met the Starlight Choir - spirits of pure light who conducted orchestras using wands carved from fallen stars.

Something extraordinary happened when {character} joined their voice with the ancient song - reality itself began to dance. Crystal flowers erupted from the ground in harmonious bursts, clouds shaped themselves into magnificent creatures of legend, and even the ancient sleeping dragons stirred in their caves, humming along to the ethereal melody.

The magic grew stronger as more mystical beings were drawn to {character}'s enchanted symphony - unicorns whose horns chimed like silver bells, phoenix choirs whose songs could heal broken hearts, and even the shy moon sprites who only dance during the blue moon. Together, they wove a tapestry of music so powerful it was said to have awakened the ancient magic that had slumbered since the Dawn Times. 

Now the {place} is known throughout all magical realms as the home of the Songweaver, where {character} teaches other seekers how to find the music of the spheres hidden within their souls, and how to use it to keep the ancient magic alive for generations to come. 🌟`,

            `Deep within the most sacred groves of the {place}, where reality shimmers like gossamer and time flows like honey, {character} stumbled upon an artifact of legend - the Crystalline Harp of the Ancient Dreamweavers. 🎵

The moment {character}'s touch met the ethereal strings, the very fabric of magic responded. Each note rang out like liquid starlight, causing ripples in the veil between worlds. The music spoke of ancient kingdoms, forgotten spells, and dreams that had slept for a thousand years.

{character} discovered they had a remarkable gift - they could conduct this magnificent ensemble of magical musicians simply by moving their hands. When they raised their arms, the music soared to the heavens; when they swayed, the melody became a gentle lullaby that made flowers bloom and stars twinkle brighter.

Together with their newfound musical friends, {character} created a school of magical music in the heart of the {place}. Here, they taught others how to find the songs hidden in their hearts and how to use music to spread joy and wonder throughout the land. The school became famous across all magical realms as a place where anyone could learn to weave spells through song and create symphonies of pure enchantment. ✨`,

            `One misty morning in the {place}, {character} heard a mysterious echo that seemed to come from everywhere and nowhere at once. 🎵 

Following the intriguing sound, {character} discovered a hidden valley where musical notes floated in the air like autumn leaves. Each note had its own personality - some giggled, others danced, and a few even told jokes! But the most extraordinary thing was that when these notes came together, they could create magical spells that transformed the world around them.

{character} spent days learning the secret language of the musical notes. They discovered that combining different notes could create amazing effects - a sequence of golden notes could make anyone float like a feather, while silver notes could turn raindrops into tiny shooting stars. Blue notes had the power to heal sad hearts, and purple notes could make delicious treats appear out of thin air!

Word of {character}'s magical music spread throughout the {place}, attracting all sorts of wonderful creatures. A wise old owl who conducted moonbeam orchestras became their mentor, teaching them ancient songs that could wake up mountains or put storms to sleep. A group of acrobatic squirrels formed a dancing troupe, performing elaborate routines to {character}'s enchanted compositions.

Together with their growing band of musical friends, {character} organized the greatest magical concert ever seen in the {place}. The performance lasted three days and three nights, each moment more spectacular than the last. Mountains swayed to the rhythm, clouds formed shapes of dancing animals, and everyone who attended found themselves able to speak the universal language of music.

Now, whenever anyone visits the {place}, they might just hear echoes of {character}'s magical melodies, bringing joy and wonder to all who listen. The legacy of their musical magic lives on, inspiring new generations to find the extraordinary songs hidden within their own hearts. 🌈`,
        ],
        "Art Discovery": [
            `On a day when the sun painted the sky in extraordinary colors, {character} discovered an ancient art studio hidden within the mysterious {place}. 🎨 

The studio was unlike anything {character} had ever seen - easels made of starlight, paintbrushes that floated in mid-air, and palettes filled with colors that seemed to move and swirl of their own accord. But what caught their eye most was a magnificent crystal paintbrush that sparkled with all the colors of the rainbow and more.

When {character} picked up the brush, something magical happened. Each stroke they made came to life! They painted a butterfly, and it fluttered off the canvas, leaving a trail of sparkles in its wake. They drew a friendly dragon, and it emerged from the painting, breathing flowers instead of fire. Even their doodles of clouds turned into real, fluffy platforms that they could bounce on!

Excited by this discovery, {character} began creating an entire magical world within the {place}. They painted rainbow bridges between floating islands, gardens where the flowers sang lullabies, and friendly creatures who helped lost travelers find their way. Each creation added a new layer of wonder to their ever-growing masterpiece.

Other inhabitants of the {place} were amazed by the living art gallery that was forming around them. Soon, {character} started teaching others how to use the magic of art to bring their own imaginations to life. They learned that when different artists worked together, their combined creativity could create even more spectacular wonders.

The {place} became known as a sanctuary of living art, where paintings danced off walls, sculptures told stories, and even the simplest sketch could hold a world of magic. {character}'s greatest joy was seeing how their artistic magic brought smiles to everyone who visited, proving that imagination truly is the most powerful magic of all. 🌟`,

            `In the heart of the {place}, {character} uncovered a mysterious chest that radiated with prismatic light. Inside, they found a set of enchanted art supplies that would change their life forever. ���� 

The chest contained brushes made from unicorn hair, paints mixed with stardust, and a canvas woven from moonbeams. But the real magic began when {character} started to create. Each color had its own special power - red could bring warmth to the coldest day, blue could make objects float like bubbles, and green could accelerate the growth of plants into fantastic shapes.

As {character} experimented with their magical art supplies, they began to understand the true power of creativity. They painted a series of portals that allowed animals to travel instantly between different parts of the {place}. They created living murals that told stories and gave advice to passersby. Their abstract paintings became windows into other dimensions, showing glimpses of worlds never seen before.

Word of {character}'s magical artistry spread far and wide, attracting creatures from all corners of the enchanted realm. A wise phoenix became their art critic, offering insights with gentle wisdom. A group of mischievous pixies served as their color mixers, creating new shades that had never existed before.

{character} established an open-air art school where anyone could come to learn the secrets of magical creativity. Students learned how to capture dreams in watercolors, how to sculpt clouds into lasting shapes, and how to weave spells into their sketches. The {place} transformed into a living canvas where every surface told a story and every corner held a new artistic surprise.

Years later, {character}'s artistic legacy continued to grow. The {place} became known as the most colorful and creative spot in all the magical realms, where art and magic danced together in endless possibility. And somewhere, in a special studio, {character} still creates new wonders every day, proving that the greatest masterpieces come from the heart. ✨`,
        ],
        "Dancing Fun": [
            `In the most unexpected corner of the {place}, {character} made an extraordinary discovery - a pair of crystal shoes that sparkled with every color imaginable. 💫 

The moment {character} tried them on, magic coursed through their entire body. The shoes began to play music that seemed to come from the heart of the {place} itself, and {character} found themselves moving in ways they never thought possible. Each step created ripples of light that transformed the world around them - flowers sprouted and bloomed in rhythm, stones rose from the ground to form dancing platforms, and the very air seemed to shimmer with musical energy.

As {character} danced through the {place}, they discovered that different dance moves created different kinds of magic. A twirl could summon a spiral of butterflies, a leap could create bridges of rainbow light, and a simple tap of their feet could make stars rain down from above. The more they danced, the more magical the {place} became.

Word spread quickly about the dancing wonder, and soon creatures from all corners of the magical realm came to join in. {character} taught them that everyone had their own special dance inside them - the elegant swans learned breakdancing, the clumsy bears mastered ballet, and even the shy mushrooms found their groove in tap dancing.

Together, they organized the most spectacular dance festival ever seen. For seven days and seven nights, the {place} was transformed into a magnificent ballroom where magic and movement combined in endless ways. The festival became famous for its floating dance floors, anti-gravity dance battles, and choreographed numbers that could literally make dreams come true.

Now, the {place} is known as the realm where dance magic was born. Every full moon, {character} hosts a grand ball where anyone can come to discover their inner dancer and experience the joy of magical movement. And if you listen carefully, you might hear the enchanted music that started it all, still echoing through the air, inviting everyone to join in the endless dance. 🌟`,

            `Deep within the enchanted {place}, {character} stumbled upon an ancient dance circle marked by glowing crystals and mysterious symbols. 💫 

When {character} stepped into the circle, something extraordinary happened. The ground beneath their feet began to pulse with rhythm, and streams of colorful light spiraled up from the ancient markings. Each movement they made created a new pattern of magic - their footsteps left trails of flowering vines, their spins generated whirlwinds of glittering stars, and their jumps caused waves of aurora lights to ripple across the sky.

As {character} explored this newfound power, they discovered that the {place} itself was one giant instrument, waiting to be played through dance. Different areas created different sounds - the crystal caves echoed with percussion, the ancient trees hummed melodies, and the streams bubbled with bass notes. By dancing through these spaces, {character} could conduct an entire symphony with just their movements.

Soon, other inhabitants of the {place} were drawn to the magical performance. A troupe of moonlight spirits became {character}'s backup dancers, shadow creatures provided special effects, and wind spirits carried the music to every corner of the realm. Together, they created dance performances that could change the weather, turn night into day, and even make wishes come true.

{character} opened a magical dance academy in the heart of the {place}, where students learned how to weave spells through movement and create enchantments through rhythm. The academy became famous for its unique classes - "Levitation Through Latin Dance," "Potion Mixing Ballet," and "Weather-Control Waltz" became instant favorites.

Years later, the {place} has become a legendary destination for dancers from all magical realms. Every season brings new performances that combine dance and magic in increasingly spectacular ways. And at the center of it all is {character}, still discovering new ways to bring joy and wonder through the magic of movement. ✨`,
        ]
    };

    function handleSelection(elements, clickedElement) {
        elements.forEach(element => {
            element.style.border = 'none';
            element.style.opacity = '1';
        });
        
        clickedElement.style.border = '3px solid var(--primary-color)';
        elements.forEach(element => {
            if (element !== clickedElement) {
                element.style.opacity = '0.6';
            }
        });
        checkSelections();
    }

    function checkSelections() {
        generateStoryButton.disabled = !(selectedCharacter && selectedPlace && selectedStyle);
    }

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            selectedCharacter = card.querySelector('p').textContent;
            handleSelection(characterCards, card);
        });
    });

    placeCards.forEach(card => {
        card.addEventListener('click', () => {
            selectedPlace = card.querySelector('h3').textContent;
            handleSelection(placeCards, card);
        });
    });

    styleCards.forEach(card => {
        card.addEventListener('click', () => {
            selectedStyle = card.querySelector('h3').textContent;
            handleSelection(styleCards, card);
        });
    });

    function generateStory() {
        if (isSpeaking) {
            speechSynthesis.cancel();
            isSpeaking = false;
            audioControl.querySelector('i').className = 'fas fa-volume-up';
        }
        loadingSpinner.style.display = 'block';
        storyContent.style.display = 'none';
        
        // Simulate loading time for better UX
        setTimeout(() => {
            try {
                // Get templates for selected style
                const templates = storyTemplates[selectedStyle];
                // Randomly select a template
                const template = templates[Math.floor(Math.random() * templates.length)];
                
                // Replace placeholders with selections
                const story = template
                    .replace(/{character}/g, selectedCharacter)
                    .replace(/{place}/g, selectedPlace);

                storyContent.textContent = story;
            } catch (error) {
                storyContent.textContent = "Oops! Something went wrong while creating your story. Please try again!";
                console.error('Error:', error);
            } finally {
                loadingSpinner.style.display = 'none';
                storyContent.style.display = 'block';
            }
        }, 1500); // 1.5 second delay for loading effect
    }

    generateStoryButton.addEventListener('click', generateStory);

    startOverButton.addEventListener('click', () => {
        selectedCharacter = null;
        selectedPlace = null;
        selectedStyle = null;

        characterCards.forEach(card => {
            card.style.border = 'none';
            card.style.opacity = '1';
        });

        placeCards.forEach(card => {
            card.style.border = 'none';
            card.style.opacity = '1';
        });

        styleCards.forEach(card => {
            card.style.border = 'none';
            card.style.opacity = '1';
        });

        generateStoryButton.disabled = true;
        storyContent.textContent = '';

        if (isSpeaking) {
            speechSynthesis.cancel();
            isSpeaking = false;
            audioControl.querySelector('i').className = 'fas fa-volume-up';
        }
    });

    function toggleAudioPlayback() {
        if (isSpeaking) {
            speechSynthesis.cancel();
            isSpeaking = false;
            audioControl.querySelector('i').className = 'fas fa-volume-up';
        } else {
            const storyText = storyContent.textContent;
            if (storyText) {
                speechUtterance = new SpeechSynthesisUtterance(storyText);
                
                // Get available voices and select a female voice
                const voices = speechSynthesis.getVoices();
                const femaleVoice = voices.find(voice => 
                    voice.name.includes('female') || 
                    voice.name.includes('woman') || 
                    voice.name.includes('girl') ||
                    voice.lang.includes('en-GB-Female') ||
                    voice.lang.includes('en-US-Female')
                );
                
                if (femaleVoice) {
                    speechUtterance.voice = femaleVoice;
                }
                
                // Adjust pitch higher for a more feminine voice if no female voice is found
                speechUtterance.rate = 0.9;
                speechUtterance.pitch = 1.2; // Slightly higher pitch
                
                speechUtterance.onend = () => {
                    isSpeaking = false;
                    audioControl.querySelector('i').className = 'fas fa-volume-up';
                };

                speechSynthesis.speak(speechUtterance);
                isSpeaking = true;
                audioControl.querySelector('i').className = 'fas fa-volume-mute';
            }
        }
    }

    // Add this at the start of your script to ensure voices are loaded
    speechSynthesis.addEventListener('voiceschanged', () => {
        const voices = speechSynthesis.getVoices();
        console.log('Voices loaded:', voices.length);
    });

    audioControl.addEventListener('click', toggleAudioPlayback);
});
