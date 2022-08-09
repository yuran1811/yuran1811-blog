import { FacebookIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from '@cpns/icons';
import { Container, ExternalLink } from '@cpns/shared';
import { FACEBOOK_PROFILE, GITHUB_PROFILE, LINKEDIN_PROFILE, YOUTUBE_PROFILE } from '@shared/constants';

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        {/*  <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
            Life is a journey
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 mb-6 border border-black bg-black py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
            >
              Sponsors
            </a>
          </div>
        </div> */}

        <div className="m-4 flex-1 p-4">
          <div className="text-center text-4xl font-bold">Contact</div>
          <div className="flexcenter m-4 flex-wrap gap-4 p-4 text-6xl">
            <ExternalLink href={GITHUB_PROFILE}>
              <GithubIcon />
            </ExternalLink>
            <ExternalLink href={FACEBOOK_PROFILE}>
              <FacebookIcon />
            </ExternalLink>
            <ExternalLink href={YOUTUBE_PROFILE}>
              <YoutubeIcon />
            </ExternalLink>
            <ExternalLink href={LINKEDIN_PROFILE}>
              <LinkedinIcon />
            </ExternalLink>
          </div>
        </div>
      </Container>

      <div className="flexcentercol space-y-2 p-8">
        <span className="dark:text-gray-400">© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
        <span className="dark:text-gray-400">Made by yuran1811</span>
      </div>
    </footer>
  );
}
