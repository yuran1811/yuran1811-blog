import { FacebookIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from '@cpns/icons';
import { Container, CursorEffectWrapper, ExternalLink } from '@cpns/shared';
import { FACEBOOK_PROFILE, GITHUB_PROFILE, LINKEDIN_PROFILE, YOUTUBE_PROFILE } from '@shared/constants';

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="m-4 flex-1 p-4">
          <div className="text-center text-4xl font-bold">Contact</div>
          <div className="flexcenter m-4 flex-wrap gap-4 p-4 text-6xl">
            <CursorEffectWrapper cursorType="link">
              <ExternalLink href={GITHUB_PROFILE}>
                <GithubIcon />
              </ExternalLink>
            </CursorEffectWrapper>

            <CursorEffectWrapper cursorType="link">
              <ExternalLink href={FACEBOOK_PROFILE}>
                <FacebookIcon />
              </ExternalLink>
            </CursorEffectWrapper>

            <CursorEffectWrapper cursorType="link">
              <ExternalLink href={YOUTUBE_PROFILE}>
                <YoutubeIcon />
              </ExternalLink>
            </CursorEffectWrapper>

            <CursorEffectWrapper cursorType="link">
              <ExternalLink href={LINKEDIN_PROFILE}>
                <LinkedinIcon />
              </ExternalLink>
            </CursorEffectWrapper>
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
