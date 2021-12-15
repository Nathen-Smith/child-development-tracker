import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useUser } from "reactfire";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Router } from "./Router";
import { SignIn } from "./components/auth/SignIn";
import { SignOut } from "./components/auth/SignOut";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  // const { status, data: signInCheckResult } = useSigninCheck();
  // https://github.com/FirebaseExtended/reactfire/blob/main/docs/use.md#auth
  // can use signInCheckResult.signedIn to check whether signed in or not
  const { data: user } = useUser();
  const pathname = useLocation().pathname;
  // add links to go into the navigation bar here
  // auth determines what links are shown in nav bar when signed in or not
  const navigation = [
    { to: "/", auth: false, name: "Home" },
    { to: "/milestones", auth: true, name: "Milestones" },
    { to: "/changes", auth: true, name: "Changes" },
    { to: "/sleep", auth: true, name: "Sleep" },
    { to: "/food", auth: true, name: "Food" },
    { to: "/journal/post", auth: true, name: "Journal" },
  ];

  const filteredNavLinks = (
    <>
      {navigation
        .filter(({ auth }) => {
          return (auth && user) || !auth;
        })
        .map(({ to, name }) => {
          return (
            <Link
              key={name}
              to={to}
              className={classNames(
                to === pathname
                  ? "bg-gray-300 text-black"
                  : "text-gray-400 hover:bg-gray-300 hover:text-black",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              {name}
            </Link>
          );
        })}
    </>
  );

  return (
    <div>
      {/* Entire navigation bar */}
      <Disclosure as="nav" className="bg-gray-100">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm">
                    <div className="flex space-x-4">{filteredNavLinks}</div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative text-sm font-small">
                    {user && user.displayName?.split(" ")[0]}
                    {!user && <SignIn />}
                    {user && <SignOut />}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">{filteredNavLinks}</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Router />
    </div>
  );
}
