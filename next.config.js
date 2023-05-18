/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.nine.com.au/lifeblood/how-champion-field', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Lifeblood', // e.g Black Hawk
      title: 'How to be a champion on and off the field', // e.g Being a good pet parent starts at mealtime
      description: 'We all know what it takes to be a champion on the field. You’ve got to be a team player, someone who does what’s best for your club. You’ve got to be bold enough to step up to the plate when the situation demands it – run the ball, make the tackle, perform under pressure.',
      siteName: '9 Wide World of Sports', // The Sydney Morning Herald, Good Food
      icon: 'wwos', // smh, goodfood, nine, afr, traveller
      themeColour: '#A4152D', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/05/11634-Lifeblood-x-AFL-SOCIAL-tile-1920x1080-1.jpg',
      date: '25-05-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11634-lifeblood-afl', // used for nine ga scripts
    guidelines: true, // shows or hides layout guideline bars
    activateMasthead: false, // shows or hides masthead
    mastheadOverride: 'wwos', // overrides masthead that's pulling from hostname: e.g honey,style,travel,kitchen,you,parenting,coach,pets,celebrity
  }
}

module.exports = nextConfig