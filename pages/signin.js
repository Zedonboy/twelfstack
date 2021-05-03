import { LockClosedIcon } from '@heroicons/react/solid'
import Link from "next/link"
export default function SignIn() {
  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="w-full flex flex-col items-center">
          <Link href="/">
          <a className="logo-text">TwelfStack</a>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">Sign in to your account</h2>
          
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none bg-navy-light rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none bg-navy-light rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-green-500 group-hover:text-green-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
          <div className="text-sm text-gray-300">
                  New member?&nbsp;&nbsp;&nbsp;
                  <Link href="/signup">
                  <a className="font-medium text-green-600 hover:text-green-500">
                Sign Up
              </a>
                  </Link>
              
            </div>
        </form>
      </div>
    </div>
  )
}
