export const pillars=[{id:'body',name:'Body Mastery',icon:'◇',minutes:12,exerciseIds:['wall-pushup','high-incline','low-incline','knee-pushup','pushup','decline-pushup','supported-hang','hang','scapular','assisted-pullup','negative','partial-pullup','strict-pullup','grip-squeeze']},{id:'mobility',name:'Mobility & Control',icon:'⌁',minutes:8,exerciseIds:['supported-squat','mobility','hip-hinge','deadbug','side-plank']},{id:'strength',name:'Strength',icon:'△',minutes:18,exerciseIds:['curl','band-curl','squat','hip-hinge','row','band-row','carry','suitcase','chest-press','dumbbell-press','shoulder-press','triceps','leg-press','pushup']},{id:'movement',name:'Movement Base',icon:'↗',minutes:10,exerciseIds:['walk','run']}];
export const gameConfiguration={id:'economy',revision:1,levelBase:500,levelStep:100,pillarXP:20,quadXP:60,sessionDailyLimit:3,routineDailyXP:10,prDailyXP:20,trialDailyXP:30,checkinDailyXP:5,questDailyLimit:3,questXP:15,questCoins:3,transformation:{trendDays:7,minimumSamples:3,weightChange:5,waistChange:1,minimumCheckins:3},weekly:{mobilitySessions:3,quadDays:4,walkingMeters:3000}};
const badge=(id,name,category,description,xp=25,coins=5,extra={})=>({id,name,category,description,xp,coins,rarity:'Uncommon',...extra});
export const achievements=[
 badge('first-workout','First Contact','Milestone','Finish your first useful workout.',25,5,{rarity:'Common',title:'The Beginner'}),
 badge('first-pr','A New Ceiling','PR','Improve a previously recorded performance.',30,5),
 badge('mile','First Mile','Sport','Record a controlled mile-long walk or run.',40,10,{title:'Walker of Worlds'}),
 badge('hang60','Hang in There','Milestone','Record a controlled 60-second hang.',50,10,{rarity:'Rare',title:'Grip Gremlin'}),
 badge('active7','Seven Days Active','Consistency','Seven consecutive active days; recovery counts.',50,10),
 badge('mobility-week','Range Keeper','Recovery','Complete three mobility exposures in one week.',40,10),
 badge('smart-recovery','Smart Recovery','Recovery','Complete a planned light or recovery exposure.',30,5,{title:'Body Apprentice'}),
 badge('week1','Week One, Recorded','Transformation','Reach week one with a transformation check-in.',25,5),
 badge('halfway','Halfway Through the Orbit','Transformation','Reach the configured halfway point with logged check-ins.',50,10),
 badge('trend5','A Changing Trend','Transformation','A sustained logged weight trend has changed by the configured milestone.',40,10),
 badge('waist1','A Different Measure','Transformation','A multi-sample waist trend has changed by the configured milestone.',40,10),
 badge('strength-kept','Capability Kept','Transformation','Maintain a recorded resistance benchmark across transformation check-ins.',50,10),
 badge('still-hungry','Still Hungry','Secret','Complete optional Extra Training after your planned day is clear.',25,5,{secret:true}),
 badge('comeback','Nope, Still Here','Secret','Clear your planned day after returning from an activity gap.',30,5,{secret:true,title:'Unreasonably Determined'}),
 badge('grip-gremlin','Grip Gremlin','Secret','Prove the supported-hang grip milestone.',50,10,{secret:true,title:'Grip Gremlin'}),
 badge('four-for-four','Four for Four','Secret','Honor all four planned daily exposures.',40,10,{secret:true}),
 badge('respect-recovery','Respect the Recovery','Secret','Choose and complete light or recovery work from a low-readiness recommendation.',30,5,{secret:true}),
 badge('balance','Balance Kept','Secret','Clear planned training while preserving protected Bae Time.',0,0,{secret:true,rarity:'Common'})
];
export const bosses=[
 {id:'gravity',name:'Gravity I',description:'First strict pull-up path proved',goal:'first-pullup',title:'Gravity Challenger',quote:'Gravity asked you to stay down.',xp:200,coins:50,rarity:'Epic'},
 {id:'ground',name:'Ground Control I',description:'Standard push-up mastery',skill:'push',levelId:'push-4',title:'Body Apprentice',xp:150,coins:35,rarity:'Rare'},
 {id:'iron',name:'Iron Will I',description:'20 lb curl mastery',skill:'curl',levelId:'curl-20',title:'Iron Cub',xp:150,coins:35,rarity:'Rare'},
 {id:'road',name:'Roadwork I',description:'Repeatable mile capacity',skill:'run',levelId:'run-2',sport:'Running',title:'Walker of Worlds',xp:150,coins:35,rarity:'Rare'},
 {id:'carry',name:'Carry the World I',description:'Carry III load and distance proved',skill:'carry',levelId:'carry-3',title:'Dominance Seeker',xp:150,coins:35,rarity:'Rare'},
 {id:'transformation',name:'Transformation I',description:'Finish your configured transformation journey with check-ins',title:'Galaxy Athlete',xp:200,coins:50,rarity:'Legendary',quote:'You built a more capable version of yourself.'}
];
export const cosmetics=[{id:'core',name:'Core',slot:'orb',cost:0},{id:'eclipse',name:'Eclipse',slot:'orb',cost:35},{id:'nova',name:'Nova',slot:'orb',cost:60},{id:'void',name:'Void',slot:'orb',cost:50},{id:'lunar',name:'Lunar',slot:'orb',cost:40},{id:'white-star',name:'White Star',slot:'orb',cost:75},{id:'orbit-frame',name:'Orbit frame',slot:'frame',cost:40},{id:'silver-frame',name:'Silver frame',slot:'frame',cost:65},{id:'quiet-stars',name:'Quiet stars',slot:'stars',cost:25},{id:'deep-space',name:'Deep space banner',slot:'banner',cost:50}];
export const gameStores=['gameConfigurations','rewardLedger','gameQuests','gameBadges','bossClears','pillarPlans','gameInventory','gameProfile','gameCelebrations'];
export function gameSeeds(){return {configuration:structuredClone(gameConfiguration),profile:{id:'player',title:'The Beginner',favorites:[],equipped:{orb:'core'}},inventory:{id:'cosmetic:core',type:'cosmetic',itemId:'core',name:'Core',at:null},title:{id:'title:The Beginner',type:'title',itemId:'The Beginner',name:'The Beginner',at:null}}}
export function legacyLedger(rewards){return rewards.map(r=>({id:'legacy:'+r.id,sourceType:'legacy',sourceId:r.id,amount:r.xp,coins:r.coins,date:r.date,at:r.at||r.date+'T12:00:00.000Z',reason:'Previously earned workout reward',evidence:{store:'rewards',id:r.id}}))}
