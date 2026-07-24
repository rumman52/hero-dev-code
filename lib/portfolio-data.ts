export const contact = { email: 'rummanali658@gmail.com', linkedin: 'https://www.linkedin.com/in/rumman658' };
export const navItems = ['Work','Method','Impact','About','Recognition','Contact'] as const;
export const orbitNodes = [
  { label:'Language AI', target:'shuddho', accent:'#51E6D4' },
  { label:'Digital Health', target:'amr-steward', accent:'#F5B55F' },
  { label:'Climate Technology', target:'ecoservants', accent:'#84E6A8' },
  { label:'Social Systems', target:'teacycle', accent:'#FF7A70' },
] as const;
export const signalMetrics = [
  ['2,000+','students trained in applied AI'],['5','schools reached through AI Fixers Club'],['10,000+','people educated on climate resilience'],['8,000+','trees planted through community action'],['5,000+','underserved children reached through education']
] as const;
export const projects = [
  { id:'shuddho', category:'Language AI', title:'Shuddho — Intelligent Bangla Writing Support', problem:'Bangla writers need accessible tools that understand spelling, grammar, punctuation, and tone without forcing them to write in another language.', solution:'Shuddho is a Bangla AI writing assistant that helps people review and improve their writing through a web editor and browser-based experience.', technical:'Fine-tuned Qwen3-8B through LoRA/QLoRA, FastAPI backend, web editor, and Chrome extension.', role:'Founder, CEO & Coder', status:'Built and evolving since 2024' },
  { id:'amr-steward', category:'Digital Health', title:'AMR Steward — Safer Antibiotic Decision Support', problem:'Antibiotic decisions are high-stakes and require structured, responsible support.', solution:'A decision-support tool designed to encourage safer and smarter antibiotic-prescribing decisions.', role:'Founder, CEO & Coder', status:'Built in 2026' },
  { id:'ecoservants', category:'Environmental Data', title:'Turning Ecological Data into Field Action', problem:'Environmental information creates little value when it cannot guide restoration and sustainability decisions.', solution:'Data analysis and technology-development work that translates ecological information into practical environmental tools.', role:'Data Analysis & Tech Development Intern', organization:'EcoServants®' },
  { id:'teacycle', category:'Circular Economy', title:'TEAcycle — Creating Value from Tea Waste', problem:'Tea waste is commonly discarded despite its potential as a reusable material.', solution:'A circular-economy initiative transforming tea waste into handcrafted, sustainable accessories.', role:'Co-founder & Executive Director, Jagoron' }
] as const;
export const supporting = [
  ['Seeds of Resilience','A green-enterprise initiative supporting food security for 50 climate-affected families.'],['Widespread Times','A media platform designed to turn complex global news into concise, credible stories.'],['Health Solutions','A community initiative focused on emergency response, hygiene, and medication-safety awareness.']
] as const;
export const method = [['Understand','Study the real problem, affected people, constraints, and consequences.'],['Simplify','Translate complexity into a clear product or system people can understand.'],['Build','Develop the smallest useful solution using AI, data, software, or community infrastructure.'],['Measure and Scale','Evaluate real outcomes, improve the system, and share knowledge through teams and communities.']] as const;
export const impact = [
 ['2,000+ students','trained in applied AI across five schools through AI Fixers Club.'],['5,000+ families','reached through disaster-relief work at Bangladesh Empowering Hearts Foundation.'],['10,000+ people','educated on climate resilience.'],['50 climate-affected families','supported through Seeds of Resilience.'],['5,000+ underserved children','reached through a floating-school initiative.'],['8,000+ trees','planted through Prothom Alo Bondhushava.'],['4,000+ young people','mobilized for child-rights advocacy through NCTF.'],['50+ advocacy productions','completed and 60+ actors mentored through Beacon Theater Centre.'],['NUSUK Foundation','work included eight schools and disaster-relief initiatives serving 100,000+ families.']
] as const;
export const strengths = ['AI and language technology','Sustainable product development','Data analysis','Human-centered problem solving','Startup ecosystems','Team leadership','Research and technical communication'] as const;
export const experience = {
 Building:['Founder, CEO & Coder — The AI Fixers','Shuddho','AMR Steward','Founder — Widespread Times'],
 'Research and Technology':['Research & Writing Intern — One Million by One Million','Data Analysis & Tech Development Intern — EcoServants®'],
 'Social Innovation':['Founder & CEO — Bangladesh Empowering Hearts Foundation','Executive Director — Mindcare Bangladesh','Co-founder & Executive Director — Jagoron','Founder — Bangladesh Empowering Hearts Shishu Kiran'],
 'Communication and Advocacy':['Content Writer — Heart Health India Foundation','Artist & Mentor — Beacon Theater Centre','Joint General Secretary — NCTF Rangpur District']
} as const;
export const recognition = ['Two-time Bronze Award — Queen’s Commonwealth Essay Competition','Top 8% — National Science Subjects, HSC 2022','Academic Excellence Award','Nationally Selected Co-Leader — Building Bridges through Leadership Training, BBLT44','Amra Notun Changemaker Recognition','Regional Youth Policy Camp — Policy Development Participant','Cybersecurity Awareness Month 2023 — Contributor'] as const;
