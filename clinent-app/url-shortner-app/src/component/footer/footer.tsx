import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-center py-5'>
         copyright &#169; URLShortner | Saad Iqbal Attar
    </div>
  );
};

export default Footer;
