import { v4 as uuidv4 } from 'uuid';
import { keys } from '../../keys';

const projects = [
  {
    id: uuidv4(),
    name: 'HealthPotli',
    desc:
      'An Amazon like application for Health-Care Products/Medicines. It has around 50k customers and 35k+ products. The project operates in more than 5 cities in India. This platform has all the features of Amazon, like wallets, referral bonus, promo codes etc.',
    tags: ['Professional'],
    langs: [
      keys.KeyDjango,
      keys.KeyVue,
      keys.KeyHTML,
      keys.KeyCSS,
      keys.KeyJs,
      keys.KeyPython,
    ],
    duration: '2 years',
    repository: '',
    live: 'https://www.healthpotli.com/',
  },
  {
    id: uuidv4(),
    name: 'Terraform GCP Modules',
    desc:
      'This is a code written in terraform language. You can find some modules in this repository which can be executed in GCP for the resources creation (mainly infrastructure management to be precise)',
    tags: ['Personal'],
    langs: [keys.KeyTerraform],
    duration: '1 week',
    repository: 'https://github.com/singhgautam7/terraform-gcp',
    live: '',
  },
  {
    id: uuidv4(),
    name: 'QuizUp',
    desc:
      'An online android Quiz game with various topics and various questions managed via firebase. The detailed statistics and analysis are shown after each game. It also features a topic-wise online ranking system to compete with friends and around the globe.',
    tags: ['Personal'],
    langs: [keys.KeyAndroid, keys.KeyJava],
    duration: '2 months',
    repository: 'https://github.com/LinusRamok/QuizUp',
    live: '',
  },
  {
    id: uuidv4(),
    name: 'Modern Minesweeper',
    desc:
      'An android game which lets you play the classic Minesweeper game with a modern UI. This game also offers various game modes, multiple themes, and personal high score ranking game.',
    tags: ['Personal'],
    langs: [keys.KeyAndroid, keys.KeyJava],
    duration: '6 months',
    repository: 'https://github.com/singhgautam7/Minesweeper',
    live:
      'https://m.apkpure.com/modern-minesweeper-material-design/com.bat.iron.demosweeper',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc:
      'A web-page to showcase my own skills, the page you are exploring right now ;)',
    tags: ['Personal'],
    langs: [keys.KeyReact, keys.KeyCSS],
    duration: '5 days',
    repository: 'https://github.com/singhgautam7',
    live: '/',
  },
];

export default projects;
