import React from "react";

const Option = () => {
  return (
    <>
      <x-guest-layout>
        <div className="bg-white " x-data="{mobileMenuOpen: false}">
          <header className="relative bg-white z-30">
            <div
              x-show="mobileMenuOpen"
              className="relative z-40 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />

              <div className="fixed inset-0 z-40 flex">
                <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-2" x-data="{tabSelect:0}">
                    <div className="border-b border-gray-200">
                      <div
                        className="-mb-px flex space-x-8 px-4"
                        aria-orientation="horizontal"
                        role="tablist"
                      >
                        <button
                          id="tabs-1-tab-1"
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls="tabs-1-panel-1"
                          role="tab"
                          type="button"
                        >
                          Women
                        </button>
                        <button
                          id="tabs-1-tab-2"
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls="tabs-1-panel-2"
                          role="tab"
                          type="button"
                        >
                          Men
                        </button>
                      </div>
                    </div>

                    <div
                      id="tabs-1-panel-1"
                      x-show="tabSelect==1"
                      className="space-y-10 px-4 pb-8 pt-10"
                      aria-labelledby="tabs-1-tab-1"
                      role="tabpanel"
                      tabIndex={0}
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        <div className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                              alt="Models sitting back to back, wearing Basic Tee in black and bone."
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href="#"
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              className="absolute inset-0 z-10"
                              aria-hidden="true"
                            />
                            New Arrivals
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                        <div className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                              alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href="#"
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              className="absolute inset-0 z-10"
                              aria-hidden="true"
                            />
                            Basic Tees
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      </div>
                      <div>
                        <p
                          id="women-clothing-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Clothing
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="women-clothing-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Tops
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Dresses
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Pants
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Denim
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Sweaters
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              T-Shirts
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Jackets
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Activewear
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Browse All
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="women-accessories-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Accessories
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="women-accessories-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Watches
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Wallets
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Bags
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Sunglasses
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Hats
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Belts
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="women-brands-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Brands
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="women-brands-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Full Nelson
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              My Way
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Re-Arranged
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Counterfeit
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Significant Other
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* 'Men' tab panel, show/hide based on tab state. */}
                    <div
                      id="tabs-1-panel-2"
                      x-show="tabSelect==2"
                      className="space-y-10 px-4 pb-8 pt-10"
                      aria-labelledby="tabs-1-tab-2"
                      role="tabpanel"
                      tabIndex={0}
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        <div className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                              alt="Drawstring top with elastic loop closure and textured interior padding."
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href="#"
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              className="absolute inset-0 z-10"
                              aria-hidden="true"
                            />
                            New Arrivals
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                        <div className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                              alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href="#"
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              className="absolute inset-0 z-10"
                              aria-hidden="true"
                            />
                            Artwork Tees
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      </div>
                      <div>
                        <p
                          id="men-clothing-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Clothing
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="men-clothing-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Tops
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Pants
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Sweaters
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              T-Shirts
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Jackets
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Activewear
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Browse All
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="men-accessories-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Accessories
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="men-accessories-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Watches
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Wallets
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Bags
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Sunglasses
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Hats
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Belts
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="men-brands-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Brands
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="men-brands-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Re-Arranged
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Counterfeit
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              Full Nelson
                            </a>
                          </li>
                          <li className="flow-root">
                            <a
                              href="#"
                              className="-m-2 block p-2 text-gray-500"
                            >
                              My Way
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*-------------------------------------------- MOBILE END MENU --------------------------------------------------------*/}

            <nav
              aria-label="Top"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white"
            >
              <div className="flex h-16 items-center">
                {/* Flyout menus */}
                <div
                  className="hidden lg:ml-8 lg:block lg:self-stretch"
                  x-data="{ activeMenuItem: 0 }"
                >
                  <div className="flex h-full  ">
                    <div className="flex">
                      <div
                        x-show="activeMenuItem==2"
                        className=" absolute inset-x-0 top-full text-sm text-gray-500 "
                      >
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 ">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                <div className="group relative text-base sm:text-sm">
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                                      alt="Drawstring top with elastic loop closure and textured interior padding."
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    className="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      className="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    />
                                    New Arrivals
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                                <div className="group relative text-base sm:text-sm">
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                                      alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    className="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      className="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    />
                                    Artwork Tees
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                <div>
                                  <p
                                    id="Clothing-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Clothing
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Clothing-heading"
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Tops
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Pants
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Sweaters
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        T-Shirts
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Jackets
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Activewear
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Browse All
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="Accessories-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Accessories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Accessories-heading"
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Watches
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Wallets
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Bags
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Sunglasses
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Hats
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Belts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="Brands-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Brands
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Brands-heading"
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Re-Arranged
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Counterfeit
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        Full Nelson
                                      </a>
                                    </li>
                                    <li className="flex">
                                      <a
                                        href="#"
                                        className="hover:text-gray-800"
                                      >
                                        My Way
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </x-guest-layout>
    </>
  );
};

export default Option;
