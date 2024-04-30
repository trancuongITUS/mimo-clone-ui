/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between product-backgroud">
      <div className="m-0 flex w-full flex-col items-center justify-between font-mono text-sm ">
        <div className="bg-transparent z-[1000] w-full relative text-marketing-text-primary border-b  dark:border-neutral-800 dark:bg-zinc-800/30 ">
          <div className="flex h-[80px] w-full items-center justify-between px-6 py-4 tablet:px-10">
            <div className="flex tablet:flex-grow-0 desktop:flex-1 left-0">
              <a href="/">
                <svg
                  height="100%"
                  viewBox="0 0 70 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8"
                >
                  <path
                    d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202H32.0153Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex space-x-10 tablet:flex-grow-0 desktop:flex-1 left-0">
              <a href="/about-us">
                <p className="button-header font-mimopro text-[16px] tablet:text-[16px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                  About Us
                </p>
              </a>
              <a href="/glossary">
                <p className="button-header font-mimopro text-[16px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                  Glossary
                </p>
              </a>
              <a href="/blog">
                <p className="button-header font-mimopro text-[16px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                  Blog
                </p>
              </a>
            </div>
            <div className="flex space-x-10 tablet:flex-grow-0 desktop:flex-1 left-0">
              <a href="/login">
                <p className="button-header text-[16px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                  Login
                </p>
              </a>
              <a href="/register">
                <p className="button-mimo font-mimopro text-[16px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                  Sign up
                </p>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-28 w-full max-w-[1364px] flex-1 tablet:mb-40">
            <section className="mb-16 mt-8 px-6 tablet:mt-8 tablet:px-10 tabletLg:mt-16">
              <div className="absolute left-[-90px] top-[50px] z-[0] hidden h-[800px] w-[800px] overflow-hidden bg-[radial-gradient(circle_at_0%_50%,_var(--tw-gradient-stops))] from-[#8d60e266] to-[#25274600] to-[40%] tablet:block"></div>
              <div className="absolute right-0 top-[160px] z-[0] hidden h-[800px] w-[800px] overflow-hidden bg-[radial-gradient(circle_at_100%_50%,_var(--tw-gradient-stops))] from-[#8d60e266] to-[#25274600] to-[40%] tablet:block"></div>
              <div className="relative z-10 space-y-8">
                <div className="grid w-full grid-flow-row grid-cols-1 gap-6 text-marketing-text-primary tablet:gap-5 tabletLg:grid-cols-2 tabletLg:grid-rows-none">
                  <div className="flex flex-col items-baseline space-y-10 tablet:space-y-12 tabletLg:max-w-[430px] tabletLg:justify-center tabletLg:space-y-7 desktop:justify-center">
                    <h3 className="font-aeonikFono w-[90%] text-[40px] font-bold leading-[48px] tablet:w-full tablet:text-[48px] tablet:leading-[56px] tabletLg:w-[468px] tabletLg:text-left ">
                      Learn to code.
                      <br />
                      Build a portfolio.
                      <br />
                      Get hired.
                    </h3>
                    <div className="w-full space-y-3 tabletLg:block">
                      <div className="tabletLg:block">
                        <div className="flex w-full appearance-none rounded-xl bg-marketing-form-surface text-marketing-form-text focus-within:border-marketing-button-primary-hover focus-within:ring-marketing-button-primary-hover hover:border-marketing-button-primary-hover border-marketing-form-surface">
                          <input
                            id="email"
                            placeholder="Your e-mail"
                            name="email"
                            type="email"
                            required
                            autoComplete="off"
                            className="peer h-12 flex-1 rounded-xl bg-marketing-form-surface px-4 py-[9px] placeholder:text-marketing-form-placeholder focus:outline-none border-none    bg-[#3F4273]"
                          />
                        </div>
                        <p className="font-mimopro font-normal flex h-6 items-center text-xs text-marketing-form-error"></p>
                        <div className="flex w-full appearance-none rounded-xl bg-marketing-form-surface text-marketing-form-text focus-within:border-marketing-button-primary-hover focus-within:ring-marketing-button-primary-hover hover:border-marketing-button-primary-hover border-marketing-form-surface">
                          <input
                            id="password"
                            placeholder="Your password"
                            name="password"
                            type="password"
                            required
                            autoComplete="off"
                            className="peer h-12 flex-1 rounded-s-xl bg-marketing-form-surface px-4 py-[9px] placeholder:text-marketing-form-placeholder focus:outline-none bg-[#3F4273] border-none"
                          />
                          <button className="px-4 bg-[#3F4273] border-none rounded-e-xl">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 cursor-pointer"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.707 15.293a.999.999 0 1 1-1.414 1.414l-2.256-2.256a8.076 8.076 0 0 1-.532.175 8.198 8.198 0 0 1-.56.148A8.64 8.64 0 0 1 9 15c-4.334 0-7.102-3.13-8.305-4.869a1.977 1.977 0 0 1 0-2.262c.362-.524.87-1.176 1.517-1.829.115-.115.236-.231.36-.347.121-.112.246-.222.374-.333L1.293 3.707a1 1 0 0 1 1.414-1.414l13 13Zm-6.55-2.309c.217-.008.434-.022.642-.064a3.553 3.553 0 0 0 .54-.167l-1.26-1.261c-.013 0-.024.002-.036.004-.014.002-.028.004-.043.004-.262 0-.51-.052-.748-.126a2.487 2.487 0 0 1-1.625-1.626A2.47 2.47 0 0 1 6.5 9c0-.014.002-.028.004-.042.002-.012.004-.024.004-.036l-1.26-1.261-.019.05c-.057.16-.114.32-.149.49a4.12 4.12 0 0 0-.064.643c0 .025-.004.049-.008.072C5.004 8.944 5 8.971 5 9a4 4 0 0 0 4 4c.03 0 .058-.004.086-.008a.645.645 0 0 1 .07-.008Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M17.306 7.87C16.103 6.13 13.334 3 9 3c-1.29 0-2.44.282-3.454.718L7.248 5.42A3.959 3.959 0 0 1 9 5a4 4 0 0 1 4 4c0 .632-.159 1.221-.42 1.752l2.154 2.153a13.112 13.112 0 0 0 2.572-2.774 1.977 1.977 0 0 0 0-2.262Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M11.5 9A2.5 2.5 0 0 0 9 6.5c-.204 0-.401.032-.593.078l3.015 3.015c.047-.19.079-.388.079-.593Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <p className="font-mimopro font-normal flex h-6 items-center text-xs text-marketing-form-error"></p>
                        <div className="relative flex items-start">
                          <input
                            type="checkbox"
                            id="registration"
                            name="registration"
                            className="peer absolute top-0 h-6 w-6 cursor-pointer opacity-0"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="hidden h-6 w-6 flex-shrink-0 rounded-md bg-marketing-form-surface peer-checked:block"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19.905 6.405 9 17.302l-4.177-4.177"
                            ></path>
                          </svg>
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0 rounded-md bg-marketing-form-surface text-marketing-form-surface peer-checked:hidden"
                          >
                            <path
                              d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                              stroke="currentColor"
                              strokeOpacity="0.25"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <label
                            htmlFor="registration"
                            className="ml-2 text-xs leading-6 text-marketing-form-text"
                          >
                            {"I agree to Mimo's"}{" "}
                            <a
                              href="https://mimo.org/terms"
                              className="underline decoration-1"
                            >
                              Terms of Service
                            </a>
                            {" and"}{" "}
                            <a
                              href="https://mimo.org/terms#privacy-policy"
                              className="underline decoration-1"
                            >
                              Privacy Policy.
                            </a>
                          </label>
                        </div>
                        <span className="flex h-6 items-center px-[3px] text-xs text-error-default-light "></span>
                        <div className="flex h-14 flex-col items-center space-y-3">
                          <button className="flex h-full w-full items-center justify-center rounded-xl border border-transparent bg-primary-default-light px-4 py-2 text-base font-semibold text-text-reversed-light shadow-sm hover:bg-primary-state1-light focus:outline-none bg-[#7E4BDE]">
                            Sign up and learn for free
                          </button>
                        </div>
                      </div>
                      <div className="text-marketing-button-secondary-text">
                        <button className="flex h-14 w-full items-center justify-center space-x-2 rounded-xl bg-marketing-button-secondary-enabled px-3 hover:bg-marketing-button-secondary-hover undefined bg-white">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0"
                          >
                            <path
                              d="M22.0455 12.2366C22.0455 11.3733 21.9755 10.7433 21.8242 10.09H11.9824V13.9866H17.7593C17.6429 14.9549 17.0139 16.4133 15.6162 17.3932L15.5966 17.5237L18.7084 19.9384L18.924 19.9599C20.904 18.1282 22.0455 15.4332 22.0455 12.2366Z"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M11.9824 22.5034C14.8126 22.5034 17.1886 21.57 18.924 19.9601L15.6162 17.3933C14.7311 18.0117 13.543 18.4433 11.9824 18.4433C9.21036 18.4433 6.85766 16.6117 6.01898 14.0801L5.89605 14.0905L2.66036 16.5989L2.61804 16.7167C4.3418 20.1466 7.88253 22.5034 11.9824 22.5034Z"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M6.01904 14.0801C5.79775 13.4268 5.66968 12.7267 5.66968 12.0034C5.66968 11.2801 5.79775 10.5801 6.0074 9.92678L6.00153 9.78764L2.72529 7.23901L2.6181 7.29009C1.90765 8.71343 1.5 10.3118 1.5 12.0034C1.5 13.6951 1.90765 15.2934 2.6181 16.7167L6.01904 14.0801Z"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M11.9824 5.56337C13.9507 5.56337 15.2784 6.41503 16.0355 7.12674L18.9939 4.2334C17.177 2.54175 14.8126 1.50342 11.9824 1.50342C7.88253 1.50342 4.3418 3.86005 2.61804 7.29001L6.00734 9.9267C6.85766 7.39505 9.21036 5.56337 11.9824 5.56337Z"
                              fill="#EB4335"
                            ></path>
                          </svg>
                          <p className="font-mimopro text-[12px] font-bold tablet:text-[14px] ml-2 leading-[14px] text-marketing-button-secondary-text text-[#252746]">
                            Sign in with Google
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex min-h-[300px] w-full self-center justify-self-center tablet:h-full tablet:w-full desktop:max-w-[668px]">
                    <img
                      alt="person engaged in coding on their phone and computer"
                      fetchPriority="high"
                      width="1861"
                      height="1755"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full flex-1 rounded-2xl object-contain"
                      srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.b121e8b2.png&w=1920&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.b121e8b2.png&w=1920&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                      src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.b121e8b2.png&w=1920&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                    ></img>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-4 space-y-20 tablet:mt-10  desktop:px-10">
              <div className="px-8 tablet:block">
                <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-8 text-center">
                  Join 25+ million learners & start a career you’ll love
                </h5>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex flex-col rounded-3xl border-2 border-[#3F4273] p-6 last:hidden md:last:block">
                    <div className="flex items-end justify-between">
                      <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                        Zuzana B.
                      </p>
                      <img
                        alt="author"
                        loading="lazy"
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-10 rounded-full"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzuzana_b.28e2dd79.png&w=384&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, 	https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzuzana_b.28e2dd79.png&w=384&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzuzana_b.28e2dd79.png&w=384&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                    <h4 className="font-mimopro text-[18px] leading-[28px] mt-4 text-product2-content-primary">
                      {
                        '"Mimo’s learning path provided a stable, sustainable pace for several months of constant progress."'
                      }
                    </h4>
                    <div className="mt-auto flex items-end justify-between pt-10">
                      <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                        Front-End Developer
                      </p>
                      <img
                        alt="company"
                        loading="lazy"
                        width="120"
                        height="26"
                        decoding="async"
                        data-nimg="1"
                        className="max-w-[80px]"
                        style={{ color: "transparent" }}
                        src="https://mimo.org/_next/static/media/qrowdsy_light.db6c0577.svg"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-3xl border-2 border-[#3F4273] p-6 last:hidden md:last:block">
                    <div className="flex items-end justify-between">
                      <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                        Luca P.
                      </p>
                      <img
                        alt="author"
                        loading="lazy"
                        width="120"
                        height="120"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-10 rounded-full"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluca_p.6c42ecd0.png&w=128&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluca_p.6c42ecd0.png&w=128&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluca_p.6c42ecd0.png&w=128&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                    <h4 className="font-mimopro text-[18px] leading-[28px] mt-4 text-product2-content-primary">
                      {
                        '"What I gained from the course was the ability to better understand coding and how to work on a project."'
                      }
                    </h4>
                    <div className="mt-auto flex items-end justify-between pt-10">
                      <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                        Front-End Developer
                      </p>
                      <img
                        alt="company"
                        loading="lazy"
                        width="330"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="max-w-[80px]"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesigndough.b523dc45.png&w=384&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesigndough.b523dc45.png&w=384&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesigndough.b523dc45.png&w=384&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-3xl border-2 border-[#3F4273] p-6 last:hidden md:last:block">
                    <div className="flex items-end justify-between">
                      <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                        Charlotte S.
                      </p>
                      <img
                        alt="author"
                        loading="lazy"
                        width="120"
                        height="120"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-10 rounded-full"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcharlotte_s.3dd8e143.png&w=128&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcharlotte_s.3dd8e143.png&w=128&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcharlotte_s.3dd8e143.png&w=128&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                    <h4 className="font-mimopro text-[18px] leading-[28px] mt-4 text-product2-content-primary">
                      {
                        '"I highly recommend Mimo to anyone looking to learn web development. I promise you will not regret it."'
                      }
                    </h4>
                    <div className="mt-auto flex items-end justify-between pt-10">
                      <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                        Front-End Developer
                      </p>
                      <img
                        alt="company"
                        loading="lazy"
                        width="197"
                        height="96"
                        decoding="async"
                        data-nimg="1"
                        className="max-w-[80px]"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fboots.eb48de2c.png&w=256&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fboots.eb48de2c.png&w=256&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fboots.eb48de2c.png&w=256&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-4 tablet:hidden">
              <div className="z-[11] flex w-full justify-center px-6 tablet:px-10">
                <div className="relative flex h-[220px] w-full flex-col items-center space-y-4 overflow-hidden rounded-[32px] bg-[#F8E08E] p-6 tablet:h-[134px] tablet:flex-row tablet:justify-between tablet:space-y-0 tablet:pl-14 tablet:pr-[130px]">
                  <img
                    alt="editors choice"
                    loading="lazy"
                    width="186"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="z-10 h-10 tablet:h-12"
                    style={{ color: "transparent" }}
                    src="	https://mimo.org/_next/static/media/editorsChoiceTitle.cfd51ed8.svg"
                  ></img>
                  <img
                    alt="editors choice"
                    loading="lazy"
                    width="120"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    className="z-10 h-[120px] w-[120px] tablet:h-[100px] tablet:w-[100px]"
                    src="	https://mimo.org/_next/static/media/editorsChoiceGooglePlay.0ca7a0c6.svg"
                  ></img>
                  <img
                    alt="editors choice"
                    loading="lazy"
                    width="42"
                    height="80"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    className="absolute bottom-6 right-6 z-10 h-[80px] tablet:bottom-4 tablet:right-4 tablet:h-[100px]"
                    src="https://mimo.org/_next/static/media/editorsChoiceStars.bd5c856b.svg"
                  ></img>
                  <div className="absolute -top-[100px] left-[15%] h-[500px] w-[20px] rotate-[30deg] bg-white/20"></div>
                  <div className="absolute -top-[100px] left-[calc(15%+40px)] h-[500px] w-[60px] rotate-[30deg] bg-white/20"></div>
                  <div className="absolute -top-[100px] left-[40%] hidden h-[500px] w-[20px] rotate-[30deg] bg-white/20 tablet:block"></div>
                  <div className="absolute -top-[100px] left-[calc(40%+37px)] hidden h-[500px] w-[60px] rotate-[30deg] bg-white/20 tablet:block"></div>
                  <div className="absolute -top-[100px] left-[calc(40%+113px)] hidden h-[500px] w-[20px] rotate-[30deg] bg-white/20 tablet:block"></div>
                  <div className="absolute -top-[100px] left-[calc(40%+146px)] hidden h-[500px] w-[20px] rotate-[30deg] bg-white/20 tablet:block"></div>
                  <div className="absolute -top-[100px] left-[calc(40%+182px)] hidden h-[500px] w-[60px] rotate-[30deg] bg-white/20 tablet:block"></div>
                </div>
              </div>
            </section>

            <section className="mt-20 space-y-20 px-6 tablet:mt-40 tablet:px-10 tabletLg:mt-20 desktop:mt-40">
              <div className="relative z-10 space-y-4 text-text-primary-dark tablet:space-y-4">
                <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#3F4273] absolute left-[-5%] top-[-2%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#3890FA] absolute left-[60%] top-[-4%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                </div>
                <div className="hidden tabletLg:block tabletLg:h-[160px]"></div>
                <div className="grid grid-flow-row grid-cols-1 pb-10 desktop:grid-cols-2 desktop:gap-4">
                  <div className="space-y-6 text-center tablet:text-left tabletLg:w-full">
                    <h2 className="font-aeonikFono text-[40px] font-bold leading-[52px] tablet:text-[56px] tablet:leading-[64px]">
                      Python, JavaScript, HTML, CSS, and more
                    </h2>
                    <p className="font-mimopro text-[20px] font-normal leading-[30px] tablet:text-[24px] tablet:leading-[36px] md:w-full md:max-w-[50%] desktop:w-full desktop:max-w-full">
                      Choose between a range of beginner-friendly learning
                      paths, hand-crafted by learning experts and backed by
                      research
                    </p>
                  </div>
                </div>
                <div className="h-[160px] tablet:hidden"></div>
                <div className="grid grid-flow-row grid-cols-1 gap-4 tabletLg:gap-4 desktop:grid-cols-3">
                  <div className="relative flex items-end">
                    <a
                      title="Start Learning"
                      className="group relative flex h-full w-full flex-col justify-between rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-text-primary-dark hover:bg-marketing-surface-darkBlue tablet:p-10"
                    >
                      <div className="grid h-8 grid-cols-2 items-center justify-between">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.3333 23.3333L16 23L12.6667 23.3333L12 26.6667L16 27L20 26.6667L19.3333 23.3333Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M26.6641 3.33301H5.33073C3.85797 3.33301 2.66406 4.52692 2.66406 5.99967V20.6663C2.66406 22.1391 3.85797 23.333 5.33073 23.333H26.6641C28.1368 23.333 29.3307 22.1391 29.3307 20.6663V5.99967C29.3307 4.52692 28.1368 3.33301 26.6641 3.33301Z"
                            fill="#AD88EF"
                          ></path>
                          <path
                            d="M26.3281 5H5.66146C4.92508 5 4.32812 5.59695 4.32812 6.33333V20.3333C4.32812 21.0697 4.92508 21.6667 5.66146 21.6667H26.3281C27.0645 21.6667 27.6615 21.0697 27.6615 20.3333V6.33333C27.6615 5.59695 27.0645 5 26.3281 5Z"
                            fill="#B99AF4"
                          ></path>
                          <path
                            d="M21.3333 26.667H10.6667C10.2985 26.667 10 26.9655 10 27.3337V28.0003C10 28.3685 10.2985 28.667 10.6667 28.667H21.3333C21.7015 28.667 22 28.3685 22 28.0003V27.3337C22 26.9655 21.7015 26.667 21.3333 26.667Z"
                            fill="#AD88EF"
                          ></path>
                          <path
                            d="M27.6615 6.33333C27.6615 5.59695 27.0645 5 26.3281 5H9.32812V21.6667H26.3281C27.0645 21.6667 27.6615 21.0697 27.6615 20.3333V6.33333Z"
                            fill="#333661"
                          ></path>
                          <path
                            d="M18 7.33301H12V10.6663H18V7.33301Z"
                            fill="#F4D055"
                          ></path>
                          <path
                            d="M18 12H12V15.3333H18V12Z"
                            fill="#DD93B0"
                          ></path>
                          <path
                            d="M18 16.666H12V19.9993H18V16.666Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M25.3359 7.33301H19.3359V10.6663H25.3359V7.33301Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M25.3359 12H19.3359V15.3333H25.3359V12Z"
                            fill="#F4D055"
                          ></path>
                          <path
                            d="M25.3359 16.666H19.3359V19.9993H25.3359V16.666Z"
                            fill="#DD93B0"
                          ></path>
                        </svg>
                        <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] max-h-8 w-fit justify-self-end whitespace-nowrap rounded-xl bg-[#7D4BDE] px-4 py-1 uppercase">
                          Career Path
                        </p>
                      </div>
                      <div className="mt-10 flex grow flex-col space-y-4 tablet:space-y-6">
                        <h3 className="font-aeonikFono text-[32px] font-bold leading-[40px] tablet:text-[40px] tablet:leading-[48px]">
                          Full-stack Development
                        </h3>
                        <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                          Discover the core of both front-end and back-end
                          development. Learn to create user interfaces and
                          master key programming languages and frameworks
                          driving today’s web.
                        </p>
                      </div>
                      <div className="col-span-2 mt-10 flex h-6 max-w-[80%] flex-wrap items-start space-x-1 tablet:mt-11 tablet:h-8 tablet:max-w-none tablet:space-x-2 desktop:mt-[52px]">
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 2L4.64 20.01L11.99 22L19.37 20L21.01 2H3ZM6.34 5.68H17.63L17.42 7.89H8.81L9.02 10.15H17.22L16.6 16.93L12 18.18L7.38 16.93L7.06 13.46H9.32L9.48 15.22L12 15.88L14.51 15.22L14.77 12.35H6.96L6.34 5.68Z"
                            fill="#FA965A"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.288 5.67089H17.6L17.376 7.85189L11.993 10.1239L11.98 10.1299H17.185L16.591 16.8919L12.002 18.2149L7.388 16.8669L7.09 13.4619H9.372L9.52 15.2259L11.976 15.8379L14.532 15.1279L14.705 12.2859L6.941 12.2619V12.2579L6.934 12.2619L6.76 10.1299L11.993 7.97789L12.299 7.85189H6.561L6.288 5.67089ZM3 1.99989L4.687 20.0559L12 21.9999L19.312 20.0559L21 1.99989H3Z"
                            fill="#1E96FF"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 21H21V3H3V21ZM12.796 17.039C12.796 18.791 11.769 19.589 10.271 19.589C8.917 19.589 8.132 18.888 7.732 18.042L9.11 17.209C9.376 17.68 9.618 18.078 10.197 18.078C10.754 18.078 11.104 17.861 11.104 17.016V11.264H12.796V17.039ZM16.795 19.589C15.225 19.589 14.21 18.84 13.714 17.861L15.092 17.063C15.454 17.655 15.926 18.091 16.759 18.091C17.46 18.091 17.907 17.74 17.907 17.257C17.907 16.677 17.447 16.472 16.675 16.133L16.252 15.952C15.031 15.433 14.222 14.78 14.222 13.402C14.222 12.134 15.188 11.167 16.698 11.167C17.774 11.167 18.547 11.542 19.104 12.521L17.786 13.366C17.496 12.847 17.182 12.642 16.698 12.642C16.203 12.642 15.889 12.955 15.889 13.366C15.889 13.874 16.203 14.079 16.928 14.394L17.351 14.574C18.789 15.19 19.599 15.819 19.599 17.232C19.599 18.755 18.402 19.589 16.795 19.589Z"
                            fill="#FFDA1B"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23 11.8C23 10.34 21.17 8.96 18.38 8.1C19.03 5.25 18.74 2.98 17.47 2.25C17.18 2.08 16.84 2 16.47 2C15.24 2 13.63 2.87 11.99 4.4C10.36 2.88 8.74 2.02 7.51 2.02C7.13 2.02 6.79 2.1 6.5 2.27C5.24 3 4.96 5.27 5.61 8.11C2.82 8.97 1 10.35 1 11.8C1 13.26 2.83 14.64 5.62 15.5C4.97 18.35 5.26 20.62 6.53 21.35C6.82 21.52 7.16 21.6 7.54 21.6C8.77 21.6 10.39 20.72 12.02 19.2C13.65 20.72 15.27 21.59 16.5 21.59C16.88 21.59 17.22 21.51 17.51 21.34C18.77 20.61 19.05 18.35 18.4 15.51C21.18 14.63 23 13.25 23 11.8ZM16.47 3.01C16.68 3.01 16.84 3.05 16.98 3.13C17.59 3.48 17.85 4.81 17.65 6.52C17.6 6.94 17.52 7.39 17.42 7.84C16.54 7.62 15.58 7.46 14.57 7.35C13.96 6.52 13.34 5.77 12.7 5.11C14.17 3.75 15.53 3.01 16.47 3.01ZM8.03 14.1C8.24 14.46 8.46 14.81 8.68 15.15C8.04 15.06 7.43 14.94 6.84 14.8C7.01 14.22 7.21 13.63 7.45 13.03C7.62 13.38 7.82 13.74 8.03 14.1ZM6.82 8.81C7.41 8.67 8.03 8.55 8.67 8.46C8.45 8.8 8.23 9.15 8.02 9.52C7.81 9.88 7.62 10.24 7.44 10.6C7.2 9.99 6.99 9.39 6.82 8.81ZM7.96 11.81C8.24 11.21 8.55 10.61 8.89 10.02C9.24 9.42 9.6 8.85 9.97 8.31C10.64 8.25 11.32 8.22 12 8.22C12.68 8.22 13.35 8.25 14.02 8.31C14.39 8.84 14.76 9.41 15.11 10.01C15.45 10.6 15.76 11.19 16.04 11.79C15.76 12.39 15.45 12.99 15.11 13.58C14.76 14.19 14.4 14.76 14.03 15.29C13.36 15.35 12.68 15.38 12 15.38C11.32 15.38 10.65 15.35 9.98 15.29C9.61 14.76 9.24 14.19 8.89 13.59C8.56 13.01 8.25 12.41 7.96 11.81ZM15.97 14.08C16.18 13.72 16.37 13.36 16.55 13C16.79 13.6 17 14.2 17.17 14.78C16.58 14.92 15.96 15.04 15.32 15.14C15.55 14.8 15.77 14.45 15.97 14.08ZM15.97 9.5C15.76 9.15 15.54 8.8 15.32 8.45C15.96 8.54 16.57 8.66 17.16 8.8C16.99 9.38 16.79 9.97 16.55 10.57C16.37 10.22 16.18 9.86 15.97 9.5ZM13.23 7.25C12.83 7.23 12.41 7.22 12 7.22C11.58 7.22 11.16 7.23 10.75 7.25C11.15 6.73 11.57 6.25 11.98 5.82C12.4 6.24 12.82 6.72 13.23 7.25ZM7 3.14C7.13 3.06 7.3 3.02 7.51 3.02C8.44 3.02 9.81 3.76 11.28 5.11C10.65 5.77 10.02 6.52 9.43 7.35C8.41 7.45 7.45 7.62 6.57 7.84C6.47 7.39 6.39 6.96 6.34 6.54C6.13 4.83 6.39 3.5 7 3.14ZM5.87 14.53C5.42 14.39 5 14.24 4.61 14.07C3.02 13.39 2 12.5 2 11.8C2 11.1 3.03 10.2 4.61 9.53C5 9.37 5.42 9.22 5.85 9.08C6.11 9.96 6.44 10.87 6.86 11.81C6.45 12.74 6.12 13.65 5.87 14.53ZM7.53 20.6C7.33 20.6 7.16 20.56 7.02 20.48C6.41 20.13 6.15 18.8 6.35 17.08C6.4 16.66 6.48 16.21 6.58 15.76C7.46 15.98 8.42 16.14 9.43 16.25C10.04 17.08 10.66 17.83 11.3 18.49C9.83 19.85 8.46 20.6 7.53 20.6ZM12.01 17.79C11.59 17.36 11.18 16.88 10.76 16.36C11.16 16.38 11.58 16.39 11.99 16.39C12.41 16.39 12.83 16.38 13.24 16.36C12.84 16.88 12.42 17.36 12.01 17.79ZM17 20.46C16.87 20.54 16.69 20.58 16.48 20.58C15.55 20.58 14.18 19.84 12.71 18.49C13.34 17.83 13.97 17.08 14.56 16.25C15.57 16.14 16.53 15.98 17.41 15.76C17.51 16.21 17.59 16.65 17.64 17.06C17.87 18.77 17.61 20.11 17 20.46ZM19.39 14.07C19 14.24 18.58 14.38 18.15 14.52C17.89 13.64 17.56 12.73 17.14 11.79C17.55 10.86 17.88 9.95 18.14 9.07C18.58 9.21 19.01 9.36 19.4 9.53C20.98 10.21 22 11.1 22 11.8C22 12.5 20.97 13.4 19.39 14.07Z"
                            fill="#61DAFB"
                          ></path>
                          <path
                            d="M12 13.85C13.1321 13.85 14.05 12.9322 14.05 11.8C14.05 10.6678 13.1321 9.75 12 9.75C10.8678 9.75 9.94995 10.6678 9.94995 11.8C9.94995 12.9322 10.8678 13.85 12 13.85Z"
                            fill="#61DAFB"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 8C7.453 8 5 6.58 5 6C5 5.42 7.453 4 12 4C16.547 4 19 5.42 19 6C19 6.58 16.547 8 12 8ZM12 3C7.582 3 4 4.343 4 6V9C4 10.657 7.582 12 12 12C16.418 12 20 10.657 20 9V6C20 4.343 16.418 3 12 3ZM4 15.9277V18.9997C4 20.6567 7.582 21.9997 12 21.9997C16.418 21.9997 20 20.6567 20 18.9997V15.9277C18.424 17.2917 15.202 17.9997 12 17.9997C8.798 17.9997 5.576 17.2917 4 15.9277ZM4 13.9997V10.9277C5.576 12.2917 8.798 12.9997 12 12.9997C15.202 12.9997 18.424 12.2917 20 10.9277V13.9997C20 15.6567 16.418 16.9997 12 16.9997C7.582 16.9997 4 15.6567 4 13.9997Z"
                            fill="#1E96FF"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.827 14.813l-11.64-11.64a1.722 1.722 0 00-2.427 0l-2.413 2.414 3.066 3.066a2.023 2.023 0 012.094.494c.573.573.733 1.4.48 2.106l2.96 2.96c.72-.24 1.546-.093 2.106.48.8.8.8 2.094 0 2.894a2.044 2.044 0 01-3.333-2.227l-2.76-2.76v7.253c.2.094.387.227.547.387.8.8.8 2.093 0 2.893-.8.8-2.094.8-2.894 0-.8-.8-.8-2.093 0-2.893.187-.187.414-.347.667-.44v-7.32a2.075 2.075 0 01-.667-.44c-.6-.6-.746-1.493-.44-2.24l-3.026-3.027-7.974 7.987a1.722 1.722 0 000 2.427l11.64 11.64c.667.666 1.76.666 2.427 0L28.827 17.24a1.722 1.722 0 000-2.427"
                            fill="#FA6E5A"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <svg
                      height="100%"
                      viewBox="0 0 350 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 top-[-168px] h-[168px] desktop:top-[-220px] desktop:hidden desktop:h-[220px]"
                    >
                      <g clipPath="url(#clip0_1189_18546)">
                        <path
                          d="M298.503 180.664V193.956C298.503 200.755 292.994 206.265 286.195 206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M246.614 180.664V193.956C246.614 200.755 241.105 206.265 234.306 206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M201.578 81.9688H200.846C197.887 81.9688 195.489 84.367 195.489 87.3255V130.027C195.489 132.985 197.887 135.383 200.846 135.383H201.578C204.537 135.383 206.935 132.985 206.935 130.027V87.3255C206.935 84.367 204.537 81.9688 201.578 81.9688Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M344.272 81.9688H343.539C340.581 81.9688 338.183 84.367 338.183 87.3255V130.027C338.183 132.985 340.581 135.383 343.539 135.383H344.272C347.23 135.383 349.629 132.985 349.629 130.027V87.3255C349.629 84.367 347.23 81.9688 344.272 81.9688Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M299.266 40H238.221C212.935 40 192.437 60.4982 192.437 85.7841V146.829C192.437 172.115 212.935 192.614 238.221 192.614H299.266C324.552 192.614 345.05 172.115 345.05 146.829V85.7841C345.05 60.4982 324.552 40 299.266 40Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M291.635 158.275H230.59C207.446 158.275 188.621 139.45 188.621 116.307V85.7839C188.621 62.6401 207.446 43.8152 230.59 43.8152H291.635C314.779 43.8152 333.604 62.6401 333.604 85.7839V116.307C333.604 139.45 314.779 158.275 291.635 158.275Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M291.635 47.6306H230.59C209.522 47.6306 192.437 64.7157 192.437 85.784V116.307C192.437 137.375 209.522 154.46 230.59 154.46H291.635C312.704 154.46 329.789 137.375 329.789 116.307V85.784C329.789 64.7157 312.704 47.6306 291.635 47.6306Z"
                          fill="#C2C4DC"
                        ></path>
                        <path
                          d="M291.635 55.2612H230.59C213.733 55.2612 200.067 68.9267 200.067 85.7839V116.307C200.067 133.164 213.733 146.829 230.59 146.829H291.635C308.493 146.829 322.158 133.164 322.158 116.307V85.7839C322.158 68.9267 308.493 55.2612 291.635 55.2612Z"
                          fill="#272A49"
                        ></path>
                        <path
                          d="M245.851 117.832V125.463H268.743V117.832H245.851Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M276.374 110.202H268.743V117.833H276.374V110.202Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M245.851 110.202H238.221V117.833H245.851V110.202Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M226.775 101.808C232.675 101.808 237.458 97.0254 237.458 91.1253C237.458 85.2253 232.675 80.4424 226.775 80.4424C220.875 80.4424 216.092 85.2253 216.092 91.1253C216.092 97.0254 220.875 101.808 226.775 101.808Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M287.82 101.808C293.72 101.808 298.503 97.0254 298.503 91.1253C298.503 85.2253 293.72 80.4424 287.82 80.4424C281.92 80.4424 277.137 85.2253 277.137 91.1253C277.137 97.0254 281.92 101.808 287.82 101.808Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M208.461 171.247C210.99 171.247 213.04 169.198 213.04 166.669C213.04 164.14 210.99 162.091 208.461 162.091C205.933 162.091 203.883 164.14 203.883 166.669C203.883 169.198 205.933 171.247 208.461 171.247Z"
                          fill="#78D76B"
                        ></path>
                        <path
                          d="M228.301 177.352C232.515 177.352 235.932 173.936 235.932 169.721C235.932 165.507 232.515 162.091 228.301 162.091C224.087 162.091 220.67 165.507 220.67 169.721C220.67 173.936 224.087 177.352 228.301 177.352Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M251.193 177.352C255.407 177.352 258.824 173.936 258.824 169.721C258.824 165.507 255.407 162.091 251.193 162.091C246.979 162.091 243.562 165.507 243.562 169.721C243.562 173.936 246.979 177.352 251.193 177.352Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M291.635 47.6306H230.59C209.522 47.6306 192.437 64.7157 192.437 85.784V101.045H200.067V85.784C200.067 68.9278 213.734 55.2613 230.59 55.2613H291.635C308.492 55.2613 322.158 68.9278 322.158 85.784V101.045H329.789V85.784C329.789 64.7157 312.704 47.6306 291.635 47.6306Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M234.306 206.265H217.411"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M286.202 206.265H269.3"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M217.411 194.819V206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M269.3 194.819V206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M150 0H9.99976V10H0V90H9.99976V100H120V110H140V120H170V110H160V100H150V90H160V10H150V0Z"
                        fill="white"
                      ></path>
                      <path
                        d="M59.055 56H35.007V50.672L47.391 40.112C50.223 37.664 51.903 35.648 51.903 32.96C51.903 29.648 49.839 27.92 47.007 27.92C43.983 27.92 41.871 30.128 41.871 33.776V34.304H34.911V33.344C34.911 27.008 39.567 22.112 47.007 22.112C54.687 22.112 58.863 26.384 58.863 32.672C58.863 37.52 56.367 40.544 52.239 44.048L45.087 50.192H59.055V56ZM76.0609 22.112C83.9809 22.112 88.7809 28.352 88.7809 38.432V39.968C88.7809 50.336 83.9809 56.288 76.0609 56.288C68.1409 56.288 63.3409 50.336 63.3409 39.968V38.432C63.3409 28.352 68.1409 22.112 76.0609 22.112ZM70.1089 38.672V39.728C70.1089 40.688 70.1569 41.648 70.2049 42.464L80.7169 30.704C79.7089 28.592 78.1729 27.536 76.0609 27.536C72.0769 27.536 70.1089 31.328 70.1089 38.672ZM82.0129 39.728V38.672C82.0129 37.712 81.9649 36.8 81.9169 35.936L71.4529 47.744C72.4609 49.76 73.9969 50.816 76.0609 50.816C80.0449 50.816 82.0129 47.072 82.0129 39.728ZM101.057 56H94.7685V22.4H102.065L108.641 39.296L114.977 22.4H122.177V56H115.889V34.016L110.273 48.08H106.673L101.057 34.016V56Z"
                        fill="#191B33"
                      ></path>
                      <path
                        d="M50.4551 80H56.9511V78.72H51.8471V68.8H50.4551V80ZM61.4919 80.096C63.3799 80.096 64.7239 78.896 65.0439 77.264H63.7159C63.4439 78.32 62.5479 78.928 61.3959 78.928C59.8439 78.928 58.8679 77.84 58.8199 76.288V76.176H65.1559C65.1719 75.984 65.1879 75.792 65.1879 75.616C65.1239 73.2 63.6199 71.744 61.3159 71.744C59.0119 71.744 57.4439 73.44 57.4439 75.92C57.4439 78.416 59.0439 80.096 61.4919 80.096ZM58.8999 75.088C59.0279 73.76 60.1319 72.896 61.3319 72.896C62.6919 72.896 63.6519 73.68 63.7799 75.088H58.8999ZM66.637 74.288H67.949C68.109 73.456 68.877 72.912 70.029 72.912C71.309 72.912 72.061 73.552 72.061 74.608V75.168H69.661C67.517 75.168 66.381 76.08 66.381 77.712C66.381 79.2 67.597 80.096 69.389 80.096C70.797 80.096 71.613 79.472 72.125 78.736C72.141 79.536 72.509 80 73.597 80H74.317V78.8H73.901C73.533 78.8 73.373 78.688 73.373 78.256V74.688C73.373 72.784 72.173 71.744 70.093 71.744C68.125 71.744 66.829 72.688 66.637 74.288ZM67.709 77.632C67.709 76.704 68.365 76.272 69.533 76.272H72.061V76.672C72.061 78.032 71.117 78.976 69.485 78.976C68.397 78.976 67.709 78.432 67.709 77.632ZM75.3256 71.84V80H76.6376V75.84C76.6376 74.544 77.1016 73.12 78.8136 73.12H79.4696V71.84H79.1016C77.6456 71.84 77.0216 72.448 76.6376 73.072L76.4616 71.84H75.3256ZM80.6069 71.84V80H81.9189V75.92C81.9189 74.08 82.8469 72.944 84.3829 72.944C85.8069 72.944 86.5909 73.84 86.5909 75.536V80H87.9029V75.456C87.9029 72.752 86.4469 71.744 84.6069 71.744C83.2309 71.744 82.3989 72.32 81.9189 72.944L81.7429 71.84H80.6069ZM93.2419 80.096C95.1299 80.096 96.4739 78.896 96.7939 77.264H95.4659C95.1939 78.32 94.2979 78.928 93.1459 78.928C91.5939 78.928 90.6179 77.84 90.5699 76.288V76.176H96.9059C96.9219 75.984 96.9379 75.792 96.9379 75.616C96.8739 73.2 95.3699 71.744 93.0659 71.744C90.7619 71.744 89.1939 73.44 89.1939 75.92C89.1939 78.416 90.7939 80.096 93.2419 80.096ZM90.6499 75.088C90.7779 73.76 91.8819 72.896 93.0819 72.896C94.4419 72.896 95.4019 73.68 95.5299 75.088H90.6499ZM98.435 71.84V80H99.747V75.84C99.747 74.544 100.211 73.12 101.923 73.12H102.579V71.84H102.211C100.755 71.84 100.131 72.448 99.747 73.072L99.571 71.84H98.435ZM104.552 77.312H103.208C103.24 79.104 104.696 80.096 106.808 80.096C108.616 80.096 110.072 79.152 110.072 77.632C110.072 75.824 108.584 75.472 106.728 75.248C105.544 75.104 104.68 74.992 104.68 74.096C104.68 73.344 105.448 72.864 106.584 72.864C107.704 72.864 108.472 73.488 108.568 74.32H109.912C109.784 72.624 108.44 71.76 106.584 71.744C104.744 71.728 103.384 72.704 103.384 74.192C103.384 75.888 104.84 76.256 106.664 76.48C107.88 76.624 108.776 76.704 108.776 77.728C108.776 78.48 107.96 78.976 106.808 78.976C105.448 78.976 104.6 78.272 104.552 77.312Z"
                        fill="#191B33"
                      ></path>
                      <defs>
                        <clipPath id="clip0_1189_18546">
                          <rect
                            width="161.007"
                            height="180"
                            fill="white"
                            transform="translate(188.621 40)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative flex items-end">
                    <a
                      title="Start Learning"
                      className="group relative flex h-full w-full flex-col justify-between rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-text-primary-dark hover:bg-marketing-surface-darkBlue tablet:p-10"
                    >
                      <div className="grid h-8 grid-cols-2 items-center justify-between">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.3333 23.3333L16 23L12.6667 23.3333L12 26.6667L16 27L20 26.6667L19.3333 23.3333Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M26.6641 3.33301H5.33073C3.85797 3.33301 2.66406 4.52692 2.66406 5.99967V20.6663C2.66406 22.1391 3.85797 23.333 5.33073 23.333H26.6641C28.1368 23.333 29.3307 22.1391 29.3307 20.6663V5.99967C29.3307 4.52692 28.1368 3.33301 26.6641 3.33301Z"
                            fill="#AD88EF"
                          ></path>
                          <path
                            d="M26.3281 5H5.66146C4.92508 5 4.32812 5.59695 4.32812 6.33333V20.3333C4.32812 21.0697 4.92508 21.6667 5.66146 21.6667H26.3281C27.0645 21.6667 27.6615 21.0697 27.6615 20.3333V6.33333C27.6615 5.59695 27.0645 5 26.3281 5Z"
                            fill="#B99AF4"
                          ></path>
                          <path
                            d="M21.3333 26.667H10.6667C10.2985 26.667 10 26.9655 10 27.3337V28.0003C10 28.3685 10.2985 28.667 10.6667 28.667H21.3333C21.7015 28.667 22 28.3685 22 28.0003V27.3337C22 26.9655 21.7015 26.667 21.3333 26.667Z"
                            fill="#AD88EF"
                          ></path>
                          <path
                            d="M27.6615 6.33333C27.6615 5.59695 27.0645 5 26.3281 5H9.32812V21.6667H26.3281C27.0645 21.6667 27.6615 21.0697 27.6615 20.3333V6.33333Z"
                            fill="#333661"
                          ></path>
                          <path
                            d="M18 7.33301H12V10.6663H18V7.33301Z"
                            fill="#F4D055"
                          ></path>
                          <path
                            d="M18 12H12V15.3333H18V12Z"
                            fill="#DD93B0"
                          ></path>
                          <path
                            d="M18 16.666H12V19.9993H18V16.666Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M25.3359 7.33301H19.3359V10.6663H25.3359V7.33301Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M25.3359 12H19.3359V15.3333H25.3359V12Z"
                            fill="#F4D055"
                          ></path>
                          <path
                            d="M25.3359 16.666H19.3359V19.9993H25.3359V16.666Z"
                            fill="#DD93B0"
                          ></path>
                        </svg>
                        <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] max-h-8 w-fit justify-self-end whitespace-nowrap rounded-xl bg-[#7D4BDE] px-4 py-1 uppercase">
                          Career Path
                        </p>
                      </div>
                      <div className="mt-10 flex grow flex-col space-y-4 tablet:space-y-6">
                        <h3 className="font-aeonikFono text-[32px] font-bold leading-[40px] tablet:text-[40px] tablet:leading-[48px]">
                          Front-end Development
                        </h3>
                        <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                          Dive into front-end development using HTML, CSS, and
                          JavaScript. Learn to craft web pages and use React to
                          develop engaging user-focused web applications.
                        </p>
                      </div>
                      <div className="col-span-2 mt-10 flex h-6 max-w-[80%] flex-wrap items-start space-x-1 tablet:mt-11 tablet:h-8 tablet:max-w-none tablet:space-x-2 desktop:mt-[52px]">
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 2L4.64 20.01L11.99 22L19.37 20L21.01 2H3ZM6.34 5.68H17.63L17.42 7.89H8.81L9.02 10.15H17.22L16.6 16.93L12 18.18L7.38 16.93L7.06 13.46H9.32L9.48 15.22L12 15.88L14.51 15.22L14.77 12.35H6.96L6.34 5.68Z"
                            fill="#FA965A"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.288 5.67089H17.6L17.376 7.85189L11.993 10.1239L11.98 10.1299H17.185L16.591 16.8919L12.002 18.2149L7.388 16.8669L7.09 13.4619H9.372L9.52 15.2259L11.976 15.8379L14.532 15.1279L14.705 12.2859L6.941 12.2619V12.2579L6.934 12.2619L6.76 10.1299L11.993 7.97789L12.299 7.85189H6.561L6.288 5.67089ZM3 1.99989L4.687 20.0559L12 21.9999L19.312 20.0559L21 1.99989H3Z"
                            fill="#1E96FF"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 21H21V3H3V21ZM12.796 17.039C12.796 18.791 11.769 19.589 10.271 19.589C8.917 19.589 8.132 18.888 7.732 18.042L9.11 17.209C9.376 17.68 9.618 18.078 10.197 18.078C10.754 18.078 11.104 17.861 11.104 17.016V11.264H12.796V17.039ZM16.795 19.589C15.225 19.589 14.21 18.84 13.714 17.861L15.092 17.063C15.454 17.655 15.926 18.091 16.759 18.091C17.46 18.091 17.907 17.74 17.907 17.257C17.907 16.677 17.447 16.472 16.675 16.133L16.252 15.952C15.031 15.433 14.222 14.78 14.222 13.402C14.222 12.134 15.188 11.167 16.698 11.167C17.774 11.167 18.547 11.542 19.104 12.521L17.786 13.366C17.496 12.847 17.182 12.642 16.698 12.642C16.203 12.642 15.889 12.955 15.889 13.366C15.889 13.874 16.203 14.079 16.928 14.394L17.351 14.574C18.789 15.19 19.599 15.819 19.599 17.232C19.599 18.755 18.402 19.589 16.795 19.589Z"
                            fill="#FFDA1B"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23 11.8C23 10.34 21.17 8.96 18.38 8.1C19.03 5.25 18.74 2.98 17.47 2.25C17.18 2.08 16.84 2 16.47 2C15.24 2 13.63 2.87 11.99 4.4C10.36 2.88 8.74 2.02 7.51 2.02C7.13 2.02 6.79 2.1 6.5 2.27C5.24 3 4.96 5.27 5.61 8.11C2.82 8.97 1 10.35 1 11.8C1 13.26 2.83 14.64 5.62 15.5C4.97 18.35 5.26 20.62 6.53 21.35C6.82 21.52 7.16 21.6 7.54 21.6C8.77 21.6 10.39 20.72 12.02 19.2C13.65 20.72 15.27 21.59 16.5 21.59C16.88 21.59 17.22 21.51 17.51 21.34C18.77 20.61 19.05 18.35 18.4 15.51C21.18 14.63 23 13.25 23 11.8ZM16.47 3.01C16.68 3.01 16.84 3.05 16.98 3.13C17.59 3.48 17.85 4.81 17.65 6.52C17.6 6.94 17.52 7.39 17.42 7.84C16.54 7.62 15.58 7.46 14.57 7.35C13.96 6.52 13.34 5.77 12.7 5.11C14.17 3.75 15.53 3.01 16.47 3.01ZM8.03 14.1C8.24 14.46 8.46 14.81 8.68 15.15C8.04 15.06 7.43 14.94 6.84 14.8C7.01 14.22 7.21 13.63 7.45 13.03C7.62 13.38 7.82 13.74 8.03 14.1ZM6.82 8.81C7.41 8.67 8.03 8.55 8.67 8.46C8.45 8.8 8.23 9.15 8.02 9.52C7.81 9.88 7.62 10.24 7.44 10.6C7.2 9.99 6.99 9.39 6.82 8.81ZM7.96 11.81C8.24 11.21 8.55 10.61 8.89 10.02C9.24 9.42 9.6 8.85 9.97 8.31C10.64 8.25 11.32 8.22 12 8.22C12.68 8.22 13.35 8.25 14.02 8.31C14.39 8.84 14.76 9.41 15.11 10.01C15.45 10.6 15.76 11.19 16.04 11.79C15.76 12.39 15.45 12.99 15.11 13.58C14.76 14.19 14.4 14.76 14.03 15.29C13.36 15.35 12.68 15.38 12 15.38C11.32 15.38 10.65 15.35 9.98 15.29C9.61 14.76 9.24 14.19 8.89 13.59C8.56 13.01 8.25 12.41 7.96 11.81ZM15.97 14.08C16.18 13.72 16.37 13.36 16.55 13C16.79 13.6 17 14.2 17.17 14.78C16.58 14.92 15.96 15.04 15.32 15.14C15.55 14.8 15.77 14.45 15.97 14.08ZM15.97 9.5C15.76 9.15 15.54 8.8 15.32 8.45C15.96 8.54 16.57 8.66 17.16 8.8C16.99 9.38 16.79 9.97 16.55 10.57C16.37 10.22 16.18 9.86 15.97 9.5ZM13.23 7.25C12.83 7.23 12.41 7.22 12 7.22C11.58 7.22 11.16 7.23 10.75 7.25C11.15 6.73 11.57 6.25 11.98 5.82C12.4 6.24 12.82 6.72 13.23 7.25ZM7 3.14C7.13 3.06 7.3 3.02 7.51 3.02C8.44 3.02 9.81 3.76 11.28 5.11C10.65 5.77 10.02 6.52 9.43 7.35C8.41 7.45 7.45 7.62 6.57 7.84C6.47 7.39 6.39 6.96 6.34 6.54C6.13 4.83 6.39 3.5 7 3.14ZM5.87 14.53C5.42 14.39 5 14.24 4.61 14.07C3.02 13.39 2 12.5 2 11.8C2 11.1 3.03 10.2 4.61 9.53C5 9.37 5.42 9.22 5.85 9.08C6.11 9.96 6.44 10.87 6.86 11.81C6.45 12.74 6.12 13.65 5.87 14.53ZM7.53 20.6C7.33 20.6 7.16 20.56 7.02 20.48C6.41 20.13 6.15 18.8 6.35 17.08C6.4 16.66 6.48 16.21 6.58 15.76C7.46 15.98 8.42 16.14 9.43 16.25C10.04 17.08 10.66 17.83 11.3 18.49C9.83 19.85 8.46 20.6 7.53 20.6ZM12.01 17.79C11.59 17.36 11.18 16.88 10.76 16.36C11.16 16.38 11.58 16.39 11.99 16.39C12.41 16.39 12.83 16.38 13.24 16.36C12.84 16.88 12.42 17.36 12.01 17.79ZM17 20.46C16.87 20.54 16.69 20.58 16.48 20.58C15.55 20.58 14.18 19.84 12.71 18.49C13.34 17.83 13.97 17.08 14.56 16.25C15.57 16.14 16.53 15.98 17.41 15.76C17.51 16.21 17.59 16.65 17.64 17.06C17.87 18.77 17.61 20.11 17 20.46ZM19.39 14.07C19 14.24 18.58 14.38 18.15 14.52C17.89 13.64 17.56 12.73 17.14 11.79C17.55 10.86 17.88 9.95 18.14 9.07C18.58 9.21 19.01 9.36 19.4 9.53C20.98 10.21 22 11.1 22 11.8C22 12.5 20.97 13.4 19.39 14.07Z"
                            fill="#61DAFB"
                          ></path>
                          <path
                            d="M12 13.85C13.1321 13.85 14.05 12.9322 14.05 11.8C14.05 10.6678 13.1321 9.75 12 9.75C10.8678 9.75 9.94995 10.6678 9.94995 11.8C9.94995 12.9322 10.8678 13.85 12 13.85Z"
                            fill="#61DAFB"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <svg
                      height="100%"
                      viewBox="0 0 350 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 top-[-168px] hidden h-[168px] tabletLg:hidden desktop:top-[-220px] desktop:h-[220px]"
                    >
                      <g clipPath="url(#clip0_1189_18546)">
                        <path
                          d="M298.503 180.664V193.956C298.503 200.755 292.994 206.265 286.195 206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M246.614 180.664V193.956C246.614 200.755 241.105 206.265 234.306 206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M201.578 81.9688H200.846C197.887 81.9688 195.489 84.367 195.489 87.3255V130.027C195.489 132.985 197.887 135.383 200.846 135.383H201.578C204.537 135.383 206.935 132.985 206.935 130.027V87.3255C206.935 84.367 204.537 81.9688 201.578 81.9688Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M344.272 81.9688H343.539C340.581 81.9688 338.183 84.367 338.183 87.3255V130.027C338.183 132.985 340.581 135.383 343.539 135.383H344.272C347.23 135.383 349.629 132.985 349.629 130.027V87.3255C349.629 84.367 347.23 81.9688 344.272 81.9688Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M299.266 40H238.221C212.935 40 192.437 60.4982 192.437 85.7841V146.829C192.437 172.115 212.935 192.614 238.221 192.614H299.266C324.552 192.614 345.05 172.115 345.05 146.829V85.7841C345.05 60.4982 324.552 40 299.266 40Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M291.635 158.275H230.59C207.446 158.275 188.621 139.45 188.621 116.307V85.7839C188.621 62.6401 207.446 43.8152 230.59 43.8152H291.635C314.779 43.8152 333.604 62.6401 333.604 85.7839V116.307C333.604 139.45 314.779 158.275 291.635 158.275Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M291.635 47.6306H230.59C209.522 47.6306 192.437 64.7157 192.437 85.784V116.307C192.437 137.375 209.522 154.46 230.59 154.46H291.635C312.704 154.46 329.789 137.375 329.789 116.307V85.784C329.789 64.7157 312.704 47.6306 291.635 47.6306Z"
                          fill="#C2C4DC"
                        ></path>
                        <path
                          d="M291.635 55.2612H230.59C213.733 55.2612 200.067 68.9267 200.067 85.7839V116.307C200.067 133.164 213.733 146.829 230.59 146.829H291.635C308.493 146.829 322.158 133.164 322.158 116.307V85.7839C322.158 68.9267 308.493 55.2612 291.635 55.2612Z"
                          fill="#272A49"
                        ></path>
                        <path
                          d="M245.851 117.832V125.463H268.743V117.832H245.851Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M276.374 110.202H268.743V117.833H276.374V110.202Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M245.851 110.202H238.221V117.833H245.851V110.202Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M226.775 101.808C232.675 101.808 237.458 97.0254 237.458 91.1253C237.458 85.2253 232.675 80.4424 226.775 80.4424C220.875 80.4424 216.092 85.2253 216.092 91.1253C216.092 97.0254 220.875 101.808 226.775 101.808Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M287.82 101.808C293.72 101.808 298.503 97.0254 298.503 91.1253C298.503 85.2253 293.72 80.4424 287.82 80.4424C281.92 80.4424 277.137 85.2253 277.137 91.1253C277.137 97.0254 281.92 101.808 287.82 101.808Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M208.461 171.247C210.99 171.247 213.04 169.198 213.04 166.669C213.04 164.14 210.99 162.091 208.461 162.091C205.933 162.091 203.883 164.14 203.883 166.669C203.883 169.198 205.933 171.247 208.461 171.247Z"
                          fill="#78D76B"
                        ></path>
                        <path
                          d="M228.301 177.352C232.515 177.352 235.932 173.936 235.932 169.721C235.932 165.507 232.515 162.091 228.301 162.091C224.087 162.091 220.67 165.507 220.67 169.721C220.67 173.936 224.087 177.352 228.301 177.352Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M251.193 177.352C255.407 177.352 258.824 173.936 258.824 169.721C258.824 165.507 255.407 162.091 251.193 162.091C246.979 162.091 243.562 165.507 243.562 169.721C243.562 173.936 246.979 177.352 251.193 177.352Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M291.635 47.6306H230.59C209.522 47.6306 192.437 64.7157 192.437 85.784V101.045H200.067V85.784C200.067 68.9278 213.734 55.2613 230.59 55.2613H291.635C308.492 55.2613 322.158 68.9278 322.158 85.784V101.045H329.789V85.784C329.789 64.7157 312.704 47.6306 291.635 47.6306Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M234.306 206.265H217.411"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M286.202 206.265H269.3"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M217.411 194.819V206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M269.3 194.819V206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M150 0H9.99976V10H0V90H9.99976V100H120V110H140V120H170V110H160V100H150V90H160V10H150V0Z"
                        fill="white"
                      ></path>
                      <path
                        d="M59.055 56H35.007V50.672L47.391 40.112C50.223 37.664 51.903 35.648 51.903 32.96C51.903 29.648 49.839 27.92 47.007 27.92C43.983 27.92 41.871 30.128 41.871 33.776V34.304H34.911V33.344C34.911 27.008 39.567 22.112 47.007 22.112C54.687 22.112 58.863 26.384 58.863 32.672C58.863 37.52 56.367 40.544 52.239 44.048L45.087 50.192H59.055V56ZM76.0609 22.112C83.9809 22.112 88.7809 28.352 88.7809 38.432V39.968C88.7809 50.336 83.9809 56.288 76.0609 56.288C68.1409 56.288 63.3409 50.336 63.3409 39.968V38.432C63.3409 28.352 68.1409 22.112 76.0609 22.112ZM70.1089 38.672V39.728C70.1089 40.688 70.1569 41.648 70.2049 42.464L80.7169 30.704C79.7089 28.592 78.1729 27.536 76.0609 27.536C72.0769 27.536 70.1089 31.328 70.1089 38.672ZM82.0129 39.728V38.672C82.0129 37.712 81.9649 36.8 81.9169 35.936L71.4529 47.744C72.4609 49.76 73.9969 50.816 76.0609 50.816C80.0449 50.816 82.0129 47.072 82.0129 39.728ZM101.057 56H94.7685V22.4H102.065L108.641 39.296L114.977 22.4H122.177V56H115.889V34.016L110.273 48.08H106.673L101.057 34.016V56Z"
                        fill="#191B33"
                      ></path>
                      <path
                        d="M50.4551 80H56.9511V78.72H51.8471V68.8H50.4551V80ZM61.4919 80.096C63.3799 80.096 64.7239 78.896 65.0439 77.264H63.7159C63.4439 78.32 62.5479 78.928 61.3959 78.928C59.8439 78.928 58.8679 77.84 58.8199 76.288V76.176H65.1559C65.1719 75.984 65.1879 75.792 65.1879 75.616C65.1239 73.2 63.6199 71.744 61.3159 71.744C59.0119 71.744 57.4439 73.44 57.4439 75.92C57.4439 78.416 59.0439 80.096 61.4919 80.096ZM58.8999 75.088C59.0279 73.76 60.1319 72.896 61.3319 72.896C62.6919 72.896 63.6519 73.68 63.7799 75.088H58.8999ZM66.637 74.288H67.949C68.109 73.456 68.877 72.912 70.029 72.912C71.309 72.912 72.061 73.552 72.061 74.608V75.168H69.661C67.517 75.168 66.381 76.08 66.381 77.712C66.381 79.2 67.597 80.096 69.389 80.096C70.797 80.096 71.613 79.472 72.125 78.736C72.141 79.536 72.509 80 73.597 80H74.317V78.8H73.901C73.533 78.8 73.373 78.688 73.373 78.256V74.688C73.373 72.784 72.173 71.744 70.093 71.744C68.125 71.744 66.829 72.688 66.637 74.288ZM67.709 77.632C67.709 76.704 68.365 76.272 69.533 76.272H72.061V76.672C72.061 78.032 71.117 78.976 69.485 78.976C68.397 78.976 67.709 78.432 67.709 77.632ZM75.3256 71.84V80H76.6376V75.84C76.6376 74.544 77.1016 73.12 78.8136 73.12H79.4696V71.84H79.1016C77.6456 71.84 77.0216 72.448 76.6376 73.072L76.4616 71.84H75.3256ZM80.6069 71.84V80H81.9189V75.92C81.9189 74.08 82.8469 72.944 84.3829 72.944C85.8069 72.944 86.5909 73.84 86.5909 75.536V80H87.9029V75.456C87.9029 72.752 86.4469 71.744 84.6069 71.744C83.2309 71.744 82.3989 72.32 81.9189 72.944L81.7429 71.84H80.6069ZM93.2419 80.096C95.1299 80.096 96.4739 78.896 96.7939 77.264H95.4659C95.1939 78.32 94.2979 78.928 93.1459 78.928C91.5939 78.928 90.6179 77.84 90.5699 76.288V76.176H96.9059C96.9219 75.984 96.9379 75.792 96.9379 75.616C96.8739 73.2 95.3699 71.744 93.0659 71.744C90.7619 71.744 89.1939 73.44 89.1939 75.92C89.1939 78.416 90.7939 80.096 93.2419 80.096ZM90.6499 75.088C90.7779 73.76 91.8819 72.896 93.0819 72.896C94.4419 72.896 95.4019 73.68 95.5299 75.088H90.6499ZM98.435 71.84V80H99.747V75.84C99.747 74.544 100.211 73.12 101.923 73.12H102.579V71.84H102.211C100.755 71.84 100.131 72.448 99.747 73.072L99.571 71.84H98.435ZM104.552 77.312H103.208C103.24 79.104 104.696 80.096 106.808 80.096C108.616 80.096 110.072 79.152 110.072 77.632C110.072 75.824 108.584 75.472 106.728 75.248C105.544 75.104 104.68 74.992 104.68 74.096C104.68 73.344 105.448 72.864 106.584 72.864C107.704 72.864 108.472 73.488 108.568 74.32H109.912C109.784 72.624 108.44 71.76 106.584 71.744C104.744 71.728 103.384 72.704 103.384 74.192C103.384 75.888 104.84 76.256 106.664 76.48C107.88 76.624 108.776 76.704 108.776 77.728C108.776 78.48 107.96 78.976 106.808 78.976C105.448 78.976 104.6 78.272 104.552 77.312Z"
                        fill="#191B33"
                      ></path>
                      <defs>
                        <clipPath id="clip0_1189_18546">
                          <rect
                            width="161.007"
                            height="180"
                            fill="white"
                            transform="translate(188.621 40)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative flex items-end">
                    <a
                      title="Start Learning"
                      className="group relative flex h-full w-full flex-col justify-between rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-text-primary-dark hover:bg-marketing-surface-darkBlue tablet:p-10"
                    >
                      <div className="grid h-8 grid-cols-2 items-center justify-between">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.3333 23.3333L16 23L12.6667 23.3333L12 26.6667L16 27L20 26.6667L19.3333 23.3333Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M26.6641 3.33301H5.33073C3.85797 3.33301 2.66406 4.52692 2.66406 5.99967V20.6663C2.66406 22.1391 3.85797 23.333 5.33073 23.333H26.6641C28.1368 23.333 29.3307 22.1391 29.3307 20.6663V5.99967C29.3307 4.52692 28.1368 3.33301 26.6641 3.33301Z"
                            fill="#AD88EF"
                          ></path>
                          <path
                            d="M26.3281 5H5.66146C4.92508 5 4.32812 5.59695 4.32812 6.33333V20.3333C4.32812 21.0697 4.92508 21.6667 5.66146 21.6667H26.3281C27.0645 21.6667 27.6615 21.0697 27.6615 20.3333V6.33333C27.6615 5.59695 27.0645 5 26.3281 5Z"
                            fill="#B99AF4"
                          ></path>
                          <path
                            d="M21.3333 26.667H10.6667C10.2985 26.667 10 26.9655 10 27.3337V28.0003C10 28.3685 10.2985 28.667 10.6667 28.667H21.3333C21.7015 28.667 22 28.3685 22 28.0003V27.3337C22 26.9655 21.7015 26.667 21.3333 26.667Z"
                            fill="#AD88EF"
                          ></path>
                          <path
                            d="M27.6615 6.33333C27.6615 5.59695 27.0645 5 26.3281 5H9.32812V21.6667H26.3281C27.0645 21.6667 27.6615 21.0697 27.6615 20.3333V6.33333Z"
                            fill="#333661"
                          ></path>
                          <path
                            d="M18 7.33301H12V10.6663H18V7.33301Z"
                            fill="#F4D055"
                          ></path>
                          <path
                            d="M18 12H12V15.3333H18V12Z"
                            fill="#DD93B0"
                          ></path>
                          <path
                            d="M18 16.666H12V19.9993H18V16.666Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M25.3359 7.33301H19.3359V10.6663H25.3359V7.33301Z"
                            fill="#885BDE"
                          ></path>
                          <path
                            d="M25.3359 12H19.3359V15.3333H25.3359V12Z"
                            fill="#F4D055"
                          ></path>
                          <path
                            d="M25.3359 16.666H19.3359V19.9993H25.3359V16.666Z"
                            fill="#DD93B0"
                          ></path>
                        </svg>
                        <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] max-h-8 w-fit justify-self-end whitespace-nowrap rounded-xl bg-[#7D4BDE] px-4 py-1 uppercase">
                          Career Path
                        </p>
                      </div>
                      <div className="mt-10 flex grow flex-col space-y-4 tablet:space-y-6">
                        <h3 className="font-aeonikFono text-[32px] font-bold leading-[40px] tablet:text-[40px] tablet:leading-[48px]">
                          Python Development
                        </h3>
                        <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                          Learn Python to quickly develop anything from web
                          applications to artificial intelligence
                        </p>
                      </div>
                      <div className="col-span-2 mt-10 flex h-6 max-w-[80%] flex-wrap items-start space-x-1 tablet:mt-11 tablet:h-8 tablet:max-w-none tablet:space-x-2 desktop:mt-[52px]">
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 2L4.64 20.01L11.99 22L19.37 20L21.01 2H3ZM6.34 5.68H17.63L17.42 7.89H8.81L9.02 10.15H17.22L16.6 16.93L12 18.18L7.38 16.93L7.06 13.46H9.32L9.48 15.22L12 15.88L14.51 15.22L14.77 12.35H6.96L6.34 5.68Z"
                            fill="#FA965A"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.288 5.67089H17.6L17.376 7.85189L11.993 10.1239L11.98 10.1299H17.185L16.591 16.8919L12.002 18.2149L7.388 16.8669L7.09 13.4619H9.372L9.52 15.2259L11.976 15.8379L14.532 15.1279L14.705 12.2859L6.941 12.2619V12.2579L6.934 12.2619L6.76 10.1299L11.993 7.97789L12.299 7.85189H6.561L6.288 5.67089ZM3 1.99989L4.687 20.0559L12 21.9999L19.312 20.0559L21 1.99989H3Z"
                            fill="#1E96FF"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 21H21V3H3V21ZM12.796 17.039C12.796 18.791 11.769 19.589 10.271 19.589C8.917 19.589 8.132 18.888 7.732 18.042L9.11 17.209C9.376 17.68 9.618 18.078 10.197 18.078C10.754 18.078 11.104 17.861 11.104 17.016V11.264H12.796V17.039ZM16.795 19.589C15.225 19.589 14.21 18.84 13.714 17.861L15.092 17.063C15.454 17.655 15.926 18.091 16.759 18.091C17.46 18.091 17.907 17.74 17.907 17.257C17.907 16.677 17.447 16.472 16.675 16.133L16.252 15.952C15.031 15.433 14.222 14.78 14.222 13.402C14.222 12.134 15.188 11.167 16.698 11.167C17.774 11.167 18.547 11.542 19.104 12.521L17.786 13.366C17.496 12.847 17.182 12.642 16.698 12.642C16.203 12.642 15.889 12.955 15.889 13.366C15.889 13.874 16.203 14.079 16.928 14.394L17.351 14.574C18.789 15.19 19.599 15.819 19.599 17.232C19.599 18.755 18.402 19.589 16.795 19.589Z"
                            fill="#FFDA1B"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23 11.8C23 10.34 21.17 8.96 18.38 8.1C19.03 5.25 18.74 2.98 17.47 2.25C17.18 2.08 16.84 2 16.47 2C15.24 2 13.63 2.87 11.99 4.4C10.36 2.88 8.74 2.02 7.51 2.02C7.13 2.02 6.79 2.1 6.5 2.27C5.24 3 4.96 5.27 5.61 8.11C2.82 8.97 1 10.35 1 11.8C1 13.26 2.83 14.64 5.62 15.5C4.97 18.35 5.26 20.62 6.53 21.35C6.82 21.52 7.16 21.6 7.54 21.6C8.77 21.6 10.39 20.72 12.02 19.2C13.65 20.72 15.27 21.59 16.5 21.59C16.88 21.59 17.22 21.51 17.51 21.34C18.77 20.61 19.05 18.35 18.4 15.51C21.18 14.63 23 13.25 23 11.8ZM16.47 3.01C16.68 3.01 16.84 3.05 16.98 3.13C17.59 3.48 17.85 4.81 17.65 6.52C17.6 6.94 17.52 7.39 17.42 7.84C16.54 7.62 15.58 7.46 14.57 7.35C13.96 6.52 13.34 5.77 12.7 5.11C14.17 3.75 15.53 3.01 16.47 3.01ZM8.03 14.1C8.24 14.46 8.46 14.81 8.68 15.15C8.04 15.06 7.43 14.94 6.84 14.8C7.01 14.22 7.21 13.63 7.45 13.03C7.62 13.38 7.82 13.74 8.03 14.1ZM6.82 8.81C7.41 8.67 8.03 8.55 8.67 8.46C8.45 8.8 8.23 9.15 8.02 9.52C7.81 9.88 7.62 10.24 7.44 10.6C7.2 9.99 6.99 9.39 6.82 8.81ZM7.96 11.81C8.24 11.21 8.55 10.61 8.89 10.02C9.24 9.42 9.6 8.85 9.97 8.31C10.64 8.25 11.32 8.22 12 8.22C12.68 8.22 13.35 8.25 14.02 8.31C14.39 8.84 14.76 9.41 15.11 10.01C15.45 10.6 15.76 11.19 16.04 11.79C15.76 12.39 15.45 12.99 15.11 13.58C14.76 14.19 14.4 14.76 14.03 15.29C13.36 15.35 12.68 15.38 12 15.38C11.32 15.38 10.65 15.35 9.98 15.29C9.61 14.76 9.24 14.19 8.89 13.59C8.56 13.01 8.25 12.41 7.96 11.81ZM15.97 14.08C16.18 13.72 16.37 13.36 16.55 13C16.79 13.6 17 14.2 17.17 14.78C16.58 14.92 15.96 15.04 15.32 15.14C15.55 14.8 15.77 14.45 15.97 14.08ZM15.97 9.5C15.76 9.15 15.54 8.8 15.32 8.45C15.96 8.54 16.57 8.66 17.16 8.8C16.99 9.38 16.79 9.97 16.55 10.57C16.37 10.22 16.18 9.86 15.97 9.5ZM13.23 7.25C12.83 7.23 12.41 7.22 12 7.22C11.58 7.22 11.16 7.23 10.75 7.25C11.15 6.73 11.57 6.25 11.98 5.82C12.4 6.24 12.82 6.72 13.23 7.25ZM7 3.14C7.13 3.06 7.3 3.02 7.51 3.02C8.44 3.02 9.81 3.76 11.28 5.11C10.65 5.77 10.02 6.52 9.43 7.35C8.41 7.45 7.45 7.62 6.57 7.84C6.47 7.39 6.39 6.96 6.34 6.54C6.13 4.83 6.39 3.5 7 3.14ZM5.87 14.53C5.42 14.39 5 14.24 4.61 14.07C3.02 13.39 2 12.5 2 11.8C2 11.1 3.03 10.2 4.61 9.53C5 9.37 5.42 9.22 5.85 9.08C6.11 9.96 6.44 10.87 6.86 11.81C6.45 12.74 6.12 13.65 5.87 14.53ZM7.53 20.6C7.33 20.6 7.16 20.56 7.02 20.48C6.41 20.13 6.15 18.8 6.35 17.08C6.4 16.66 6.48 16.21 6.58 15.76C7.46 15.98 8.42 16.14 9.43 16.25C10.04 17.08 10.66 17.83 11.3 18.49C9.83 19.85 8.46 20.6 7.53 20.6ZM12.01 17.79C11.59 17.36 11.18 16.88 10.76 16.36C11.16 16.38 11.58 16.39 11.99 16.39C12.41 16.39 12.83 16.38 13.24 16.36C12.84 16.88 12.42 17.36 12.01 17.79ZM17 20.46C16.87 20.54 16.69 20.58 16.48 20.58C15.55 20.58 14.18 19.84 12.71 18.49C13.34 17.83 13.97 17.08 14.56 16.25C15.57 16.14 16.53 15.98 17.41 15.76C17.51 16.21 17.59 16.65 17.64 17.06C17.87 18.77 17.61 20.11 17 20.46ZM19.39 14.07C19 14.24 18.58 14.38 18.15 14.52C17.89 13.64 17.56 12.73 17.14 11.79C17.55 10.86 17.88 9.95 18.14 9.07C18.58 9.21 19.01 9.36 19.4 9.53C20.98 10.21 22 11.1 22 11.8C22 12.5 20.97 13.4 19.39 14.07Z"
                            fill="#61DAFB"
                          ></path>
                          <path
                            d="M12 13.85C13.1321 13.85 14.05 12.9322 14.05 11.8C14.05 10.6678 13.1321 9.75 12 9.75C10.8678 9.75 9.94995 10.6678 9.94995 11.8C9.94995 12.9322 10.8678 13.85 12 13.85Z"
                            fill="#61DAFB"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 8C7.453 8 5 6.58 5 6C5 5.42 7.453 4 12 4C16.547 4 19 5.42 19 6C19 6.58 16.547 8 12 8ZM12 3C7.582 3 4 4.343 4 6V9C4 10.657 7.582 12 12 12C16.418 12 20 10.657 20 9V6C20 4.343 16.418 3 12 3ZM4 15.9277V18.9997C4 20.6567 7.582 21.9997 12 21.9997C16.418 21.9997 20 20.6567 20 18.9997V15.9277C18.424 17.2917 15.202 17.9997 12 17.9997C8.798 17.9997 5.576 17.2917 4 15.9277ZM4 13.9997V10.9277C5.576 12.2917 8.798 12.9997 12 12.9997C15.202 12.9997 18.424 12.2917 20 10.9277V13.9997C20 15.6567 16.418 16.9997 12 16.9997C7.582 16.9997 4 15.6567 4 13.9997Z"
                            fill="#1E96FF"
                          ></path>
                        </svg>
                        <svg
                          height="100%"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.827 14.813l-11.64-11.64a1.722 1.722 0 00-2.427 0l-2.413 2.414 3.066 3.066a2.023 2.023 0 012.094.494c.573.573.733 1.4.48 2.106l2.96 2.96c.72-.24 1.546-.093 2.106.48.8.8.8 2.094 0 2.894a2.044 2.044 0 01-3.333-2.227l-2.76-2.76v7.253c.2.094.387.227.547.387.8.8.8 2.093 0 2.893-.8.8-2.094.8-2.894 0-.8-.8-.8-2.093 0-2.893.187-.187.414-.347.667-.44v-7.32a2.075 2.075 0 01-.667-.44c-.6-.6-.746-1.493-.44-2.24l-3.026-3.027-7.974 7.987a1.722 1.722 0 000 2.427l11.64 11.64c.667.666 1.76.666 2.427 0L28.827 17.24a1.722 1.722 0 000-2.427"
                            fill="#FA6E5A"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <svg
                      height="100%"
                      viewBox="0 0 350 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 top-[-168px] h-[168px] desktop:top-[-220px] desktop:hidden desktop:h-[220px]"
                    >
                      <g clipPath="url(#clip0_1189_18546)">
                        <path
                          d="M298.503 180.664V193.956C298.503 200.755 292.994 206.265 286.195 206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M246.614 180.664V193.956C246.614 200.755 241.105 206.265 234.306 206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M201.578 81.9688H200.846C197.887 81.9688 195.489 84.367 195.489 87.3255V130.027C195.489 132.985 197.887 135.383 200.846 135.383H201.578C204.537 135.383 206.935 132.985 206.935 130.027V87.3255C206.935 84.367 204.537 81.9688 201.578 81.9688Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M344.272 81.9688H343.539C340.581 81.9688 338.183 84.367 338.183 87.3255V130.027C338.183 132.985 340.581 135.383 343.539 135.383H344.272C347.23 135.383 349.629 132.985 349.629 130.027V87.3255C349.629 84.367 347.23 81.9688 344.272 81.9688Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M299.266 40H238.221C212.935 40 192.437 60.4982 192.437 85.7841V146.829C192.437 172.115 212.935 192.614 238.221 192.614H299.266C324.552 192.614 345.05 172.115 345.05 146.829V85.7841C345.05 60.4982 324.552 40 299.266 40Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M291.635 158.275H230.59C207.446 158.275 188.621 139.45 188.621 116.307V85.7839C188.621 62.6401 207.446 43.8152 230.59 43.8152H291.635C314.779 43.8152 333.604 62.6401 333.604 85.7839V116.307C333.604 139.45 314.779 158.275 291.635 158.275Z"
                          fill="#E7E8F1"
                        ></path>
                        <path
                          d="M291.635 47.6306H230.59C209.522 47.6306 192.437 64.7157 192.437 85.784V116.307C192.437 137.375 209.522 154.46 230.59 154.46H291.635C312.704 154.46 329.789 137.375 329.789 116.307V85.784C329.789 64.7157 312.704 47.6306 291.635 47.6306Z"
                          fill="#C2C4DC"
                        ></path>
                        <path
                          d="M291.635 55.2612H230.59C213.733 55.2612 200.067 68.9267 200.067 85.7839V116.307C200.067 133.164 213.733 146.829 230.59 146.829H291.635C308.493 146.829 322.158 133.164 322.158 116.307V85.7839C322.158 68.9267 308.493 55.2612 291.635 55.2612Z"
                          fill="#272A49"
                        ></path>
                        <path
                          d="M245.851 117.832V125.463H268.743V117.832H245.851Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M276.374 110.202H268.743V117.833H276.374V110.202Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M245.851 110.202H238.221V117.833H245.851V110.202Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M226.775 101.808C232.675 101.808 237.458 97.0254 237.458 91.1253C237.458 85.2253 232.675 80.4424 226.775 80.4424C220.875 80.4424 216.092 85.2253 216.092 91.1253C216.092 97.0254 220.875 101.808 226.775 101.808Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M287.82 101.808C293.72 101.808 298.503 97.0254 298.503 91.1253C298.503 85.2253 293.72 80.4424 287.82 80.4424C281.92 80.4424 277.137 85.2253 277.137 91.1253C277.137 97.0254 281.92 101.808 287.82 101.808Z"
                          fill="#2EC3FF"
                        ></path>
                        <path
                          d="M208.461 171.247C210.99 171.247 213.04 169.198 213.04 166.669C213.04 164.14 210.99 162.091 208.461 162.091C205.933 162.091 203.883 164.14 203.883 166.669C203.883 169.198 205.933 171.247 208.461 171.247Z"
                          fill="#78D76B"
                        ></path>
                        <path
                          d="M228.301 177.352C232.515 177.352 235.932 173.936 235.932 169.721C235.932 165.507 232.515 162.091 228.301 162.091C224.087 162.091 220.67 165.507 220.67 169.721C220.67 173.936 224.087 177.352 228.301 177.352Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M251.193 177.352C255.407 177.352 258.824 173.936 258.824 169.721C258.824 165.507 255.407 162.091 251.193 162.091C246.979 162.091 243.562 165.507 243.562 169.721C243.562 173.936 246.979 177.352 251.193 177.352Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M291.635 47.6306H230.59C209.522 47.6306 192.437 64.7157 192.437 85.784V101.045H200.067V85.784C200.067 68.9278 213.734 55.2613 230.59 55.2613H291.635C308.492 55.2613 322.158 68.9278 322.158 85.784V101.045H329.789V85.784C329.789 64.7157 312.704 47.6306 291.635 47.6306Z"
                          fill="#A5A8CD"
                        ></path>
                        <path
                          d="M234.306 206.265H217.411"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M286.202 206.265H269.3"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M217.411 194.819V206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M269.3 194.819V206.265"
                          stroke="#A5A8CD"
                          strokeWidth="27.4704"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M150 0H9.99976V10H0V90H9.99976V100H120V110H140V120H170V110H160V100H150V90H160V10H150V0Z"
                        fill="white"
                      ></path>
                      <path
                        d="M59.055 56H35.007V50.672L47.391 40.112C50.223 37.664 51.903 35.648 51.903 32.96C51.903 29.648 49.839 27.92 47.007 27.92C43.983 27.92 41.871 30.128 41.871 33.776V34.304H34.911V33.344C34.911 27.008 39.567 22.112 47.007 22.112C54.687 22.112 58.863 26.384 58.863 32.672C58.863 37.52 56.367 40.544 52.239 44.048L45.087 50.192H59.055V56ZM76.0609 22.112C83.9809 22.112 88.7809 28.352 88.7809 38.432V39.968C88.7809 50.336 83.9809 56.288 76.0609 56.288C68.1409 56.288 63.3409 50.336 63.3409 39.968V38.432C63.3409 28.352 68.1409 22.112 76.0609 22.112ZM70.1089 38.672V39.728C70.1089 40.688 70.1569 41.648 70.2049 42.464L80.7169 30.704C79.7089 28.592 78.1729 27.536 76.0609 27.536C72.0769 27.536 70.1089 31.328 70.1089 38.672ZM82.0129 39.728V38.672C82.0129 37.712 81.9649 36.8 81.9169 35.936L71.4529 47.744C72.4609 49.76 73.9969 50.816 76.0609 50.816C80.0449 50.816 82.0129 47.072 82.0129 39.728ZM101.057 56H94.7685V22.4H102.065L108.641 39.296L114.977 22.4H122.177V56H115.889V34.016L110.273 48.08H106.673L101.057 34.016V56Z"
                        fill="#191B33"
                      ></path>
                      <path
                        d="M50.4551 80H56.9511V78.72H51.8471V68.8H50.4551V80ZM61.4919 80.096C63.3799 80.096 64.7239 78.896 65.0439 77.264H63.7159C63.4439 78.32 62.5479 78.928 61.3959 78.928C59.8439 78.928 58.8679 77.84 58.8199 76.288V76.176H65.1559C65.1719 75.984 65.1879 75.792 65.1879 75.616C65.1239 73.2 63.6199 71.744 61.3159 71.744C59.0119 71.744 57.4439 73.44 57.4439 75.92C57.4439 78.416 59.0439 80.096 61.4919 80.096ZM58.8999 75.088C59.0279 73.76 60.1319 72.896 61.3319 72.896C62.6919 72.896 63.6519 73.68 63.7799 75.088H58.8999ZM66.637 74.288H67.949C68.109 73.456 68.877 72.912 70.029 72.912C71.309 72.912 72.061 73.552 72.061 74.608V75.168H69.661C67.517 75.168 66.381 76.08 66.381 77.712C66.381 79.2 67.597 80.096 69.389 80.096C70.797 80.096 71.613 79.472 72.125 78.736C72.141 79.536 72.509 80 73.597 80H74.317V78.8H73.901C73.533 78.8 73.373 78.688 73.373 78.256V74.688C73.373 72.784 72.173 71.744 70.093 71.744C68.125 71.744 66.829 72.688 66.637 74.288ZM67.709 77.632C67.709 76.704 68.365 76.272 69.533 76.272H72.061V76.672C72.061 78.032 71.117 78.976 69.485 78.976C68.397 78.976 67.709 78.432 67.709 77.632ZM75.3256 71.84V80H76.6376V75.84C76.6376 74.544 77.1016 73.12 78.8136 73.12H79.4696V71.84H79.1016C77.6456 71.84 77.0216 72.448 76.6376 73.072L76.4616 71.84H75.3256ZM80.6069 71.84V80H81.9189V75.92C81.9189 74.08 82.8469 72.944 84.3829 72.944C85.8069 72.944 86.5909 73.84 86.5909 75.536V80H87.9029V75.456C87.9029 72.752 86.4469 71.744 84.6069 71.744C83.2309 71.744 82.3989 72.32 81.9189 72.944L81.7429 71.84H80.6069ZM93.2419 80.096C95.1299 80.096 96.4739 78.896 96.7939 77.264H95.4659C95.1939 78.32 94.2979 78.928 93.1459 78.928C91.5939 78.928 90.6179 77.84 90.5699 76.288V76.176H96.9059C96.9219 75.984 96.9379 75.792 96.9379 75.616C96.8739 73.2 95.3699 71.744 93.0659 71.744C90.7619 71.744 89.1939 73.44 89.1939 75.92C89.1939 78.416 90.7939 80.096 93.2419 80.096ZM90.6499 75.088C90.7779 73.76 91.8819 72.896 93.0819 72.896C94.4419 72.896 95.4019 73.68 95.5299 75.088H90.6499ZM98.435 71.84V80H99.747V75.84C99.747 74.544 100.211 73.12 101.923 73.12H102.579V71.84H102.211C100.755 71.84 100.131 72.448 99.747 73.072L99.571 71.84H98.435ZM104.552 77.312H103.208C103.24 79.104 104.696 80.096 106.808 80.096C108.616 80.096 110.072 79.152 110.072 77.632C110.072 75.824 108.584 75.472 106.728 75.248C105.544 75.104 104.68 74.992 104.68 74.096C104.68 73.344 105.448 72.864 106.584 72.864C107.704 72.864 108.472 73.488 108.568 74.32H109.912C109.784 72.624 108.44 71.76 106.584 71.744C104.744 71.728 103.384 72.704 103.384 74.192C103.384 75.888 104.84 76.256 106.664 76.48C107.88 76.624 108.776 76.704 108.776 77.728C108.776 78.48 107.96 78.976 106.808 78.976C105.448 78.976 104.6 78.272 104.552 77.312Z"
                        fill="#191B33"
                      ></path>
                      <defs>
                        <clipPath id="clip0_1189_18546">
                          <rect
                            width="161.007"
                            height="180"
                            fill="white"
                            transform="translate(188.621 40)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="relative z-10 w-full  text-marketing-text-primary  undefined">
          <div className="relative z-10  w-full  text-marketing-text-primary undefined">
            <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
              <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-yellow absolute left-[60%] top-[75%]">
                <div className="block bg-[#3F4273]  absolute left-[100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
              </div>
              <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-orange absolute left-[80%] top-[10%]">
                <div className="block bg-marketing-accent-white  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
              </div>
              <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-pink absolute left-[40%] top-[15%]">
                <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
              </div>
            </div>
            <div className="relative m-auto w-full max-w-[1364px] space-y-14 px-6 py-16 tablet:px-10">
              <div className="space-y-6">
                <a href="/">
                  <svg
                    height="28"
                    viewBox="0 0 70 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8"
                    width="100"
                  >
                    <path
                      d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202H32.0153Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] w-[342px] tablet:w-full">
                  You can code, too.
                </p>
              </div>
              <div className="grid grid-flow-row-dense grid-cols-2 justify-between gap-5 gap-y-10 tablet:grid-cols-4">
                <div className="flex flex-col gap-4">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">
                    Company
                  </h5>
                  <a href="/about-us">
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      About Us
                    </p>
                  </a>
                  <a href="/blog">
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Blog
                    </p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover"></p>
                  </a>
                </div>
                <div className="col-start-1 flex flex-col gap-4 tablet:col-start-2">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">
                    Product
                  </h5>
                  <a href="/glossary">
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Glossary
                    </p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Terms of Use
                    </p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Privacy Policy
                    </p>
                  </a>
                </div>
                <div className="col-start-2 flex flex-col gap-4 tablet:col-start-3">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">
                    Useful
                  </h5>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Press Kit
                    </p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Imprint
                    </p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">
                      Help
                    </p>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">
                    Follow us
                  </h5>
                  <div className="flex max-w-[160px] flex-wrap gap-6 tablet:gap-5">
                    <a
                      title="Link to Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 hover:text-marketing-button-primary-hover"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.061 7.619c.011.194.011.398.011.603 0 6.182-4.709 13.318-13.317 13.318-2.64 0-5.108-.779-7.155-2.118a9.404 9.404 0 0 0 6.93-1.93 4.672 4.672 0 0 1-4.368-3.254c.292.059.583.089.883.089.429 0 .845-.059 1.235-.166a4.684 4.684 0 0 1-3.757-4.59v-.059c.63.35 1.348.563 2.116.583A4.66 4.66 0 0 1 1.55 6.2c0-.852.233-1.659.632-2.349a13.275 13.275 0 0 0 9.648 4.894 4.27 4.27 0 0 1-.127-1.07A4.68 4.68 0 0 1 16.383 3c1.348 0 2.562.561 3.417 1.475a9.467 9.467 0 0 0 2.97-1.136 4.668 4.668 0 0 1-2.058 2.592 9.424 9.424 0 0 0 2.688-.74A9.556 9.556 0 0 1 21.06 7.62Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      title="Link to Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook"
                    >
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 hover:text-marketing-button-primary-hover"
                      >
                        <path
                          d="M2.659 1.5c-.64 0-1.159.518-1.159 1.159V21.34c0 .64.518 1.159 1.159 1.159h10.058v-8.13H9.979V11.2h2.738V8.861c0-2.713 1.657-4.19 4.077-4.19 1.159 0 2.154.087 2.444.126v2.834H17.56c-1.316 0-1.571.625-1.571 1.543v2.024h3.14l-.41 3.17h-2.73V22.5h5.352c.64 0 1.159-.518 1.159-1.159V2.66c0-.64-.519-1.159-1.159-1.159H2.66Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      title="Link to Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 hover:text-marketing-button-primary-hover"
                      >
                        <path
                          d="M7.593 1.5A6.1 6.1 0 0 0 1.5 7.595v8.812A6.1 6.1 0 0 0 7.593 22.5h8.865a6.1 6.1 0 0 0 6.093-6.093V7.595A6.1 6.1 0 0 0 16.458 1.5H7.593Zm0 1.805h8.865a4.26 4.26 0 0 1 4.29 4.29v8.812a4.26 4.26 0 0 1-4.29 4.288H7.593a4.258 4.258 0 0 1-4.288-4.288V7.595a4.26 4.26 0 0 1 4.288-4.29Zm10.082 1.806a1.262 1.262 0 1 0 0 2.524 1.262 1.262 0 0 0 0-2.524Zm-5.65 1.482A5.42 5.42 0 0 0 6.62 12a5.42 5.42 0 0 0 5.407 5.407c2.975 0 5.408-2.431 5.408-5.407s-2.433-5.407-5.408-5.407Zm0 1.805c2 0 3.604 1.602 3.604 3.602 0 2-1.603 3.602-3.603 3.602S8.424 14 8.424 12c0-2 1.601-3.602 3.602-3.602Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      title="Link to TikTok"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                    >
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 hover:text-marketing-button-primary-hover"
                      >
                        <path
                          d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .399-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604 3.226 3.226 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281 0-1.814 1.46-3.282 3.26-3.282.341 0 .68.054 1.004.16l.005-3.936A7.178 7.178 0 0 0 4.76 10.71a7.583 7.583 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187.359-.015 1.562 0 2.928-.647 1.515-.718 2.377-1.787 2.377-1.787a7.43 7.43 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 hover:text-marketing-button-primary-hover"
                      >
                        <path
                          d="M3.043 1.5c-.851 0-1.543.672-1.543 1.503v17.994c0 .831.692 1.503 1.543 1.503h17.785c.852 0 1.543-.672 1.543-1.503V3.003c0-.831-.691-1.503-1.543-1.503H3.043Zm3.228 3.525c1.078 0 1.739.707 1.76 1.637 0 .91-.684 1.637-1.784 1.637H6.23c-1.058 0-1.742-.727-1.742-1.637 0-.93.704-1.637 1.783-1.637Zm9.295 4.35c2.074 0 3.625 1.355 3.625 4.268v5.437H16.04v-5.075c0-1.275-.455-2.145-1.596-2.145-.871 0-1.392.59-1.62 1.157-.083.203-.1.483-.1.766v5.297H9.569s.041-8.593 0-9.483h3.157v1.339c.419-.646 1.17-1.561 2.841-1.561Zm-2.841 1.561-.023.035h.023v-.035Zm-8.05-1.339h3.15v9.483h-3.15V9.597Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      title="Link to Medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Medium"
                    >
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 hover:text-marketing-button-primary-hover"
                      >
                        <path
                          d="M23.216 12c0 2.963-.495 5.375-1.112 5.375-.616 0-1.112-2.412-1.112-5.375s.496-5.375 1.112-5.375c.617 0 1.112 2.412 1.112 5.375Zm-2.84 0c0 3.309-1.412 6-3.16 6-1.747 0-3.168-2.691-3.168-6s1.42-6 3.168-6c1.749 0 3.16 2.691 3.16 6Zm-6.937 0a6.356 6.356 0 1 1-1.845-4.497 6.333 6.333 0 0 1 1.845 4.478V12Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px] text-marketing-text-secondary">
                © 2024 Mimo-Clone GmbH
              </p>
              <svg
                height="100%"
                viewBox="0 0 140 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-10 h-24 tabletLg:right-40 tabletLg:h-40"
              >
                <g clipPath="url(#clip0_1189_19788)">
                  <path
                    d="M95.5258 122.218V133.765C95.5258 139.671 90.7406 144.456 84.834 144.456"
                    stroke="#A3A7CF"
                    strokeWidth="23.8707"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M50.4379 122.218V133.765C50.4379 139.671 45.6527 144.456 39.7461 144.456"
                    stroke="#A3A7CF"
                    strokeWidth="23.8707"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M11.3135 36.46H10.6696C8.10035 36.46 6.01758 38.5427 6.01758 41.112V78.2169C6.01758 80.7862 8.10035 82.869 10.6696 82.869H11.3135C13.8828 82.869 15.9655 80.7862 15.9655 78.2169V41.112C15.9655 38.5427 13.8828 36.46 11.3135 36.46Z"
                    fill="#E6E7F1"
                  ></path>
                  <path
                    d="M135.296 36.46H134.652C132.083 36.46 130 38.5427 130 41.112V78.2169C130 80.7862 132.083 82.869 134.652 82.869H135.296C137.865 82.869 139.948 80.7862 139.948 78.2169V41.112C139.948 38.5427 137.865 36.46 135.296 36.46Z"
                    fill="#E6E7F1"
                  ></path>
                  <path
                    d="M96.1931 -0.000488281H43.1558C21.1855 -0.000488281 3.375 17.8099 3.375 39.7802V92.8175C3.375 114.788 21.1855 132.598 43.1558 132.598H96.1931C118.163 132.598 135.974 114.788 135.974 92.8175V39.7802C135.974 17.8099 118.163 -0.000488281 96.1931 -0.000488281Z"
                    fill="#E6E7F1"
                  ></path>
                  <path
                    d="M89.5642 102.766H36.5158C16.4089 102.766 0.0546875 86.4119 0.0546875 66.305V39.7809C0.0546875 19.674 16.4089 3.31982 36.5158 3.31982H89.5531C109.66 3.31982 126.014 19.674 126.014 39.7809V66.305C126.014 86.4119 109.66 102.766 89.5531 102.766H89.5642Z"
                    fill="#E6E7F1"
                  ></path>
                  <path
                    d="M89.5629 6.62842H36.5144C18.2062 6.62842 3.37305 21.4726 3.37305 39.7809V66.3051C3.37305 84.6133 18.2173 99.4575 36.5255 99.4575H89.5629C107.871 99.4575 122.715 84.6133 122.715 66.3051V39.7809C122.715 21.4726 107.871 6.62842 89.5629 6.62842Z"
                    fill="#C1C3DD"
                  ></path>
                  <path
                    d="M89.5654 13.2563H36.5281C21.8792 13.2563 10.0039 25.1316 10.0039 39.7805V66.2936C10.0039 80.9425 21.8792 92.8178 36.5281 92.8178H89.5654C104.214 92.8178 116.09 80.9425 116.09 66.2936V39.7805C116.09 25.1316 104.214 13.2563 89.5654 13.2563Z"
                    fill="#262A4B"
                  ></path>
                  <path
                    d="M17.2951 114.034C19.4902 114.034 21.2698 112.255 21.2698 110.06C21.2698 107.865 19.4902 106.085 17.2951 106.085C15.0999 106.085 13.3203 107.865 13.3203 110.06C13.3203 112.255 15.0999 114.034 17.2951 114.034Z"
                    fill="#4FD95B"
                  ></path>
                  <path
                    d="M34.5267 119.341C38.1874 119.341 41.155 116.374 41.155 112.713C41.155 109.053 38.1874 106.085 34.5267 106.085C30.866 106.085 27.8984 109.053 27.8984 112.713C27.8984 116.374 30.866 119.341 34.5267 119.341Z"
                    fill="#A3A7CF"
                  ></path>
                  <path
                    d="M54.4232 119.341C58.0839 119.341 61.0515 116.374 61.0515 112.713C61.0515 109.053 58.0839 106.085 54.4232 106.085C50.7625 106.085 47.7949 109.053 47.7949 112.713C47.7949 116.374 50.7625 119.341 54.4232 119.341Z"
                    fill="#A3A7CF"
                  ></path>
                  <path
                    d="M89.5629 6.62842H36.5144C18.2062 6.62842 3.37305 21.4726 3.37305 39.7809V53.0374H10.0013V39.7809C10.0013 25.1365 21.87 13.2567 36.5255 13.2567H89.5629C104.207 13.2567 116.087 25.1254 116.087 39.7809V53.0374H122.715V39.7809C122.715 21.4726 107.871 6.62842 89.5629 6.62842Z"
                    fill="#A3A7CF"
                  ></path>
                  <path
                    d="M39.746 144.456H25.0684"
                    stroke="#A3A7CF"
                    strokeWidth="23.8707"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M84.8339 144.456H70.1562"
                    stroke="#A3A7CF"
                    strokeWidth="23.8707"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M25.0684 134.52V144.456"
                    stroke="#A3A7CF"
                    strokeWidth="23.8707"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M70.1562 134.52V144.456"
                    stroke="#A3A7CF"
                    strokeWidth="23.8707"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M33.2063 33.6406C28.299 33.6406 24.3242 37.6154 24.3242 42.5227V48.4404H42.0884V42.5227C42.0884 37.6154 38.1137 33.6406 33.2063 33.6406Z"
                    fill="#00C5FF"
                  ></path>
                  <path
                    d="M86.2454 33.6406C81.338 33.6406 77.3633 37.6154 77.3633 42.5227V48.4404H95.1275V42.5227C95.1275 37.6154 91.1528 33.6406 86.2454 33.6406Z"
                    fill="#00C5FF"
                  ></path>
                  <path
                    d="M73.0428 70.6128H46.3965V77.2744H73.0428V70.6128Z"
                    fill="#00C5FF"
                  ></path>
                  <path
                    d="M79.7039 63.9956H39.7344V70.6572H79.7039V63.9956Z"
                    fill="#00C5FF"
                  ></path>
                  <path
                    d="M79.7039 57.334H39.7344V63.9956H79.7039V57.334Z"
                    fill="#00C5FF"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1189_19788">
                    <rect width="140" height="156" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
