import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// Sample events data - in a real app, this would come from a CMS or API
const events = [
	{
		title: 'کارگاه React پیشرفته',
		description: 'آموزش مفاهیم پیشرفته React و بهترین practices در توسعه وب. این کارگاه شامل Hooks، Context API، و بهینه‌سازی عملکرد است.',
		pubDate: new Date('2024-12-06'),
		link: '/events#react-workshop',
	},
	{
		title: 'بهینه‌سازی عملکرد وب',
		description: 'راهکارهای عملی برای بهبود سرعت و عملکرد وب‌سایت‌ها. شامل Core Web Vitals، lazy loading، و تکنیک‌های پیشرفته بهینه‌سازی.',
		pubDate: new Date('2024-12-13'),
		link: '/events#web-performance',
	},
	{
		title: 'Git و GitHub',
		description: 'مدیریت نسخه و همکاری در پروژه‌های نرم‌افزاری. از مفاهیم پایه تا تکنیک‌های پیشرفته Git و GitHub.',
		pubDate: new Date('2024-12-20'),
		link: '/events#git-github',
	},
	{
		title: 'Node.js و Express',
		description: 'توسعه API و سرور با Node.js و Express. شامل RESTful APIs، middleware، و deployment.',
		pubDate: new Date('2024-12-27'),
		link: '/events#nodejs-express',
	},
	{
		title: 'Python برای مبتدیان',
		description: 'آموزش Python از صفر تا صد. شامل syntax، data structures، و پروژه‌های عملی.',
		pubDate: new Date('2025-01-03'),
		link: '/events#python-beginners',
	},
	{
		title: 'کنفرانس فناوری ارومیه',
		description: 'بزرگترین کنفرانس فناوری در ارومیه با حضور سخنرانان برجسته و ارائه‌های متنوع در زمینه‌های مختلف فناوری.',
		pubDate: new Date('2025-01-10'),
		link: '/events#tech-conference',
	},
];

export async function GET(context) {
	return rss({
		title: `${SITE_TITLE} - رویدادها`,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: events.map((event) => ({
			title: event.title,
			description: event.description,
			pubDate: event.pubDate,
			link: event.link,
		})),
		customData: `<language>fa</language>`,
	});
}