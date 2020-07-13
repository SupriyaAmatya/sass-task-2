import React from 'react';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGoogleplus, IoLogoYoutube } from 'react-icons/io';

const IconSize = '18px';
const IconColor = '#999999';

const SocialIcons = (props) => {
  const { iconName } = props;

  switch (iconName) {
    case 'facebook':
      return <IoLogoFacebook size={IconSize} color={IconColor} />;

    case 'twitter':
      return <IoLogoTwitter size={IconSize} color={IconColor}/>;

    case 'instagram':
      return <IoLogoInstagram size={IconSize} color={IconColor}/>;

    case 'linkedin':
      return <IoLogoLinkedin size={IconSize} color={IconColor}/>;

    case 'google':
      return <IoLogoGoogleplus size={IconSize} color={IconColor}/>;

    case 'youtube':
      return <IoLogoYoutube size={IconSize} color={IconColor}/>;

    default:
      return;
  }
}

export default SocialIcons;
