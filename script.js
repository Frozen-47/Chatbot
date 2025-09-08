 class TeacherChatBot {
            constructor() {
                this.chatArea = document.getElementById('chatArea');
                this.messageInput = document.getElementById('messageInput');
                
                this.responses = {
                    greetings: [
                        "Hello there! Ready to celebrate the remarkable educators in our lives?",
                        "Welcome! Let's honor the dedicated teachers who illuminate minds.",
                        "Greetings! I'm here to help you appreciate the amazing educators around us!"
                    ],
                    history: [
                        "Teacher's Day is observed on September 5th in India, commemorating Dr. Sarvepalli Radhakrishnan's birthday. He was a distinguished educator, philosopher, and India's second President. This day celebrates all educators who dedicate themselves to nurturing young minds.",
                        "The tradition of Teacher's Day honors the invaluable contribution educators make to civilization. Different countries observe it on various dates - September 5th in India, October 5th as World Teachers' Day globally.",
                        "Teacher's Day reminds us that education is the cornerstone of progress. Teachers are the architects of tomorrow, crafting dreams and unlocking potential in every student."
                    ],
                    quotes: [
                        "\"A teacher affects eternity; he can never tell where his influence stops.\" - Henry Brooks Adams",
                        "\"Teaching is the profession that teaches all other professions.\" - Unknown",
                        "\"The best teachers show you where to look but don't tell you what to see.\" - Alexandra K. Trenfor",
                        "\"Education is the most powerful weapon which you can use to change the world.\" - Nelson Mandela",
                        "\"A good teacher is like a candle - it consumes itself to light the way for others.\" - Mustafa Kemal Atatürk"
                    ],
                    studentWishes: [
                        "🎓 Dear Students, Happy Teacher's Day! Today we celebrate YOU - the future leaders, innovators, and change-makers. Your curiosity and passion make teaching worthwhile!",
                        "📚 To all wonderful students - you are the reason teachers wake up excited every morning! Your questions, your growth, your 'aha!' moments light up our world.",
                        "🌟 Students, we appreciate YOU too! Your questions and discoveries remind us why education is magical. Keep being curious, keep dreaming big!",
                        "🎒 You are not just learners, but partners in the beautiful journey of education. Your energy and enthusiasm inspire your teachers every single day!",
                        "💫 Learning is a two-way street. Thank you for being curious explorers, for challenging ideas, and for bringing fresh perspectives to every classroom!",
                        "🏆 You are the heartbeat of every classroom! Your energy, ideas, and dreams fuel the passion of every educator. Keep shining bright!",
                        "🎓 You're not just preparing for your future - you ARE the future! Your potential is limitless, and we believe in every single one of you!"
                    ],
                    teacherWishes: [
                        "🎓 Happy Teacher's Day! Thank you for being the guiding light that illuminates the path of knowledge. Your dedication shapes the leaders of tomorrow!",
                        "🌟 Wishing all amazing teachers - Your patience, wisdom, and endless support create ripples of positive change that last lifetimes. You are true heroes!",
                        "📚 We celebrate YOU! Thank you for believing in us when we couldn't believe in ourselves, for seeing potential where others saw problems.",
                        "🎉 Happy Teacher's Day to incredible educators! Your passion for teaching ignites the spark of learning in countless young minds every day!",
                        "💫 You don't just teach subjects, you teach life lessons, inspire dreams, and build character. Thank you for being mentors, guides, and friends!",
                        "🏆 Your influence extends far beyond the classroom walls. You plant seeds of knowledge that bloom into forests of wisdom. Thank you for everything!",
                        "🎓 To mentors who see potential where others see problems, who never give up on their students - you make the world a brighter place!"
                    ],
                    ideas: [
                        "Meaningful ways to express gratitude:\n• Write a heartfelt personal letter\n• Share specific examples of their positive impact\n• Create a handmade gift or artwork\n• Offer to assist with classroom activities\n• Simply express sincere thanks in person",
                        "Teachers value authentic recognition:\n• Compile a memory book with fellow students\n• Describe a lesson that changed your perspective\n• Give them a thoughtful book or plant\n• Write a poem expressing your appreciation",
                        "Simple gestures with lasting impact:\n• Have a meaningful conversation about their influence\n• Organize a class photo with thank-you messages\n• Help maintain their classroom space\n• Stay in touch even after graduation"
                    ],
                    celebration: [
                        "Creative appreciation initiatives:\n• Coordinate surprise classroom decorations\n• Produce a video compilation of student messages\n• Plant a memorial tree in the school grounds\n• Submit an appreciation article to local media",
                        "Memorable celebration strategies:\n• Host a virtual appreciation ceremony\n• Design a digital memory album\n• Organize a community potluck event\n• Arrange student-led teaching sessions",
                        "Special recognition activities:\n• Compose a dedicated song or poem\n• Create personalized bookmarks\n• Coordinate a surprise performance\n• Present customized desk accessories"
                    ],
                    gifts: [
                        "Thoughtful gift ideas for teachers:\n• Personalized desk nameplate or mug\n• Quality notebooks or planners\n• Gift cards for classroom supplies\n• Potted plants or flowers\n• Handwritten appreciation letters\n• Custom bookmarks with inspiring quotes",
                        "Budget-friendly teacher gifts:\n• Homemade cookies or treats\n• Hand-drawn artwork or cards\n• Small succulent plants\n• Coffee or tea gift sets\n• Inspirational desk calendars\n• Thank you note collections from students",
                        "Practical gifts teachers love:\n• Quality pens and markers\n• Organizational tools and folders\n• Cozy classroom throw blankets\n• Essential oil diffusers\n• Stress-relief items like fidget toys\n• Technology accessories for teaching"
                    ],
                    methods: [
                        "Innovative teaching approaches:\n• Interactive multimedia presentations\n• Gamification of learning concepts\n• Collaborative group projects\n• Real-world problem solving\n• Hands-on experiential learning\n• Peer-to-peer teaching sessions",
                        "Modern classroom techniques:\n• Flipped classroom methodology\n• Design thinking workshops\n• Virtual reality experiences\n• Cross-curricular integration\n• Mindfulness and emotional learning\n• Inquiry-based discovery",
                        "Effective engagement strategies:\n• Storytelling in lessons\n• Movement and kinesthetic learning\n• Technology-enhanced activities\n• Student choice and autonomy\n• Regular feedback loops\n• Celebration of small victories"
                    ],
                    famous: [
                        "Legendary educators who changed the world:\n• Maria Montessori - Revolutionary early childhood education\n• John Dewey - Progressive education pioneer\n• Paulo Freire - Critical pedagogy advocate\n• Dr. A.P.J. Abdul Kalam - Inspiring teacher-president\n• Anne Sullivan - Helen Keller's transformative teacher",
                        "Influential educational philosophers:\n• Jean-Jacques Rousseau - Natural education theory\n• Friedrich Froebel - Kindergarten founder\n• Lev Vygotsky - Social learning theorist\n• Howard Gardner - Multiple intelligences\n• bell hooks - Critical thinking in education",
                        "Modern educational innovators:\n• Ken Robinson - Creativity in education\n• Sugata Mitra - Self-organized learning\n• Sal Khan - Online education pioneer\n• Geoffrey Canada - Education reform leader\n• Rita Pierson - Every child deserves a champion"
                    ],
                    poetry: [
                        "\"Teachers are the gardeners of human minds,\nNurturing seeds of knowledge with patient care,\nWatching as understanding blooms and binds,\nCreating futures beyond compare.\"\n\n- A tribute to all educators 🌱",
                        "\"In every question asked and answer given,\nIn every 'aha!' moment that lights the way,\nTeachers plant the seeds of wisdom driven,\nThat bloom in hearts day after day.\"\n\n- For those who shape tomorrow 📚",
                        "\"They stand before us, not just with lessons planned,\nBut with hearts full of hope and minds that inspire,\nGuiding us forward with a gentle hand,\nIgniting in students the learning fire.\"\n\n- Thank you, teachers everywhere 🎓"
                    ],
                    global: [
                        "Teacher's Day around the world:\n• India: September 5 (Dr. Radhakrishnan's birthday)\n• World Teachers' Day: October 5 (UNESCO)\n• China: September 10\n• Brazil: October 15\n• Argentina: September 11\n• Thailand: January 16",
                        "Global teacher appreciation traditions:\n• In South Korea, students give carnations\n• Chinese students present handmade cards\n• In Russia, flowers and chocolates are common\n• Malaysian students organize special assemblies\n• Vietnamese students visit former teachers",
                        "International education celebrations:\n• Many countries honor educators differently\n• Some focus on student performances\n• Others emphasize community recognition\n• Common themes: gratitude, respect, appreciation\n• Universal goal: recognizing teaching's importance"
                    ],
                    activities: [
                        "Creative classroom celebration ideas:\n• Student-led teaching sessions\n• Time capsule creation project\n• Classroom museum exhibition\n• Appreciation video compilation\n• Memory wall with favorite lessons\n• Teacher trivia challenge",
                        "Engaging Teacher's Day activities:\n• Write and perform appreciation songs\n• Create teacher superhero comics\n• Design custom classroom decorations\n• Organize surprise flash mob\n• Host student talent showcase\n• Make personalized yearbook pages",
                        "Memorable celebration projects:\n• Interview teachers about their journey\n• Create digital appreciation timeline\n• Design teacher appreciation website\n• Produce classroom documentary\n• Build gratitude photo collage\n• Organize community thank-you campaign"
                    ],
                    challenges: [
                        "Supporting teachers through challenges:\n• Acknowledge their dedication daily\n• Provide resources and materials\n• Respect their professional expertise\n• Support work-life balance\n• Celebrate their achievements publicly\n• Listen to their concerns actively",
                        "How communities can help educators:\n• Volunteer in schools and classrooms\n• Donate supplies and resources\n• Advocate for education funding\n• Show appreciation throughout the year\n• Support professional development\n• Create positive school environments",
                        "Understanding teacher needs:\n• Professional growth opportunities\n• Adequate classroom resources\n• Administrative support\n• Student and parent cooperation\n• Recognition and appreciation\n• Safe and positive work environments"
                    ],
                    edtech: [
                        "Technology enhancing education:\n• Interactive whiteboards and displays\n• Educational apps and software\n• Virtual reality learning experiences\n• Online collaboration platforms\n• AI-powered learning assistants\n• Digital assessment tools",
                        "Modern teaching tools:\n• Cloud-based lesson planning\n• Video conferencing for remote learning\n• Gamified learning platforms\n• Digital portfolios and showcases\n• Adaptive learning systems\n• Real-time feedback applications",
                        "Future of educational technology:\n• Personalized learning AI\n• Immersive VR/AR experiences\n• Blockchain-verified credentials\n• Global classroom connections\n• Smart learning environments\n• Data-driven insights for improvement"
                    ],
                    motivation: [
                        "💪 Your impact reaches beyond textbooks - you're shaping hearts, minds, and futures. Every lesson plants seeds that will grow for generations!",
                        "🌟 Remember: You chose one of the most important professions in the world. Your patience, creativity, and care make miracles happen daily!",
                        "🎓 To every educator feeling overwhelmed - you are making a difference even when you can't see it. Your students will carry your wisdom forever!",
                        "💝 Teaching is not just a job, it's a calling. You answer that call every day with grace, dedication, and love. The world is better because of you!",
                        "🚀 Every student you inspire, every mind you open, every dream you nurture - these are your superpowers. You're changing the world one student at a time!"
                    ],
                    parents: [
                        "🏠 To parents as first teachers: You are your child's first classroom, first textbook, and first inspiration. Your love and guidance create the foundation for all learning!",
                        "👪 Parent educators deserve recognition too! Your bedtime stories, homework help, and life lessons are invaluable contributions to your child's growth and development.",
                        "💕 Home is where learning begins. Parents, you teach patience, kindness, curiosity, and resilience every single day. Thank you for being amazing first teachers!",
                        "🌱 The partnership between parents and teachers creates the strongest foundation for student success. Together, you nurture young minds to reach their full potential!",
                        "📖 Every question answered, every book read, every encouraging word - parents, you are co-educators in the beautiful journey of raising lifelong learners!"
                    ],
                    help: [
                        "Available commands:\n• history - Teacher's Day origins\n• quotes - Inspiring teacher quotes\n• student - Student appreciation messages\n• teacher - Teacher appreciation wishes\n• ideas - Appreciation methods\n• celebrate - Celebration strategies\n• gifts - Gift suggestions for teachers\n• methods - Teaching methodologies\n• famous - Famous educators in history\n• poetry - Teacher appreciation poems\n• global - Worldwide celebrations\n• activities - Classroom celebration ideas\n• challenges - Supporting teachers\n• edtech - Education technology\n• motivation - Motivational messages\n• parents - Appreciating parent educators\n• clear - Reset conversation\n\nJust type naturally - I understand context too!"
                    ],
                    default: [
                        "That's a wonderful perspective on education! Teachers truly deserve recognition every day.",
                        "Educators really are extraordinary individuals. Their influence resonates throughout lifetimes!",
                        "I appreciate how you're thinking about celebrating teachers! They're the foundation of society.",
                        "Education is indeed a noble calling. Teachers plant seeds of wisdom that flourish eternally! 🌱"
                    ]
                };
                
                this.initializeBot();
            }

            initializeBot() {
                this.startBootSequence();
            }

            startBootSequence() {
                const bootMessages = [
                    { text: "✓ Initializing Teacher Appreciation System...", type: "success", delay: 1000 },
                    { text: "✓ Loading Educational Database...", type: "success", delay: 1500 },
                    { text: "✓ Connecting to Wisdom Network...", type: "info", delay: 2000 },
                    { text: "⚡ Activating AI Learning Modules...", type: "warning", delay: 2500 },
                    { text: "✓ System Ready - Teacher's Day Mode Active", type: "success", delay: 3000 }
                ];

                const bootMessagesContainer = document.getElementById('bootMessages');
                
                bootMessages.forEach((message, index) => {
                    setTimeout(() => {
                        const messageEl = document.createElement('div');
                        messageEl.className = `boot-message ${message.type}`;
                        messageEl.textContent = message.text;
                        bootMessagesContainer.appendChild(messageEl);
                        
                        setTimeout(() => {
                            messageEl.classList.add('show');
                        }, 100);
                        
                        // If this is the last message, start transition to main interface
                        if (index === bootMessages.length - 1) {
                            setTimeout(() => {
                                this.completeBootSequence();
                            }, 1500);
                        }
                    }, message.delay);
                });
            }

            completeBootSequence() {
                const bootScreen = document.getElementById('bootScreen');
                const terminalWindow = document.getElementById('terminalWindow');
                
                // Fade out boot screen
                bootScreen.classList.add('hidden');
                
                // Show terminal window
                setTimeout(() => {
                    terminalWindow.classList.add('show');
                    this.setupEventListeners();
                    this.messageInput.focus();
                    
                    // Add welcome system message
                    setTimeout(() => {
                        this.addBotMessage("🎓 System initialized successfully! Teacher Appreciation Mode is now active. Ready to celebrate educators!");
                    }, 500);
                }, 500);
            }

            setupEventListeners() {
                this.messageInput.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        this.sendMessage();
                    }
                });
            }

            sendMessage() {
                const message = this.messageInput.value.trim();
                if (!message) return;

                this.addUserMessage(message);
                this.messageInput.value = '';
                
                setTimeout(() => {
                    this.processMessage(message);
                }, 500);
            }

            addUserMessage(message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'chat-message user-message';
                messageDiv.innerHTML = `<span>${this.escapeHtml(message)}</span>`;
                this.chatArea.appendChild(messageDiv);
                this.scrollToBottom();
            }

            addBotMessage(message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'chat-message bot-message';
                messageDiv.innerHTML = `<span>${this.escapeHtml(message)}</span>`;
                this.chatArea.appendChild(messageDiv);
                this.scrollToBottom();
            }

            addTypingIndicator() {
                const typingDiv = document.createElement('div');
                typingDiv.className = 'chat-message bot-message typing-indicator';
                typingDiv.innerHTML = '<span>EduBot is typing...</span>';
                typingDiv.id = 'typing-indicator';
                this.chatArea.appendChild(typingDiv);
                this.scrollToBottom();
                return typingDiv;
            }

            removeTypingIndicator() {
                const typingIndicator = document.getElementById('typing-indicator');
                if (typingIndicator) {
                    typingIndicator.remove();
                }
            }

            processMessage(message) {
                const typingIndicator = this.addTypingIndicator();
                
                setTimeout(() => {
                    this.removeTypingIndicator();
                    const response = this.getResponse(message);
                    this.addBotMessage(response);
                }, 1000 + Math.random() * 1000);
            }

            getResponse(message) {
                const lowerMessage = message.toLowerCase();
                
                // Check for greetings
                if (this.containsAny(lowerMessage, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'])) {
                    return this.getRandomResponse('greetings');
                }
                
                // Check for specific topics
                if (this.containsAny(lowerMessage, ['history', 'origin', 'started', 'began', 'radhakrishnan'])) {
                    return this.getRandomResponse('history');
                }
                
                if (this.containsAny(lowerMessage, ['quote', 'quotes', 'saying', 'inspiring', 'inspiration'])) {
                    return this.getRandomResponse('quotes');
                }
                
                if (this.containsAny(lowerMessage, ['student', 'students', 'learner', 'learners'])) {
                    return this.getRandomResponse('studentWishes');
                }
                
                if (this.containsAny(lowerMessage, ['teacher', 'teachers', 'educator', 'educators', 'wish', 'wishes'])) {
                    return this.getRandomResponse('teacherWishes');
                }
                
                if (this.containsAny(lowerMessage, ['idea', 'ideas', 'appreciation', 'appreciate', 'thank', 'thanks'])) {
                    return this.getRandomResponse('ideas');
                }
                
                if (this.containsAny(lowerMessage, ['celebrate', 'celebration', 'party', 'event', 'ceremony'])) {
                    return this.getRandomResponse('celebration');
                }
                
                if (this.containsAny(lowerMessage, ['gift', 'gifts', 'present', 'presents', 'give'])) {
                    return this.getRandomResponse('gifts');
                }
                
                if (this.containsAny(lowerMessage, ['method', 'methods', 'teaching', 'technique', 'approach'])) {
                    return this.getRandomResponse('methods');
                }
                
                if (this.containsAny(lowerMessage, ['famous', 'great', 'legendary', 'known', 'popular'])) {
                    return this.getRandomResponse('famous');
                }
                
                if (this.containsAny(lowerMessage, ['poem', 'poetry', 'verse', 'rhyme'])) {
                    return this.getRandomResponse('poetry');
                }
                
                if (this.containsAny(lowerMessage, ['world', 'global', 'worldwide', 'international', 'country', 'countries'])) {
                    return this.getRandomResponse('global');
                }
                
                if (this.containsAny(lowerMessage, ['activity', 'activities', 'classroom', 'school', 'fun'])) {
                    return this.getRandomResponse('activities');
                }
                
                if (this.containsAny(lowerMessage, ['challenge', 'challenges', 'problem', 'problems', 'difficult', 'help'])) {
                    return this.getRandomResponse('challenges');
                }
                
                if (this.containsAny(lowerMessage, ['technology', 'tech', 'edtech', 'digital', 'online', 'computer'])) {
                    return this.getRandomResponse('edtech');
                }
                
                if (this.containsAny(lowerMessage, ['motivation', 'motivational', 'inspire', 'inspiring', 'encourage'])) {
                    return this.getRandomResponse('motivation');
                }
                
                if (this.containsAny(lowerMessage, ['parent', 'parents', 'family', 'home', 'mother', 'father'])) {
                    return this.getRandomResponse('parents');
                }
                
                if (this.containsAny(lowerMessage, ['help', 'command', 'commands', 'what can you do'])) {
                    return this.getRandomResponse('help');
                }
                
                // Default response
                return this.getRandomResponse('default');
            }

            containsAny(text, keywords) {
                return keywords.some(keyword => text.includes(keyword));
            }

            getRandomResponse(category) {
                const responses = this.responses[category] || this.responses.default;
                return responses[Math.floor(Math.random() * responses.length)];
            }

            scrollToBottom() {
                this.chatArea.scrollTop = this.chatArea.scrollHeight;
            }

            escapeHtml(text) {
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            }
        }

        // Global functions for quick buttons
        function sendQuickMessage(message) {
            if (window.teacherBot) {
                window.teacherBot.addUserMessage(message);
                setTimeout(() => {
                    window.teacherBot.processMessage(message);
                }, 500);
            }
        }

        function clearChat() {
            if (window.teacherBot) {
                window.teacherBot.chatArea.innerHTML = `
                    <div class="chat-message bot-message">
                        <span>Chat cleared! How can I help you celebrate teachers today?</span>
                    </div>
                `;
            }
        }

        // Initialize the bot when page loads
        window.addEventListener('load', () => {
            window.teacherBot = new TeacherChatBot();
        });
