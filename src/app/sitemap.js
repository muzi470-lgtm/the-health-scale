export default function sitemap() {
  const baseUrl = 'https://www.thedailyscale.online';
  
  const tools = [
    'bmi', 'water', 'pregnancy', 'deepsleep', 'tdee',
    'bodyfat', 'whr', 'ovulation', 'bioage', 'caffeine',
    'skincare', 'hairhealth', 'hormonesleep', 'workout'
  ];

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    ...toolPages,
  ];
}