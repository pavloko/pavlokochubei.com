'use client';

import Link from 'next/link';
import { createUser } from '@/app/contact/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function Contact() {
  const [state, action] = useFormState(createUser, null);

  return (
    <main className="min-h-screen">
      <h1>Contact</h1>
      <Link
        href="/"
        className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
      >
        Home
      </Link>
      <form
        action={action}
        className="mx-auto max-w-xl px-6 lg:px-8 flex flex-col"
      >
        <div className="sm:col-span-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-6 flex gap-x-6">
          <SubmitButton />
        </div>
      </form>
    </main>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {status.pending ? 'Loading...' : 'Save'}
    </button>
  );
}
