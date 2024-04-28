import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Tooltip } from 'antd';
import Link from 'next/link';
import React from 'react';

interface FeedbackCardProps {
  cardWidth?: string;
  highlightedLines: string;
  feedback: string;
  secondaryFeedback?: string;
  source: string;
  link?: string;
  tooltipTitle?: string;
  highlightedLinesPosition: 'top' | 'bottom';
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({highlightedLines, feedback, secondaryFeedback, source, link, tooltipTitle, highlightedLinesPosition, cardWidth }) => {
  return (
<div className={`bg-blue-50 border border-blue-200 rounded-md text-gray-800 font-semibold leading-7 m-2 min-w-[255px] p-4 text-left ${cardWidth ? cardWidth : 'max-w-[19rem]'}`}>      <p>
        {
          highlightedLinesPosition === 'top' && (
            <span className="text-[#ff6500] font-bold p-2 rounded-md text-center">
            {highlightedLines}
            </span>
          )
        }
        {feedback}
        {
          highlightedLinesPosition === 'bottom' && (
            <span className="text-[#ff6500] font-bold p-2 rounded-md text-center">
              {highlightedLines}
            </span>
          )
        }
        {secondaryFeedback}
      </p>

      <div className='text-[12px] mt-2 grid grid-cols-2'>
        <p className='text-gray-500'>- {source}</p>
        {
          link && (
            <span className='text-gray-500 ml-2'>
              <Link href={link} target='_blank'>
                <Tooltip title={tooltipTitle} color="blue">
                  <FaArrowUpRightFromSquare className='text-gray-500 text-[20px]' />
                </Tooltip>
              </Link>
            </span>
          )
        }
      </div>
    </div>
  );
};

function Feedbacks() {
  return (
    <div className="flex max-w-3xl flex-col items-stretch gap-10 px-0 py-10 max-h-96 overflow-y-scroll scrollbar sm:px-5 sm:mx-auto" id="style-4">

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center'>
        <FeedbackCard
          highlightedLinesPosition='top'
          highlightedLines='So happy to read this blog. '
          feedback='Glad that you, too, understand the importance of proof of work. Thank you so much. Means a lot for the Fueler community ❤️✨'
          source='Feedback on Blog'
          link='jjjeje'
          tooltipTitle="Take me to that blog" />

        <FeedbackCard
          highlightedLinesPosition='top'
          highlightedLines='Great post! '
          feedback='Lazy loading and code splitting in Next.js are game changers for optimizing performance and improving user experience.'
          source='Feedback on Blog'
          link='https://reactplay.hashnode.dev/maximize-nextjs-performance-the-hidden-power-of-lazy-loading-and-code-splitting#clj8ru27o0qh10fnv0mma5bmq?t=1687536792487'
          tooltipTitle="Take me to that blog"
        />
      </div>

      <div className='w-full grid justify-items-center'>
        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='awesome 💯'
          feedback='this is'
          source='Feedback on Project'
          link='https://re-card.vercel.app/'
          tooltipTitle="Take me to that project"
        />  
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center'>
        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='Good use of Illustrations.'
          feedback='Very Informative Blog Shivam!'
          source='Feedback on Blog'
          link='https://www.showwcase.com/article/18548/what-is-cicd#comments'
          tooltipTitle="Take me to that blog"
        />

        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='easier to understand and on point.'
          feedback='I read your post. The explanation is'
          secondaryFeedback='Thanks for writing this post.'
          source='Feedback on Blog'
          link='https://www.showwcase.com/article/19231/how-to-build-a-dynamic-qr-code-using-react#comments'
          tooltipTitle="Take me to that blog"
        />

        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='found your blog on it... Great and easy'
          feedback='Recently thought of making an extension and '
          secondaryFeedback='explanation 🙌'
          source='Feedback on Blog'
          link='https://shivamkatareblog.hashnode.dev/what-is-manifestjson-and-why-does-it-matter#clqlnw0ar04lopgnv766q1xt8'
          tooltipTitle="Take me to that blog"
        />  

        <FeedbackCard
          highlightedLinesPosition='top'
          highlightedLines='Great play'
          feedback='Shivam Katare, Keep contributing.'
          source='Project Feedback'
          link='https://reactplay.io/plays/shivam-katare/2048'
          tooltipTitle="Take me to that project"
        />
        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='Lets stay hungry for knowledge 💪🏼'
          feedback='Profile looking super clean! Nice profile tags you added there and nice to see the people in your Circle.'
          source='ShowwCase CEO, Rong'
          link='https://www.showwcase.com/shivam-katare?tab=h7c08jaa0nq3jc0ihntcehp9&type=guestbooks'
          tooltipTitle="Take me to that profile"
        />
      </div>

      <div className='w-full grid justify-items-center justify-center'>
        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='put that video together.'
          feedback='Thank you for taking the time to'
          secondaryFeedback='Glad you are enjoying your experience with us💚🚀'
          source='Supabase'
          cardWidth='max-w-[32rem]'
          tooltipTitle='Take me to that video'
          link='https://twitter.com/Shivamkatare_27/status/1675055421659262977'
        />
      </div>


      <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center'>
        <FeedbackCard
          highlightedLinesPosition='top'
          highlightedLines='Good work,'
          feedback='Shivam. Keep building, keep growing 👍'
          source='Project Feedback'
          link='https://melodio.vercel.app/#'
          tooltipTitle='Take me to that project'
        />
        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='awesome ideas!'
          feedback='I am really amazed with these '
          source='Project Feedback'
          link='https://reactplay.io/plays/shivam-katare/image-gallery'
          tooltipTitle='Take me to that project'
        />
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center'>
        <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='it was helpful'
          feedback='Hi,  Thanks for writing your blog regarding React QR code generator,'
          secondaryFeedback='and I wanted to let you know. Many thanks and keep up the great work.'
          source='Blog Feedback'
          tooltipTitle='Take me to that Blog'
          link='https://www.showwcase.com/article/19231/how-to-build-a-dynamic-qr-code-using-react'
        />
      </div>

      <div className='w-full grid justify-items-center'>
      <FeedbackCard
          highlightedLinesPosition='bottom'
          highlightedLines='love it 🚀'
          feedback='Hey its really cool,'
          secondaryFeedback='Is it open source, I actually wanted to learn to make this kind of things'
          source='Feedback on Project'
          tooltipTitle='Take me to that Project'
          link='https://re-card.vercel.app/'
        />
      </div>
    </div>
  )
}

export default Feedbacks