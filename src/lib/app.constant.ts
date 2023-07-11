import { Metadata } from 'next'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
export const SocialLinks = [
    {
        label: 'github',
        url: 'https://github.com/nutangwari',
        icon: FaGithub
    },
    {
        label: 'twitter',
        url: 'https://twitter.com/nutankgwari',
        icon: FaTwitter
    },
    {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/nutangwari',
        icon: FaLinkedin
    }
]


export const MetadataTags: Metadata = {
    metadataBase: new URL('https://nutangwari.com'),
    title: 'Nutan Gwari :: Home',
    description: 'Nutan Gwari personal website',
    keywords: [
        'Nutan Gwari', 'Angular', 'Nextjs', 'React', 'Tech blogs', 'in depth angular',
        'learn javascript', 'in depth javascript articles', 'website development'
    ],
    openGraph: {
      type: 'website',
      url: 'https://nutangwari.com',
      title: 'Nutan Gwari — Frontend Engineer',
      description: 'My personal portfolio website and blog discussing about various topics in web development and frontend engineering space.',
      images: '/meta-og.png'
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://nutangwari.com',
        title: 'Nutan Gwari — Frontend Engineer',
        description: 'My personal portfolio website and blog discussing about various topics in web development and frontend engineering space.',
        images: '/meta-og.png' 
    },

  }