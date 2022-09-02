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
    name: 'Python SickDict',
    desc:
      'An IDE friendly (auto-completion) python dictionary with dot-accessible attributes. All the dict features with much more features added.',
    tags: ['Personal'],
    langs: [keys.KeyPython],
    duration: '2 days',
    repository:
      'https://github.com/singhgautam7/Python-GoldMine/tree/master/sick_dict',
    live: 'https://pypi.org/project/sick-dict/',
  },
  {
    id: uuidv4(),
    name: 'Python Profiler',
    desc:
      'This repository can help you in finding out the total time taken to execute a function and the snippets which takes up the most time.',
    tags: ['Personal'],
    langs: [keys.KeyPython],
    duration: '2 days',
    repository:
      'https://github.com/singhgautam7/Python-GoldMine/tree/master/python_profiler',
    live: '',
  },
  {
    id: uuidv4(),
    name: 'Python - Know Your Exceptions',
    desc:
      'If you are having troubles in finiding out which exception classes to use to handle the exceptions/errors in your code, this package will help you to just serve you the solution for the same.',
    tags: ['Personal'],
    langs: [keys.KeyPython],
    duration: '1 day',
    repository:
      'https://github.com/singhgautam7/Python-GoldMine/tree/master/know_your_exceptions',
    live: 'https://pypi.org/project/know-your-exceptions/',
  },
  {
    id: uuidv4(),
    name: 'Python Colored Output',
    desc:
      'This python package will help you to print out colored/formatted outputs in your terminal. So basically, this is just python print with steroids.',
    tags: ['Personal'],
    langs: [keys.KeyPython],
    duration: '1 week',
    repository:
      'https://github.com/singhgautam7/Python-GoldMine/tree/master/beauty_print',
    live: 'https://pypi.org/project/c-out/',
  },
  {
    id: uuidv4(),
    name: 'Gcloud IAM custom roles using Python',
    desc:
      'This will help you to manage(CRUD) the custom roles in your gcloud project/organization.',
    tags: ['Personal'],
    langs: [keys.KeyPython, keys.KeyGCloud],
    duration: '2 days',
    repository:
      'https://github.com/singhgautam7/Python-GoldMine/tree/master/gcloud_iam_custom_roles',
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
