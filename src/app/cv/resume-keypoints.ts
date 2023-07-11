const ResumePoints = {
    veritas: [
        `Building Veritas Alta View, a Global Management plane for multiple NBUs`,
        `Building Micro Frontends using Module Federation  and Single-SPA library, Integrating multiple
        MFEs into Alta View.`,
        `Working with Material M3 Design tokens and Angular v18`,
        `Using Nx to manage 40+ Libraries and Application projects in single monorepo`,
        `Working with Web Components to integrate the legacy functionalities and features`,
        `Worked on node scripts to automate build process,  auto upgrades for third party libraries`
    ],
    vmware: [
        `Senior Member of Technical Staff at VMware, specializing in VMware Cloud Virtualization andNetwork Security product NSX-T`,
        `Successfully implemented features for modules such as DHCP, DNS, and NAT for the NSX-T
        product`,
        `Integrated core component library with Storybook for documentation and showcasing
        reusable components and widgets`,
        `Played a proactive role in war room activities, addressing technical debt and code backlogs,
        thereby maintaining a clean and updated codebase`,
        `Written Node.js scripts and integrated into build pipeline with Jenkins, to automate perform
        common tasks, ensuring`,
        `Ensure high-quality deliverables with extensive test coverage for the developed feature with
        TDD using Jasmine & Karma.`,
        `Collaborating with the Product Management (PM) team & UX team to gather requirements,
        estimating efforts & converting the requirements into deliverable stories`
    ],
    nice: [
        `Specialist software engineer - UI at NICE Satmetrix, application allows businesses to create
        multichannel surveys, spanning web, IVR, SMS, and WhatsApp, for NPS and CES evaluations.
        Furthermore, providing real-time alerts and in-depth analytics`,
        `Led the migration process of a legacy application, transitioning it from Backbone.js and
        jQuery to Angular and TypeScript. Progressively Integrating two products, into a single
        robust application`,
        `Written custom library library (ngBridge.js) using Node.js and TypeScript over Web
        Message API & Broadcast API to facilitate seamless integration and data exchange
        between the applications.`,
        `Part of Mobile first survey building framework (Survey-SDK) using Angular, TypeScript, SVG
        and Canvas. Won NICE Global Hackathon for SurveySDK`,
        // `Developed migration plan by designing a detailed test coverage (jasmine & Istanbul )
        // strategy for the targeted feature ensuring smooth transition of the feature and minimizing
        // regressions`,
        `Added responsibilities related to web security, such as addressing XSS and CSRF
        vulnerabilities in the code.`,
        `Delivered multiple tech talk sessions at the organizational level, sharing expertise and insights
        with colleagues`
    ],
    citi: [
        `Lead UI Engineer for the development of "CitiCode," a Financial Fraud Detection System aimed
        at detecting and reducing early frauds`,
        `Rewriting the existing legacy application using React, TypeScript, SCSS, and HTML`,
        // `Created a custom grid component to efficiently display and manage large amounts of data,
        // incorporating features such as local and session persistence, virtual scrolling, and more.`,
        `Implemented Service Workers to improve application performance, specifically for the
        download feature of large data sets in different export formats.`,
        `Written NodeJS utility to the measure performance using Web Performance API &
        Puppeteer to generate reports & warnings if the application fails to meet the benchmarked
        performance figures. Can be used with build tool using CLI or directly importing in source
        code`,
        `Angular Mentor in "StepUp" learning program across Business Vertical, won recognitions for
        mentoring folks from different backgrounds to teach RxJS and Angular.`
    ],
    sungard: [
        `As an integral member of the core R&D framework team, I actively contributed to the
        development of a robust UI framework. This framework comprises over 100 meticulously
        designed and implemented components, which are extensively utilized by more than 150
        product teams worldwide within the organization for the development of SunGard product`,
        `Researched and implemented a wide range of components and services using Angular 1.3,
        jQuery & JavaScript such as Accordion, Tag, Editable Dropdown, as well as services like
        ARIA Service and Custom Theming.`,
        // `Built Live Playground portal that allows users to visualize Library Components, using Iframe
        // Sandboxing and the Canvas API to provide an interactive and immersive experience to
        // consumer teams`,
        `Written extensive set of test cases to ensure the stability of the framework, using Protractor
        with Karma serving as the test runner.`,
        `Oversaw the end-to-end quarterly release process, providing technical assistance and
        resolving framework-related bugs.`,
        `Taking multiple sessions across product teams to share the latest framework developments &
        roadmaps`,
        `Open Source contribution to Kendo UI widgets re-write from jQuery to AngularJS(1.3)
        directives by our team.`
    ]
}

export const CoreSkills = [
    'Angular', 'TypeScript', 'React', 'Next.js', 'NgRX',
    'SCSS', 'Tailwind', 'NPM', 'Git', 'Bootstrap', 'Ionic',
    'Firebase', 'Webpack', 'Material', 'Jenkins', 'Puppeteer',
    'Jasmine', 'HTML5', 'SVG', 'Web Components', 'p5', 'Karma',
    'Node.js'
]

export const Resume = [
    {
        company: 'Veritas',
        image: '/veritas.png',
        designation: 'Principal Software Engineer',
        tenure: '2023 — Present',
        url: 'veritas.com',
        points: ResumePoints.veritas,
        skills: [
            'Angular 18+', 'Module Federation', 'Micro Frontends', 'Web Components', 'Material 3', 'TypeScript', 'SCSS', 'NPM', 'Webpack', 'Node.js'
        ]
    },
    {
        company: 'VMware',
        image: '/vmw.jpg',
        designation: 'Senior Member of Technical Staff',
        tenure: '2021 — 2023',
        url: 'vmware.com',
        points: ResumePoints.vmware,
        skills: ['Angular', 'TypeScript', 'NgRX', 'SCSS', 'Node.js', 'Storybook', 'Docker', 'Webpack']
    },
    {
        company: 'NICE',
        image: '/nice.png',
        designation: 'Specialist Software Engineer',
        tenure: '2018 — 2021',
        url: 'nice.com',
        points: ResumePoints.nice,
        skills: ['Angular', 'TypeScript', 'Backbone', 'RxJS', 'Web Components', 'SCSS', 'JavaScript', 'ionic']
    },
    {
        company: 'Citi',
        image: '/citi.png',
        designation: 'Assistant Manager - UI',
        tenure: '2017 — 2018',
        url: 'citi.com',
        points: ResumePoints.citi,
        skills: ['Angular', 'TypeScript', 'SCSS', 'JavaScript','Web Components', 'Node.js', 'RxJS', 'Webpack']
    },
    {
        company: 'SunGard',
        image: '/fis.jpg',
        designation: 'Product Development Engineer',
        tenure: '2015 — 2017',
        url: 'sungard.com',
        points: ResumePoints.citi,
        skills: ['Angular', 'Kendo UI', 'JavaScript', 'SASS', 'Grunt']
    },
    {
        company: 'TCS',
        image: '/tcs.webp',
        designation: 'Software Engineer',
        tenure: '2013 — 2015',
        url: 'tcs.com',
        points: [],
        skills: []
    }
]