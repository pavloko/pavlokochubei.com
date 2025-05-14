'use server';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function createUser(state, formData) {
  console.log('state : ', state);
  console.log('formData : ', formData);
  const name = formData.get('name');
  await sleep(1000);
  console.log('name : ', name);
  return 'success';
}
