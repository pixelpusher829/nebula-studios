/**
 * Starting-point legal copy for the website.
 * IMPORTANT: have counsel review both documents before launch. They describe what this site does
 * out of the box (forms, newsletter, optional assistant, embedded YouTube) and must be updated if
 * you add analytics, advertising or other third-party services.
 */
import { fullAddress, site } from "@/config/site";

export const LAST_UPDATED = "2026-10-05";

export const privacyPolicy = `
This policy explains what personal information ${site.legalName} ("${site.shortName}", "we", "us") collects through this website, why we collect it, and the choices you have. It covers this website only. Each of our games has its own privacy policy, available in-game and on its store page.

## Information We Collect

**Information you give us.** When you use a form on this site we collect what you enter:

* **Contact form:** your name, email address, company (optional) and message.
* **Newsletter:** your email address.
* **Job applications:** your name, email address, portfolio or profile link, CV/resume and any message you include.
* **Website assistant (if enabled):** the messages you type into the assistant.

**Information collected automatically.** Like most websites, our hosting provider records standard server logs (such as IP address, browser type and pages requested) for security and reliability. This site does not use advertising or analytics cookies.

## How We Use It

* To reply to your inquiry and route it to the right team.
* To send the newsletter you signed up for. Every email includes an unsubscribe link.
* To assess job applications and contact you about the role you applied for.
* To answer questions through the website assistant.
* To keep the site secure and prevent abuse.

We do not sell your personal information, and we do not use it for targeted advertising.

## Service Providers

We share information only with providers who help us run this site, and only as needed for them to do so:

* **Website hosting**, which serves the site and processes server logs.
* **Form processing**, which receives form submissions and delivers them to our team.
* **Google (Gemini API)**, which processes messages sent to the website assistant, if enabled.
* **YouTube**, when you choose to play an embedded video. Videos use YouTube's privacy-enhanced mode and are loaded only when you press play.

## Retention

* Contact messages are kept for up to 24 months.
* Newsletter addresses are kept until you unsubscribe.
* Job applications are kept for up to 12 months after the role closes, unless you ask us to keep them longer for future roles or delete them sooner.

## Your Rights

Depending on where you live (including under the GDPR, UK GDPR and the California Consumer Privacy Act), you may have the right to access, correct, delete or export your personal information, and to object to or restrict certain processing. To make a request, email [${site.email.privacy}](mailto:${site.email.privacy}). We will respond within 30 days and will never discriminate against you for exercising your rights.

If you are in the EU or UK, you also have the right to complain to your local data protection authority.

## International Transfers

We are based in the United States and have studios in the United Kingdom and Japan. Where your information is transferred internationally, we rely on appropriate safeguards such as Standard Contractual Clauses.

## Children

This website is not directed at children under 16, and we do not knowingly collect their personal information.

## Changes

If we make material changes to this policy, we will update the date at the top of this page.

## Contact

${site.legalName}\\
${fullAddress}\\
[${site.email.privacy}](mailto:${site.email.privacy})
`;

export const termsOfService = `
These terms govern your use of this website, operated by ${site.legalName} ("${site.shortName}", "we", "us"). By using the site you agree to them. Our games are governed by their own end-user license agreements.

## Use of the Site

You may browse and share content from this site for personal, non-commercial purposes. You agree not to misuse the site, including by attempting to disrupt it, access it without authorization, scrape it at scale, or use its forms or assistant to send spam or unlawful content.

## Intellectual Property

All content on this site, including game names, logos, artwork, video, and text, is owned by ${site.shortName} or our licensors and protected by intellectual property laws. Press and media assets on our [Press page](/press) may be used for editorial coverage of ${site.shortName} and our games, in line with the brand guidance provided there.

## Website Assistant

If the AI-powered website assistant is enabled, its answers are generated automatically and may be inaccurate or incomplete. They are not official statements from ${site.shortName}. For anything important, please contact the relevant team directly.

## Submissions

If you send us ideas, pitches or other unsolicited material, you agree that we are under no obligation to keep it confidential or to compensate you, and that we may already be working on similar ideas. Please don't send confidential material without a signed agreement in place.

## Third-Party Links

This site links to third-party services such as game stores and social networks. We aren't responsible for their content or practices.

## Disclaimer

The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, ${site.shortName} is not liable for any indirect or consequential damages arising from your use of the site.

## Changes

We may update these terms from time to time. Continued use of the site after changes take effect means you accept the updated terms.

## Governing Law

These terms are governed by the laws of the State of California, without regard to its conflict-of-law rules.

## Contact

Questions about these terms? Email [${site.email.general}](mailto:${site.email.general}).
`;
