import elevate from '../../assets/Project/elevate.png';
import seltzer from '../../assets/Project/seltzer.png';
import garden from '../../assets/Project/garden.png';
import podcast from '../../assets/Project/podcast.png';

const projects = [
  { 
    title: "Elevate Everyday",
    para: "My capstone project for Epicodus: Full CRUD for Workouts with a Blog component. An ongoing project that showcases UI/UX design elements.",
    imageSrc: { elevate },
    url1: "https://paigetiedeman.github.io/Elevate-Everyday/",
    url2: "https://github.com/paigetiedeman/Elevate-Everyday"
  },
  { 
    title: "Summer's Seltzery",
    para: "Solo Project: Summer's Seltzery a React app with full CRUD.",
    imageSrc: { seltzer },
    url1: "https://paigetiedeman.github.io/tap-room/",
    url2: "https://github.com/paigetiedeman/tap-room"
  },
  { 
    title: "Little Green Thumb",
    para: "Team Project: allows the user full CRUD functionality for their own seeds and plots. The application also includes a learning zone where gardening novices can find helpful information to get started.",
    imageSrc: { garden },
    url1: "https://github.com/paigetiedeman/GardenTeamWeek",
    url2: "https://github.com/paigetiedeman/GardenAPI.Solution"
  },
  { 
    title: "Podify",
    para: "A C# Personal Project: Using styling and routing to store a personal database of podcasts.",
    imageSrc: { podcast },
    url1: "https://github.com/paigetiedeman/Podcast.Solution"
  }
];

export default projects;