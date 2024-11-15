
// const Shimmer=()=>{
//     return (
//         <div id="spinner">
//             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX////w8PDd3d2oqKjQ0NC7u7tfX12Xl5cjIyOFhYNxcW83NzVLS0n8/PxZWVeUlJQVFRV6enr29vbo6Oh/f30AAADIyMhqami1tbVCQkCioqJlZWONjYzX19csLCqurq0MDA0dHRsBso6hAAAFKklEQVR4nO2a6ZajKhSFHSCJUZKIxoForHr/l7wgoIBW6+2FpHot9o9UdcrEz322h8EOAi8vLy8vLy8vLy8vLy8vLy8vr78Q+jSAoaosq08z6ELB9fn19bz+Lqvg80L1hJ/m0JQ/GNSj/DSHJgGVK28hNL86EcJYP9kKVBAAQnp3KcMhFd6AQt37fXl3rvoECkOTyoSiIPA7pfoCTpCEUVQ/Q1GmMGNMKbPKKZRSl2X5yINDJY6gRPlUqgVUlHI9GreZUlO1yFTy5kZlzu6+pVUmFPjmRr0rd51qYZUZ9Jcw6uqyeZpUKhTFiIVR34UzpGC+AWUBdadwxo26uOoHXKZVOlQnjMrCn7/BHsr8q2GVBiXbwddKOzgwYsjMugZ1FSm/KR9A4odVKFwU2ghstIUZCgXVZWoHijEIJndg16kwYtKwpgLqUAG+CaNKxRlU3dK2fZ8tIgU44iqUC9WyPvDpcEN/bThTepHtgH6myNs2o2p7i1BhFC2x8AyFgvr5eDxr9nYujCLzp+/piEShYotQRTRrvs3VqOPhdhswc0VAtdNxzUkgWYbCClQ0JX5lskcFx5w/2MKGuVq93tmkFtgMumrVXMPltJiR5Bc6D074IUXXzkhZajXoaqrUGmKqxaGoSTq+AAxJqzClJ+tTBqSbFS1hlGP5K7wpSG02HDHoYKOGW8d3qYKU3o+aMOhYf/KKqlKY0nxsUAcNfOFuq9C9ncPUHEMznavYWz8J1d7OG57axNrILeTla5Po6EUyYt+PdwUdJS3Vq3e2yREWRbh5JlR1CfxVu2hTyX4XlcPFlTzjvqNWD7MCawx7O268+fTwfDd0trKHHIEVRbsuF3fZbSkLi0G8xgTArpEM3k4rsjAnXjUKgF1fXK5C3cj2J/9FKFz9wvJZD3pmY9cDrbSEnRM2ulo+U+ktwdV28Y9QP/n5sbHH/TAznnXXn92hFTTq20fRQFVOmBBLfgWpNsewc01Vsvv/+EpiALk2bsHqdWV6nYvDa4h6KLVxb5N6hLrW1wEfCxVVzf+FomblRz3GZRdbKEib5QMTFHWrs7lbpgr3KlKz2ZnJS6F6kSOW7SiCmrZHPwRy1awrtLvBgczKNf246EVFVZlLTfoPMAzcRgxrBetUAru3oVY5CMQ6vCJxTCAyqOKSauDvhUTBojW0SRWqLk0JjygTVaSfCZQJVS4j1ycnpYY28x4pRk3jCx5GphiO++U9rdloYDxCJV0oWatyMqu2uf0ydcwGyGKhAHAmMj5YaOhUqRvY3wYOVc69KRxkDa1CyfJVyqYO5sWLY1aSvmOzuY7VjJePUombjV1DeOdY9Y5hfL9Y0GmY1PBUAmqMNLyPU8xxn/ouoIZgvjFRX57q+jTYZKLXStcKWp4L4RNvigJqrE4krVJSTYtOL+Koti7PETRkirkBJaOe3NWHWPz1gEmM8o2RTFS4hAo7DpVX5iePgJol2wER59WgAiis6lw8rp0FZMoxN0GFQgGWWT94V1iXbAcEiKmu5hRd7gmrcndWoQDGaspNKCoiqIirxQwy2sEa1FpbOBhqICLlkw8mlBxsks6VVUY7WIUKk6ktuMESAwxRnugvoKas23xAuwNKtoN1KNEWnHWFYoQi6oi/hAr6nEFdrc4L/iQQExJry/YVKNSwabGz//02bnDoK6Y1qCBi01TkhAqtjaqrUOLHx3bIVqA+r4hPh131751qOrpwcJXq3So2dzy8Zv2y4nl5eXl5eXl5eXl5eXl5eXl5afoPm8titxsOPkgAAAAASUVORK5CYII="></img>
//         </div>
//     )
// }
// export default Shimmer ;

// Shimmer.js
// import React from 'react';


import ContentLoader from 'react-content-loader';

const Shimmer = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100px" />
    <rect x="0" y="110" rx="5" ry="5" width="100%" height="20px" />
    <rect x="0" y="140" rx="5" ry="5" width="80%" height="20px" />
    <rect x="0" y="170" rx="5" ry="5" width="40%" height="20px" />
  </ContentLoader>
  ,
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100px" />
    <rect x="0" y="110" rx="5" ry="5" width="100%" height="20px" />
    <rect x="0" y="140" rx="5" ry="5" width="80%" height="20px" />
    <rect x="0" y="170" rx="5" ry="5" width="40%" height="20px" />
  </ContentLoader>
);


export default Shimmer;
