import styles from './index.module.css';
import "../../app/globals.css";


export default function About() {
  return <div className={styles.page}>
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="m-0 flex w-full flex-col items-center justify-between font-mono text-sm ">

        <div className="relative bg-transparent z-[1000] w-full relative text-marketing-text-primary">
          <div className="flex h-[80px] w-full items-center justify-between px-6 py-4 tablet:px-10">
            <div className="flex tablet:flex-grow-0 desktop:flex-1 left-0">
              <a href="/">
                <svg height="100%" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
                  <path d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z" fill="currentColor">
                  </path>
                  <path d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202H32.0153Z" fill="currentColor"></path><path d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z" fill="currentColor">
                  </path>
                  <path d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z" fill="currentColor">
                  </path>
                </svg>
              </a>
            </div>
            <div className="flex space-x-10 tablet:flex-grow-0 desktop:flex-1 left-0 right-0">
              <a href="/about-us" className={styles.select}>
                <p className="font-normal text-[16px] tablet:text-[16px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px]">About Us</p>
              </a>
              <a href="/blog">
                <p className="button-header font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Blog</p>
              </a>
              <a href="/glossary">
                <p className="button-header font-mimopro text-[16px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Glossary</p>
              </a>
            </div>
            <div className="flex space-x-10 tablet:flex-grow-0 desktop:flex-1 left-0">
              <a href="/login">
                <p className="button-header text-[14px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">LOG IN</p>
              </a>
              <a href="/register" className={styles.buttonSignUp}>
                <p className=" font-mimopro text-[14px] font-bold leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">SIGN UP</p>
              </a>
            </div>
          </div>
        </div>

        <div>
        </div>


        <div className="relative z-10 w-full  text-marketing-text-primary  undefined">
          <div className="relative z-10  w-full  text-marketing-text-primary undefined">
            <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
              <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-yellow absolute left-[60%] top-[75%]">
                <div className="block bg-marketing-accent-darkBlue  absolute left-[100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]">
                </div>
              </div>
              <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-orange absolute left-[80%] top-[10%]">
                <div className="block bg-marketing-accent-white  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]">
                </div>
              </div>
              <div className="h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px] bg-marketing-accent-pink absolute left-[40%] top-[15%]">
                <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] tablet:h-[60px] tablet:w-[60px]">
                </div>
              </div>
            </div>
            <div className="relative m-auto w-full max-w-[1364px] space-y-14 px-6 py-16 tablet:px-10">
              <div className="space-y-6">
                <a href="/">
                  <svg height="28" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8" width="100">
                    <path d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z" fill="currentColor">
                    </path>
                    <path d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202H32.0153Z" fill="currentColor"></path><path d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z" fill="currentColor">
                    </path>
                    <path d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z" fill="currentColor">
                    </path>
                  </svg>
                </a>
                <p className="font-mimopro text-[18px] font-normal leading-[28px] tablet:text-[20px] tablet:leading-[32px] w-[342px] tablet:w-full">You can code, too.</p>
              </div>
              <div className="grid grid-flow-row-dense grid-cols-2 justify-between gap-5 gap-y-10 tablet:grid-cols-4">
                <div className="flex flex-col gap-4">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">Company</h5>
                  <a href="/about-us">
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">About Us</p>
                  </a>
                  <a href="/blog">
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Blog</p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover"></p>
                  </a>
                </div>
                <div className="col-start-1 flex flex-col gap-4 tablet:col-start-2">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">Product</h5>
                  <a href="/glossary">
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Glossary</p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Terms of Use</p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Privacy Policy</p>
                  </a>
                </div>
                <div className="col-start-2 flex flex-col gap-4 tablet:col-start-3">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">Useful</h5>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Press Kit</p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Imprint</p>
                  </a>
                  <a>
                    <p className="font-mimopro text-[14px] font-normal leading-[20px] tablet:text-[18px] tablet:leading-[24px] hover:text-marketing-button-primary-hover">Help</p>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] tablet:text-[24px] tablet:leading-[32px] mb-2">Follow us</h5>
                  <div className="flex max-w-[160px] flex-wrap gap-6 tablet:gap-5">
                    <a title="Link to Twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 hover:text-marketing-button-primary-hover">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.061 7.619c.011.194.011.398.011.603 0 6.182-4.709 13.318-13.317 13.318-2.64 0-5.108-.779-7.155-2.118a9.404 9.404 0 0 0 6.93-1.93 4.672 4.672 0 0 1-4.368-3.254c.292.059.583.089.883.089.429 0 .845-.059 1.235-.166a4.684 4.684 0 0 1-3.757-4.59v-.059c.63.35 1.348.563 2.116.583A4.66 4.66 0 0 1 1.55 6.2c0-.852.233-1.659.632-2.349a13.275 13.275 0 0 0 9.648 4.894 4.27 4.27 0 0 1-.127-1.07A4.68 4.68 0 0 1 16.383 3c1.348 0 2.562.561 3.417 1.475a9.467 9.467 0 0 0 2.97-1.136 4.668 4.668 0 0 1-2.058 2.592 9.424 9.424 0 0 0 2.688-.74A9.556 9.556 0 0 1 21.06 7.62Z" fill="currentColor">
                      </path>
                    </svg>
                    </a>
                    <a title="Link to Facebook" target="_blank" rel="noopener noreferrer" aria-label="facebook">
                      <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 hover:text-marketing-button-primary-hover">
                        <path d="M2.659 1.5c-.64 0-1.159.518-1.159 1.159V21.34c0 .64.518 1.159 1.159 1.159h10.058v-8.13H9.979V11.2h2.738V8.861c0-2.713 1.657-4.19 4.077-4.19 1.159 0 2.154.087 2.444.126v2.834H17.56c-1.316 0-1.571.625-1.571 1.543v2.024h3.14l-.41 3.17h-2.73V22.5h5.352c.64 0 1.159-.518 1.159-1.159V2.66c0-.64-.519-1.159-1.159-1.159H2.66Z" fill="currentColor">
                        </path>
                      </svg>
                    </a>
                    <a title="Link to Instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 hover:text-marketing-button-primary-hover">
                        <path d="M7.593 1.5A6.1 6.1 0 0 0 1.5 7.595v8.812A6.1 6.1 0 0 0 7.593 22.5h8.865a6.1 6.1 0 0 0 6.093-6.093V7.595A6.1 6.1 0 0 0 16.458 1.5H7.593Zm0 1.805h8.865a4.26 4.26 0 0 1 4.29 4.29v8.812a4.26 4.26 0 0 1-4.29 4.288H7.593a4.258 4.258 0 0 1-4.288-4.288V7.595a4.26 4.26 0 0 1 4.288-4.29Zm10.082 1.806a1.262 1.262 0 1 0 0 2.524 1.262 1.262 0 0 0 0-2.524Zm-5.65 1.482A5.42 5.42 0 0 0 6.62 12a5.42 5.42 0 0 0 5.407 5.407c2.975 0 5.408-2.431 5.408-5.407s-2.433-5.407-5.408-5.407Zm0 1.805c2 0 3.604 1.602 3.604 3.602 0 2-1.603 3.602-3.603 3.602S8.424 14 8.424 12c0-2 1.601-3.602 3.602-3.602Z" fill="currentColor">
                        </path>
                      </svg>
                    </a>
                    <a title="Link to TikTok" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                      <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 hover:text-marketing-button-primary-hover">
                        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .399-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604 3.226 3.226 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281 0-1.814 1.46-3.282 3.26-3.282.341 0 .68.054 1.004.16l.005-3.936A7.178 7.178 0 0 0 4.76 10.71a7.583 7.583 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187.359-.015 1.562 0 2.928-.647 1.515-.718 2.377-1.787 2.377-1.787a7.43 7.43 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59Z" fill="currentColor">
                        </path>
                      </svg>
                    </a>
                    <a title="LinkedIn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 hover:text-marketing-button-primary-hover">
                        <path d="M3.043 1.5c-.851 0-1.543.672-1.543 1.503v17.994c0 .831.692 1.503 1.543 1.503h17.785c.852 0 1.543-.672 1.543-1.503V3.003c0-.831-.691-1.503-1.543-1.503H3.043Zm3.228 3.525c1.078 0 1.739.707 1.76 1.637 0 .91-.684 1.637-1.784 1.637H6.23c-1.058 0-1.742-.727-1.742-1.637 0-.93.704-1.637 1.783-1.637Zm9.295 4.35c2.074 0 3.625 1.355 3.625 4.268v5.437H16.04v-5.075c0-1.275-.455-2.145-1.596-2.145-.871 0-1.392.59-1.62 1.157-.083.203-.1.483-.1.766v5.297H9.569s.041-8.593 0-9.483h3.157v1.339c.419-.646 1.17-1.561 2.841-1.561Zm-2.841 1.561-.023.035h.023v-.035Zm-8.05-1.339h3.15v9.483h-3.15V9.597Z" fill="currentColor">
                        </path>
                      </svg>
                    </a>
                    <a title="Link to Medium" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                      <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 hover:text-marketing-button-primary-hover">
                        <path d="M23.216 12c0 2.963-.495 5.375-1.112 5.375-.616 0-1.112-2.412-1.112-5.375s.496-5.375 1.112-5.375c.617 0 1.112 2.412 1.112 5.375Zm-2.84 0c0 3.309-1.412 6-3.16 6-1.747 0-3.168-2.691-3.168-6s1.42-6 3.168-6c1.749 0 3.16 2.691 3.16 6Zm-6.937 0a6.356 6.356 0 1 1-1.845-4.497 6.333 6.333 0 0 1 1.845 4.478V12Z" fill="currentColor">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
}
