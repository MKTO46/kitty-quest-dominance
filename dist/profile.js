// Test activity uses another database and a clock that never affects the real profile.
const storage=()=>globalThis.localStorage;
const testProfile=globalThis.localStorage?.getItem('kitty-active-profile')==='test';
export const isTestMode=()=>testProfile;
export const appNow=()=>{const d=new Date();if(isTestMode())d.setDate(d.getDate()+Number(storage()?.getItem('kitty-test-days')||0));return d};
export function selectProfile(test){storage().setItem('kitty-active-profile',test?'test':'real');globalThis.location.reload()}
export function advanceTestDay(){if(!isTestMode())throw Error('Simulated dates are available only in Test Mode.');storage().setItem('kitty-test-days',String(Number(storage().getItem('kitty-test-days')||0)+1));globalThis.location.reload()}
