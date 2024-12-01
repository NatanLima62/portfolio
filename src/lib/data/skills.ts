import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description:
			'C# é uma linguagem de programação orientada a objetos, fortemente tipada, desenvolvida pela Microsoft como parte da plataforma .NET.' +
			'A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.' +
			'A linguagem C# é usada para desenvolver aplicativos de software que são destinados a serem executados no .NET Framework.' +
			'A linguagem C# é destinada a ser simples e fácil de usar.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática e outros recursos a linguagem.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.' +
			'Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),

	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Node.js é um ambiente de execução JavaScript assíncrono orientado a eventos, projetado para criar aplicativos de rede escaláveis.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description:
			'Angular é uma plataforma de desenvolvimento para a construção de aplicativos web móveis e desktop.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	//express
	defineSkill({
		slug: 'express',
		color: 'blue',
		description:
			'O Express.js é um framework para aplicativos da web do Node.js. Ele fornece um conjunto de recursos robusto para aplicativos da web e móveis.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'adonis',
		color: 'blue',
		description:
			'AdonisJs é um framework Node.js que visa facilitar o desenvolvimento de aplicativos da web e APIs com JavaScript ou TypeScript.',
		logo: Assets.AdonisJs,
		name: 'AdonisJs',
		category: 'framework'
	}),

	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),

	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services é uma plataforma de serviços de computação em nuvem que oferece poder computacional, armazenamento de banco de dados, entrega de conteúdo e outras funcionalidades para ajudar as empresas a expandir e crescer.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'O Docker é uma plataforma de software que permite a criação, o teste e a implantação de aplicativos rapidamente.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description:
			'O Kubernetes é um sistema de código aberto para automatizar a implantação, o dimensionamento e a gestão de aplicativos em contêineres.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'rabbitmq',
		color: 'red',
		description:
			'O RabbitMQ é um software de mensagens de código aberto que implementa o protocolo Advanced Message Queuing Protocol (AMQP).',
		logo: Assets.RabbitMQ,
		name: 'RabbitMQ',
		category: 'devops'
	}),

	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'O MongoDB é um banco de dados de código aberto, gratuito, de alta performance, sem esquemas e orientado a documentos.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'blue',
		description:
			'O PostgreSQL é um sistema de gerenciamento de banco de dados objeto-relacional (ORDBMS) de código aberto.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
			'O Redis é um banco de dados de estrutura de dados em memória de código aberto, usado como banco de dados, cache e corretor de mensagens.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	//todo: mysql
	// defineSkill({
	// 	slug: 'mysql',
	// 	color: 'blue',
	// 	description:
	// 		'O MySQL é um sistema de gerenciamento de banco de dados de código aberto que ajuda os usuários a armazenar, organizar e recuperar dados.',
	// 	logo: Assets.MySQL,
	// 	name: 'MySQL',
	// 	category: 'db'
	// }),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
