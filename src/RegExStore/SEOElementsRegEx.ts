export const SEOElementsRegEx: any = {
  head: '<head>(?<content>.*)<\\/head>',
  body: '<body>(?<content>.*)<\\/body>',
  h1: '<h1.*?>(?<content>.*)<\\/h1>',
  meta: (metaTag: keyof typeof SEOElementsRegEx): string => `<meta[\\s]+[^>]*?name[\\s]?=[\\s\\"\\']+${String(metaTag)}[\\s\\"\\']+content[\\s]?=[\\s\\"\\']+(?<content>.*?)[\\"\\']+.*?>`,
  title: '<title>(?<content>.*)<\\/title>',
  img: '<img[^>]* src=\"([^\"]*)\"[^>].*?(?:alt="(?<content>.*?)")?>'
}