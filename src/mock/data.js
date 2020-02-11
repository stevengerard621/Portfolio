import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'trailHead.jpg',
    title: 'TrailHead',
    info: 'This site is geared towards the outdoor community with the intent of sharing trailhead locations for anyone who has ever wanted to go hiking, biking, or trail running, but didn’t know where to begin. ',
    info2: 'TrailHead was based around users interacting with Google Maps. Giving them ability to not only see where the trails begin but being able to switch between terrain views and satellite views to get a better idea of what to expect as well as research what routes to take. Trail markers populate the window, so users can scan around and see what trails are in the area. If they click on the marker a window will open with the trail name.',
    url: 'https://stevenrgerard.com/#/',
    repo: 'https://github.com/stevengerard621/trailHead', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'steveDates.png',
    title: 'steveDates',
    info: 'The name that started as a joke really seemed to stick after I originally pitched it, so this is a dating sight named after myself. This is a dating app similar to Bumble, or Tinder, but with a bit of a twist to it. steveDates gives users the ability to add up to four interests, or hobbies and will return potential matches with any ONE of those same hobbies.',
    info2: ' Another feature that sets steveDates apart is being able to friendZone other users. Being as this app is showcased around matching on people with the same interests, if one user wanted to go skiing with the person in front of them but doesn’t want to actually date them, they can put them in the friendZone. If that second user either clicks indicating they would want to date or friendZone they would both be pushed into the matched category with the caveat of being in the friendZone.',
    url: '',
    repo: 'https://github.com/steveDates/steveDates', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 's.gerard616@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stevenrgerard/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/stevengerard621',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
