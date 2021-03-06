import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
  return (
    <div className='absolute bottom-4 right-4'>
      <button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6'/>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>Feedback</span>
      </button>
    </div>
  )
}