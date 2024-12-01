import Assets, { getAssetURL } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'prudent-investor',
		color: '#5e95e3',
		description:
			'Prudent Investor é uma aplicação web que permite que os investidores controlem os seus investimentos de forma eficiente. O sistema permite o investidor acompanhar as principais informações sobre o mercado financeiro, como cotações de ações, fundos imobiliários, índices e moedas.',
		shortDescription:
			'Prudent Investor é uma aplicação web que permite que os investidores controlem os seus investimentos de forma eficiente.',
		links: [{ to: 'https://prudent-investor.com.br', label: 'Prudent Investor' }],
		logo: Assets.PrudentInvestor,
		name: 'Prudent Investor',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp', 'ts', 'next', 'sass', 'postgres'),
		type: 'Web application',
		screenshots: [
			{
				label: 'home',
				src: getAssetURL(Assets.PrudentInvestorImageHome)
			},
			{
				label: 'Home Ações',
				src: getAssetURL(Assets.PrudentInvestorImageHomeAcoes)
			},
			{
				label: 'Home Ibovespa',
				src: getAssetURL(Assets.PrudentInvestorImageHomeIbovespa)
			},
			{
				label: 'Home Notícias',
				src: getAssetURL(Assets.PrudentInvestorImageHomeNoticias)
			},
			{
				label: 'Cryptos',
				src: getAssetURL(Assets.PrudentInvestorCrypto)
			},
			{
				label: 'Bitcoin infos',
				src: getAssetURL(Assets.PrudentInvestorCryptoDetalhe)
			},
			{
				label: 'Ações',
				src: getAssetURL(Assets.PrudentInvestorImageAcoes)
			},
			{
				label: 'Calendário de Dividendos',
				src: getAssetURL(Assets.PrudentInvestorImageCalendarioDividendos)
			},
			{
				label: 'Fiis',
				src: getAssetURL(Assets.PrudentInvestorImageFiis)
			},
			{
				label: 'Funos',
				src: getAssetURL(Assets.PrudentInvestorImageFundos)
			},
		]
	},
	{
		slug: 'vital-ease',
		color: '#5e95e3',
		description:
			'Vital Ease é uma aplicação web que facilita a gestão das consultas médicas diárias, permitindo que os médicos registem os seus pacientes, consultas e prescrições de forma rápida e eficiente.',
		shortDescription:
			'Vital Ease é uma aplicação web que facilita a gestão das consultas médicas diárias.',
		links: [{ to: 'https://vitalease-v2-front.azurewebsites.net/login', label: 'Vital Ease' }],
		logo: Assets.VitalEase,
		name: 'Vital Ease',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp', 'ts', 'angular', 'sass', 'postgres'),
		type: 'Web application',
		screenshots: [
			{
				label: 'home',
				src: getAssetURL(Assets.VitalEaseImageHome)
			},
			{
				label: 'Medicamentos Cadastrados',
				src: getAssetURL(Assets.VitalEaseImageMedicamentosCadastrados)
			},
			{
				label: 'Folha de Parada',
				src: getAssetURL(Assets.VitalEaseImageFolhaDeParada)
			},
			{
				label: 'Calculo de medicamento 1',
				src: getAssetURL(Assets.VitalEaseImageCalculo1)
			},
			{
				label: 'Calculo de medicamento 2',
				src: getAssetURL(Assets.VitalEaseImageCalculo2)
			}
		]
	},
];

export const title = 'Projects';
