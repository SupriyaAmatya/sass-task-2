import React from 'react';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGoogleplus, IoLogoYoutube } from 'react-icons/io';

const IconSize = '20px';

const SocialIcons = (props) => {
  const { iconName } = props;

  switch (iconName) {
    case 'facebook':
      return <IoLogoFacebook size={IconSize} />;

    case 'twitter':
      return <IoLogoTwitter size={IconSize}/>;

    case 'instagram':
      return <IoLogoInstagram size={IconSize}/>;

    case 'linkedin':
      return <IoLogoLinkedin size={IconSize}/>;

    case 'google':
      return <IoLogoGoogleplus size={IconSize}/>;

    case 'youtube':
      return <IoLogoYoutube size={IconSize}/>;

    default:
      return;
  }
}

export default SocialIcons;
