
import { ManualChapter } from './types';

// Helper to generate placeholder content
const getPlaceholder = (title: string) => `
<div class="text-center mb-10">
  <h1 class="text-3xl font-bold text-slate-900 font-serif">${title}</h1>
</div>
<p class="mb-4">Content for <strong>${title}</strong> to be added.</p>
`;

export const ELDERS_HANDBOOK_CHAPTERS: ManualChapter[] = [
  { id: '1', title: 'The Church and Its Organization', category: 'Organization', fullText: getPlaceholder('The Church and Its Organization') },
  { id: '2', title: 'The Elder’s Call and Qualifications', category: 'Calling', fullText: getPlaceholder('The Elder’s Call and Qualifications') },
  { id: '3', title: 'The Worship Service', category: 'Worship', fullText: getPlaceholder('The Worship Service') },
  { id: '4', title: 'Leadership in the Church', category: 'Leadership', fullText: getPlaceholder('Leadership in the Church') },
  { id: '5', title: 'Departments in the Church', category: 'Administration', fullText: getPlaceholder('Departments in the Church') },
  { id: '6', title: 'Evangelism', category: 'Evangelism', fullText: getPlaceholder('Evangelism') },
  { id: '7', title: 'Church Nurture', category: 'Nurture', fullText: getPlaceholder('Church Nurture') },
  { id: '8', title: 'Special Services', category: 'Services', fullText: getPlaceholder('Special Services') },
  { id: 'Conclusion', title: 'Conclusion', category: 'Appendix', fullText: getPlaceholder('Conclusion') },
  { id: 'Index', title: 'Index', category: 'Index', fullText: getPlaceholder('Index') },
];
