/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */

"use client";
import { handleGoogleLogin } from "@/utils/lib/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
                <div className="grid w-full grid-flow-row grid-cols-2 gap-6 text-white tablet:gap-5 tabletLg:grid-cols-2 tabletLg:grid-rows-none">
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
                        <button
                          className="flex h-14 w-full items-center justify-center space-x-2 rounded-xl bg-marketing-button-secondary-enabled px-3 hover:bg-marketing-button-secondary-hover undefined bg-white"
                          onClick={async () => {
                            await handleGoogleLogin();
                            router.push("/user-page");
                          }}
                        >
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

            <section className="mt-4 hidden tablet:hidden">
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
                <div className="grid grid-flow-row grid-cols-2 pb-10 desktop:grid-cols-2 desktop:gap-4">
                  <div className="space-y-6 text-left tablet:text-left tabletLg:w-full">
                    <h2 className="font-aeonikFono text-[40px] font-bold leading-[52px] tablet:text-[56px] tablet:leading-[64px]">
                      Python, JavaScript, HTML, CSS, and more
                    </h2>
                    <p className="font-mimopro text-[20px] font-normal leading-[30px] tablet:text-[24px] tablet:leading-[36px] md:w-full md:max-w-[50%] desktop:w-full desktop:max-w-full">
                      Choose between a range of beginner-friendly learning
                      paths, hand-crafted by learning experts and backed by
                      research
                    </p>
                  </div>
                  <div className="h-[160px] tablet:hidden"></div>
                </div>
                <div className="grid grid-flow-row grid-cols-3 gap-4 tabletLg:gap-4 desktop:grid-cols-3">
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
                      className="absolute right-0 top-[-168px] h-[168px] desktop:top-[-220px] desktop:hidden desktop:h-[220px] hidden"
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
                            d="M11.93 2C6.85 2 7.17 4.21 7.17 4.21V6.5h4.85v.69H5.25S2 6.82 2 11.97s2.84 4.97 2.84 4.97h1.69v-2.39s-.09-2.85 2.79-2.85h4.81s2.7.04 2.7-2.62V4.67S17.24 2 11.93 2zM8.39 4.42c0-.49.39-.88.87-.88s.87.39.87.87c0 .49-.39.88-.87.88a.87.87 0 01-.87-.87z"
                            fill="#1E96FF"
                          ></path>
                          <path
                            d="M19.16 7.06h.04c.33 0 2.8.16 2.8 4.95v.03c0 5.14-3.25 4.77-3.25 4.77h-6.77v.69h4.85v2.29S17.15 22 12.08 22c-5.31 0-4.9-2.67-4.9-2.67v-4.41c0-2.67 2.7-2.62 2.7-2.62h4.81c2.88 0 2.79-2.85 2.79-2.85V7.06h1.69-.01zm-5.29 12.52c0 .48.39.87.87.87s.87-.39.87-.88-.39-.88-.87-.88-.87.39-.87.88v.01z"
                            fill="#FFBE09"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <svg
                      height="100%"
                      viewBox="0 0 350 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 top-[-168px] h-[168px] desktop:top-[-220px] desktop:block desktop:h-[220px]"
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
                <div className="grid auto-rows-auto grid-cols-3 gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
                  <a
                    title="Start Learning"
                    className="group flex min-h-[280px] w-full flex-col space-y-6 rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-white hover:bg-marketing-surface-darkBlue tablet:min-h-[300px] tablet:p-10 tabletLg:min-h-[308px]"
                  >
                    <div className="flex h-6 items-center justify-between tablet:h-8">
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
                      <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] rounded-xl bg-[#3F4273] px-4 py-1 uppercase group-hover:bg-marketing-accent-nightBlue">
                        Course
                      </p>
                    </div>
                    <div className="group flex flex-grow flex-col space-y-4">
                      <h4 className="font-aeonikFono text-[24px] font-bold leading-[32px] tablet:text-[32px] tablet:leading-[40px]">
                        HTML
                      </h4>
                      <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] flex-grow">
                        Get familiar with the foundational building blocks of
                        web development, understand the structure of web pages,
                        and start building real websites.
                      </p>
                    </div>
                  </a>
                  <a
                    title="Start Learning"
                    className="group flex min-h-[280px] w-full flex-col space-y-6 rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-white hover:bg-marketing-surface-darkBlue tablet:min-h-[300px] tablet:p-10 tabletLg:min-h-[308px]"
                  >
                    <div className="flex h-6 items-center justify-between tablet:h-8">
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
                      <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] rounded-xl bg-[#3F4273] px-4 py-1 uppercase group-hover:bg-marketing-accent-nightBlue">
                        Course
                      </p>
                    </div>
                    <div className="group flex flex-grow flex-col space-y-4">
                      <h4 className="font-aeonikFono text-[24px] font-bold leading-[32px] tablet:text-[32px] tablet:leading-[40px]">
                        CSS
                      </h4>
                      <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] flex-grow">
                        CSS styles the appearance and layout of web pages,
                        making them visually appealing and responsive
                      </p>
                    </div>
                  </a>
                  <a
                    title="Start Learning"
                    className="group flex min-h-[280px] w-full flex-col space-y-6 rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-white hover:bg-marketing-surface-darkBlue tablet:min-h-[300px] tablet:p-10 tabletLg:min-h-[308px]"
                  >
                    <div className="flex h-6 items-center justify-between tablet:h-8">
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
                      <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] rounded-xl bg-[#3F4273] px-4 py-1 uppercase group-hover:bg-marketing-accent-nightBlue">
                        Course
                      </p>
                    </div>
                    <div className="group flex flex-grow flex-col space-y-4">
                      <h4 className="font-aeonikFono text-[24px] font-bold leading-[32px] tablet:text-[32px] tablet:leading-[40px]">
                        JavaScript
                      </h4>
                      <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] flex-grow">
                        Dive into the world of JavaScript, the programming
                        language to manipulate web page elements, build web
                        applications, and more.
                      </p>
                    </div>
                  </a>
                  <a
                    title="Start Learning"
                    className="group flex min-h-[280px] w-full flex-col space-y-6 rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-white hover:bg-marketing-surface-darkBlue tablet:min-h-[300px] tablet:p-10 tabletLg:min-h-[308px]"
                  >
                    <div className="flex h-6 items-center justify-between tablet:h-8">
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.93 2C6.85 2 7.17 4.21 7.17 4.21V6.5h4.85v.69H5.25S2 6.82 2 11.97s2.84 4.97 2.84 4.97h1.69v-2.39s-.09-2.85 2.79-2.85h4.81s2.7.04 2.7-2.62V4.67S17.24 2 11.93 2zM8.39 4.42c0-.49.39-.88.87-.88s.87.39.87.87c0 .49-.39.88-.87.88a.87.87 0 01-.87-.87z"
                          fill="#1E96FF"
                        ></path>
                        <path
                          d="M19.16 7.06h.04c.33 0 2.8.16 2.8 4.95v.03c0 5.14-3.25 4.77-3.25 4.77h-6.77v.69h4.85v2.29S17.15 22 12.08 22c-5.31 0-4.9-2.67-4.9-2.67v-4.41c0-2.67 2.7-2.62 2.7-2.62h4.81c2.88 0 2.79-2.85 2.79-2.85V7.06h1.69-.01zm-5.29 12.52c0 .48.39.87.87.87s.87-.39.87-.88-.39-.88-.87-.88-.87.39-.87.88v.01z"
                          fill="#FFBE09"
                        ></path>
                      </svg>
                      <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] rounded-xl bg-[#3F4273] px-4 py-1 uppercase group-hover:bg-marketing-accent-nightBlue">
                        Course
                      </p>
                    </div>
                    <div className="group flex flex-grow flex-col space-y-4">
                      <h4 className="font-aeonikFono text-[24px] font-bold leading-[32px] tablet:text-[32px] tablet:leading-[40px]">
                        Python
                      </h4>
                      <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] flex-grow">
                        Explore a beginner-friendly, popular programming
                        language that’s renowned for its readability and
                        extensive range of applications.
                      </p>
                    </div>
                  </a>
                  <a
                    title="Start Learning"
                    className="group flex min-h-[280px] w-full flex-col space-y-6 rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-white hover:bg-marketing-surface-darkBlue tablet:min-h-[300px] tablet:p-10 tabletLg:min-h-[308px]"
                  >
                    <div className="flex h-6 items-center justify-between tablet:h-8">
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
                      <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] rounded-xl bg-[#3F4273] px-4 py-1 uppercase group-hover:bg-marketing-accent-nightBlue">
                        Course
                      </p>
                    </div>
                    <div className="group flex flex-grow flex-col space-y-4">
                      <h4 className="font-aeonikFono text-[24px] font-bold leading-[32px] tablet:text-[32px] tablet:leading-[40px]">
                        SQL
                      </h4>
                      <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] flex-grow">
                        Master SQL, an essential skill in data analysis and
                        management, from creating to querying and manipulating
                        databases.
                      </p>
                    </div>
                  </a>
                  <a
                    title="Start Learning"
                    className="group flex min-h-[280px] w-full flex-col space-y-6 rounded-3xl border-2 border-[#3F4273] bg-transparent p-6 text-white hover:bg-marketing-surface-darkBlue tablet:min-h-[300px] tablet:p-10 tabletLg:min-h-[308px]"
                  >
                    <div className="flex h-6 items-center justify-between tablet:h-8">
                      <svg
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 7.98488C21 7.79773 21 7.6276 21 7.44045C20.983 7.04915 20.966 6.64083 20.898 6.24953C20.83 5.85822 20.711 5.48393 20.5241 5.12665C20.3371 4.76938 20.1161 4.44612 19.8272 4.17391C19.5382 3.88469 19.2153 3.66351 18.8754 3.47637C18.5184 3.28922 18.1445 3.17013 17.7535 3.10208C17.3626 3.03403 16.9717 3 16.5637 3C16.3768 3 16.2068 3 16.0198 3C15.7989 3 15.5949 3 15.3739 3H10.5977H8.62606C8.4051 3 8.20113 3 7.98017 3C7.7932 3 7.62323 3 7.43626 3C7.33428 3 7.2323 3 7.14731 3.01701C6.85836 3.03403 6.55241 3.05104 6.26346 3.10208C5.9745 3.15312 5.68555 3.23819 5.4136 3.34026C5.32861 3.37429 5.22663 3.42533 5.14164 3.45936C4.86969 3.59547 4.63173 3.7656 4.39377 3.95274C4.32578 4.0208 4.24079 4.08884 4.17281 4.1569C3.88385 4.44612 3.66289 4.76938 3.47592 5.10964C3.28895 5.46692 3.16997 5.84121 3.10198 6.23251C3.034 6.62382 3.017 7.01512 3 7.42344C3 7.61059 3 7.78072 3 7.96787C3 8.18904 3 8.3932 3 8.61437V11.5577V15.3686C3 15.5898 3 15.794 3 16.0151C3 16.2023 3 16.3724 3 16.5595C3.017 16.9509 3.034 17.3592 3.10198 17.7505C3.16997 18.1418 3.28895 18.5161 3.47592 18.8733C3.66289 19.2306 3.88385 19.5539 4.17281 19.8261C4.46176 20.1153 4.7847 20.3365 5.12465 20.5236C5.48159 20.7108 5.85553 20.8299 6.24646 20.8979C6.63739 20.966 7.02833 21 7.43626 21C7.62323 21 7.7932 21 7.98017 21C8.20113 21 8.4051 21 8.62606 21H15.3739C15.5949 21 15.7989 21 16.0198 21C16.2068 21 16.3768 21 16.5637 21C16.9547 20.983 17.3626 20.966 17.7535 20.8979C18.1445 20.8299 18.5184 20.7108 18.8754 20.5236C19.2323 20.3365 19.5552 20.1153 19.8272 19.8261C20.1161 19.5369 20.3371 19.2136 20.5241 18.8733C20.711 18.5161 20.83 18.1418 20.898 17.7505C20.966 17.3592 21 16.9679 21 16.5595C21 16.3724 21 16.2023 21 16.0151C21 15.794 21 15.5898 21 15.3686V8.61437C21 8.41021 21 8.20605 21 7.98488Z"
                          fill="#EE6E4F"
                        ></path>
                        <path
                          d="M16.9142 14.4303C16.9304 14.3634 16.9466 14.2965 16.9628 14.2296C17.676 11.3024 15.9416 7.82322 12.9914 6C14.2882 7.8065 14.8555 9.99771 14.353 11.9046C14.3044 12.0718 14.2558 12.2391 14.1909 12.4064C14.1261 12.3562 14.0451 12.306 13.9316 12.2558C13.9316 12.2558 10.9976 10.3824 7.8205 7.08724C7.73945 7.00361 9.52253 9.71335 11.5325 11.9046C10.5762 11.3526 7.93397 9.36209 6.24815 7.78977C6.45888 8.14103 6.70203 8.49229 6.96138 8.8101C8.35542 10.6501 10.1871 12.9082 12.3754 14.6478C10.8355 15.6179 8.66341 15.7016 6.50751 14.6478C5.97259 14.3969 5.47008 14.0791 5 13.7278C5.90775 15.2332 7.318 16.5379 9.03623 17.3073C11.0787 18.2106 13.1211 18.1604 14.6286 17.3241C14.6286 17.3241 14.6448 17.324 14.6448 17.3073C14.7097 17.2739 14.7745 17.2237 14.8393 17.1902C15.5688 16.8055 16.9952 16.4208 17.7733 17.9597C18.0002 18.3109 18.4055 16.3037 16.9142 14.4303Z"
                          fill="white"
                        ></path>
                      </svg>
                      <p className="font-mimopro text-[12px] font-normal leading-[16px] tablet:text-[16px] tablet:leading-[24px] rounded-xl bg-[#3F4273] px-4 py-1 uppercase group-hover:bg-marketing-accent-nightBlue">
                        Course
                      </p>
                    </div>
                    <div className="group flex flex-grow flex-col space-y-4">
                      <h4 className="font-aeonikFono text-[24px] font-bold leading-[32px] tablet:text-[32px] tablet:leading-[40px]">
                        Swift
                      </h4>
                      <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] flex-grow">
                        Apple’s language for building fast and safe apps across
                        their devices, known for its simplicity and performance
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-20 space-y-6 px-6 tablet:mt-32 tablet:px-10">
              <div className="relative z-10 flex space-y-10 text-white flex-col">
                <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#FA965A] absolute left-[95%] top-[20%] ">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#F4D055] absolute left-[-5%] top-[20%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#3890FA] absolute left-[85%] top-[-5%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#3F4273] absolute left-[10%] top-[10%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                </div>
                <div className="m-auto flex flex-col items-center space-y-4 text-center tabletLg:w-[800px]">
                  <h2 className="font-aeonikFono text-[40px] font-bold leading-[52px] tablet:text-[56px] tablet:leading-[64px]">
                    Learn to code anytime,
                    <br />
                    from anywhere
                  </h2>
                  <p className="font-mimopro text-[20px] font-normal leading-[30px] tablet:text-[24px] tablet:leading-[36px]">
                    With Mimo, you can always choose the experience that suits
                    you best – on
                    <br />
                    your computer or on your phone.
                  </p>
                </div>
                <div className="max-h-[672px] flex justify-center space-x-6 tabletLg:flex">
                  <img
                    alt="project mockup"
                    loading="lazy"
                    width="3048"
                    height="2100"
                    decoding="async"
                    data-nimg="1"
                    className="w-[1017px] min-w-[730px]"
                    style={{ color: "transparent" }}
                    srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject_mockup.9d59a66b.png&w=3840&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x"
                    src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject_mockup.9d59a66b.png&w=3840&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                  ></img>
                  <img
                    alt="lesson example"
                    loading="lazy"
                    width="966"
                    height="2092"
                    decoding="async"
                    data-nimg="1"
                    className="w-[310px] min-w-[220px]"
                    style={{ color: "transparent" }}
                    srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flesson_database.e723878f.png&w=1080&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flesson_database.e723878f.png&w=1080&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                    src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flesson_database.e723878f.png&w=1080&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                  ></img>
                </div>
                <div className="relative hidden h-[360px] min-h-[330px] w-full items-center justify-center space-x-8 overflow-hidden rounded-3xl bg-marketing-surface-darkBlue px-[20%] pt-10 tablet:h-[870px] tabletLg:hidden tabletLg:h-[840px]">
                  <img
                    alt="lesson example"
                    loading="lazy"
                    width="966"
                    height="2092"
                    decoding="async"
                    data-nimg="1"
                    className="bg-marketing-surface-darkBlues absolute top-10 w-[207px] min-w-[207px] max-w-[416px] tablet:w-[80%] tablet:min-w-[579px]"
                    srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flesson_database.e723878f.png&w=1080&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flesson_database.e723878f.png&w=1080&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                    src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flesson_database.e723878f.png&w=1080&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                  ></img>
                </div>
              </div>
              <div className="relative m-auto flex h-[200px] w-full max-w-[1364px] items-center justify-between space-y-6 rounded-3xl bg-[#7E4BDE] px-8 py-10 text-white tablet:h-[200px] tablet:max-h-[200px] tablet:flex-row tablet:space-y-0 tablet:space-y-6 tablet:p-10">
                <h3 className="font-aeonikFono text-[32px] font-bold leading-[40px] tablet:text-[40px] tablet:leading-[48px] text-center tablet:max-w-[52%] tablet:text-left hidden tabletLg:hidden">
                  Start learning to code on your phone
                </h3>
                <h3 className="font-aeonikFono text-[32px] font-bold leading-[40px] tablet:text-[40px] tablet:leading-[48px] max-w-[50%] flex-1 text-left tablet:max-w-[48%] tablet:text-left tabletLg:block tabletLg:flex-1 desktop:max-w-[58%] desktopLg:max-w-[54%]">
                  Start learning to code right now on your computer!
                </h3>
                <a className="shrink-0 items-center justify-between rounded-xl bg-white px-4 py-4 text-[#252746] hover:bg-marketing-button-secondary-hover tabletLg:block">
                  <p className="font-aeonikFono text-[14px] leading-[20px] tablet:text-[16px] tablet:leading-[24px] font-bold">
                    Start learning
                  </p>
                </a>
                <div className="h-16 flex-1 flex-col space-y-4 tablet:h-full tablet:flex-none tablet:space-y-4 tabletLg:hidden hidden tabletLg:flex-row tabletLg:items-center tabletLg:space-x-4 tabletLg:space-y-0">
                  <a target="_blank" rel="noreferrer">
                    <svg
                      height="100%"
                      viewBox="0 0 163 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12"
                    >
                      <rect width="163" height="48" rx="12" fill="white"></rect>
                      <path
                        d="M29.7239 24.361C29.7368 23.3594 30.0029 22.3773 30.4973 21.5062C30.9917 20.6351 31.6985 19.9031 32.5518 19.3785C32.0097 18.6043 31.2946 17.9672 30.4632 17.5177C29.6318 17.0683 28.7071 16.8189 27.7624 16.7893C25.7473 16.5778 23.7938 17.9951 22.7669 17.9951C21.7202 17.9951 20.1392 16.8103 18.4367 16.8453C17.3355 16.8809 16.2623 17.2011 15.3217 17.7748C14.381 18.3485 13.605 19.156 13.0692 20.1188C10.7484 24.1369 12.4795 30.0421 14.7027 33.2901C15.815 34.8805 17.1149 36.657 18.8158 36.594C20.4803 36.525 21.102 35.5327 23.1111 35.5327C25.1016 35.5327 25.6849 36.594 27.4203 36.554C29.2064 36.525 30.3317 34.9565 31.4049 33.351C32.2041 32.2178 32.8191 30.9653 33.227 29.64C32.1894 29.2011 31.3039 28.4665 30.6809 27.5278C30.058 26.589 29.7252 25.4876 29.7239 24.361Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M26.446 14.6532C27.4198 13.4842 27.8996 11.9816 27.7834 10.4645C26.2956 10.6208 24.9213 11.3318 23.9343 12.456C23.4517 13.0052 23.0821 13.6442 22.8467 14.3363C22.6112 15.0284 22.5144 15.7602 22.5619 16.4897C23.306 16.4974 24.0422 16.3361 24.715 16.018C25.3878 15.6999 25.9797 15.2332 26.446 14.6532Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M50.763 32.5677H45.0829L43.7188 36.5954H41.313L46.6931 21.6938H49.1927L54.5727 36.5954H52.1258L50.763 32.5677ZM45.6712 30.7091H50.1736L47.954 24.1724H47.8919L45.6712 30.7091Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M66.1919 31.1638C66.1919 34.54 64.3848 36.7091 61.6579 36.7091C60.9671 36.7452 60.2801 36.5861 59.6756 36.2499C59.071 35.9138 58.5733 35.4142 58.2395 34.8083H58.1879V40.1896H55.9579V25.731H58.1165V27.538H58.1575C58.5066 26.935 59.0127 26.438 59.6219 26.0998C60.231 25.7616 60.9205 25.5948 61.6169 25.6173C64.3742 25.6173 66.1919 27.797 66.1919 31.1638ZM63.8997 31.1638C63.8997 28.9642 62.763 27.5181 61.0286 27.5181C59.3247 27.5181 58.1786 28.9946 58.1786 31.1638C58.1786 33.3529 59.3247 34.8189 61.0286 34.8189C62.763 34.8189 63.8997 33.3833 63.8997 31.1638Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M78.1497 31.1638C78.1497 34.54 76.3427 36.7091 73.6157 36.7091C72.9249 36.7452 72.2379 36.5861 71.6334 36.2499C71.0288 35.9138 70.5311 35.4142 70.1973 34.8083H70.1457V40.1896H67.9157V25.731H70.0742V27.538H70.1153C70.4644 26.935 70.9705 26.438 71.5796 26.0998C72.1888 25.7616 72.8783 25.5948 73.5746 25.6173C76.3321 25.6173 78.1497 27.797 78.1497 31.1638ZM75.8575 31.1638C75.8575 28.9642 74.7208 27.5181 72.9864 27.5181C71.2825 27.5181 70.1364 28.9946 70.1364 31.1638C70.1364 33.3529 71.2825 34.8189 72.9864 34.8189C74.7208 34.8189 75.8575 33.3833 75.8575 31.1638Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M86.0528 32.4435C86.2181 33.9212 87.6536 34.8915 89.6153 34.8915C91.495 34.8915 92.8474 33.9212 92.8474 32.5887C92.8474 31.4321 92.0317 30.7395 90.1005 30.2649L88.1692 29.7997C85.4329 29.1387 84.1626 27.859 84.1626 25.7825C84.1626 23.2114 86.4032 21.4454 89.5849 21.4454C92.7337 21.4454 94.8923 23.2114 94.9649 25.7825H92.7137C92.579 24.2954 91.3497 23.3977 89.5532 23.3977C87.7567 23.3977 86.5274 24.3059 86.5274 25.6278C86.5274 26.6813 87.3126 27.3012 89.2333 27.7758L90.875 28.1789C93.9325 28.902 95.2028 30.1301 95.2028 32.3098C95.2028 35.0977 92.9821 36.8438 89.4501 36.8438C86.1454 36.8438 83.9141 35.1387 83.77 32.4434L86.0528 32.4435Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M100.016 23.1599V25.731H102.082V27.497H100.016V33.4864C100.016 34.4169 100.429 34.8505 101.338 34.8505C101.583 34.8462 101.828 34.829 102.071 34.7989V36.5544C101.663 36.6307 101.248 36.6652 100.832 36.6575C98.6329 36.6575 97.7751 35.8313 97.7751 33.7243V27.497H96.1954V25.731H97.775V23.1599H100.016Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M103.278 31.1638C103.278 27.7454 105.292 25.5974 108.431 25.5974C111.581 25.5974 113.585 27.7454 113.585 31.1638C113.585 34.5915 111.592 36.7302 108.431 36.7302C105.272 36.7302 103.278 34.5915 103.278 31.1638ZM111.313 31.1638C111.313 28.8189 110.238 27.4349 108.431 27.4349C106.624 27.4349 105.551 28.8294 105.551 31.1638C105.551 33.5181 106.624 34.8915 108.431 34.8915C110.238 34.8915 111.313 33.5181 111.313 31.1638Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M115.424 25.731H117.55V27.5802H117.602C117.746 27.0026 118.084 26.4922 118.56 26.1348C119.036 25.7773 119.621 25.5946 120.215 25.6173C120.472 25.6164 120.729 25.6443 120.979 25.7005V27.7864C120.655 27.6873 120.317 27.6418 119.977 27.6517C119.653 27.6385 119.33 27.6956 119.031 27.8191C118.731 27.9426 118.461 28.1295 118.241 28.3669C118.02 28.6044 117.853 28.8868 117.752 29.1948C117.65 29.5028 117.617 29.8291 117.654 30.1513V36.5954H115.424L115.424 25.731Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M131.261 33.4044C130.961 35.3767 129.041 36.7302 126.583 36.7302C123.423 36.7302 121.461 34.6126 121.461 31.2153C121.461 27.8075 123.433 25.5974 126.49 25.5974C129.495 25.5974 131.386 27.6622 131.386 30.9564V31.7204H123.712V31.8552C123.677 32.255 123.727 32.6578 123.859 33.0368C123.991 33.4158 124.203 33.7624 124.479 34.0534C124.755 34.3445 125.091 34.5734 125.462 34.725C125.834 34.8765 126.234 34.9473 126.635 34.9325C127.162 34.9819 127.691 34.8598 128.143 34.5845C128.595 34.3092 128.946 33.8953 129.144 33.4044L131.261 33.4044ZM123.723 30.1618H129.154C129.174 29.8023 129.12 29.4425 128.994 29.1051C128.869 28.7676 128.675 28.4598 128.424 28.2009C128.174 27.942 127.873 27.7375 127.54 27.6005C127.207 27.4634 126.85 27.3967 126.49 27.4044C126.126 27.4022 125.766 27.472 125.43 27.6097C125.094 27.7474 124.789 27.9503 124.532 28.2066C124.274 28.463 124.07 28.7678 123.932 29.1033C123.793 29.4389 123.722 29.7987 123.723 30.1618Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M45.3917 10.4773C45.8592 10.4438 46.3284 10.5144 46.7653 10.6841C47.2022 10.8538 47.5961 11.1184 47.9184 11.4588C48.2407 11.7991 48.4834 12.2067 48.6291 12.6523C48.7748 13.0978 48.8198 13.5701 48.7608 14.0351C48.7608 16.3226 47.5245 17.6375 45.3917 17.6375H42.8054V10.4773H45.3917ZM43.9175 16.6249H45.2675C45.6015 16.6449 45.9359 16.5901 46.2461 16.4646C46.5564 16.339 46.8347 16.1459 47.0609 15.8992C47.2871 15.6525 47.4554 15.3585 47.5537 15.0386C47.6519 14.7186 47.6776 14.3808 47.6288 14.0497C47.674 13.7199 47.6458 13.3842 47.546 13.0666C47.4463 12.749 47.2775 12.4574 47.0519 12.2127C46.8262 11.968 46.5492 11.7762 46.2407 11.6511C45.9322 11.526 45.5998 11.4707 45.2675 11.4892H43.9175V16.6249Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M50.0171 14.9333C49.9831 14.5782 50.0237 14.2199 50.1363 13.8815C50.2489 13.543 50.431 13.2318 50.671 12.9678C50.9109 12.7038 51.2034 12.4929 51.5296 12.3486C51.8558 12.2042 52.2086 12.1297 52.5653 12.1297C52.922 12.1297 53.2748 12.2042 53.601 12.3486C53.9273 12.4929 54.2197 12.7038 54.4596 12.9678C54.6996 13.2318 54.8817 13.543 54.9943 13.8815C55.1069 14.2199 55.1475 14.5782 55.1135 14.9333C55.1482 15.2888 55.108 15.6476 54.9957 15.9866C54.8834 16.3256 54.7014 16.6374 54.4614 16.9019C54.2214 17.1664 53.9287 17.3778 53.6022 17.5224C53.2757 17.667 52.9225 17.7418 52.5653 17.7418C52.2082 17.7418 51.855 17.667 51.5284 17.5224C51.2019 17.3778 50.9092 17.1664 50.6692 16.9019C50.4292 16.6374 50.2472 16.3256 50.1349 15.9866C50.0226 15.6476 49.9824 15.2888 50.0171 14.9333ZM54.0167 14.9333C54.0167 13.762 53.4905 13.0771 52.5671 13.0771C51.6401 13.0771 51.1187 13.762 51.1187 14.9333C51.1187 16.114 51.6401 16.7937 52.5671 16.7937C53.4905 16.7937 54.0167 16.1093 54.0167 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M61.8882 17.6374H60.7819L59.6651 13.6577H59.5808L58.4686 17.6374H57.3729L55.8835 12.2339H56.9651L57.9331 16.3571H58.0128L59.1237 12.2339H60.1468L61.2577 16.3571H61.3421L62.3054 12.2339H63.3718L61.8882 17.6374Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M64.6245 12.2339H65.651V13.0923H65.7307C65.8659 12.784 66.0939 12.5255 66.383 12.353C66.672 12.1804 67.0077 12.1023 67.3432 12.1296C67.6062 12.1098 67.8702 12.1495 68.1157 12.2456C68.3612 12.3417 68.5819 12.4918 68.7616 12.6848C68.9412 12.8778 69.0751 13.1088 69.1533 13.3606C69.2316 13.6124 69.2521 13.8785 69.2135 14.1394V17.6374H68.1471V14.4071C68.1471 13.5388 67.7698 13.1069 66.9811 13.1069C66.8026 13.0986 66.6244 13.129 66.4588 13.196C66.2931 13.263 66.1439 13.365 66.0213 13.4951C65.8988 13.6252 65.8058 13.7802 65.7488 13.9495C65.6917 14.1189 65.672 14.2986 65.6909 14.4763V17.6374H64.6245L64.6245 12.2339Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M70.9128 10.1245H71.9792V17.6374H70.9128V10.1245Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M73.4616 14.9333C73.4277 14.5782 73.4683 14.2199 73.5809 13.8814C73.6936 13.5429 73.8757 13.2317 74.1157 12.9677C74.3556 12.7037 74.6481 12.4928 74.9743 12.3485C75.3006 12.2041 75.6534 12.1296 76.0101 12.1296C76.3669 12.1296 76.7197 12.2041 77.0459 12.3485C77.3722 12.4928 77.6646 12.7037 77.9046 12.9677C78.1446 13.2317 78.3267 13.5429 78.4393 13.8814C78.552 14.2199 78.5926 14.5782 78.5587 14.9333C78.5932 15.2888 78.5531 15.6476 78.4407 15.9866C78.3284 16.3256 78.1463 16.6374 77.9063 16.9019C77.6663 17.1664 77.3736 17.3777 77.0471 17.5224C76.7205 17.667 76.3673 17.7417 76.0101 17.7417C75.653 17.7417 75.2998 17.667 74.9732 17.5224C74.6466 17.3777 74.354 17.1664 74.1139 16.9019C73.8739 16.6374 73.6919 16.3256 73.5795 15.9866C73.4672 15.6476 73.427 15.2888 73.4616 14.9333ZM77.4612 14.9333C77.4612 13.762 76.935 13.0771 76.0116 13.0771C75.0846 13.0771 74.5632 13.762 74.5632 14.9333C74.5632 16.114 75.0847 16.7937 76.0116 16.7937C76.935 16.7937 77.4612 16.1093 77.4612 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M79.6813 16.1093C79.6813 15.1366 80.4055 14.5759 81.6911 14.4962L83.1548 14.4118V13.9454C83.1548 13.3747 82.7774 13.0525 82.0485 13.0525C81.4532 13.0525 81.0407 13.271 80.9223 13.6531H79.8899C79.9989 12.7249 80.872 12.1296 82.0977 12.1296C83.4524 12.1296 84.2165 12.804 84.2165 13.9454V17.6374H83.1899V16.8781H83.1056C82.9343 17.1504 82.6938 17.3725 82.4087 17.5216C82.1235 17.6706 81.8039 17.7413 81.4825 17.7265C81.2557 17.75 81.0264 17.7258 80.8095 17.6554C80.5926 17.585 80.3928 17.4699 80.2231 17.3175C80.0534 17.1651 79.9175 16.9789 79.8242 16.7708C79.7309 16.5627 79.6822 16.3374 79.6813 16.1093ZM83.1548 15.6476V15.1958L81.8352 15.2802C81.0911 15.33 80.7536 15.5831 80.7536 16.0595C80.7536 16.5458 81.1755 16.8288 81.7556 16.8288C81.9256 16.846 82.0973 16.8289 82.2605 16.7784C82.4237 16.7278 82.5751 16.645 82.7056 16.5348C82.8361 16.4246 82.9432 16.2893 83.0203 16.1368C83.0975 15.9844 83.1432 15.818 83.1548 15.6476Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M85.618 14.9333C85.618 13.2259 86.4958 12.1443 87.861 12.1443C88.1987 12.1287 88.5339 12.2096 88.8273 12.3775C89.1207 12.5453 89.3603 12.7933 89.518 13.0923H89.5977V10.1245H90.6641V17.6374H89.6423V16.7837H89.5579C89.388 17.0807 89.14 17.3255 88.8409 17.4917C88.5418 17.6579 88.2029 17.7391 87.861 17.7265C86.4864 17.7265 85.618 16.6448 85.618 14.9333ZM86.7196 14.9333C86.7196 16.0794 87.2599 16.7691 88.1634 16.7691C89.0622 16.7691 89.6177 16.0695 89.6177 14.938C89.6177 13.8118 89.0564 13.1023 88.1634 13.1023C87.2657 13.1023 86.7196 13.7966 86.7196 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M95.0762 14.9333C95.0423 14.5782 95.0829 14.2199 95.1955 13.8815C95.3081 13.543 95.4902 13.2318 95.7302 12.9678C95.9701 12.7038 96.2625 12.4929 96.5888 12.3486C96.915 12.2042 97.2678 12.1297 97.6245 12.1297C97.9812 12.1297 98.334 12.2042 98.6602 12.3486C98.9864 12.4929 99.2789 12.7038 99.5188 12.9678C99.7588 13.2318 99.9409 13.543 100.053 13.8815C100.166 14.2199 100.207 14.5782 100.173 14.9333C100.207 15.2888 100.167 15.6476 100.055 15.9866C99.9426 16.3256 99.7606 16.6374 99.5206 16.9019C99.2806 17.1664 98.9879 17.3778 98.6614 17.5224C98.3348 17.667 97.9816 17.7418 97.6245 17.7418C97.2673 17.7418 96.9141 17.667 96.5876 17.5224C96.261 17.3778 95.9684 17.1664 95.7284 16.9019C95.4884 16.6374 95.3064 16.3256 95.1941 15.9866C95.0818 15.6476 95.0416 15.2888 95.0762 14.9333ZM99.0759 14.9333C99.0759 13.762 98.5497 13.0771 97.6263 13.0771C96.6993 13.0771 96.1778 13.762 96.1778 14.9333C96.1778 16.114 96.6993 16.7937 97.6263 16.7937C98.5497 16.7937 99.0759 16.1093 99.0759 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M101.604 12.2339H102.63V13.0923H102.71C102.845 12.784 103.073 12.5255 103.362 12.353C103.651 12.1804 103.987 12.1023 104.322 12.1296C104.585 12.1098 104.849 12.1495 105.095 12.2456C105.34 12.3417 105.561 12.4918 105.741 12.6848C105.92 12.8778 106.054 13.1088 106.132 13.3606C106.211 13.6124 106.231 13.8785 106.193 14.1394V17.6374H105.126V14.4071C105.126 13.5388 104.749 13.1069 103.96 13.1069C103.782 13.0986 103.604 13.129 103.438 13.196C103.272 13.263 103.123 13.365 103 13.4951C102.878 13.6252 102.785 13.7802 102.728 13.9495C102.671 14.1189 102.651 14.2986 102.67 14.4763V17.6374H101.604V12.2339Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M112.218 10.8886V12.2585H113.389V13.1568H112.218V15.9353C112.218 16.5013 112.452 16.7491 112.983 16.7491C113.118 16.7487 113.254 16.7405 113.389 16.7245V17.6128C113.198 17.6471 113.004 17.6653 112.809 17.6673C111.623 17.6673 111.151 17.2501 111.151 16.2083V13.1567H110.293V12.2585H111.151V10.8886H112.218Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M114.846 10.1245H115.903V13.1023H115.987C116.129 12.7911 116.363 12.5312 116.658 12.3579C116.953 12.1847 117.294 12.1066 117.635 12.1343C117.896 12.1201 118.158 12.1637 118.401 12.2622C118.643 12.3606 118.861 12.5114 119.039 12.7038C119.217 12.8962 119.35 13.1255 119.429 13.3753C119.508 13.625 119.531 13.8891 119.496 14.1487V17.6374H118.428V14.4118C118.428 13.5487 118.026 13.1116 117.273 13.1116C117.09 13.0966 116.905 13.1218 116.733 13.1854C116.56 13.2491 116.404 13.3497 116.274 13.4802C116.144 13.6107 116.045 13.7679 115.982 13.9409C115.92 14.1138 115.896 14.2984 115.912 14.4815V17.6374H114.846L114.846 10.1245Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M125.714 16.1784C125.569 16.6723 125.255 17.0995 124.827 17.3852C124.399 17.671 123.884 17.7972 123.372 17.7417C123.016 17.7511 122.663 17.6829 122.336 17.5419C122.009 17.4008 121.716 17.1903 121.479 16.925C121.241 16.6596 121.064 16.3457 120.96 16.0052C120.856 15.6646 120.828 15.3054 120.876 14.9527C120.829 14.5988 120.858 14.2389 120.962 13.8973C121.066 13.5557 121.242 13.2403 121.478 12.9726C121.714 12.705 122.005 12.4912 122.331 12.3457C122.657 12.2003 123.011 12.1266 123.368 12.1296C124.871 12.1296 125.778 13.1568 125.778 14.8536V15.2257H121.963V15.2855C121.946 15.4838 121.971 15.6834 122.036 15.8715C122.101 16.0596 122.204 16.232 122.34 16.3778C122.475 16.5235 122.64 16.6393 122.823 16.7178C123.005 16.7963 123.203 16.8357 123.402 16.8335C123.657 16.8641 123.915 16.8182 124.144 16.7015C124.373 16.5849 124.562 16.4028 124.687 16.1784L125.714 16.1784ZM121.963 14.437H124.692C124.705 14.2557 124.681 14.0735 124.619 13.9022C124.558 13.731 124.462 13.5744 124.337 13.4426C124.212 13.3108 124.06 13.2066 123.892 13.1368C123.724 13.067 123.544 13.0331 123.362 13.0372C123.177 13.0349 122.994 13.0695 122.823 13.1391C122.653 13.2086 122.497 13.3116 122.367 13.4421C122.237 13.5725 122.134 13.7278 122.064 13.8987C121.995 14.0695 121.96 14.2526 121.963 14.437Z"
                        fill="#252746"
                      ></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noreferrer">
                    <svg
                      height="100%"
                      viewBox="0 0 163 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12"
                    >
                      <rect width="163" height="48" rx="12" fill="white"></rect>
                      <path
                        d="M81.7643 26.1025C78.9419 26.1025 76.6415 28.2481 76.6415 31.2061C76.6415 34.1449 78.9419 36.3097 81.7643 36.3097C84.5867 36.3097 86.8871 34.1449 86.8871 31.2061C86.8871 28.2481 84.5867 26.1025 81.7643 26.1025ZM81.7643 34.2997C80.2175 34.2997 78.8831 33.0241 78.8831 31.2061C78.8831 29.3689 80.2175 28.1125 81.7643 28.1125C83.3111 28.1125 84.6443 29.3689 84.6443 31.2061C84.6443 33.0229 83.3111 34.2997 81.7643 34.2997ZM70.5875 26.1025C67.7651 26.1025 65.4647 28.2481 65.4647 31.2061C65.4647 34.1449 67.7651 36.3097 70.5875 36.3097C73.4099 36.3097 75.7103 34.1449 75.7103 31.2061C75.7115 28.2481 73.4099 26.1025 70.5875 26.1025ZM70.5875 34.2997C69.0407 34.2997 67.7075 33.0241 67.7075 31.2061C67.7075 29.3689 69.0419 28.1125 70.5875 28.1125C72.1343 28.1125 73.4675 29.3689 73.4675 31.2061C73.4687 33.0229 72.1343 34.2997 70.5875 34.2997ZM57.2939 29.8333H62.4755C62.3207 31.0513 61.9151 31.9405 61.2959 32.5597C60.5423 33.3133 59.3627 34.1449 57.2939 34.1449C54.1043 34.1449 51.6107 31.5733 51.6107 28.3837C51.6107 25.1941 54.1043 22.6225 57.2939 22.6225C59.0147 22.6225 60.2711 23.2993 61.1987 24.1693L62.7263 22.6417C61.4315 21.4045 59.7107 20.4565 57.2939 20.4565C52.9247 20.4565 49.2515 24.0133 49.2515 28.3825C49.2515 32.7517 52.9247 36.3085 57.2939 36.3085C59.6519 36.3085 61.4315 35.5357 62.8235 34.0849C64.2539 32.6545 64.6991 30.6433 64.6991 29.0197C64.6991 28.5169 64.6607 28.0525 64.5827 27.6661H57.2939V29.8333ZM111.664 29.3497C111.239 28.2085 109.943 26.1013 107.294 26.1013C104.665 26.1013 102.481 28.1701 102.481 31.2049C102.481 34.0657 104.646 36.3085 107.546 36.3085C109.885 36.3085 111.239 34.8781 111.799 34.0465L110.059 32.8861C109.48 33.7369 108.686 34.2973 107.546 34.2973C106.405 34.2973 105.594 33.7753 105.072 32.7505L111.896 29.9281L111.664 29.3497ZM104.704 31.0513C104.646 29.0797 106.231 28.0741 107.371 28.0741C108.26 28.0741 109.014 28.5181 109.266 29.1565L104.704 31.0513ZM99.1547 36.0001H101.398V20.9989H99.1547V36.0001ZM95.4815 27.2425H95.4047C94.9019 26.6437 93.9359 26.1013 92.7179 26.1013C90.1655 26.1013 87.8267 28.3441 87.8267 31.2241C87.8267 34.0849 90.1655 36.3085 92.7179 36.3085C93.9359 36.3085 94.9019 35.7673 95.4047 35.1481H95.4815V35.8825C95.4815 37.8349 94.4375 38.8789 92.7551 38.8789C91.3823 38.8789 90.5315 37.8925 90.1835 37.0621L88.2311 37.8745C88.7915 39.2281 90.2807 40.8901 92.7551 40.8901C95.3843 40.8901 97.6079 39.3433 97.6079 35.5741V26.4109H95.4815V27.2425ZM92.9111 34.2997C91.3643 34.2997 90.0695 33.0049 90.0695 31.2253C90.0695 29.4277 91.3643 28.1125 92.9111 28.1125C94.4387 28.1125 95.6363 29.4265 95.6363 31.2253C95.6363 33.0037 94.4387 34.2997 92.9111 34.2997ZM122.168 20.9989H116.803V36.0001H119.041V30.3169H122.167C124.649 30.3169 127.088 28.5205 127.088 25.6585C127.088 22.7965 124.65 20.9989 122.168 20.9989ZM122.226 28.2289H119.041V23.0869H122.226C123.9 23.0869 124.85 24.4729 124.85 25.6585C124.85 26.8201 123.9 28.2289 122.226 28.2289ZM136.064 26.0749C134.443 26.0749 132.764 26.7889 132.07 28.3717L134.058 29.2021C134.483 28.3717 135.274 28.1017 136.104 28.1017C137.262 28.1017 138.439 28.7965 138.458 30.0313V30.1861C138.053 29.9545 137.184 29.6065 136.123 29.6065C133.981 29.6065 131.8 30.7837 131.8 32.9845C131.8 34.9921 133.556 36.2845 135.524 36.2845C137.03 36.2845 137.86 35.6089 138.38 34.8181H138.457V35.9761H140.618V30.2245C140.618 27.5605 138.631 26.0749 136.064 26.0749ZM135.793 34.2961C135.06 34.2961 134.036 33.9289 134.036 33.0229C134.036 31.8649 135.311 31.4209 136.41 31.4209C137.394 31.4209 137.857 31.6333 138.456 31.9225C138.283 33.3121 137.087 34.2961 135.793 34.2961ZM148.493 26.4025L145.926 32.9065H145.849L143.186 26.4025H140.774L144.769 35.4925L142.492 40.5493H144.827L150.984 26.4025H148.493ZM128.324 36.0001H130.564V20.9989H128.324V36.0001Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M56.8511 11.7493H53.3615V12.6145H55.9763C55.9055 13.3177 55.6235 13.8709 55.1519 14.2729C54.6791 14.6749 54.0755 14.8765 53.3615 14.8765C52.5767 14.8765 51.9131 14.6053 51.3707 14.0617C50.8379 13.5085 50.5655 12.8257 50.5655 12.0001C50.5655 11.1757 50.8379 10.4917 51.3707 9.93846C51.9131 9.39606 52.5767 9.12486 53.3615 9.12486C53.7635 9.12486 54.1463 9.19446 54.4979 9.34566C54.8495 9.49686 55.1315 9.70806 55.3523 9.97926L56.0159 9.31566C55.7147 8.97366 55.3319 8.71206 54.8603 8.52126C54.3875 8.33046 53.8943 8.23926 53.3615 8.23926C52.3151 8.23926 51.4307 8.60166 50.7071 9.32526C49.9823 10.0501 49.6211 10.9441 49.6211 12.0001C49.6211 13.0561 49.9823 13.9513 50.7071 14.6749C51.4307 15.3997 52.3151 15.7609 53.3615 15.7609C54.4571 15.7609 55.3319 15.4093 56.0063 14.6953C56.5991 14.1025 56.9015 13.2973 56.9015 12.2917C56.9015 12.1213 56.8811 11.9401 56.8511 11.7493Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M58.2288 8.40006V15.6001H62.4324V14.7157H59.154V12.4333H62.1096V11.5681H59.154V9.28566H62.4324V8.40006H58.2288Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M68.3435 9.28566V8.40006H63.3959V9.28566H65.4071V15.6001H66.3323V9.28566H68.3435Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M72.8495 8.40006H71.9243V15.6001H72.8495V8.40006Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M78.9635 9.28566V8.40006H74.0159V9.28566H76.0271V15.6001H76.9523V9.28566H78.9635Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M88.3259 9.33606C87.6119 8.60166 86.7371 8.23926 85.6907 8.23926C84.6455 8.23926 83.7695 8.60166 83.0555 9.32526C82.3415 10.0393 81.9899 10.9345 81.9899 12.0001C81.9899 13.0669 82.3415 13.9609 83.0555 14.6749C83.7695 15.3997 84.6455 15.7609 85.6907 15.7609C86.7263 15.7609 87.6119 15.3997 88.3259 14.6749C89.0399 13.9609 89.3915 13.0669 89.3915 12.0001C89.3915 10.9441 89.0399 10.0501 88.3259 9.33606ZM83.7203 9.93846C84.2531 9.39606 84.9059 9.12486 85.6907 9.12486C86.4755 9.12486 87.1283 9.39606 87.6515 9.93846C88.1843 10.4725 88.4459 11.1661 88.4459 12.0001C88.4459 12.8353 88.1843 13.5289 87.6515 14.0617C87.1283 14.6053 86.4755 14.8765 85.6907 14.8765C84.9059 14.8765 84.2531 14.6053 83.7203 14.0617C83.1971 13.5193 82.9355 12.8353 82.9355 12.0001C82.9355 11.1661 83.1971 10.4821 83.7203 9.93846Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M91.6139 11.1157L91.5743 9.72726H91.6139L95.2751 15.6001H96.2399V8.40006H95.3147V12.6145L95.3555 14.0017H95.3147L91.8155 8.40006H90.6899V15.6001H91.6139V11.1157Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M24.8608 23.3093L12.0844 36.8693C12.0856 36.8717 12.0856 36.8741 12.0868 36.8765C12.478 38.3501 13.8232 39.4337 15.4192 39.4337C16.0576 39.4337 16.6564 39.2609 17.17 38.9585L17.2108 38.9345L31.5916 30.6365L24.8608 23.3093Z"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M37.7875 21.0006L37.7755 20.9922L31.5667 17.3922L24.5718 23.6166L31.5906 30.6342L37.7671 27.0714C38.8495 26.487 39.5839 25.3458 39.5839 24.0294C39.5839 22.7226 38.8591 21.5862 37.7875 21.0006Z"
                        fill="#FABC13"
                      ></path>
                      <path
                        d="M12.0848 11.1329C12.008 11.4161 11.9672 11.7125 11.9672 12.0209V35.9813C11.9672 36.2897 12.0064 36.5873 12.0844 36.8693L25.3004 23.6561L12.0848 11.1329Z"
                        fill="#547DBF"
                      ></path>
                      <path
                        d="M24.9544 24.0006L31.5676 17.3898L17.2024 9.06176C16.6804 8.74856 16.072 8.56855 15.4192 8.56855C13.8232 8.56855 12.4768 9.65455 12.0844 11.1294L12.0848 11.1329L24.9544 24.0006Z"
                        fill="#30A851"
                      ></path>
                    </svg>
                  </a>
                </div>
                <svg
                  height="100%"
                  viewBox="0 0 134 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-[140px] tablet:right-[240px] tabletLg:right-[280px] tabletLg:h-[160px] right-[280px]"
                >
                  <g clipPath="url(#clip0_1189_19369)">
                    <path
                      opacity="0.3"
                      d="M35.3008 150.457H128.618C131.261 150.457 133.403 152.593 133.403 155.228C133.403 157.864 131.261 160 128.618 160H35.3008C32.6579 160 30.5153 157.864 30.5153 155.228C30.5153 152.593 32.6579 150.457 35.3008 150.457Z"
                      fill="#333661"
                    ></path>
                    <path
                      d="M89.6628 110.817L107.309 134.901"
                      stroke="#A3A7CF"
                      strokeWidth="21.4716"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M107.309 134.901L114.547 129.617"
                      stroke="#A3A7CF"
                      strokeWidth="21.4716"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M60.2098 115.863L60.4961 145.685"
                      stroke="#A3A7CF"
                      strokeWidth="21.4716"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M60.4969 145.685L69.4697 145.602"
                      stroke="#A3A7CF"
                      strokeWidth="21.4716"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M32.4594 8.82598L79.5872 0.540376C99.1082 -2.89163 117.723 10.1048 121.166 29.5687L129.475 76.5587C132.918 96.0226 119.883 114.583 100.362 118.015L53.2341 126.301C33.7131 129.733 15.0979 116.737 11.6558 97.2727L3.3459 50.2827C-0.0961758 30.8188 12.9384 12.258 32.4594 8.82598Z"
                      fill="#EAEAF3"
                    ></path>
                    <path
                      d="M4.14026 47.1289L4.4466 47.075C6.80213 46.6609 9.04837 48.2291 9.46372 50.5778L15.2308 83.1889C15.6461 85.5375 14.0733 87.7772 11.7178 88.1913L11.4114 88.2452C9.0559 88.6593 6.80967 87.091 6.39432 84.7424L0.627244 52.1313C0.2119 49.7827 1.78473 47.543 4.14026 47.1289Z"
                      fill="#EAEAF3"
                    ></path>
                    <path
                      d="M39.3798 13.67L86.5049 5.39147C102.776 2.52857 118.292 13.3599 121.152 29.5829L123.234 41.3327L125.315 53.0825C128.186 69.3056 117.323 84.7652 101.053 87.6281L53.9277 95.9186C37.657 98.7815 22.152 87.9502 19.2807 71.7271L17.1991 59.9773L15.1174 48.2275C12.2461 32.0045 23.1091 16.5448 39.3798 13.6819V13.67Z"
                      stroke="#EAEAF3"
                      strokeWidth="5.96434"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M86.5126 5.37772L39.3848 13.6633C23.1257 16.5219 12.2566 31.999 15.1235 48.2106L17.201 59.9581L123.239 41.3155L121.161 29.568C118.294 13.3564 102.772 2.51919 86.5126 5.37772Z"
                      fill="#A8AACF"
                    ></path>
                    <path
                      d="M53.9295 95.9065L101.057 87.6209C117.316 84.7623 128.186 69.2851 125.319 53.0736L123.241 41.3261L17.2034 59.9687L19.2809 71.7162C22.1478 87.9278 37.6704 98.765 53.9295 95.9065Z"
                      fill="#C4C6DE"
                    ></path>
                    <path
                      d="M115.266 30.6106L119.421 54.1056C121.715 67.0815 113.026 79.4554 100.012 81.7434L52.8839 90.029C39.8699 92.317 27.4597 83.6527 25.165 70.6768L21.0101 47.1818C18.7153 34.2059 27.405 21.832 40.419 19.544L87.5469 11.2584C100.561 8.97038 112.971 17.6347 115.266 30.6106Z"
                      fill="#282A49"
                    ></path>
                    <path
                      d="M120.972 97.3862C118.99 97.3862 117.383 95.784 117.383 93.8076C117.383 91.8312 118.99 90.229 120.972 90.229C122.954 90.229 124.561 91.8312 124.561 93.8076C124.561 95.784 122.954 97.3862 120.972 97.3862Z"
                      fill="#4FD95B"
                    ></path>
                    <path
                      d="M106.078 104.818C102.774 104.818 100.096 102.148 100.096 98.8535C100.096 95.5595 102.774 92.8892 106.078 92.8892C109.381 92.8892 112.06 95.5595 112.06 98.8535C112.06 102.148 109.381 104.818 106.078 104.818Z"
                      fill="#A3A7CF"
                    ></path>
                    <path
                      d="M88.3948 107.919C85.0912 107.919 82.413 105.249 82.413 101.955C82.413 98.6611 85.0912 95.9907 88.3948 95.9907C91.6985 95.9907 94.3767 98.6611 94.3767 101.955C94.3767 105.249 91.6985 107.919 88.3948 107.919Z"
                      fill="#A3A7CF"
                    ></path>
                    <path
                      d="M82.7818 59.9332L84.0283 66.9817L62.8208 70.7102L61.5743 63.6617L82.7818 59.9332Z"
                      fill="#00C5FF"
                    ></path>
                    <path
                      d="M92.2233 49.6233C85.6159 49.6233 80.2596 44.2827 80.2596 37.6946C80.2596 31.1065 85.6159 25.7659 92.2233 25.7659C98.8307 25.7659 104.187 31.1065 104.187 37.6946C104.187 44.2827 98.8307 49.6233 92.2233 49.6233Z"
                      fill="#00C5FF"
                    ></path>
                    <path
                      d="M45.0968 57.9021C38.4895 57.9021 33.1331 52.5615 33.1331 45.9734C33.1331 39.3854 38.4895 34.0447 45.0968 34.0447C51.7042 34.0447 57.0605 39.3854 57.0605 45.9734C57.0605 52.5615 51.7042 57.9021 45.0968 57.9021Z"
                      fill="#00C5FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1189_19369">
                      <rect
                        width="132.845"
                        height="160"
                        fill="white"
                        transform="matrix(-1 0 0 1 133.403 0)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </section>

            <section className="mt-20 px-6 tablet:mt-24 tablet:px-10">
              <div className="relative z-10 grid grid-flow-row grid-cols-3 justify-center gap-y-12 text-white tablet:grid-cols-2 tablet:gap-x-10 tablet:gap-y-16 tabletLg:grid-cols-3 tabletLg:gap-x-8">
                <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#3F4273] absolute left-[0%] top-[59%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#F4D005] absolute left-[95%] top-[10%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                </div>
                <div className="flex max-w-[370px] flex-col space-y-6 text-center">
                  <svg
                    height="100%"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[60px] tablet:h-20"
                  >
                    <path
                      d="M61.5 14C55.92 14 51.11 17.27 48.87 22H32.13C29.88 17.27 25.08 14 19.5 14C11.77 14 5.5 20.27 5.5 28V58.58C5.5 62.68 8.82 66 12.92 66C15.73 66 18.3 64.41 19.55 61.9L24.5 52H56.5L61.45 61.9C62.71 64.41 65.27 66 68.08 66C72.18 66 75.5 62.68 75.5 58.58V28C75.5 20.27 69.23 14 61.5 14Z"
                      fill="#FF7231"
                    ></path>
                    <path d="M55.5 26V30H59.5V26H55.5Z" fill="#252746"></path>
                    <path d="M63.5 26V30H67.5V26H63.5Z" fill="#252746"></path>
                    <path d="M63.5 22H59.5V26H63.5V22Z" fill="#252746"></path>
                    <path d="M63.5 30H59.5V34H63.5V30Z" fill="#252746"></path>
                    <path d="M46.5 40H34.5V44H46.5V40Z" fill="#252746"></path>
                    <path d="M46.5 36V40H50.5V36H46.5Z" fill="#252746"></path>
                    <path d="M30.5 36V40H34.5V36H30.5Z" fill="#252746"></path>
                    <path
                      d="M17.5 22V26H13.5V30H17.5V34H21.5V30H25.5V26H21.5V22H17.5Z"
                      fill="#252746"
                    ></path>
                  </svg>
                  <div className="flex-1 space-y-4">
                    <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                      Gamified lessons
                    </h5>
                    <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                      Learn with interactive exercises, challenges, and
                      projects, crafted by learning experts and backed by
                      research
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[370px] flex-col space-y-6 text-center">
                  <svg
                    height="100%"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[60px] tablet:h-20"
                  >
                    <path
                      d="M65.5 10H15.5C9.97715 10 5.5 14.4772 5.5 20V60C5.5 65.5228 9.97715 70 15.5 70H65.5C71.0229 70 75.5 65.5228 75.5 60V20C75.5 14.4772 71.0229 10 65.5 10Z"
                      fill="white"
                    ></path>
                    <path d="M13.5 18V22H21.5V18H13.5Z" fill="#252746"></path>
                    <path d="M33.5 26V30H37.5V26H33.5Z" fill="#252746"></path>
                    <path d="M17.5 26V30H29.5V26H17.5Z" fill="#252746"></path>
                    <path d="M41.5 26V30H57.5V26H41.5Z" fill="#252746"></path>
                    <path d="M17.5 34V38H33.5V34H17.5Z" fill="#252746"></path>
                    <path d="M37.5 34V38H69.5V34H37.5Z" fill="#252746"></path>
                    <path d="M13.5 42V46H25.5V42H13.5Z" fill="#252746"></path>
                    <path d="M18.5 50V54H42.5V50H18.5Z" fill="#252746"></path>
                    <path d="M46.5 50V54H50.5V50H46.5Z" fill="#252746"></path>
                    <path d="M42.5 62V58H38.5V62H42.5Z" fill="#252746"></path>
                    <path d="M58.5 62V58H46.5V62H58.5Z" fill="#252746"></path>
                    <path d="M34.5 62V58H18.5V62H34.5Z" fill="#252746"></path>
                  </svg>
                  <div className="flex-1 space-y-4">
                    <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                      Real-world projects
                    </h5>
                    <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                      Build projects that apply your coding skills in real-life
                      scenarios
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[370px] flex-col space-y-6 text-center">
                  <svg
                    height="100%"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[60px] tablet:h-20"
                  >
                    <path
                      d="M73.9999 44.75L67.9499 48.92L70.3899 55.85C71.7399 59.66 68.8399 63.64 64.7999 63.54L57.4499 63.35L55.3599 70.39C54.2099 74.27 49.5299 75.79 46.3099 73.33L40.4799 68.86L34.6499 73.33C31.4399 75.79 26.7599 74.27 25.6099 70.39L23.5199 63.35L16.1699 63.54C12.1299 63.64 9.23991 59.66 10.5799 55.85L13.0199 48.92L6.96991 44.75C3.63991 42.46 3.63991 37.54 6.96991 35.25L13.0199 31.08L10.5799 24.15C9.22991 20.34 12.1299 16.36 16.1699 16.46L23.5199 16.65L25.6099 9.61C26.7599 5.73 31.4399 4.21 34.6599 6.67L40.4899 11.14L46.3199 6.67C49.5299 4.21 54.2099 5.73 55.3599 9.61L57.4499 16.65L64.7999 16.46C68.8399 16.36 71.7299 20.34 70.3899 24.15L67.9499 31.08L73.9999 35.25C77.3299 37.54 77.3299 42.46 73.9999 44.75Z"
                      fill="#7E4BDE"
                    ></path>
                    <path
                      d="M50.5 45.74V49.74H54.5V45.74H50.5Z"
                      fill="#252746"
                    ></path>
                    <path d="M42.5 26V34H46.5V26H42.5Z" fill="#252746"></path>
                    <path d="M34.5 46V54H38.5V46H34.5Z" fill="#252746"></path>
                    <path
                      d="M54.5 41.74V45.74H58.5V41.74H54.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M58.5 37.74V41.74H62.5V37.74H58.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M54.5 33.74V37.74H58.5V33.74H54.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M50.5 29.74V33.74H54.5V29.74H50.5Z"
                      fill="#252746"
                    ></path>
                    <path d="M38.5 34V46H42.5V34H38.5Z" fill="#252746"></path>
                    <path d="M30.5 34V30H26.5V34H30.5Z" fill="#252746"></path>
                    <path d="M26.5 38V34H22.5V38H26.5Z" fill="#252746"></path>
                    <path d="M22.5 42V38H18.5V42H22.5Z" fill="#252746"></path>
                    <path d="M26.5 46V42H22.5V46H26.5Z" fill="#252746"></path>
                    <path d="M30.5 50V46H26.5V50H30.5Z" fill="#252746"></path>
                  </svg>
                  <div className="flex-1 space-y-4">
                    <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                      Certificates
                    </h5>
                    <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                      Celebrate your accomplishments with shareable certificates
                      as you reach milestones on your journey
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[370px] flex-col space-y-6 text-center">
                  <svg
                    height="100%"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[60px] tablet:h-20"
                  >
                    <path
                      d="M74.5 13H63.5V10C63.5 7.79 61.71 6 59.5 6H21.5C19.29 6 17.5 7.79 17.5 10V13H6.5C4.84 13 3.5 14.34 3.5 16V28C3.5 36.27 10.23 43 18.5 43H19.66C22.61 48.84 28.34 53.04 35.12 53.84L34.5 59.99H28.5C26.29 59.99 24.5 61.78 24.5 63.99V69.99C24.5 72.2 26.29 73.99 28.5 73.99H52.5C54.71 73.99 56.5 72.2 56.5 69.99V63.99C56.5 61.78 54.71 59.99 52.5 59.99H46.5L45.88 53.84C52.66 53.03 58.38 48.84 61.34 43H62.5C70.77 43 77.5 36.27 77.5 28V16C77.5 14.34 76.16 13 74.5 13ZM9.5 28V19H17.5V34C17.5 35.01 17.6 35.99 17.74 36.96C13.13 36.57 9.5 32.71 9.5 28ZM71.5 28C71.5 32.71 67.87 36.57 63.26 36.96C63.4 35.99 63.5 35.01 63.5 34V19H71.5V28Z"
                      fill="#F4D055"
                    ></path>
                    <path
                      d="M34.5 20H38.5V16H42.5V36H46.5V40H34.5V36H38.5V24H34.5V20Z"
                      fill="#252746"
                    ></path>
                  </svg>
                  <div className="flex-1 space-y-4">
                    <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                      Leaderboards
                    </h5>
                    <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                      Compete with fellow learners and climb the ranks as you
                      complete exercises, challenges, and projects
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[370px] flex-col space-y-6 text-center">
                  <svg
                    height="100%"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[60px] tablet:h-20"
                  >
                    <path
                      d="M6.5 62V18C6.5 12.48 10.98 8 16.5 8H31.83C33.42 8 34.95 8.63 36.07 9.76L41.83 15.52C42.96 16.65 44.48 17.28 46.07 17.28H64.49C70.01 17.28 74.49 21.76 74.49 27.28V62C74.49 67.52 70.01 72 64.49 72H16.5C10.98 72 6.5 67.52 6.5 62Z"
                      fill="#78D86B"
                    ></path>
                    <path
                      d="M50.5 49.74V53.74H54.5V49.74H50.5Z"
                      fill="#252746"
                    ></path>
                    <path d="M42.5 30V38H46.5V30H42.5Z" fill="#252746"></path>
                    <path d="M34.5 50V58H38.5V50H34.5Z" fill="#252746"></path>
                    <path
                      d="M54.5 45.74V49.74H58.5V45.74H54.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M58.5 41.74V45.74H62.5V41.74H58.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M54.5 37.74V41.74H58.5V37.74H54.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M50.5 33.74V37.74H54.5V33.74H50.5Z"
                      fill="#252746"
                    ></path>
                    <path d="M38.5 38V50H42.5V38H38.5Z" fill="#252746"></path>
                    <path d="M30.5 38V34H26.5V38H30.5Z" fill="#252746"></path>
                    <path d="M26.5 42V38H22.5V42H26.5Z" fill="#252746"></path>
                    <path d="M22.5 46V42H18.5V46H22.5Z" fill="#252746"></path>
                    <path d="M26.5 50V46H22.5V50H26.5Z" fill="#252746"></path>
                    <path d="M30.5 54V50H26.5V54H30.5Z" fill="#252746"></path>
                  </svg>
                  <div className="flex-1 space-y-4">
                    <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                      Playgrounds
                    </h5>
                    <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                      Unleash your creativity, from trying out concepts to
                      prototyping your ideas and realizing your projects
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[370px] flex-col space-y-6 text-center">
                  <svg
                    height="100%"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[60px] tablet:h-20"
                  >
                    <path
                      d="M40.5 75C59.83 75 75.5 59.33 75.5 40C75.5 20.67 59.83 5 40.5 5C21.17 5 5.5 20.67 5.5 40C5.5 59.33 21.17 75 40.5 75Z"
                      fill="#3890FA"
                    ></path>
                    <path d="M58.5 21V25H62.5V21H58.5Z" fill="#252746"></path>
                    <path
                      d="M32.5 9V13H28.5V17H20.5V21H16.5V25H12.5V29H20.5V37H24.5V49H28.5V69H32.5V65H36.5V57H40.5V53H44.5V49H48.5V45H44.5V41H36.5V37H24.5V29H28.5V25H36.5V17H40.5V9H32.5Z"
                      fill="#252746"
                    ></path>
                    <path
                      d="M54.5 29H66.5V33H70.5V45H66.5V49H62.5V45H58.5V37H50.5V33H54.5V29Z"
                      fill="#252746"
                    ></path>
                  </svg>
                  <div className="flex-1 space-y-4">
                    <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                      Community
                    </h5>
                    <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px]">
                      Connect with the community to get guidance, share
                      insights, and collaborate with your fellow learners
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-20 tablet:mt-40 tablet:px-10">
              <div className="relative z-10 space-y-6">
                <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-blue absolute left-[-5%] top-[40%]">
                    <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                  <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-[#7E4BDE] absolute left-[40%] top-[-10%]">
                    <div className="block bg-[#3F4273] absolute left-[100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 w-full tablet:grid tablet:grid-cols-1 tablet:gap-6 desktop:grid-cols-2 px-10 gap-10">
                  <div>
                    <h2 className="font-aeonikFono text-[40px] font-bold leading-[52px] tablet:text-[56px] tablet:leading-[64px] mb-16 pl-6 text-white tablet:pl-0">
                      Mimo learners have inspiring stories to tell
                    </h2>
                  </div>
                  <div className="relative flex max-h-[460px] min-w-[342px] snap-center rounded-3xl tablet:max-h-[300px] tablet:flex-row [&:nth-child(3)]:relative [&:nth-child(3)]:after:absolute [&:nth-child(3)]:after:-right-6 [&:nth-child(3)]:after:h-full [&:nth-child(3)]:after:w-6 [&:nth-child(3)]:after:content-[''] tablet:[&:nth-child(3)]:after:-right-10 tablet:[&:nth-child(3)]:after:hidden tablet:[&:nth-child(3)]:after:w-10">
                    <div className="max-h-[200px] overflow-auto rounded-l-3xl tablet:h-full tablet:max-h-full tablet:w-[180px] tablet:rounded-t-none">
                      <svg
                        width="50"
                        height="40"
                        viewBox="0 0 50 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-5 top-5"
                      >
                        <rect
                          x="10"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect y="10" width="10" height="10" fill="white"></rect>
                        <rect x="10" width="10" height="10" fill="white"></rect>
                        <rect y="20" width="10" height="10" fill="white"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect y="30" width="10" height="10" fill="white"></rect>
                        <rect
                          x="40"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect x="40" width="10" height="10" fill="white"></rect>
                        <rect
                          x="30"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                      </svg>
                      <img
                        alt="Portrait photo of the auther of the quote"
                        loading="lazy"
                        width="540"
                        height="840"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full self-center object-cover"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_1.64795b80.png&w=640&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_1.64795b80.png&w=640&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_1.64795b80.png&w=640&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                    <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-r-3xl bg-[#3F4273] p-6 text-white tablet:space-y-6 tablet:rounded-r-3xl tablet:rounded-bl-none tablet:p-10 max-h-[200px]">
                      <p className="font-mimopro text-[20px] font-normal italic leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                        “The coding skills acquired through Mimo's courses made
                        me feel more confident about my ability to code and
                        create software.”
                      </p>
                      <div className="flex justify-between">
                        <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px]">
                          Clément Durandeau
                        </p>
                        <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px]">
                          🇫🇷 France
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex max-h-[460px] min-w-[342px] snap-center rounded-3xl tablet:max-h-[300px] tablet:flex-row [&:nth-child(3)]:relative [&:nth-child(3)]:after:absolute [&:nth-child(3)]:after:-right-6 [&:nth-child(3)]:after:h-full [&:nth-child(3)]:after:w-6 [&:nth-child(3)]:after:content-[''] tablet:[&:nth-child(3)]:after:-right-10 tablet:[&:nth-child(3)]:after:hidden tablet:[&:nth-child(3)]:after:w-10">
                    <div className="max-h-[200px] overflow-auto rounded-l-3xl tablet:h-full tablet:max-h-full tablet:w-[180px] tablet:rounded-t-none">
                      <svg
                        width="50"
                        height="40"
                        viewBox="0 0 50 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-5 top-5"
                      >
                        <rect
                          x="10"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect y="10" width="10" height="10" fill="white"></rect>
                        <rect x="10" width="10" height="10" fill="white"></rect>
                        <rect y="20" width="10" height="10" fill="white"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect y="30" width="10" height="10" fill="white"></rect>
                        <rect
                          x="40"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect x="40" width="10" height="10" fill="white"></rect>
                        <rect
                          x="30"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                      </svg>
                      <img
                        alt="Portrait photo of the auther of the quote"
                        loading="lazy"
                        width="540"
                        height="840"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full self-center object-cover"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_2.7e3e0c73.png&w=640&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_2.7e3e0c73.png&w=640&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_2.7e3e0c73.png&w=640&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                    <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-r-3xl bg-[#3F4273] p-6 text-white tablet:space-y-6 tablet:rounded-r-3xl tablet:rounded-bl-none tablet:p-10 max-h-[200px]">
                      <p className="font-mimopro text-[20px] font-normal italic leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                        “My goal is to learn how to code so that when I re-enter
                        the workforce, I'll be a more competitive job
                        candidate.”
                      </p>
                      <div className="flex justify-between">
                        <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px]">
                          Stephanie Tyers
                        </p>
                        <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px]">
                          🇺🇸 USA
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex max-h-[460px] min-w-[342px] snap-center rounded-3xl tablet:max-h-[300px] tablet:flex-row [&:nth-child(3)]:relative [&:nth-child(3)]:after:absolute [&:nth-child(3)]:after:-right-6 [&:nth-child(3)]:after:h-full [&:nth-child(3)]:after:w-6 [&:nth-child(3)]:after:content-[''] tablet:[&:nth-child(3)]:after:-right-10 tablet:[&:nth-child(3)]:after:hidden tablet:[&:nth-child(3)]:after:w-10">
                    <div className="max-h-[200px] overflow-auto rounded-l-3xl tablet:h-full tablet:max-h-full tablet:w-[180px] tablet:rounded-t-none">
                      <svg
                        width="50"
                        height="40"
                        viewBox="0 0 50 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-5 top-5"
                      >
                        <rect
                          x="10"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect y="10" width="10" height="10" fill="white"></rect>
                        <rect x="10" width="10" height="10" fill="white"></rect>
                        <rect y="20" width="10" height="10" fill="white"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect y="30" width="10" height="10" fill="white"></rect>
                        <rect
                          x="40"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect x="40" width="10" height="10" fill="white"></rect>
                        <rect
                          x="30"
                          y="20"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                        <rect
                          x="40"
                          y="30"
                          width="10"
                          height="10"
                          fill="white"
                        ></rect>
                      </svg>
                      <img
                        alt="Portrait photo of the auther of the quote"
                        loading="lazy"
                        width="540"
                        height="840"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full self-center object-cover"
                        style={{ color: "transparent" }}
                        srcSet="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_4.da15e67e.png&w=1920&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 1x, https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_4.da15e67e.png&w=1920&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm 2x"
                        src="https://mimo.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestament_4.da15e67e.png&w=1920&q=75&dpl=dpl_7yUgU2fvNHmcQo25eftjUc8AkoZm"
                      ></img>
                    </div>
                    <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-r-3xl bg-[#3F4273] p-6 text-white tablet:space-y-6 tablet:rounded-r-3xl tablet:rounded-bl-none tablet:p-10 max-h-[200px]">
                      <p className="font-mimopro text-[20px] font-normal italic leading-[28px] tablet:text-[24px] tablet:leading-[32px]">
                        “I've tried quite a few coding platforms but none of
                        them matched the ease of learning I experienced with
                        Mimo.”
                      </p>
                      <div className="flex justify-between">
                        <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px]">
                          Sam Phelan
                        </p>
                        <p className="font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[20px] tablet:leading-[24px]">
                          🇺🇸 USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=""></div>
              </div>
            </section>

            <section className="mt-6 px-6 tablet:px-10">
              <div className="relative m-auto flex h-[200px] w-full max-w-[1364px]  items-center justify-around rounded-3xl bg-[#F4D055] px-8 py-10 text-black tablet:h-[200px] tablet:max-h-[200px] tablet:flex-row tablet:space-y-0 tablet:p-10">
                <h3 className="font-aeonikFono text-[32px] font-bold leading-[40px] tablet:text-[40px] tablet:leading-[48px] text-left tablet:max-w-[48%] tablet:text-left tabletLg:flex-1 desktopLg:max-w-[54%]">
                  Learn to code anytime, from
                  <br />
                  anywhere
                </h3>
                <svg
                  height="100%"
                  viewBox="0 0 131 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[480px] h-[140px] tablet:right-[300px] tablet:h-[160px] tabletLg:right-[420px]"
                >
                  <g clipPath="url(#clip0_1189_19506)">
                    <g opacity="0.2">
                      <path
                        d="M24.1328 155.982H112.75"
                        stroke="#252744"
                        strokeWidth="8.08018"
                        strokeLinecap="round"
                      ></path>
                    </g>
                    <path
                      d="M54.4082 116.511C55.602 128.292 47.0269 138.794 35.2461 139.982"
                      stroke="#A9ABCD"
                      strokeWidth="21.8165"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M35.2461 140L44.3363 147.424"
                      stroke="#A9ABCD"
                      strokeWidth="21.8165"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M78.762 116.511L92.1184 143.709"
                      stroke="#A9ABCD"
                      strokeWidth="21.8165"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M92.1741 143.678L101.264 139.218"
                      stroke="#A9ABCD"
                      strokeWidth="21.8165"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M85.7926 0.146188L36.8269 4.42465C16.5438 6.20027 1.53893 24.0716 3.31454 44.3428L7.59904 93.2846C9.37465 113.556 27.252 128.555 47.5352 126.779L96.5008 122.494C116.784 120.719 131.789 102.847 130.013 82.5763L125.729 33.6346C123.953 13.3634 106.076 -1.62943 85.7926 0.146188Z"
                      fill="#EBEBF3"
                    ></path>
                    <path
                      d="M4.8787 41.1251L4.29087 41.1735C1.91531 41.3796 0.163938 43.4703 0.369982 45.8459L3.36974 80.0797C3.57578 82.4492 5.66652 84.2066 8.04208 84.0006L8.62991 83.9521C11.0055 83.7461 12.7568 81.6553 12.5508 79.2797L9.55105 45.046C9.345 42.6765 7.25427 40.919 4.8787 41.1251Z"
                      fill="#EBEBF3"
                    ></path>
                    <path
                      d="M92.4469 5.72818L43.4812 10.0066C26.5796 11.4853 14.0776 26.3812 15.5563 43.2708L16.6228 55.5062L17.6894 67.7417C19.1681 84.6374 34.0699 97.1334 50.9715 95.6547L99.9372 91.3762C116.839 89.8976 129.341 75.0017 127.862 58.1121L126.796 45.8767L125.729 33.6412C124.25 16.7455 109.349 4.2495 92.4469 5.72818Z"
                      stroke="#EBEBF3"
                      strokeWidth="5.73288"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M43.4872 10.0063L92.4529 5.72173C109.348 4.24305 124.256 16.7512 125.735 33.6348L126.808 45.8702L16.6288 55.4998L15.5562 43.2643C14.0775 26.3808 26.5916 11.4789 43.4811 10.0002L43.4872 10.0063Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M99.9493 91.376L50.9837 95.6606C34.0881 97.1393 19.1802 84.6311 17.7015 67.7475L16.6289 55.5121L126.802 45.8765L127.874 58.1119C129.353 74.9955 116.839 89.8974 99.9493 91.376Z"
                      fill="#C5C7DD"
                    ></path>
                    <path
                      d="M92.9939 11.8429L44.0283 16.1274C30.5081 17.3091 20.5029 29.2234 21.6846 42.7375L23.8238 67.2084C25.0056 80.7225 36.9258 90.7218 50.4459 89.54L99.4116 85.2555C112.932 84.0738 122.937 72.1595 121.755 58.6454L119.616 34.1745C118.434 20.6604 106.514 10.6612 92.9939 11.8429Z"
                      fill="#282A47"
                    ></path>
                    <path
                      d="M73.0547 65.9842L73.588 72.0989L79.7087 71.5656L79.1754 65.4448L73.0547 65.9781V65.9842Z"
                      fill="#2EC3FF"
                    ></path>
                    <path
                      d="M71.9805 53.7428L72.5138 59.8575L78.6345 59.3242L78.1012 53.2095L71.9805 53.7428Z"
                      fill="#2EC3FF"
                    ></path>
                    <path
                      d="M84.7633 58.7966L78.6426 59.3299L79.1759 65.4446L85.2966 64.9113L84.7633 58.7905V58.7966Z"
                      fill="#2EC3FF"
                    ></path>
                    <path
                      d="M72.5211 59.8691L66.4004 60.4024L66.9337 66.5171L73.0544 65.9838L72.5211 59.8691Z"
                      fill="#2EC3FF"
                    ></path>
                    <path
                      d="M59.475 51.7616L53.3543 52.2948L52.5483 43.1198C52.4028 41.429 50.906 40.1806 49.2213 40.3261C47.5305 40.4715 46.2761 41.9684 46.4276 43.6531L47.2336 52.8281L41.1129 53.3614L40.3069 44.1864C39.8645 39.1261 43.6218 34.6477 48.688 34.2053C53.7543 33.7629 58.2266 37.5202 58.6751 42.5804L59.4811 51.7555L59.475 51.7616Z"
                      fill="#2EC3FF"
                    ></path>
                    <path
                      d="M108.442 47.4759L102.321 48.0092L101.515 38.8341C101.37 37.1434 99.8728 35.895 98.188 36.0404C96.4973 36.1859 95.2428 37.6827 95.3943 39.3674L96.2003 48.5425L90.0796 49.0758L89.2736 39.9007C88.8312 34.8405 92.5946 30.3621 97.6547 29.9197C102.715 29.4773 107.193 33.2346 107.642 38.2948L108.448 47.4698L108.442 47.4759Z"
                      fill="#2EC3FF"
                    ></path>
                    <path
                      d="M33.2865 110.823C35.2946 110.823 36.9225 109.195 36.9225 107.187C36.9225 105.178 35.2946 103.551 33.2865 103.551C31.2783 103.551 29.6504 105.178 29.6504 107.187C29.6504 109.195 31.2783 110.823 33.2865 110.823Z"
                      fill="#78D76B"
                    ></path>
                    <path
                      d="M49.1968 114.289C52.5437 114.289 55.2569 111.576 55.2569 108.229C55.2569 104.882 52.5437 102.168 49.1968 102.168C45.8499 102.168 43.1367 104.882 43.1367 108.229C43.1367 111.576 45.8499 114.289 49.1968 114.289Z"
                      fill="#A5A8CD"
                    ></path>
                    <path
                      d="M67.3082 112.701C70.6551 112.701 73.3683 109.988 73.3683 106.641C73.3683 103.294 70.6551 100.581 67.3082 100.581C63.9613 100.581 61.248 103.294 61.248 106.641C61.248 109.988 63.9613 112.701 67.3082 112.701Z"
                      fill="#A5A8CD"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1189_19506">
                      <rect
                        width="130.504"
                        height="160"
                        fill="white"
                        transform="translate(0.353516)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex h-16 flex-1 items-center space-x-4 tablet:h-full tablet:flex-none tablet:space-y-4 tabletLg:flex-row tabletLg:items-center tabletLg:space-x-4 tabletLg:space-y-0 justify-end">
                  <a target="_blank" rel="noreferrer">
                    <svg
                      height="100%"
                      viewBox="0 0 163 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12"
                    >
                      <rect width="163" height="48" rx="12" fill="white"></rect>
                      <path
                        d="M29.7239 24.361C29.7368 23.3594 30.0029 22.3773 30.4973 21.5062C30.9917 20.6351 31.6985 19.9031 32.5518 19.3785C32.0097 18.6043 31.2946 17.9672 30.4632 17.5177C29.6318 17.0683 28.7071 16.8189 27.7624 16.7893C25.7473 16.5778 23.7938 17.9951 22.7669 17.9951C21.7202 17.9951 20.1392 16.8103 18.4367 16.8453C17.3355 16.8809 16.2623 17.2011 15.3217 17.7748C14.381 18.3485 13.605 19.156 13.0692 20.1188C10.7484 24.1369 12.4795 30.0421 14.7027 33.2901C15.815 34.8805 17.1149 36.657 18.8158 36.594C20.4803 36.525 21.102 35.5327 23.1111 35.5327C25.1016 35.5327 25.6849 36.594 27.4203 36.554C29.2064 36.525 30.3317 34.9565 31.4049 33.351C32.2041 32.2178 32.8191 30.9653 33.227 29.64C32.1894 29.2011 31.3039 28.4665 30.6809 27.5278C30.058 26.589 29.7252 25.4876 29.7239 24.361Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M26.446 14.6532C27.4198 13.4842 27.8996 11.9816 27.7834 10.4645C26.2956 10.6208 24.9213 11.3318 23.9343 12.456C23.4517 13.0052 23.0821 13.6442 22.8467 14.3363C22.6112 15.0284 22.5144 15.7602 22.5619 16.4897C23.306 16.4974 24.0422 16.3361 24.715 16.018C25.3878 15.6999 25.9797 15.2332 26.446 14.6532Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M50.763 32.5677H45.0829L43.7188 36.5954H41.313L46.6931 21.6938H49.1927L54.5727 36.5954H52.1258L50.763 32.5677ZM45.6712 30.7091H50.1736L47.954 24.1724H47.8919L45.6712 30.7091Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M66.1919 31.1638C66.1919 34.54 64.3848 36.7091 61.6579 36.7091C60.9671 36.7452 60.2801 36.5861 59.6756 36.2499C59.071 35.9138 58.5733 35.4142 58.2395 34.8083H58.1879V40.1896H55.9579V25.731H58.1165V27.538H58.1575C58.5066 26.935 59.0127 26.438 59.6219 26.0998C60.231 25.7616 60.9205 25.5948 61.6169 25.6173C64.3742 25.6173 66.1919 27.797 66.1919 31.1638ZM63.8997 31.1638C63.8997 28.9642 62.763 27.5181 61.0286 27.5181C59.3247 27.5181 58.1786 28.9946 58.1786 31.1638C58.1786 33.3529 59.3247 34.8189 61.0286 34.8189C62.763 34.8189 63.8997 33.3833 63.8997 31.1638Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M78.1497 31.1638C78.1497 34.54 76.3427 36.7091 73.6157 36.7091C72.9249 36.7452 72.2379 36.5861 71.6334 36.2499C71.0288 35.9138 70.5311 35.4142 70.1973 34.8083H70.1457V40.1896H67.9157V25.731H70.0742V27.538H70.1153C70.4644 26.935 70.9705 26.438 71.5796 26.0998C72.1888 25.7616 72.8783 25.5948 73.5746 25.6173C76.3321 25.6173 78.1497 27.797 78.1497 31.1638ZM75.8575 31.1638C75.8575 28.9642 74.7208 27.5181 72.9864 27.5181C71.2825 27.5181 70.1364 28.9946 70.1364 31.1638C70.1364 33.3529 71.2825 34.8189 72.9864 34.8189C74.7208 34.8189 75.8575 33.3833 75.8575 31.1638Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M86.0528 32.4435C86.2181 33.9212 87.6536 34.8915 89.6153 34.8915C91.495 34.8915 92.8474 33.9212 92.8474 32.5887C92.8474 31.4321 92.0317 30.7395 90.1005 30.2649L88.1692 29.7997C85.4329 29.1387 84.1626 27.859 84.1626 25.7825C84.1626 23.2114 86.4032 21.4454 89.5849 21.4454C92.7337 21.4454 94.8923 23.2114 94.9649 25.7825H92.7137C92.579 24.2954 91.3497 23.3977 89.5532 23.3977C87.7567 23.3977 86.5274 24.3059 86.5274 25.6278C86.5274 26.6813 87.3126 27.3012 89.2333 27.7758L90.875 28.1789C93.9325 28.902 95.2028 30.1301 95.2028 32.3098C95.2028 35.0977 92.9821 36.8438 89.4501 36.8438C86.1454 36.8438 83.9141 35.1387 83.77 32.4434L86.0528 32.4435Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M100.016 23.1599V25.731H102.082V27.497H100.016V33.4864C100.016 34.4169 100.429 34.8505 101.338 34.8505C101.583 34.8462 101.828 34.829 102.071 34.7989V36.5544C101.663 36.6307 101.248 36.6652 100.832 36.6575C98.6329 36.6575 97.7751 35.8313 97.7751 33.7243V27.497H96.1954V25.731H97.775V23.1599H100.016Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M103.278 31.1638C103.278 27.7454 105.292 25.5974 108.431 25.5974C111.581 25.5974 113.585 27.7454 113.585 31.1638C113.585 34.5915 111.592 36.7302 108.431 36.7302C105.272 36.7302 103.278 34.5915 103.278 31.1638ZM111.313 31.1638C111.313 28.8189 110.238 27.4349 108.431 27.4349C106.624 27.4349 105.551 28.8294 105.551 31.1638C105.551 33.5181 106.624 34.8915 108.431 34.8915C110.238 34.8915 111.313 33.5181 111.313 31.1638Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M115.424 25.731H117.55V27.5802H117.602C117.746 27.0026 118.084 26.4922 118.56 26.1348C119.036 25.7773 119.621 25.5946 120.215 25.6173C120.472 25.6164 120.729 25.6443 120.979 25.7005V27.7864C120.655 27.6873 120.317 27.6418 119.977 27.6517C119.653 27.6385 119.33 27.6956 119.031 27.8191C118.731 27.9426 118.461 28.1295 118.241 28.3669C118.02 28.6044 117.853 28.8868 117.752 29.1948C117.65 29.5028 117.617 29.8291 117.654 30.1513V36.5954H115.424L115.424 25.731Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M131.261 33.4044C130.961 35.3767 129.041 36.7302 126.583 36.7302C123.423 36.7302 121.461 34.6126 121.461 31.2153C121.461 27.8075 123.433 25.5974 126.49 25.5974C129.495 25.5974 131.386 27.6622 131.386 30.9564V31.7204H123.712V31.8552C123.677 32.255 123.727 32.6578 123.859 33.0368C123.991 33.4158 124.203 33.7624 124.479 34.0534C124.755 34.3445 125.091 34.5734 125.462 34.725C125.834 34.8765 126.234 34.9473 126.635 34.9325C127.162 34.9819 127.691 34.8598 128.143 34.5845C128.595 34.3092 128.946 33.8953 129.144 33.4044L131.261 33.4044ZM123.723 30.1618H129.154C129.174 29.8023 129.12 29.4425 128.994 29.1051C128.869 28.7676 128.675 28.4598 128.424 28.2009C128.174 27.942 127.873 27.7375 127.54 27.6005C127.207 27.4634 126.85 27.3967 126.49 27.4044C126.126 27.4022 125.766 27.472 125.43 27.6097C125.094 27.7474 124.789 27.9503 124.532 28.2066C124.274 28.463 124.07 28.7678 123.932 29.1033C123.793 29.4389 123.722 29.7987 123.723 30.1618Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M45.3917 10.4773C45.8592 10.4438 46.3284 10.5144 46.7653 10.6841C47.2022 10.8538 47.5961 11.1184 47.9184 11.4588C48.2407 11.7991 48.4834 12.2067 48.6291 12.6523C48.7748 13.0978 48.8198 13.5701 48.7608 14.0351C48.7608 16.3226 47.5245 17.6375 45.3917 17.6375H42.8054V10.4773H45.3917ZM43.9175 16.6249H45.2675C45.6015 16.6449 45.9359 16.5901 46.2461 16.4646C46.5564 16.339 46.8347 16.1459 47.0609 15.8992C47.2871 15.6525 47.4554 15.3585 47.5537 15.0386C47.6519 14.7186 47.6776 14.3808 47.6288 14.0497C47.674 13.7199 47.6458 13.3842 47.546 13.0666C47.4463 12.749 47.2775 12.4574 47.0519 12.2127C46.8262 11.968 46.5492 11.7762 46.2407 11.6511C45.9322 11.526 45.5998 11.4707 45.2675 11.4892H43.9175V16.6249Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M50.0171 14.9333C49.9831 14.5782 50.0237 14.2199 50.1363 13.8815C50.2489 13.543 50.431 13.2318 50.671 12.9678C50.9109 12.7038 51.2034 12.4929 51.5296 12.3486C51.8558 12.2042 52.2086 12.1297 52.5653 12.1297C52.922 12.1297 53.2748 12.2042 53.601 12.3486C53.9273 12.4929 54.2197 12.7038 54.4596 12.9678C54.6996 13.2318 54.8817 13.543 54.9943 13.8815C55.1069 14.2199 55.1475 14.5782 55.1135 14.9333C55.1482 15.2888 55.108 15.6476 54.9957 15.9866C54.8834 16.3256 54.7014 16.6374 54.4614 16.9019C54.2214 17.1664 53.9287 17.3778 53.6022 17.5224C53.2757 17.667 52.9225 17.7418 52.5653 17.7418C52.2082 17.7418 51.855 17.667 51.5284 17.5224C51.2019 17.3778 50.9092 17.1664 50.6692 16.9019C50.4292 16.6374 50.2472 16.3256 50.1349 15.9866C50.0226 15.6476 49.9824 15.2888 50.0171 14.9333ZM54.0167 14.9333C54.0167 13.762 53.4905 13.0771 52.5671 13.0771C51.6401 13.0771 51.1187 13.762 51.1187 14.9333C51.1187 16.114 51.6401 16.7937 52.5671 16.7937C53.4905 16.7937 54.0167 16.1093 54.0167 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M61.8882 17.6374H60.7819L59.6651 13.6577H59.5808L58.4686 17.6374H57.3729L55.8835 12.2339H56.9651L57.9331 16.3571H58.0128L59.1237 12.2339H60.1468L61.2577 16.3571H61.3421L62.3054 12.2339H63.3718L61.8882 17.6374Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M64.6245 12.2339H65.651V13.0923H65.7307C65.8659 12.784 66.0939 12.5255 66.383 12.353C66.672 12.1804 67.0077 12.1023 67.3432 12.1296C67.6062 12.1098 67.8702 12.1495 68.1157 12.2456C68.3612 12.3417 68.5819 12.4918 68.7616 12.6848C68.9412 12.8778 69.0751 13.1088 69.1533 13.3606C69.2316 13.6124 69.2521 13.8785 69.2135 14.1394V17.6374H68.1471V14.4071C68.1471 13.5388 67.7698 13.1069 66.9811 13.1069C66.8026 13.0986 66.6244 13.129 66.4588 13.196C66.2931 13.263 66.1439 13.365 66.0213 13.4951C65.8988 13.6252 65.8058 13.7802 65.7488 13.9495C65.6917 14.1189 65.672 14.2986 65.6909 14.4763V17.6374H64.6245L64.6245 12.2339Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M70.9128 10.1245H71.9792V17.6374H70.9128V10.1245Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M73.4616 14.9333C73.4277 14.5782 73.4683 14.2199 73.5809 13.8814C73.6936 13.5429 73.8757 13.2317 74.1157 12.9677C74.3556 12.7037 74.6481 12.4928 74.9743 12.3485C75.3006 12.2041 75.6534 12.1296 76.0101 12.1296C76.3669 12.1296 76.7197 12.2041 77.0459 12.3485C77.3722 12.4928 77.6646 12.7037 77.9046 12.9677C78.1446 13.2317 78.3267 13.5429 78.4393 13.8814C78.552 14.2199 78.5926 14.5782 78.5587 14.9333C78.5932 15.2888 78.5531 15.6476 78.4407 15.9866C78.3284 16.3256 78.1463 16.6374 77.9063 16.9019C77.6663 17.1664 77.3736 17.3777 77.0471 17.5224C76.7205 17.667 76.3673 17.7417 76.0101 17.7417C75.653 17.7417 75.2998 17.667 74.9732 17.5224C74.6466 17.3777 74.354 17.1664 74.1139 16.9019C73.8739 16.6374 73.6919 16.3256 73.5795 15.9866C73.4672 15.6476 73.427 15.2888 73.4616 14.9333ZM77.4612 14.9333C77.4612 13.762 76.935 13.0771 76.0116 13.0771C75.0846 13.0771 74.5632 13.762 74.5632 14.9333C74.5632 16.114 75.0847 16.7937 76.0116 16.7937C76.935 16.7937 77.4612 16.1093 77.4612 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M79.6813 16.1093C79.6813 15.1366 80.4055 14.5759 81.6911 14.4962L83.1548 14.4118V13.9454C83.1548 13.3747 82.7774 13.0525 82.0485 13.0525C81.4532 13.0525 81.0407 13.271 80.9223 13.6531H79.8899C79.9989 12.7249 80.872 12.1296 82.0977 12.1296C83.4524 12.1296 84.2165 12.804 84.2165 13.9454V17.6374H83.1899V16.8781H83.1056C82.9343 17.1504 82.6938 17.3725 82.4087 17.5216C82.1235 17.6706 81.8039 17.7413 81.4825 17.7265C81.2557 17.75 81.0264 17.7258 80.8095 17.6554C80.5926 17.585 80.3928 17.4699 80.2231 17.3175C80.0534 17.1651 79.9175 16.9789 79.8242 16.7708C79.7309 16.5627 79.6822 16.3374 79.6813 16.1093ZM83.1548 15.6476V15.1958L81.8352 15.2802C81.0911 15.33 80.7536 15.5831 80.7536 16.0595C80.7536 16.5458 81.1755 16.8288 81.7556 16.8288C81.9256 16.846 82.0973 16.8289 82.2605 16.7784C82.4237 16.7278 82.5751 16.645 82.7056 16.5348C82.8361 16.4246 82.9432 16.2893 83.0203 16.1368C83.0975 15.9844 83.1432 15.818 83.1548 15.6476Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M85.618 14.9333C85.618 13.2259 86.4958 12.1443 87.861 12.1443C88.1987 12.1287 88.5339 12.2096 88.8273 12.3775C89.1207 12.5453 89.3603 12.7933 89.518 13.0923H89.5977V10.1245H90.6641V17.6374H89.6423V16.7837H89.5579C89.388 17.0807 89.14 17.3255 88.8409 17.4917C88.5418 17.6579 88.2029 17.7391 87.861 17.7265C86.4864 17.7265 85.618 16.6448 85.618 14.9333ZM86.7196 14.9333C86.7196 16.0794 87.2599 16.7691 88.1634 16.7691C89.0622 16.7691 89.6177 16.0695 89.6177 14.938C89.6177 13.8118 89.0564 13.1023 88.1634 13.1023C87.2657 13.1023 86.7196 13.7966 86.7196 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M95.0762 14.9333C95.0423 14.5782 95.0829 14.2199 95.1955 13.8815C95.3081 13.543 95.4902 13.2318 95.7302 12.9678C95.9701 12.7038 96.2625 12.4929 96.5888 12.3486C96.915 12.2042 97.2678 12.1297 97.6245 12.1297C97.9812 12.1297 98.334 12.2042 98.6602 12.3486C98.9864 12.4929 99.2789 12.7038 99.5188 12.9678C99.7588 13.2318 99.9409 13.543 100.053 13.8815C100.166 14.2199 100.207 14.5782 100.173 14.9333C100.207 15.2888 100.167 15.6476 100.055 15.9866C99.9426 16.3256 99.7606 16.6374 99.5206 16.9019C99.2806 17.1664 98.9879 17.3778 98.6614 17.5224C98.3348 17.667 97.9816 17.7418 97.6245 17.7418C97.2673 17.7418 96.9141 17.667 96.5876 17.5224C96.261 17.3778 95.9684 17.1664 95.7284 16.9019C95.4884 16.6374 95.3064 16.3256 95.1941 15.9866C95.0818 15.6476 95.0416 15.2888 95.0762 14.9333ZM99.0759 14.9333C99.0759 13.762 98.5497 13.0771 97.6263 13.0771C96.6993 13.0771 96.1778 13.762 96.1778 14.9333C96.1778 16.114 96.6993 16.7937 97.6263 16.7937C98.5497 16.7937 99.0759 16.1093 99.0759 14.9333Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M101.604 12.2339H102.63V13.0923H102.71C102.845 12.784 103.073 12.5255 103.362 12.353C103.651 12.1804 103.987 12.1023 104.322 12.1296C104.585 12.1098 104.849 12.1495 105.095 12.2456C105.34 12.3417 105.561 12.4918 105.741 12.6848C105.92 12.8778 106.054 13.1088 106.132 13.3606C106.211 13.6124 106.231 13.8785 106.193 14.1394V17.6374H105.126V14.4071C105.126 13.5388 104.749 13.1069 103.96 13.1069C103.782 13.0986 103.604 13.129 103.438 13.196C103.272 13.263 103.123 13.365 103 13.4951C102.878 13.6252 102.785 13.7802 102.728 13.9495C102.671 14.1189 102.651 14.2986 102.67 14.4763V17.6374H101.604V12.2339Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M112.218 10.8886V12.2585H113.389V13.1568H112.218V15.9353C112.218 16.5013 112.452 16.7491 112.983 16.7491C113.118 16.7487 113.254 16.7405 113.389 16.7245V17.6128C113.198 17.6471 113.004 17.6653 112.809 17.6673C111.623 17.6673 111.151 17.2501 111.151 16.2083V13.1567H110.293V12.2585H111.151V10.8886H112.218Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M114.846 10.1245H115.903V13.1023H115.987C116.129 12.7911 116.363 12.5312 116.658 12.3579C116.953 12.1847 117.294 12.1066 117.635 12.1343C117.896 12.1201 118.158 12.1637 118.401 12.2622C118.643 12.3606 118.861 12.5114 119.039 12.7038C119.217 12.8962 119.35 13.1255 119.429 13.3753C119.508 13.625 119.531 13.8891 119.496 14.1487V17.6374H118.428V14.4118C118.428 13.5487 118.026 13.1116 117.273 13.1116C117.09 13.0966 116.905 13.1218 116.733 13.1854C116.56 13.2491 116.404 13.3497 116.274 13.4802C116.144 13.6107 116.045 13.7679 115.982 13.9409C115.92 14.1138 115.896 14.2984 115.912 14.4815V17.6374H114.846L114.846 10.1245Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M125.714 16.1784C125.569 16.6723 125.255 17.0995 124.827 17.3852C124.399 17.671 123.884 17.7972 123.372 17.7417C123.016 17.7511 122.663 17.6829 122.336 17.5419C122.009 17.4008 121.716 17.1903 121.479 16.925C121.241 16.6596 121.064 16.3457 120.96 16.0052C120.856 15.6646 120.828 15.3054 120.876 14.9527C120.829 14.5988 120.858 14.2389 120.962 13.8973C121.066 13.5557 121.242 13.2403 121.478 12.9726C121.714 12.705 122.005 12.4912 122.331 12.3457C122.657 12.2003 123.011 12.1266 123.368 12.1296C124.871 12.1296 125.778 13.1568 125.778 14.8536V15.2257H121.963V15.2855C121.946 15.4838 121.971 15.6834 122.036 15.8715C122.101 16.0596 122.204 16.232 122.34 16.3778C122.475 16.5235 122.64 16.6393 122.823 16.7178C123.005 16.7963 123.203 16.8357 123.402 16.8335C123.657 16.8641 123.915 16.8182 124.144 16.7015C124.373 16.5849 124.562 16.4028 124.687 16.1784L125.714 16.1784ZM121.963 14.437H124.692C124.705 14.2557 124.681 14.0735 124.619 13.9022C124.558 13.731 124.462 13.5744 124.337 13.4426C124.212 13.3108 124.06 13.2066 123.892 13.1368C123.724 13.067 123.544 13.0331 123.362 13.0372C123.177 13.0349 122.994 13.0695 122.823 13.1391C122.653 13.2086 122.497 13.3116 122.367 13.4421C122.237 13.5725 122.134 13.7278 122.064 13.8987C121.995 14.0695 121.96 14.2526 121.963 14.437Z"
                        fill="#252746"
                      ></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noreferrer">
                    <svg
                      height="100%"
                      viewBox="0 0 163 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12"
                    >
                      <rect width="163" height="48" rx="12" fill="white"></rect>
                      <path
                        d="M81.7643 26.1025C78.9419 26.1025 76.6415 28.2481 76.6415 31.2061C76.6415 34.1449 78.9419 36.3097 81.7643 36.3097C84.5867 36.3097 86.8871 34.1449 86.8871 31.2061C86.8871 28.2481 84.5867 26.1025 81.7643 26.1025ZM81.7643 34.2997C80.2175 34.2997 78.8831 33.0241 78.8831 31.2061C78.8831 29.3689 80.2175 28.1125 81.7643 28.1125C83.3111 28.1125 84.6443 29.3689 84.6443 31.2061C84.6443 33.0229 83.3111 34.2997 81.7643 34.2997ZM70.5875 26.1025C67.7651 26.1025 65.4647 28.2481 65.4647 31.2061C65.4647 34.1449 67.7651 36.3097 70.5875 36.3097C73.4099 36.3097 75.7103 34.1449 75.7103 31.2061C75.7115 28.2481 73.4099 26.1025 70.5875 26.1025ZM70.5875 34.2997C69.0407 34.2997 67.7075 33.0241 67.7075 31.2061C67.7075 29.3689 69.0419 28.1125 70.5875 28.1125C72.1343 28.1125 73.4675 29.3689 73.4675 31.2061C73.4687 33.0229 72.1343 34.2997 70.5875 34.2997ZM57.2939 29.8333H62.4755C62.3207 31.0513 61.9151 31.9405 61.2959 32.5597C60.5423 33.3133 59.3627 34.1449 57.2939 34.1449C54.1043 34.1449 51.6107 31.5733 51.6107 28.3837C51.6107 25.1941 54.1043 22.6225 57.2939 22.6225C59.0147 22.6225 60.2711 23.2993 61.1987 24.1693L62.7263 22.6417C61.4315 21.4045 59.7107 20.4565 57.2939 20.4565C52.9247 20.4565 49.2515 24.0133 49.2515 28.3825C49.2515 32.7517 52.9247 36.3085 57.2939 36.3085C59.6519 36.3085 61.4315 35.5357 62.8235 34.0849C64.2539 32.6545 64.6991 30.6433 64.6991 29.0197C64.6991 28.5169 64.6607 28.0525 64.5827 27.6661H57.2939V29.8333ZM111.664 29.3497C111.239 28.2085 109.943 26.1013 107.294 26.1013C104.665 26.1013 102.481 28.1701 102.481 31.2049C102.481 34.0657 104.646 36.3085 107.546 36.3085C109.885 36.3085 111.239 34.8781 111.799 34.0465L110.059 32.8861C109.48 33.7369 108.686 34.2973 107.546 34.2973C106.405 34.2973 105.594 33.7753 105.072 32.7505L111.896 29.9281L111.664 29.3497ZM104.704 31.0513C104.646 29.0797 106.231 28.0741 107.371 28.0741C108.26 28.0741 109.014 28.5181 109.266 29.1565L104.704 31.0513ZM99.1547 36.0001H101.398V20.9989H99.1547V36.0001ZM95.4815 27.2425H95.4047C94.9019 26.6437 93.9359 26.1013 92.7179 26.1013C90.1655 26.1013 87.8267 28.3441 87.8267 31.2241C87.8267 34.0849 90.1655 36.3085 92.7179 36.3085C93.9359 36.3085 94.9019 35.7673 95.4047 35.1481H95.4815V35.8825C95.4815 37.8349 94.4375 38.8789 92.7551 38.8789C91.3823 38.8789 90.5315 37.8925 90.1835 37.0621L88.2311 37.8745C88.7915 39.2281 90.2807 40.8901 92.7551 40.8901C95.3843 40.8901 97.6079 39.3433 97.6079 35.5741V26.4109H95.4815V27.2425ZM92.9111 34.2997C91.3643 34.2997 90.0695 33.0049 90.0695 31.2253C90.0695 29.4277 91.3643 28.1125 92.9111 28.1125C94.4387 28.1125 95.6363 29.4265 95.6363 31.2253C95.6363 33.0037 94.4387 34.2997 92.9111 34.2997ZM122.168 20.9989H116.803V36.0001H119.041V30.3169H122.167C124.649 30.3169 127.088 28.5205 127.088 25.6585C127.088 22.7965 124.65 20.9989 122.168 20.9989ZM122.226 28.2289H119.041V23.0869H122.226C123.9 23.0869 124.85 24.4729 124.85 25.6585C124.85 26.8201 123.9 28.2289 122.226 28.2289ZM136.064 26.0749C134.443 26.0749 132.764 26.7889 132.07 28.3717L134.058 29.2021C134.483 28.3717 135.274 28.1017 136.104 28.1017C137.262 28.1017 138.439 28.7965 138.458 30.0313V30.1861C138.053 29.9545 137.184 29.6065 136.123 29.6065C133.981 29.6065 131.8 30.7837 131.8 32.9845C131.8 34.9921 133.556 36.2845 135.524 36.2845C137.03 36.2845 137.86 35.6089 138.38 34.8181H138.457V35.9761H140.618V30.2245C140.618 27.5605 138.631 26.0749 136.064 26.0749ZM135.793 34.2961C135.06 34.2961 134.036 33.9289 134.036 33.0229C134.036 31.8649 135.311 31.4209 136.41 31.4209C137.394 31.4209 137.857 31.6333 138.456 31.9225C138.283 33.3121 137.087 34.2961 135.793 34.2961ZM148.493 26.4025L145.926 32.9065H145.849L143.186 26.4025H140.774L144.769 35.4925L142.492 40.5493H144.827L150.984 26.4025H148.493ZM128.324 36.0001H130.564V20.9989H128.324V36.0001Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M56.8511 11.7493H53.3615V12.6145H55.9763C55.9055 13.3177 55.6235 13.8709 55.1519 14.2729C54.6791 14.6749 54.0755 14.8765 53.3615 14.8765C52.5767 14.8765 51.9131 14.6053 51.3707 14.0617C50.8379 13.5085 50.5655 12.8257 50.5655 12.0001C50.5655 11.1757 50.8379 10.4917 51.3707 9.93846C51.9131 9.39606 52.5767 9.12486 53.3615 9.12486C53.7635 9.12486 54.1463 9.19446 54.4979 9.34566C54.8495 9.49686 55.1315 9.70806 55.3523 9.97926L56.0159 9.31566C55.7147 8.97366 55.3319 8.71206 54.8603 8.52126C54.3875 8.33046 53.8943 8.23926 53.3615 8.23926C52.3151 8.23926 51.4307 8.60166 50.7071 9.32526C49.9823 10.0501 49.6211 10.9441 49.6211 12.0001C49.6211 13.0561 49.9823 13.9513 50.7071 14.6749C51.4307 15.3997 52.3151 15.7609 53.3615 15.7609C54.4571 15.7609 55.3319 15.4093 56.0063 14.6953C56.5991 14.1025 56.9015 13.2973 56.9015 12.2917C56.9015 12.1213 56.8811 11.9401 56.8511 11.7493Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M58.2288 8.40006V15.6001H62.4324V14.7157H59.154V12.4333H62.1096V11.5681H59.154V9.28566H62.4324V8.40006H58.2288Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M68.3435 9.28566V8.40006H63.3959V9.28566H65.4071V15.6001H66.3323V9.28566H68.3435Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M72.8495 8.40006H71.9243V15.6001H72.8495V8.40006Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M78.9635 9.28566V8.40006H74.0159V9.28566H76.0271V15.6001H76.9523V9.28566H78.9635Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M88.3259 9.33606C87.6119 8.60166 86.7371 8.23926 85.6907 8.23926C84.6455 8.23926 83.7695 8.60166 83.0555 9.32526C82.3415 10.0393 81.9899 10.9345 81.9899 12.0001C81.9899 13.0669 82.3415 13.9609 83.0555 14.6749C83.7695 15.3997 84.6455 15.7609 85.6907 15.7609C86.7263 15.7609 87.6119 15.3997 88.3259 14.6749C89.0399 13.9609 89.3915 13.0669 89.3915 12.0001C89.3915 10.9441 89.0399 10.0501 88.3259 9.33606ZM83.7203 9.93846C84.2531 9.39606 84.9059 9.12486 85.6907 9.12486C86.4755 9.12486 87.1283 9.39606 87.6515 9.93846C88.1843 10.4725 88.4459 11.1661 88.4459 12.0001C88.4459 12.8353 88.1843 13.5289 87.6515 14.0617C87.1283 14.6053 86.4755 14.8765 85.6907 14.8765C84.9059 14.8765 84.2531 14.6053 83.7203 14.0617C83.1971 13.5193 82.9355 12.8353 82.9355 12.0001C82.9355 11.1661 83.1971 10.4821 83.7203 9.93846Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M91.6139 11.1157L91.5743 9.72726H91.6139L95.2751 15.6001H96.2399V8.40006H95.3147V12.6145L95.3555 14.0017H95.3147L91.8155 8.40006H90.6899V15.6001H91.6139V11.1157Z"
                        fill="#252746"
                      ></path>
                      <path
                        d="M24.8608 23.3093L12.0844 36.8693C12.0856 36.8717 12.0856 36.8741 12.0868 36.8765C12.478 38.3501 13.8232 39.4337 15.4192 39.4337C16.0576 39.4337 16.6564 39.2609 17.17 38.9585L17.2108 38.9345L31.5916 30.6365L24.8608 23.3093Z"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M37.7875 21.0006L37.7755 20.9922L31.5667 17.3922L24.5718 23.6166L31.5906 30.6342L37.7671 27.0714C38.8495 26.487 39.5839 25.3458 39.5839 24.0294C39.5839 22.7226 38.8591 21.5862 37.7875 21.0006Z"
                        fill="#FABC13"
                      ></path>
                      <path
                        d="M12.0848 11.1329C12.008 11.4161 11.9672 11.7125 11.9672 12.0209V35.9813C11.9672 36.2897 12.0064 36.5873 12.0844 36.8693L25.3004 23.6561L12.0848 11.1329Z"
                        fill="#547DBF"
                      ></path>
                      <path
                        d="M24.9544 24.0006L31.5676 17.3898L17.2024 9.06176C16.6804 8.74856 16.072 8.56855 15.4192 8.56855C13.8232 8.56855 12.4768 9.65455 12.0844 11.1294L12.0848 11.1329L24.9544 24.0006Z"
                        fill="#30A851"
                      ></path>
                    </svg>
                  </a>
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
