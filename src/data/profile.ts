// Everything on the homepage transcript comes from here. Edit this file to update the site.

export const profile = {
  name: 'Kieran Robertson',
  role: 'Senior Software Engineer',
  company: 'monday.com',
  location: 'London',
  email: 'kieranrobertson1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kieran-robertson-511363146',
  // github: 'https://github.com/<you>',  // uncomment and it appears in the contact block
  github: '' as string,
  summary:
    'Senior software engineer in London, currently at monday.com. Seven years building high-scale, reliability-critical distributed systems, and hands-on experience running coding agents in production engineering.',
  thinking:
    'The user wants to know who Kieran is. His CV is in the working directory. Read it, then go through the jobs in order.',
};

export type Milestone = { label: string; where: string; when: string; done: boolean };

// Rendered as the plan / todo list. This one really is a sequence, oldest first.
export const plan: Milestone[] = [
  { label: 'Backend software engineer', where: 'BT, Glasgow', when: '2018–19', done: true },
  { label: 'BSc Software Engineering, First Class (Distinction)', where: 'University of Strathclyde', when: '2015–20', done: true },
  { label: 'Full stack software engineer', where: 'Barclays Wealth, Glasgow', when: '2020–21', done: true },
  { label: 'SDE II, then SDE III', where: 'Expedia Group, London', when: '2021–26', done: true },
  { label: 'Senior software engineer', where: 'monday.com, London', when: '2026–', done: false },
];

export type Job = {
  id: string; // shown as the Task(...) argument
  company: string;
  title: string;
  when: string;
  context: string;
  stack: string[];
  points: string[];
  metrics?: { key: string; value: string }[];
};

export const jobs: Job[] = [
  {
    id: 'monday/agents',
    company: 'monday.com',
    title: 'Senior Software Engineer',
    when: 'Jul 2026 – now',
    context: 'Account Controls team, Enterprise group, inside monday.com’s AI work platform.',
    stack: ['TypeScript', 'Node.js', 'React', 'AWS'],
    metrics: [
      { key: 'teams', value: '2' },
      { key: 'engineers', value: '10' },
    ],
    points: [
      'Led the rollout of agentic workflows that design, break down, implement and review production software. Delivery sped up, PR cycle times fell and production incidents dropped.',
      'Designed multi-step agent workflows: agents split work into tasks, implement them and hand off to AI review. CI gates check all model-generated code before merge; a review agent auto-approves low-risk PRs and routes the rest to a human.',
      'Built shared context for the agents (skills, codebase conventions, project memory) so output stays consistent across engineers and repositories.',
      'Build enterprise account controls for monday.com’s largest customers: permissions, access, governance and visibility.',
    ],
  },
  {
    id: 'expedia/commissions',
    company: 'Expedia Group',
    title: 'Software Development Engineer II → III',
    when: 'Nov 2021 – Jun 2026',
    context: 'Fintech: commissions and payments.',
    stack: ['Kotlin', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS'],
    metrics: [
      { key: 'peak', value: '300k req/s' },
      { key: 'payouts', value: '$100M+ / month' },
    ],
    points: [
      'Rebuilt the Expedia B2B commissions platform from the ground up, from design through to production rollout. It now calculates and pays out more than $100M a month.',
      'Redesigned a business-critical commissions service handling 300k requests per second as part of the rebuild.',
      'Owned reliability for payment-critical services: on-call, SLOs, incident response and observability.',
      'Led the adoption of agentic AI development across the wider team, and mentored engineers as technical lead.',
    ],
  },
  {
    id: 'glasgow/earlier',
    company: 'Barclays Wealth · BT',
    title: 'Full stack and backend engineer',
    when: 'Sep 2018 – Nov 2021',
    context: 'Glasgow.',
    stack: ['Angular', 'TypeScript', 'C#', 'Java', 'Spring Boot', 'Docker', 'AWS'],
    points: [
      'Barclays Wealth: full-stack development across Angular, TypeScript, C#, Java and AWS.',
      'BT: designed and built containerised microservices with Java, Spring Boot and Docker.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'distributed systems',
    items: ['high-throughput low-latency services', 'reliability engineering', 'event-driven architecture', 'microservices', 'observability', 'performance tuning'],
  },
  {
    group: 'agents & tooling',
    items: ['coding agents', 'agent orchestration', 'context engineering', 'AI code review', 'verifying model-generated code', 'CI/CD'],
  },
  { group: 'languages', items: ['Kotlin', 'Java', 'TypeScript', 'Node.js'] },
  {
    group: 'cloud & data',
    items: ['AWS (ECS, EC2, S3, DynamoDB, CloudFormation, CloudWatch)', 'Kafka', 'SQS', 'Spark', 'EMR', 'PostgreSQL', 'MySQL'],
  },
  { group: 'daily drivers', items: ['Claude Code', 'OpenAI Codex', 'GitHub Copilot', 'LangChain'] },
];
