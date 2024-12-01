import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-engineer',
		company: 'Projétil',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Salvador, Bahia',
		period: { from: new Date(2023, 11, 1) },
		skills: getSkills('csharp', 'nodejs', 'ts', 'js', 'angular', 'reactjs', 'sass', 'css', 'html', 'mongodb', 'redis'),
		name: 'Projétil',
		color: 'blue',
		links: [],
		logo: Assets.Projetil,
		shortDescription: '2ª maior empresa do ranking global do Workana'
	},
	{
		slug: 'software-engineer-freelancer',
		company: 'Neo Code Solutions',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Fortaleza, Ceará',
		period: { from: new Date(2022, 11, 1), to: new Date(2023, 12, 1) },
		skills: getSkills('csharp', 'nodejs', 'ts', 'js', 'angular', 'reactjs', 'sass', 'css', 'html', 'mongodb'),
		name: 'Neo Code Solutions',
		color: 'purple',
		links: [],
		logo: Assets.NeoCode,
		shortDescription: 'Startup de desenvolvimento de software'
	},
	{
		slug: 'trainee',
		company: 'NDS - Núcleo de Desenvolvimento de Software',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Fortaleza, Ceará',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 12, 1) },
		skills: getSkills('csharp', 'nodejs', 'ts', 'js', 'angular', 'reactjs', 'sass', 'css', 'html', 'mongodb'),
		name: 'IFCE',
		color: 'green',
		links: [],
		logo: Assets.IFCE,
		shortDescription: 'Núcleo de Desenvolvimento de Software do IFCE (Instituto Federal do Ceará)'
	},
];

export const title = 'Experience';
