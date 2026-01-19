
import { ManualChapter } from './types';

// Helper to generate placeholder content
const getPlaceholder = (title: string) => `
<div class="text-center mb-10">
  <h1 class="text-3xl font-bold text-slate-900 font-serif">${title}</h1>
</div>
<p class="mb-4">Content for <strong>${title}</strong> to be added.</p>
`;

export const MINISTERS_HANDBOOK_CONTENT = {
  // Placeholder content generator for all chapters
};

export const MINISTERS_HANDBOOK_CHAPTERS: ManualChapter[] = [
  { id: '1', title: 'The Calling', category: 'Ministry', fullText: getPlaceholder('The Calling') },
  { id: '2', title: 'Spiritual Formation', category: 'Ministry', fullText: getPlaceholder('Spiritual Formation') },
  { id: '3', title: 'Interpersonal Relationships', category: 'Ministry', fullText: getPlaceholder('Interpersonal Relationships') },
  { id: '4', title: 'Time Management', category: 'Personal Life', fullText: getPlaceholder('Time Management') },
  { id: '5', title: 'Personal Health', category: 'Personal Life', fullText: getPlaceholder('Personal Health') },
  { id: '6', title: 'Personal Appearance', category: 'Personal Life', fullText: getPlaceholder('Personal Appearance') },
  { id: '7', title: 'Personal Finance', category: 'Personal Life', fullText: getPlaceholder('Personal Finance') },
  { id: '8', title: 'Family Life', category: 'Personal Life', fullText: getPlaceholder('Family Life') },
  { id: '9', title: 'Pastoral Ethics', category: 'Ethics', fullText: getPlaceholder('Pastoral Ethics') },
  { id: '10', title: 'Professional Growth', category: 'Development', fullText: getPlaceholder('Professional Growth') },
  { id: '11', title: 'Relationship to Church Organization', category: 'Organization', fullText: getPlaceholder('Relationship to Church Organization') },
  { id: '12', title: 'Departmental Services', category: 'Organization', fullText: getPlaceholder('Departmental Services') },
  { id: '13', title: 'Church Policy', category: 'Administration', fullText: getPlaceholder('Church Policy') },
  { id: '14', title: 'Credentials and Licenses', category: 'Administration', fullText: getPlaceholder('Credentials and Licenses') },
  { id: '15', title: 'Ordination and Commissioning', category: 'Ordination', fullText: getPlaceholder('Ordination and Commissioning') },
  { id: '16', title: 'Ordination and Commissioning Services', category: 'Ordination', fullText: getPlaceholder('Ordination and Commissioning Services') },
  { id: '17', title: 'Church Planting, Organizing, Uniting, and Dissolving', category: 'Church Planting', fullText: getPlaceholder('Church Planting, Organizing, Uniting, and Dissolving') },
  { id: '18', title: 'Church Leadership', category: 'Leadership', fullText: getPlaceholder('Church Leadership') },
  { id: '19', title: 'Ministry for All Members', category: 'Leadership', fullText: getPlaceholder('Ministry for All Members') },
  { id: '20', title: 'Large Districts', category: 'Leadership', fullText: getPlaceholder('Large Districts') },
  { id: '21', title: 'Church Growth', category: 'Evangelism', fullText: getPlaceholder('Church Growth') },
  { id: '22', title: 'The Worship Service', category: 'Worship', fullText: getPlaceholder('The Worship Service') },
  { id: '23', title: 'Fellowship and Visitation', category: 'Pastoral Care', fullText: getPlaceholder('Fellowship and Visitation') },
  { id: '24', title: 'Counseling', category: 'Pastoral Care', fullText: getPlaceholder('Counseling') },
  { id: '25', title: 'Church Community', category: 'Community', fullText: getPlaceholder('Church Community') },
  { id: '26', title: 'Church Finance', category: 'Administration', fullText: getPlaceholder('Church Finance') },
  { id: '27', title: 'Church Facilities', category: 'Administration', fullText: getPlaceholder('Church Facilities') },
  { id: '28', title: 'Church Discipline', category: 'Discipline', fullText: getPlaceholder('Church Discipline') },
  { id: '29', title: 'Church Schools', category: 'Education', fullText: getPlaceholder('Church Schools') },
  { id: '30', title: 'Baptism', category: 'Services', fullText: getPlaceholder('Baptism') },
  { id: '31', title: 'Communion', category: 'Services', fullText: getPlaceholder('Communion') },
  { id: '32', title: 'Weddings', category: 'Services', fullText: getPlaceholder('Weddings') },
  { id: '33', title: 'Child Dedication', category: 'Services', fullText: getPlaceholder('Child Dedication') },
  { id: '34', title: 'Anointing and Deliverance', category: 'Services', fullText: getPlaceholder('Anointing and Deliverance') },
  { id: '35', title: 'Funerals', category: 'Services', fullText: getPlaceholder('Funerals') },
  { id: '36', title: 'Church Opening, Dedication, and Groundbreaking', category: 'Services', fullText: getPlaceholder('Church Opening, Dedication, and Groundbreaking') },
  { id: '37', title: 'House Blessing', category: 'Services', fullText: getPlaceholder('House Blessing') },
  { id: '38', title: 'Pastoral Installation', category: 'Services', fullText: getPlaceholder('Pastoral Installation') },
  { id: '39', title: 'Retirement', category: 'Ministry', fullText: getPlaceholder('Retirement') },
  { id: 'Index', title: 'Index', category: 'Index', fullText: getPlaceholder('Index') },
];
