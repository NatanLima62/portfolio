import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Natanael';

export const lastName = 'de Lima Oliveira';

export const description =
	'Desenvolvedor Full-Stack com ampla experiência, focado em aperfeiçoar o desenvolvimento de sistemas e aplicativos através ' +
	'da utilização das tecnologias mais recentes do mercado como .Net, Node, Angular e React  além da aplicação de padrões de projeto e clean code. Além disso, ' +
	'minha trajetória como desenvolvedor Full-Stack foi fundamental para aprimorar minhas habilidades de entrega, gerenciamento de prazos e a utilização ' +
	'de diferentes tecnologias dependendo da necessidade do cliente.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/NatanLima62/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/natanael-lima-284269248/'
	},
	{
		platform: Platform.Email,
		link: 'natanlimaoliveira62@gmail.com'
	},
];

export const skills = getSkills('csharp', 'ts', 'js', 'nodejs', 'angular', 'express', 'adonis', 'reactjs', 'svelte', 'aws', 'docker', 'kubernetes', 'rabbitmq', 'mongodb', 'postgres', 'redis');
