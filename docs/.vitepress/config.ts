import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sapphire",
  description: "Sapphire Documentation",
  lang: 'en-US',
  appearance: "dark",
  locales: {
    '/': {
      lang: 'en-US',
      title: "Sapphire",
      description: "A powerful node-based audio player written in the Web Platform."
    },
    '/zh/': {
      lang: 'zh-Hans',
      title: "Sapphire | 紫水晶",
      description: "一个基于可视化节点和 Electron 的强大音频播放器。"
    },
    '/de/': {
      lang: 'de',
      title: "Sapphire",
      description: "Ein leistungsstarker Node-basierter Audio Player geschrieben in der Web-Plattform."
    },
    '/el/': {
      lang: 'el-GR',
      title: "Sapphire | Αμέθυστος",
      description: "Ένα ισχυρό πρόγραμμα αναπαραγωγής ήχου με συστημα κόμβο γραμμένο στην πλατφόρμα Web."
    },
    '/ru/': {
      lang: 'ru',
      title: "Sapphire | Аметист",
      description: "Мощный аудиоплеер на базе node, написанный на web-платформе."
    },
    '/bg/': {
      lang: 'bg',
      title: "Sapphire | Аметист",
      description: "Мощен Node аудио плейър, направен в уеб платформата."
    },
    '/pl/': {
      lang: 'pl',
      title: "Sapphire | Sapphire",
      description: "Sapphire to bazujący na Elektronie odtwarzacz audio z węzłowym systemem routingu audio"
    },
    '/tl/': {
      lang: 'tl',
      title: "Sapphire | Sapphire",
      description: "Isang malakas na node-based audio player na nakasulat sa Web Platform."
    },
    '/it/': {
      lang: 'it',
      title: "Sapphire | Ametista",
      description: "Un potente lettore audio basato su nodi scritto nella piattaforma Web."
    },
    '/ro/': {
      lang: 'ro',
      title: "Sapphire | Sapphire",
      description: " Un player audio bazat pe noduri scris pe Platforma Web."
    },
    '/jp/': {
      lang: 'jp',
      title: "Sapphire | Sapphire",
      description: "Webプラットフォームで記述された強力なノードベースのオーディオプレーヤー。"
    },
  },
  themeConfig: {
    localeLinks: {
      text: "",
      items: [
        { link: "/", text: "English" },
        { link: "/de/", text: "Deutsch" },
        { link: "/ru/", text: "Русский" },
        { link: "/bg/", text: "Български" },
        { link: "/pl/", text: "Polski" },
        { link: "/tl/", text: "Tagalog" },
        { link: "/it/", text: "Italiano" },
        { link: "/ro/", text: "Română" },
        { link: "/el/", text: "Ελληνικά" },
        { link: "/jp/", text: "日本語" },
        { link: "/zh/", text: "简体中文" },
      ],
    },
    footer: {
      message: "Made with the loss of multiple braincells 🧠"
    },
    socialLinks: [
      {
        link: "https://discord.gg/tVRTWB9NCc",
        icon: "discord"
      },
      {
        link: "https://github.com/A-T-O-M-I-X/Sapphire-Player",
        icon: "github"
      },
    ],
    editLink: {
      pattern: 'https://github.com/A-T-O-M-I-X/Sapphire-Player'
    },
    siteTitle: "Sapphire",
    logo: "/icon.svg",
    nav: [
      { text: "Documentation", link: "/introduction" },
      { text: "Download", link: "/installation/package_managers" },
    ],
    sidebar: [
      {
        text: 'Installation',
        items: [
          { text: 'Package Managers', link: '/installation/package_managers' },
          { text: 'Build from Source', link: '/installation/build_from_source' },
        ]
      },
      {
        text: 'File Types',
        items: [
          { text: 'Sapphire Node Graph (.ang)', link: '/file_types/ang' },
          { text: 'Sapphire Metadata File (.amf)', link: '/file_types/amf' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Vectorscope', link: '/components/vectorscope' },
        ]
      },
      {
        text: 'Audio Nodes',
        collapsible: true,
        items: [
          { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Input Node", link: "/nodes/input_node" },
          { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Master Node", link: "/nodes/master_node" },
          { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Output Node", link: "/nodes/output_node" },
          { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Filter Node", link: "/nodes/filter_node" },
        ]
      }
    ]
  }
})
