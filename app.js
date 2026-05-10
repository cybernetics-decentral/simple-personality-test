const questions = [
  {
    id: 'q1',
    prompt: 'Are you popular at school or work?',
    yes: 'E',
    no: 'I',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'q2',
    prompt: 'Do you like sports?',
    yes: 'S',
    no: 'N',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'q3',
    prompt: 'Are you good at maths?',
    yes: 'T',
    no: 'F',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'q4',
    prompt: 'Is your room clean now?',
    yes: 'J',
    no: 'P',
    yesLabel: 'Yes',
    noLabel: 'No'
  }
];

const profiles = {
  ISTJ: {
    title: 'The Logistician',
    childhood: 'ISTJ children are often reliable and methodical, building a strong sense of routine and taking responsibility early.',
    family: 'They value family traditions and create stable homes where duties are clear and trust is earned through consistency.',
    friends: 'ISTJs are loyal friends who prefer deep one-on-one bonds and practical support over small talk.',
    career: 'They thrive in structured careers like accounting, engineering, law enforcement, or operations management.',
    relationships: 'As partners, ISTJs are dependable, steady, and honest, though they may take time to share emotions.',
    parenthood: 'They make organized parents who teach responsibility and offer a predictable environment for children.',
    growth: 'Learning to trust intuition and show flexibility will help ISTJs adapt to change and broaden their perspective.'
  },
  ISFJ: {
    title: 'The Defender',
    childhood: 'ISFJ kids are caring and attentive, often putting other people’s needs before their own from an early age.',
    family: 'They build warm households focused on comfort, support, and helping loved ones feel safe.',
    friends: 'ISFJs are nurturing companions who remember details and show up when friends need them most.',
    career: 'They excel in health care, education, and administrative roles where compassion and reliability matter.',
    relationships: 'In close relationships they are gentle, loyal, and protective of their partner’s feelings.',
    parenthood: 'They are devoted parents who create loving routines and teach empathy through example.',
    growth: 'Developing boundaries and trusting their own needs helps ISFJs stay energized and balanced.'
  },
  INFJ: {
    title: 'The Advocate',
    childhood: 'INFJ children are often quiet dreamers with a rich inner world and a strong sense of right and wrong.',
    family: 'They seek meaningful family connections and appreciate deep conversations over casual gatherings.',
    friends: 'INFJs are devoted friends who listen carefully and offer advice that reflects their values.',
    career: 'They shine in counseling, writing, coaching, design, or any field that involves helping people grow.',
    relationships: 'They form intimate, values-driven partnerships and look for emotional depth and mutual support.',
    parenthood: 'INFJ parents encourage imagination and ethical thinking while nurturing each child’s unique gifts.',
    growth: 'Balancing idealism with practical action helps INFJs avoid burnout and make stronger impact.'
  },
  INTJ: {
    title: 'The Architect',
    childhood: 'INTJ youngsters are analytical and independent, fascinated by systems and how things fit together.',
    family: 'They value intelligence and autonomy at home, often shaping family decisions with a calm, thoughtful approach.',
    friends: 'INTJs choose friends who stimulate their minds and appreciate honest, meaningful dialogue.',
    career: 'They excel in science, technology, strategy, engineering, and research-oriented positions.',
    relationships: 'In relationships they offer loyalty and clarity, expecting mutual respect and long-term vision.',
    parenthood: 'They raise children to think critically, solve problems, and pursue knowledge with purpose.',
    growth: 'Practicing empathy and patience helps INTJs connect better with others and share their insight gently.'
  },
  ISTP: {
    title: 'The Virtuoso',
    childhood: 'ISTP kids are adventurous tinkerers who love to explore tools and understand how things work in the real world.',
    family: 'They keep family life low-drama and flexible, often helping solve practical problems around the home.',
    friends: 'ISTPs enjoy close friendships built on shared activities, humor, and a sense of independence.',
    career: 'They thrive in technical, hands-on careers like mechanics, design, surgery, or outdoor work.',
    relationships: 'They are easygoing partners who bring spontaneity and calm logic to relationships.',
    parenthood: 'As parents they encourage exploration while teaching kids to solve problems independently.',
    growth: 'Developing consistency and expressing feelings more openly strengthens ISTP relationships.'
  },
  ISFP: {
    title: 'The Adventurer',
    childhood: 'ISFP children are sensitive, creative, and drawn to beauty in nature, music, and art.',
    family: 'They bring warmth and gentle support to family life, often showing love through small thoughtful gestures.',
    friends: 'ISFPs are compassionate friends who create a relaxed, accepting circle of people they trust.',
    career: 'They flourish in artistic work, therapy, design, or careers that allow personal expression and autonomy.',
    relationships: 'They are affectionate partners who value harmony, authenticity, and shared experiences.',
    parenthood: 'ISFP parents model kindness, creativity, and the freedom to explore personal interests.',
    growth: 'Learning to plan ahead and speak up for their needs helps ISFPs feel more confident and secure.'
  },
  INFP: {
    title: 'The Mediator',
    childhood: 'INFP kids are idealistic and imaginative, often lost in stories and feelings about what could be better.',
    family: 'They value authentic emotional connection and create supportive spaces where everyone can be themselves.',
    friends: 'INFPs are loyal friends who often bond over shared values, meaning, and creative projects.',
    career: 'They shine in writing, counseling, psychology, social work, and any role that supports personal growth.',
    relationships: 'They seek deep, understanding partnerships and want to feel emotionally connected and respected.',
    parenthood: 'They raise children to be empathetic, thoughtful, and true to their own values.',
    growth: 'Embracing structure and taking action on their ideals helps INFPs turn dreams into real progress.'
  },
  ENFP: {
    title: 'The Campaigner',
    childhood: 'ENFP children are energetic dreamers who love exploring ideas, people, and creative projects.',
    family: 'They bring enthusiasm to family life and inspire others with their optimism and curiosity.',
    friends: 'ENFPs attract friends easily and enjoy meaningful conversations that spark new possibilities.',
    career: 'They excel in creative, people-focused roles like marketing, coaching, counseling, and media.',
    relationships: 'They offer excitement, warmth, and a desire for emotional growth in partnerships.',
    parenthood: 'ENFP parents encourage creativity, independence, and curiosity in their children.',
    growth: 'Balancing enthusiasm with follow-through helps ENFPs make their big ideas more sustainable.'
  },
  ENTJ: {
    title: 'The Commander',
    childhood: 'ENTJ youths are ambitious and strategic, often taking charge of games and seeking to understand systems.',
    family: 'They bring structure and vision to family life, encouraging everyone to work toward shared goals.',
    friends: 'ENTJs enjoy friendships grounded in mutual respect, intelligence, and ambition.',
    career: 'They thrive in leadership, management, entrepreneurship, law, and strategic planning roles.',
    relationships: 'They are direct partners who value clarity, growth, and teamwork in a relationship.',
    parenthood: 'As parents they teach children confidence, independence, and how to set meaningful goals.',
    growth: 'Listening more and allowing emotional expression helps ENTJs build stronger personal connections.'
  },
  ENFJ: {
    title: 'The Protagonist',
    childhood: 'ENFJ kids are warm leaders who care deeply about others and often try to support their peers.',
    family: 'They make family members feel heard and valued, fostering cooperation and understanding.',
    friends: 'ENFJs are empathetic friends who invest energy into helping people achieve their best selves.',
    career: 'They excel in teaching, counseling, advocacy, and any work that improves teams or communities.',
    relationships: 'They offer genuine care, encouragement, and a strong sense of partnership in love.',
    parenthood: 'They strive to raise caring, confident children by modeling compassion and strong values.',
    growth: 'Setting personal boundaries and attending to their own needs keeps ENFJs energized and grounded.'
  },
  ESTJ: {
    title: 'The Executive',
    childhood: 'ESTJ children are practical and organized, often helping manage chores and group activities.',
    family: 'They keep family routines running smoothly and value respect, honesty, and shared responsibility.',
    friends: 'ESTJs are dependable friends who appreciate straightforward communication and reliability.',
    career: 'They excel in administration, operations, law enforcement, and business leadership roles.',
    relationships: 'They are loyal partners who support stability, clear expectations, and shared decision-making.',
    parenthood: 'They are structured parents who teach children responsibility, discipline, and strong values.',
    growth: 'Learning to appreciate flexibility and softer communication improves ESTJ relationships.'
  },
  ESFJ: {
    title: 'The Consul',
    childhood: 'ESFJ kids are sociable and nurturing, often caring for other people’s emotional needs before their own.',
    family: 'They love bringing people together and create warm, welcoming environments at home.',
    friends: 'ESFJs are generous friends who remember birthdays, details, and small favors that matter.',
    career: 'They thrive in hospitality, teaching, nursing, and any work involving service and support.',
    relationships: 'They are attentive partners who invest deeply in shared traditions and emotional harmony.',
    parenthood: 'They are affectionate parents who help children feel valued and included in family life.',
    growth: 'Practicing self-care and accepting that others may handle tasks differently helps ESFJs stay balanced.'
  },
  ENTP: {
    title: 'The Debater',
    childhood: 'ENTP children are curious and quick-witted, constantly testing ideas and challenging assumptions.',
    family: 'They add lively energy to family life and enjoy exploring new concepts with relatives.',
    friends: 'ENTPs are playful friends who love debates, improvisation, and shared intellectual adventures.',
    career: 'They excel in entrepreneurship, consulting, media, and creative problem-solving roles.',
    relationships: 'They are spontaneous partners who seek a playful, mentally stimulating relationship.',
    parenthood: 'They encourage curiosity, independence, and creative thinking in their children.',
    growth: 'Developing follow-through and listening fully helps ENTPs turn their clever ideas into results.'
  },
  ESTP: {
    title: 'The Entrepreneur',
    childhood: 'ESTP kids are energetic realists who love action, competition, and hands-on challenges.',
    family: 'They bring fun and spontaneity to family gatherings while solving problems on the fly.',
    friends: 'ESTPs are bold friends who enjoy adventure, humor, and directness in social situations.',
    career: 'They thrive in sales, emergency services, athletics, and other fast-paced practical fields.',
    relationships: 'They are confident partners who value excitement, freedom, and action in a relationship.',
    parenthood: 'They raise children to be resourceful, adaptable, and willing to try new things.',
    growth: 'Learning to pause and consider long-term consequences helps ESTPs stay grounded.'
  },
  ESFP: {
    title: 'The Entertainer',
    childhood: 'ESFP children are lively performers who enjoy making others smile and living in the moment.',
    family: 'They bring joy and warmth to family life, often creating memorable moments and celebrations.',
    friends: 'ESFPs are enthusiastic friends who love shared experiences and cheering people on.',
    career: 'They succeed in creative arts, hospitality, event planning, and customer-facing roles.',
    relationships: 'They are affectionate partners who want fun, spontaneity, and emotional connection.',
    parenthood: 'They are playful parents who encourage creativity, expression, and a sense of fun.',
    growth: 'Balancing excitement with planning helps ESFPs build more stable routines and goals.'
  }
};

const app = document.getElementById('app');

function renderIntro() {
  app.innerHTML = `
    <section class="card">
      <div class="result">
        <h2>Ready to discover your MBTI?</h2>
        <p>Answer four simple questions and get a personalized personality profile covering childhood, family, friends, career, relationships, parenthood and growth path.</p>
        <button class="primary" id="start-btn">Start Quiz</button>
      </div>
    </section>
  `;

  document.getElementById('start-btn').addEventListener('click', renderQuiz);
}

function renderQuiz() {
  app.innerHTML = `
    <section class="card">
      <div class="question">
        <h2>Answer the questions below</h2>
        ${questions.map(q => `
          <div class="card" id="${q.id}">
            <h3>${q.prompt}</h3>
            <div class="buttons">
              <button class="choice-button" data-question="${q.id}" data-answer="yes">${q.yesLabel}</button>
              <button class="choice-button" data-question="${q.id}" data-answer="no">${q.noLabel}</button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="card" id="progress-card">
      <p>Select your answer for all 4 questions, then view your profile.</p>
      <button class="primary" id="show-result" disabled>Show My Profile</button>
    </section>
  `;

  const state = {
    answers: {
      q1: null,
      q2: null,
      q3: null,
      q4: null
    }
  };

  function updateProgress() {
    const complete = Object.values(state.answers).every(Boolean);
    document.getElementById('show-result').disabled = !complete;
  }

  app.querySelectorAll('button[data-question]').forEach(button => {
    button.addEventListener('click', () => {
      const questionId = button.dataset.question;
      const answerType = button.dataset.answer;
      const question = questions.find(q => q.id === questionId);
      const value = answerType === 'yes' ? question.yes : question.no;

      state.answers[questionId] = value;
      const parent = button.closest('.card');
      parent.querySelectorAll('button[data-question]').forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      updateProgress();
    });
  });

  document.getElementById('show-result').addEventListener('click', () => {
    const type = questions.map(q => state.answers[q.id]).join('');
    renderProfile(type);
  });
}

function renderProfile(type) {
  const profile = profiles[type];
  if (!profile) {
    app.innerHTML = `
      <section class="card">
        <div class="result">
          <h2>Something went wrong.</h2>
          <p>We could not determine your personality type. Please try again.</p>
          <button class="primary" id="retry">Retry Quiz</button>
        </div>
      </section>
    `;
    document.getElementById('retry').addEventListener('click', renderIntro);
    return;
  }

  app.innerHTML = `
    <section class="card result">
      <h2>Your MBTI type is ${type}</h2>      <p>Your answers add up to this complete result. Here is the personality profile for ${type}:</p>      <p><strong>${profile.title}</strong></p>
    </section>
    <section class="card profile-section">
      <h3>Childhood</h3>
      <p>${profile.childhood}</p>
    </section>
    <section class="card profile-section">
      <h3>Family</h3>
      <p>${profile.family}</p>
    </section>
    <section class="card profile-section">
      <h3>Friends</h3>
      <p>${profile.friends}</p>
    </section>
    <section class="card profile-section">
      <h3>Career</h3>
      <p>${profile.career}</p>
    </section>
    <section class="card profile-section">
      <h3>Relationships</h3>
      <p>${profile.relationships}</p>
    </section>
    <section class="card profile-section">
      <h3>Parenthood</h3>
      <p>${profile.parenthood}</p>
    </section>
    <section class="card profile-section">
      <h3>Growth Path</h3>
      <p>${profile.growth}</p>
    </section>
    <section class="card">
      <button class="primary" id="restart">Take Quiz Again</button>
    </section>
  `;

  document.getElementById('restart').addEventListener('click', renderIntro);
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('Service worker registered.'))
      .catch(error => console.error('Service worker registration failed:', error));
  }
}

renderIntro();
registerServiceWorker();
