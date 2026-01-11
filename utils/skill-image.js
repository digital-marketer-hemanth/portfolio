// @flow strict

// IMPORT DIGITAL MARKETING SKILL ICONS
import ahrefs from '/public/svg/skills/ahrefs.svg';
import canva from '/public/svg/skills/canva.svg';
import cointrafficAds from '/public/svg/skills/cointraffic-ads.svg';
import googleAds from '/public/svg/skills/google-ads.svg';
import googleAnalytics from '/public/svg/skills/google-analytics.svg';
import googlePagespeed from '/public/svg/skills/google-pages-speed-insights.svg';
import googleSearchConsole from '/public/svg/skills/google-search-console.svg';
import gtmetrix from '/public/svg/skills/gtmetrix.svg';
import metaAds from '/public/svg/skills/meta-ads.svg';
import moz from '/public/svg/skills/moz.svg';
import semrush from '/public/svg/skills/semrush.svg';
import screamingFrog from '/public/svg/skills/screaming-frog.svg';
import telegramAds from '/public/svg/skills/telegram-ads.svg';
import ubersuggest from '/public/svg/skills/ubersuggest.svg';
import xAds from '/public/svg/skills/x-ads.svg';

// MAIN SKILL IMAGE FUNCTION
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {

    case 'google ads':
      return googleAds;

    case 'google analytics':
      return googleAnalytics;

    case 'google pagespeed insights':
      return googlePagespeed;

    case 'google search console':
      return googleSearchConsole;

    case 'meta ads':
      return metaAds;

    case 'ahrefs':
      return ahrefs;

    case 'semrush':
      return semrush;

    case 'moz':
      return moz;

    case 'ubersuggest':
      return ubersuggest;

    case 'screaming frog':
      return screamingFrog;

    case 'gtmetrix':
      return gtmetrix;

    case 'canva':
      return canva;

    case 'cointraffic ads':
      return cointrafficAds;

    case 'telegram ads':
      return telegramAds;

    case 'x ads':
      return xAds;

    default:
      return null;
  }
};
