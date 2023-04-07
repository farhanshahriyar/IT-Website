// import React from 'react';
// import styles from './Banner.module.css';

// const Banner = () => {
//   return (
//     <section className={`h-96 flex items-center justify-center text-white ${styles.banner}`}>
//       <h1 className={`text-4xl md:text-6xl font-bold ${styles.animated-text}`}>
//         Welcome to Our Amazing Website!
//       </h1>
//     </section>
//   );
// };

// export default Banner;

import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={`h-96 flex items-center justify-center text-white ${styles.banner}`}>
      {/* eslint-disable-next-line */}
      <h1 className={`text-4xl md:text-6xl font-bold ${styles.animated-text}`}>
        Welcome to Our Amazing Website!
      </h1>
    </section>
  );
};

export default Banner;
