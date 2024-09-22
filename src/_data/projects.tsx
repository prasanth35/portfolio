import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const github: LinkProps = {
  label: 'Source code',
  icon: <GithubFillIcon size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) {
    links.push({ ...live, url })
  }
  return links
}

const filters: string[] = [
  'React',
  'React Native',
  'Kotlin',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'HTML/CSS',
  'Java',
  'Python',
  'Android',
  'Machine Learning'
]

const projects: ProjectProps[] = [
  {
    id: 'portfolio',
    featured: true,
    title: 'Portfolio',
    description:
      'Personal website developed with React and Typescript',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('portfolio', 'https://prasanth.site')
  },
  {
    id: 'shopping-cart',
    featured: true,
    title: 'Shopping Cart',
    description:'An e-commerce shopping cart application featuring product browsing with redux.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS','Redux','Material UI'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('shopping-cart', 'https://cart.prasanth.site')
  },
  {
    id: 'currency-converter',
    featured: true,
    title: 'Currency Converter',
    description:'A simple and efficient currency converter app built with React, featuring real-time conversion rates.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('currency-converter', 'https://prasanth35.github.io/currency-converter/')
  },
  {
    id: 'screen-recorder-extension',
    featured: true,
    title: 'Screen Recorder - Chrome Extension',
    description: 'A Chrome extension for screen recording with simple and intuitive controls.',
    techStacks: ['HTML/CSS', 'JavaScript'],
    otherTechStacks: ['Chrome-extension-development'],
    category: 'Front-end development',
    links: getLinks('screen-recorder-extension')
  },
  {
    id: 'indexedDb-js',
    featured: false,
    title: 'Indexed Db',
    description: 'A project demonstrating the use of IndexedDB to store and retrieve data in web applications.',
    techStacks: ['HTML/CSS', 'JavaScript'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('indexedDB-js')
  },
  {
    id: 'react-speech-recognition',
    featured: false,
    title: 'React Speech Recognition',
    description: 'A speech-to-text converter using React, allowing users to dictate input instead of typing.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('indexedDB-js')
  },
  {
    id: 'courses-ui',
    featured: false,
    title: 'Courses UI',
    description:'A simple UI for an educational app, similar to platforms like Udemy and Coursera.',
    techStacks: ['React Native', 'TypeScript'],
    otherTechStacks: ['JavaScript'],
    category: 'Front-end development',
    links: getLinks('educational-app-ui')
  },
  
  {
    id: 'team-players-ui',
    featured: true,
    title: 'Team player UI',
    description: 'A fantasy team selection app interface, inspired by Dream 11, built with React Native.',
      techStacks: ['React Native', 'TypeScript','Redux'],
      otherTechStacks: ['JavaScript'],
    category: 'Front-end development',
    links: getLinks('team-players-ui')
  },
  {
    id: 'chat-screen',
    featured: true,
    title: 'Chat Screen',
    description:  'A simple chat interface screen built using React Native, demonstrating basic messaging UI.',
    techStacks: ['React Native', 'TypeScript'],
    otherTechStacks: ['JavaScript'],
    category: 'Front-end development',
    links: getLinks('team-players-ui')
  },
  {
    id: 'call-screener',
    featured: true,
    title: 'Call Screener',
    description: 'A Truecaller clone built for Android to screen incoming calls and provide caller details.',
    techStacks: ['Android','Kotlin','Java','Realm'],
    otherTechStacks: ['Android','Kotlin','Java','Realm'],
    category: 'Front-end development',
    links: getLinks('call-screener')
  },
  {
    id: 'stenography',
    featured: false,
    title: 'Stenography',
    description:  'Project that demonstrates how to hide data within images using stenography techniques,with real-time data transfer between systems.',
    techStacks: ['Java','Socket'],
    otherTechStacks: ['Java','Socket'],
    category: 'Front-end development',
    links: getLinks('Steganography')
  },
  {
    id: 'Hepatitis-B-Mortality-Predictor',
    featured: false,
    title: 'Hepatitis-B-Mortality-Predictor',
    description:  'Using Machine Learning to predict death rates from Hepatitis B virus with blood sample reports.',
    techStacks: ['HTML/CSS','Python','Machine Learning','Streamlit'],
    otherTechStacks: ['HTML/CSS','Python','Machine Learning','Streamlit'],
    category: 'Front-end development',
    links: getLinks('Hepatitts-B-Mortality-Predictor')
  },
  {
    id: 'spam-filter',
    featured: false,
    title: 'Spam Filter',
    description:'A basic spam filter built with Python that analyzes CSV data for potential spam patterns.',
    techStacks: ['Python','CSV'],
    otherTechStacks: ['Python','CSV'],
    category: 'Front-end development',
    links: getLinks('spam-filter')
  },
  
]

export { filters, projects }
