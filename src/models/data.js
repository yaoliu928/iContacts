
const contacts = [
  {
    id: 1,
    name: 'Chris Winnie',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 2,
    name: 'Elise Beverley',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'B loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', , 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 3,
    name: 'Felina Brown',
    nmls: '9418074',
    city: 'Stanford',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 4,
    name: 'Joana Leite',
    nmls: '9418074',
    city: 'Mountain View',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 5,
    name: 'David Smith',
    nmls: '9418074',
    city: 'Beijing',
    state: 'China',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 6,
    name: 'Chris Tomson',
    nmls: '9418074',
    city: 'Daly City',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 7,
    name: 'Marely Scott',
    nmls: '9418074',
    city: 'Santa Rose',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 8,
    name: 'Alysaa Sandra',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 9,
    name: 'Brenton Paul',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 10,
    name: 'Lara Philips',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 11,
    name: 'Matin Croutch',
    nmls: '9418074',
    city: 'Sacramento',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 12,
    name: 'Destinee Griffith',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 13,
    name: 'Steven Wolf',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 14,
    name: 'Olivia Eklund',
    nmls: '9418074',
    city: 'East Palo Alto',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 15,
    name: 'Helen Winnie',
    nmls: '9418074',
    city: 'San Diego',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 16,
    name: 'Scoot White',
    nmls: '9418074',
    city: 'San Francisco',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 17,
    name: 'Helen Winnie',
    nmls: '9418074',
    city: 'San Diego',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 18,
    name: 'Merlyn Rinse',
    nmls: '9418074',
    city: 'Santa Rosa',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 19,
    name: 'Riley Cooper',
    nmls: '9418074',
    city: 'Austin',
    state: 'TX',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
  {
    id: 20,
    name: 'Emma Waston',
    nmls: '9418074',
    city: 'Los Angeles',
    state: 'CA',
    info: 'A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.',
    languages: ['English', 'Spanish', 'Spanish', 'Spanish'],
    services: ['Conventional', 'Bad Credit', 'Conventional', 'Conventional']
  },
];
export default contacts;