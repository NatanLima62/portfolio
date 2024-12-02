import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Natanael';

export const lastName = 'de Lima Oliveira';

export const description =
	'😁 Olá! Sou um Engenheiro de Software orientado a resultados, com mais de 3 anos de experiência em desenvolvimento backend. Meu foco é entregar soluções de software de alta qualidade, maximizando valor e eficiência com o menor esforço possível.';

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
