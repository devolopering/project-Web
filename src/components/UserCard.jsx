import React from 'react';
import star from '/user/Star.png';
import gr from '/user/userLogo.svg';

function UserCard({ imageCardRef }) {
  const userCard = [
    {
      id: "1",
      image: '/user/user1.png',
      text: 'As an independent contractor, I was looking for reliability, and J&J Bros delivered. They secure high-paying loads and take care of the paperwork. Their accounting service has helped me track my income and expenses, making tax season stress-free. I’m glad I made the switch!',
      fullName: 'Michael Johnson',
      works: 'Independent Contractor, Georgia',
    },
    {
      id: "2",
      image: '/user/user2.png',
      text: 'J&J Bros has truly changed the way I operate. Their dispatch team keeps me loaded with profitable lanes, and the support they provide is unmatched. I always feel like part of a family, not just another driver. Their free fleet and accounting services have been a game-changer, making my life on the road much easier.',
      fullName: 'Sarah Thompson',
      works: 'Owner-Operator, California',
    },
    {
      id: "3",
      image: '/user/user3.png',
      text: 'Managing my fleet has never been smoother since partnering with J&J Bros. Their dispatch service keeps my trucks moving, and their safety team has helped us fight violations, lowering our safety score. Their reports keep me in control of my business, and their support has made all the difference.',
      fullName: 'David Martinez',
      works: 'Fleet Owner, Texas',
    },
    {
      id: "4",
      image: '/user/user1.png',
      text: 'As an independent contractor, I was looking for reliability, and J&J Bros delivered. They secure high-paying loads and take care of the paperwork. Their accounting service has helped me track my income and expenses, making tax season stress-free. I’m glad I made the switch!',
      fullName: 'Michael Johnson',
      works: 'Independent Contractor, Georgia',
    },
  ];

  return (
    <div className="max-w-[1199px] mx-auto pt-28 pb-[130px]  overflow-x-auto  scrollbar-hide "  ref={imageCardRef}>
      <div
        className="grid grid-flow-col gap-[38px]  items-start"
      >
        {userCard.map((user) => (
          <div
            key={user.id}
            className="bg-[#161618] p-4 rounded-2xl w-[374px]  flex flex-col gap-8 relative px-[25px] pt-5 pb-9 items-start"
          >
            <img
              src={user.image}
              alt={`${user.fullName} profile`}
              className="w-24 h-24 rounded-full mb-4 object-cover absolute  left-[25px] top-[-45px]"
            />
            <div className="flex items-center ml-auto">
              {[...Array(5)].map((_, starIndex) => (
                <img key={starIndex} src={star} alt={`star ${starIndex + 1}`} />
              ))}
            </div>
            <p className="text-[#D7D7D7] font-sf-pro-display font-normal text-xl">
              {user.text}
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-white font-bold font-sf-pro-display text-sm">
                  {user.fullName}
                </h3>
                <p className="text-[#828282] font-sf-pro-display text-[10px] font-normal">
                  {user.works}
                </p>
              </div>
              <img src={gr} alt="User company logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
